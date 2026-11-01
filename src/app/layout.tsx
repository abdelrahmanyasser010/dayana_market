import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ديوان الأنتيكات – سوق وموسوعة المقتنيات التاريخية والتحف",
  description: "حيث لكل مقتنى تاريخ.. ولكل قطعة حكاية. اكتشف واقتنِ أنتيكات أصلية موثقة ومعاينة مضمونة عند الاستلام."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark" className={cairo.variable}>
      <body>
        <StoreProvider>
          <SiteChrome>{children}</SiteChrome>
        </StoreProvider>
      </body>
    </html>
  );
}
