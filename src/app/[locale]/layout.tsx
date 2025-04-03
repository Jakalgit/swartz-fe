import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import {Commissioner, Lexend_Giga} from "next/font/google";
import React from "react";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import "../globals.css";
import Header from "@/app/components/server/Header";
import {ReduxProvider} from "@/store/ReduxProvider";
import RequestPopup from "@/app/components/popups/RequestPopup";
import Footer from "@/app/components/server/Footer";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["cyrillic", "latin"],
})

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Swartz Mayer",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${commissioner.variable} ${lexendGiga.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Header />
            <RequestPopup />
            {children}
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
