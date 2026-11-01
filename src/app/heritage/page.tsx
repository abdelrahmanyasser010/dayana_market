import { getStorefrontProducts } from "@/server/store-db";
import { HeritageClient } from "@/components/HeritageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "من ذاكرة مصر – مقتنيات وتراث البيوت المصرية زمان | ديوان الأنتيكات",
  description: "استكشف تحف وأنتيكات من ذاكرة مصر: راديو الصمامات وأم كلثوم، تليفونات القرص الدوار، ونحاسيات خان الخليلي."
};

export default async function HeritagePage() {
  const products = await getStorefrontProducts();
  return <HeritageClient products={products} />;
}
