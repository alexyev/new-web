import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Alexander Yevchenko",
  description: "Alexander Yevchenko's Personal Website",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "c64495f3df0744099a262a85cdb3a7c7"}'
        />
      </body>
    </html>
  );
}
