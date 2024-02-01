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
        className={`${inter.className} bg-gray-950 text-slate-50 xl:px-[6%] lg:px-[6%] md:px-[7%] sm:px-[8%] px-[10%]`}
      >
        <main className="">
          <div className="fixed top-0 w-1/3 h-screen flex items-center justify-center">
            <Header />
          </div>
          {/* <div className="flex-1 flex items-center">{children}</div> */}
        </main>
      </body>
    </html>
  );
}
