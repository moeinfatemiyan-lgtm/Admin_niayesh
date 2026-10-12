import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://admin-niayesh.vercel.app"),
  alternates: { canonical: "/" },
  title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
  description: "مدیریت حرفه‌ای اینستاگرام، ایده‌پردازی، سناریونویسی و تولید محتوای هدفمند برای رشد برند شما.",
  applicationName: "Admin Niayesh",
  openGraph: {
    title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
    description: "از ایده تا انتشار؛ همراه شما برای ساختن یک پیج حرفه‌ای‌تر.",
    locale: "fa_IR",
    type: "website",
    url: "https://admin-niayesh.vercel.app"
  },
  twitter: {
    card: "summary_large_image",
    title: "ادمین نیایش | مدیریت پیج و تولید محتوا",
    description: "مدیریت حرفه‌ای اینستاگرام، ایده‌پردازی، سناریونویسی و تولید محتوای هدفمند برای رشد برند شما."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171319"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ادمین نیایش",
              alternateName: "Admin Niayesh",
              url: "https://admin-niayesh.vercel.app",
              description: "مدیریت حرفه‌ای اینستاگرام، ایده‌پردازی، سناریونویسی و تولید محتوای هدفمند.",
              sameAs: ["https://instagram.com/admin.niaayesh"],
              areaServed: "IR",
              serviceType: ["مدیریت پیج اینستاگرام", "سناریونویسی", "تولید محتوا"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "همکاری از کجا شروع می‌شود؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "در دایرکت، حوزه فعالیت، هدف اصلی و خدمات موردنیاز را بفرستید. پس از شناخت اولیه، درباره مسیر، زمان‌بندی و جزئیات همکاری صحبت می‌کنیم."
                  }
                },
                {
                  "@type": "Question",
                  name: "برای هر کسب‌وکار برنامه جداگانه دارید؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "بله. موضوع‌ها، لحن و قالب‌ها باید با مخاطب و ظرفیت اجرایی همان کسب‌وکار هماهنگ شوند."
                  }
                },
                {
                  "@type": "Question",
                  name: "چطور نمونه‌کارها را ببینم؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "حوزه فعالیت و نوع محتوایی را که می‌خواهید ببینید در دایرکت بفرستید تا نمونه‌های مرتبطِ قابل ارائه معرفی شوند."
                  }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}