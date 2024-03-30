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
      <body>
        <ReactReduxProvider>
          <ThemeProvider>
            <ApplicationHeader />
            <main className='flex min-h-screen flex-col items-center justify-between px-10 py-3 dark:bg-gray-800'>
              {children}
            </main>
            <ApplicationFooter />
          </ThemeProvider>
        </ReactReduxProvider>
      </body>
    </html>
  );
}
