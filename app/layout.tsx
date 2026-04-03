import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Based",
  description:
    "Based is a quote app with honest reminders, themes, widgets, notifications, and custom looks built for real life.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
