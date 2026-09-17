import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Jessa Mae Condrillon | Bookkeeper Virtual Assistant",
  description: "Accurate Records. Organized Finances. Reliable Support. Professional bookkeeping and financial administration portfolio.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
