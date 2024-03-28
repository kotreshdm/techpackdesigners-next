import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApplicationHeader from "@/components/ApplicationHeader";
// import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });
import ReactReduxProvider from "@/utils/ReactReduxProvider";
import ThemeProvider from "@/utils/ThemeProvider";
import ApplicationFooter from "@/components/ApplicationFooter";

export const metadata: Metadata = {
  title: "Clothing Designer | Tech Pack Designer | Clothing Manufacturer",
  description:
    "Clothing Designer, Apparel Tech Pack Designer  and Clothing Manufacturer Assist Brands in Apparel Design, Tech Packs and Garment Manufacturing",
  keywords:
    "Clothing Designer,Clothing Manufacturer, Clothing Design, Apparel Tech Pack, Garment Production, Garment Manufacturer, Clothing Line Sheet, Tech Pack Designer,Fashion Studio, Measurement Spec Sheet,Garment Producer, Garment Manufacturer, Apparel Manufacturer, designer studio clothing,garment spec sheet, apparel line sheet, Freelance Fashion Designer",
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
            <main className='flex min-h-screen flex-col items-center justify-between px-8 py-5'>
              {children}
            </main>
            <ApplicationFooter />
          </ThemeProvider>
        </ReactReduxProvider>
      </body>
    </html>
  );
}
