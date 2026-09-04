import type { Metadata } from "next";
import { Geist_Mono, Syne_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GlyphBackground } from "@/components/glyph-background";
import { siteConfig, settings } from "@/data/portfolio";

// @ts-ignore
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syneMono = Syne_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: "index, follow",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    url: siteConfig.url,
    images: siteConfig.ogImage ? [{ url: siteConfig.ogImage }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: siteConfig.ogImage ? [siteConfig.ogImage] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = siteConfig.locale?.split("_")[0] ?? "en";
  const initialThemeClass =
    (siteConfig.defaultTheme as string) === "light" ? "light" : "dark";
  return (
    <html lang={lang} className={initialThemeClass} suppressHydrationWarning>
      <head />
      <body className={`${geistMono.variable} ${syneMono.variable} antialiased`}>
        <ThemeProvider
          defaultTheme={siteConfig.defaultTheme}
          enableSystem={siteConfig.enableSystemTheme}
        >
          {settings.enableDotGrid && (
            <GlyphBackground showProgress={settings.enableScrollProgress} />
          )}
          <div className="relative z-10 min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
