import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav | Data Engineer & Backend Engineer",
  description:
    "Recruiter-friendly portfolio for a junior data engineer and backend engineer focused on analytics platforms, APIs, and production-ready data systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
