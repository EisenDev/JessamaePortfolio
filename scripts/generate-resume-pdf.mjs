#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const port = process.env.PORT || "3012";
const url = `http://127.0.0.1:${port}/resume/pdf`;
const outFile = path.join(rootDir, "public", "JessaMaeCondrillon-Resume.pdf");
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
  let targetUrl = `http://127.0.0.1:3000/resume/pdf`;
  let server = null;
  let isExternalServer = false;

  try {
    const res = await fetch(targetUrl);
    if (res.ok) {
      isExternalServer = true;
      console.log(`Using already running server at ${targetUrl}`);
    }
  } catch {}

  let logStream;
  if (!isExternalServer) {
    targetUrl = `http://127.0.0.1:${port}/resume/pdf`;
    console.log(`No running server on port 3000. Spawning dev server on port ${port}...`);
    logStream = fs.createWriteStream(logFile, { flags: "w" });
    server = spawn(
      "npm",
      ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", port],
      {
        cwd: rootDir,
        stdio: ["ignore", "pipe", "pipe"],
        shell: true,
      },
    );
    server.stdout.pipe(logStream);
    server.stderr.pipe(logStream);
  }

  let browser;

  try {
    if (!isExternalServer) {
      await waitForReady();
    }

    browser = await puppeteer.launch({
      executablePath: getBrowserPath(),
      headless: true,
      args: ["--no-sandbox", "--disable-gpu"],
    });

    const page = await browser.newPage();
    await page.goto(targetUrl, { waitUntil: "networkidle0" });
    await page.waitForFunction(
      () => {
        const bodyFont = getComputedStyle(document.body).fontFamily;
        return bodyFont && !bodyFont.includes("Times New Roman");
      },
      { timeout: 30000 },
    );
    await page.evaluate(() => window.scrollTo(0, 0));

    // Generate high quality PDF natively using Chrome Print
    const pdfBytes = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm"
      }
    });

    fs.writeFileSync(outFile, pdfBytes);

    console.log(`Generated ${outFile}`);
  } finally {
    if (browser) {
      await browser.close();
    }

    if (server) {
      server.kill("SIGTERM");
      await new Promise((resolve) => server.on("exit", resolve));
    }
    if (logStream) {
      logStream.end();
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
