import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApplicationHeader from "@/components/ApplicationHeader";
// import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });
import ReactReduxProvider from "@/utils/ReactReduxProvider";
import ThemeProvider from "@/utils/ThemeProvider";
import ApplicationFooter from "@/components/ApplicationFooter";
import Constants from "@/utils/Constants";
import Head from "next/head";

export const metadata: Metadata = {
  title: Constants.SEO.title,
  description: Constants.SEO.description,
  keywords: Constants.SEO.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
          rel='stylesheet'
        />
        <link
          href='//fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swa'
          rel='stylesheet'
        />
      </Head>
      <body>
        <ReactReduxProvider>
          <ThemeProvider>
            <ApplicationHeader />
            <main className='flex flex-col items-center min-h-screen justify-between dark:bg-gray-800'>
              {children}
            </main>
            <ApplicationFooter />
          </ThemeProvider>
        </ReactReduxProvider>
      </body>
    </html>
  );
}
