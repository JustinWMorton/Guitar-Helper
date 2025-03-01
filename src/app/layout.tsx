import type { Metadata } from "next";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { SettingsProvider } from "./core/contexts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guitar Helper",
  description: "Guitar Helper is a tool to help you learn guitar scales. By Justin Morton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/vercel.svg" />
      </head>
      <body className='antialiased'>
        <SettingsProvider>
          <Header />
          {children}
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
