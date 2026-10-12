import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
  description: "مدیریت حرفه‌ای اینستاگرام، ایده‌پردازی، سناریونویسی و تولید محتوای هدفمند برای رشد برند شما.",
  applicationName: "Admin Niayesh",
  openGraph: {
    title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
    description: "از ایده تا انتشار؛ همراه شما برای ساختن یک پیج حرفه‌ای‌تر.",
    locale: "fa_IR",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171319"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}