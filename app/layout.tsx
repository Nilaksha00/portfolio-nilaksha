import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Cursor from "../components/Cursor";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export const metadata = {
  title: "Nilaksha Perera | Portfolio",
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
        className={`h-screen bg-slate-900 text-slate-50 xl:ml-[10%] lg:ml-[%] md:ml-[7%] sm:ml-[4%] ml-[4%] py-[6%]`}
      >
        <main className="h-full flex items-center flex-col xl:flex-row lg:flex-row md:flex-row">
          <div className="w-full h-full md:w-4/12 flex items-center hidden md:block">
            <Header />
          </div>
          <div className="w-full md:w-1/12 "></div>
          <div className="h-full md:w-7/12 overflow-y-auto custom-scrollbar mt-2">
            {children}
          </div>
        </main>
      </body>
      <div className="cursor-none -z-50">
        <Cursor />
      </div>
      <Toaster />
    </html>
  );
}
