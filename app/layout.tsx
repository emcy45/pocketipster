import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/styles";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PockeTipster",
  description: "Predict the results and have fun!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        font.className,
        "h-full antialiased text-tertiary-500 font-light"
      )}
    >
      <body className="h-full w-full">
        <main className="h-full mx-4 lg:mx-16 xl:mx-64">{children}</main>
      </body>
    </html>
  );
}
