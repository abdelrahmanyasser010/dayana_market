import { ShopClient } from "@/components/ShopClient";
import { getStorefrontProducts } from "@/server/store-db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "سوق الأنتيكات – جميع المقتنيات والتحف التاريخية | ديوان الأنتيكات",
  description: "اكتشف واقتنِ أنتيكات أصلية ومقتنيات نادرة مع فحص دقيق وشحن مؤمن لجميع المحافظات."
};

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; era?: string; heritage?: string; q?: string }>;
}) {
  const products = await getStorefrontProducts();
  const params = await searchParams;
  return (
    <ShopClient
      products={products}
      initialCategory={params.category || ""}
      initialEra={params.era || ""}
      initialHeritage={params.heritage === "true" || params.heritage === "1"}
      initialSearch={params.q || ""}
    />
  );
}
