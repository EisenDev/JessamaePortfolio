#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const port = process.env.PORT || "3012";
const url = `http://127.0.0.1:${port}/resume/pdf`;
const outFile = path.join(rootDir, "public", "resume.pdf");
const logFile = path.join(rootDir, ".resume-pdf-server.log");

function getBrowserPath() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/usr/bin/brave-browser",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean);

  const browserPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!browserPath) {
    throw new Error("No supported browser executable found for PDF generation.");
  }

  return browserPath;
}

async function waitForReady() {
  for (let attempt = 0; attempt < 45; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Resume page did not become available at ${url}`);
}

async function main() {
  const logStream = fs.createWriteStream(logFile, { flags: "w" });
  const server = spawn(
    "npm",
    ["run", "start", "--", "--hostname", "127.0.0.1", "--port", port],
    {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "pipe"],
      shell: true,
    },
  );

  server.stdout.pipe(logStream);
  server.stderr.pipe(logStream);

  let browser;

  try {
    await waitForReady();

    browser = await puppeteer.launch({
      executablePath: getBrowserPath(),
      headless: true,
      args: ["--no-sandbox", "--disable-gpu"],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");
    await page.evaluate(() => window.scrollTo(0, 0));

    const screenshot = await page.screenshot({
      type: "png",
      fullPage: true,
    });

    const pdf = await PDFDocument.create();
    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const pdfPage = pdf.addPage([pageWidth, pageHeight]);
    const png = await pdf.embedPng(screenshot);
    const pngScale = Math.min(pageWidth / png.width, pageHeight / png.height);
    const drawWidth = png.width * pngScale;
    const drawHeight = png.height * pngScale;
    const drawX = (pageWidth - drawWidth) / 2;
    const drawY = pageHeight - drawHeight;

    pdfPage.drawImage(png, {
      x: drawX,
      y: drawY,
      width: drawWidth,
      height: drawHeight,
    });

    const pdfBytes = await pdf.save();
    fs.writeFileSync(outFile, pdfBytes);

    console.log(`Generated ${outFile}`);
  } finally {
    if (browser) {
      await browser.close();
    }

    server.kill("SIGTERM");
    await new Promise((resolve) => server.on("exit", resolve));
    logStream.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
