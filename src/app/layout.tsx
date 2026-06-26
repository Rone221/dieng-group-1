import type { Metadata } from "next";
import { Fraunces, Libre_Franklin, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import DatelineRail, { MobileDatelineBar } from "@/components/DatelineRail";
import Header from "@/components/Header";
import FooterColophon from "@/components/FooterColophon";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  weight: ["400", "500", "600"],
  display: "swap",
});

const condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-condensed-rc",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dmaquette1.terangadev.com"),
  title: "The Dieng Group — Cross-border advisory, from Indianapolis to West Africa",
  description:
    "The Dieng Group brings organizations in developing markets closer to the people and partners they trade with — advisory, importing and exporting across Senegal, The Gambia and beyond.",
  openGraph: {
    title: "The Dieng Group",
    description:
      "Cross-border advisory, importing and exporting — from Indianapolis to West Africa.",
    siteName: "The Dieng Group",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "The Dieng Group" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${franklin.variable} ${condensed.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-ink">
        <Providers>
          <DatelineRail />
          <div className="flex min-h-screen flex-col md:pl-[var(--rail-w)]">
            <MobileDatelineBar />
            <Header />
            <main className="flex-1">{children}</main>
            <FooterColophon />
          </div>
        </Providers>
      </body>
    </html>
  );
}
