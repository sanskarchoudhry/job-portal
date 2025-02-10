import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Portal",
  description: "A simple job portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
