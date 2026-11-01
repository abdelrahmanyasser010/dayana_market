import { getStorefrontProducts } from "@/server/store-db";
import { TimelineClient } from "@/components/TimelineClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "رحلة عبر الزمن – خط زمني تاريخي للمقتنيات | ديوان الأنتيكات",
  description: "تصفح المقتنيات حسب الفترات التاريخية من القرن التاسع عشر إلى أواخر القرن العشرين."
};

export default async function TimelinePage() {
  const products = await getStorefrontProducts();
  return <TimelineClient products={products} />;
}
