import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nilaksha | Personal Portfolio",
  description: "Nilaksha Perera is an experienced software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full bg-gray-950 text-slate-50 xl:mx-[6%] lg:mx-[5%] md:mx-[7%] sm:mx-[8%] mx-[10%]`}
      >
        <main className="h-full flex items-start gap-10 flex-col xl:flex-row lg:flex-row md:flex-row">
          {/* <div className="top-0 left-0 w-full h-auto lg:w-1/3 xl:w-1/3 md:w-1/3 xl:sticky lg:sticky md:sticky flex items-center justify-center">
            <Header />
          </div>           
          */}
          <div className="top-0 left-0 w-full h-auto lg:w-1/3 xl:w-1/3 md:w-1/3 xl:my-[5%] my-[4%]">
            <Header />
          </div>
          <div className="w-full lg:w-2/3 xl:w-2/3 md:w-2/3 h-screen overflow-y-auto custom-scrollbar">
            <div className=" xl:py-[5%] py-[4%]">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
