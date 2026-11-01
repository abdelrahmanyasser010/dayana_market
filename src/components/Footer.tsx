"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useStore } from "./StoreProvider";
import { Mail, Check, ShieldCheck, Truck, Sparkles } from "lucide-react";

export function Footer() {
  const { language } = useStore();
  const isAr = language === "ar";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  }

  return (
    <footer className="antiqueFooter" id="story">
      {/* 1. Value Pillars Strip (Inspection, White-glove delivery, Living Heritage) */}
      <div className="antiquePillarsStrip">
        <div className="pillarItem">
          <ShieldCheck size={20} className="pillarIcon" />
          <div>
            <strong>{isAr ? "معاينة مضمونة عند الاستلام" : "Guaranteed Physical Inspection"}</strong>
            <p>{isAr ? "افحص القطعة وتأكد من أصلها قبل الدفع" : "Inspect piece provenance before payment"}</p>
          </div>
        </div>

        <div className="pillarItem">
          <Truck size={20} className="pillarIcon" />
          <div>
            <strong>{isAr ? "شحن مؤمن لجميع المحافظات" : "Insured White-Glove Shipping"}</strong>
            <p>{isAr ? "تغليف احترافي خاص بالتحف والقطع الحساسة" : "Specialized packaging for fragile antiques"}</p>
          </div>
        </div>

        <div className="pillarItem">
          <Sparkles size={20} className="pillarIcon" />
          <div>
            <strong>{isAr ? "توثيق تاريخي لكل مقتنى" : "Living Provenance Certificate"}</strong>
            <p>{isAr ? "شهادة توثق العصر والمصدر وحكاية القطعة" : "Historical documentation and era narrative"}</p>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Subscription (From Original Reference Mockup) */}
      <div className="antiqueNewsletterSection">
        <div className="newsletterInner">
          <div className="newsletterText">
            <div className="newsletterEyebrow">
              <Mail size={16} />
              <span>{isAr ? "نشرة رواد ديانا أنتيك" : "Diana Antique Gazette"}</span>
            </div>
            <h3>{isAr ? "اشترك في نشرتنا البريدية للحصول على أحدث القطع والأخبار" : "Subscribe to receive newly acquired rare pieces"}</h3>
          </div>

          <form onSubmit={handleSubscribe} className="newsletterForm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isAr ? "أدخل بريدك الإلكتروني..." : "Enter your email address..."}
              required
              className="newsletterInput"
            />
            <button type="submit" className="newsletterSubmitBtn" disabled={subscribed}>
              {subscribed ? (
                <>
                  <Check size={16} />
                  <span>{isAr ? "تم الاشتراك ✓" : "Subscribed ✓"}</span>
                </>
              ) : (
                <span>{isAr ? "اشتراك" : "Subscribe"}</span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* 3. Main Footer Grid with Proper Diana Antique Identity */}
      <div className="antiqueFooterGrid">
        {/* Brand Column */}
        <div className="footerBrandCol">
          <div className="footerBrandHeader">
            <div className="footerTempleIcon">
              <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
                <path d="M 15 36 L 50 12 L 85 36 Z" stroke="var(--antique-gold)" strokeWidth="3" fill="rgba(223, 190, 118, 0.12)" />
                <rect x="12" y="36" width="76" height="6" rx="1.5" fill="var(--antique-gold)" />
                <rect x="18" y="44" width="7" height="34" rx="1.5" fill="var(--antique-gold)" />
                <rect x="36" y="44" width="7" height="34" rx="1.5" fill="var(--antique-gold)" />
                <rect x="57" y="44" width="7" height="34" rx="1.5" fill="var(--antique-gold)" />
                <rect x="75" y="44" width="7" height="34" rx="1.5" fill="var(--antique-gold)" />
                <rect x="14" y="80" width="72" height="5" rx="1" fill="var(--antique-gold)" />
              </svg>
            </div>
            <div>
              <span className="footerBrandAr">ديانا أنتيك</span>
              <span className="footerBrandEn">Diana Antique</span>
            </div>
          </div>
          <p className="footerTagline">
            {isAr ? "أكثر من مجرد سوق.. رحلة عبر الزمن" : "More Than A Market.. A Journey Through Time"}
          </p>
          <p className="footerBrandDesc">
            {isAr
              ? "منصة متخصصة تجمع بين سوق المقتنيات النادرة، والتوثيق التاريخي المنهجي، والمعاينة المضمونة قبل الشراء، مستوحاة من عراقة سوق ديانا التاريخي بقلب القاهرة."
              : "A specialized destination bridging authentic rare collectibles, historical scholarship, and verified physical inspection in Cairo."}
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="footerNavCol">
          <h4>{isAr ? "سوق المقتنيات" : "Marketplace"}</h4>
          <Link href="/shop">{isAr ? "جميع المعروضات والتحف" : "All Collectibles"}</Link>
          <Link href="/heritage">{isAr ? "من ذاكرة مصر زمان" : "Egyptian Heritage Pieces"}</Link>
          <Link href="/timeline">{isAr ? "استكشاف حسب العصور" : "Chronological Eras"}</Link>
          <Link href="/wishlist">{isAr ? "المقتنيات المحفوظة" : "Saved Heirlooms"}</Link>
        </div>

        {/* Links Column 2 */}
        <div className="footerNavCol">
          <h4>{isAr ? "الموسوعة والتوثيق" : "Encyclopedia & Lore"}</h4>
          <Link href="/encyclopedia">{isAr ? "موسوعة الأنتيكات" : "Antique Encyclopedia"}</Link>
          <Link href="/encyclopedia/bakelite-design-wonder">{isAr ? "حكاية مادة الباكليت" : "The Story of Bakelite"}</Link>
          <Link href="/encyclopedia/gramophone-era-first-recordings">{isAr ? "عصر الجراموفون والتسجيلات" : "The Gramophone Era"}</Link>
          <Link href="/encyclopedia/antique-clocks-horology-art">{isAr ? "ساعات الحائط والتحف الميكانيكية" : "Antique Clocks & Horology"}</Link>
        </div>

        {/* Links Column 3 */}
        <div className="footerNavCol">
          <h4>{isAr ? "خدمة العملاء والخبراء" : "Support & Experts"}</h4>
          <Link href="/account/orders">{isAr ? "تتبع شحنة المقتنى" : "Track Order Status"}</Link>
          <a href="mailto:contact@diana-antique.com">contact@diana-antique.com</a>
          <span className="footerSupportNote">
            {isAr ? "معاينة فعلية وفحص دقيق قبل الدفع عند الاستلام" : "Physical inspection verified before delivery payment"}
          </span>
        </div>
      </div>

      {/* 4. Bottom Legal & Payment Bar */}
      <div className="antiqueFooterBottom">
        <div className="bottomLegal">
          <span>© 2026 {isAr ? "ديانا أنتيك – جميع الحقوق محفوظة" : "Diana Antique – All rights reserved"}</span>
        </div>
        <div className="bottomPayments">
          <span className="paymentPill">{isAr ? "معاينة عند الاستلام" : "Inspection on Delivery"}</span>
          <span className="paymentPill">Visa</span>
          <span className="paymentPill">MasterCard</span>
          <span className="paymentPill">PayPal</span>
        </div>
        <div className="bottomMotto">
          <span>{isAr ? "سوق ديانا • حكايات • أصالة" : "DIANA MARKET • LORE • PROVENANCE"}</span>
        </div>
      </div>
    </footer>
  );
}
