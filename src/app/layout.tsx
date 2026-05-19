import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certificate Verification",
  description: "Minimal static certificate verification platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
