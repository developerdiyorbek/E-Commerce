import type { Metadata } from "next";
import { Work_Sans as WorkSans } from "next/font/google";
import { ChildProps } from "@/types";
import Provider from "@/components/providers/Provider";
import "./globals.css";

const workSans = WorkSans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-commerce-ashy-beta-75.vercel.app/"),
  title: "Project",
  description: "Diyorbek's project",
  authors: [{ name: "Sulaymonov Diyorbek", url: "https://www.diyor-dev.uz" }],
  icons: { icon: "/logo.png" },
  keywords: "project, diyorbek's project",
  openGraph: {
    title: "Project",
    description: "Diyorbek's project",
    type: "website",
    url: "https://e-commerce-ashy-beta-75.vercel.app/",
    locale: "en-EN",
    images:
      "https://lh3.googleusercontent.com/pw/AP1GczMY8bWabI0Pb2d0rtRXQisIjewIxleTbbjssR6KUAjH02ipnrf1oNYec3AGUonA7PcIxI6ew0DFz90DryXOJdpJpXQNfaRER8pGYsHmzJ3IUhRIXacOJ6rONf1RKG0ZQZfof40dlx_xdWhNyI1a5JwW=w960-h1280-s-no-gm?authuser=0",

    countryName: "Uzbekistan",
    siteName: "Project",
    emails: "diyorbeksulaymonov70@gmail.com",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
