import type { Metadata } from "next";
import "./globals.css";
import { Lora } from 'next/font/google'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Alexander Yevchenko",
  description: "Alexander Yevchenko's Personal Website",
  icons: {
    icon: "/favicon/favicon.ico", // Update this path if your favicon is named differently or located elsewhere
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
