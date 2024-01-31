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
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <main className="grid grid-cols-12 gap-12 min-h-screen overflow-hidden">
          <div className="lg:col-span-4 lg:col-start-2 xl:col-span-4 xl:col-start-2 md:col-span-4 md:col-start-2 sm:col-span-10 sm:col-start-2 col-span-7 col-start-2">
            <div className="grid grid-rows-10 h-full ">
              <div className="row-span-8 row-start-2">
                <Header />
              </div>
            </div>
          </div>
          <div className="col-span-6 col-start-6">
            <div className="grid grid-rows-8 h-full">
              <div className="row-span-6 row-start-2">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
