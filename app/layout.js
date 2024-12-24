import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Tokens",
  description:
    "Happy Tokens helps you earn 10-20% cashback while dining at your favorite restaurants.",
  keywords:
    "Happy Tokens, Cashback Dining, Restaurant Cashback, Earn Rewards, Save Money, Dining Deals, Best Cashback App, Restaurant Discounts",
  authors: [{ name: "Happy Tokens", url: "" }],
  creator: "Happy Tokens",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Happy Tokens",
    description:
      "Happy Tokens helps you earn 10-20% cashback while dining at your favorite restaurants.",
    url: "https://happytokens.in/",
    type: "website",
    siteName: "Happy Tokens",
    images: [
      {
        url: "/header/ht.png",
        width: 1200,
        height: 630,
        alt: "Happy Tokens Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HappyTokens",
    title: "Happy Tokens",
    description:
      "Earn cashback while dining at restaurants with Happy Tokens. Save more on your meals today!",
    images: ["/header/ht.png"],
  },
  icons: {
    icon: "/header/ht.png",
    apple: "/header/ht.png",
  },
  alternates: {
    canonical: "",
    languages: {
      en: "",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-gradient-to-r from-[#E8F5F9] via-[#F5F4F8] to-[#F7F4DA]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
