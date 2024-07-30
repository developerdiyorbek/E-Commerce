import type { Metadata } from "next";
import { Work_Sans as WorkSans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import Provider from "@/utils/Provider";

const workSans = WorkSans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "E Commerce shop",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
