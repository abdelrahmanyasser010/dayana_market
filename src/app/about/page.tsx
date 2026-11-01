"use client";

import Link from "next/link";
import { useStore } from "@/components/StoreProvider";
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Landmark,
  Compass,
  ArrowLeft,
  ArrowRight,
  Award,
  History,
  Clock,
  HeartHandshake
} from "lucide-react";

export default function AboutPage() {
  const { language } = useStore();
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="antiqueAboutPage">
      {/* 1. Atmospheric Panoramic Hero Banner */}
      <section className="aboutHeroSection" aria-label="About Diana Antique Hero">
        <div className="aboutHeroBackdrop">
          <img
            src="/media/generated/about_diana_heritage_banner.webp"
            alt="سوق ديانا للأنتيكات التاريخية بوسط البلد"
            className="aboutHeroImg"
          />
          <div className="aboutHeroOverlay" />
        </div>

        <div className="aboutHeroContent">
          <nav className="antiqueBreadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
            <span className="breadcrumbSep">›</span>
            <span>{isAr ? "قصة ديانا أنتيك" : "Our Story"}</span>
          </nav>
          <div className="aboutHeroEyebrow">
            <Landmark size={15} className="goldIcon" />
            <span>{isAr ? "من قلب القاهرة الخديوية إلى كل بيت عربي" : "From Historic Cairo to Discerning Collectors"}</span>
          </div>
          <h1 className="aboutHeroTitle">
            {isAr ? "حكاية ديانا أنتيك.. أكثر من مجرد سوق" : "The Diana Antique Story: Beyond A Marketplace"}
          </h1>
          <p className="aboutHeroSubtitle">
            {isAr
              ? "استلهمنا رحلتنا من أزقة «سوق ديانا» الأسطوري بوسط البلد في القاهرة؛ لنبني أول منصة رقمية للأنتيكات تجمع بين توثيق حكايات الماضي، والفحص المادي الدقيق، والمعاينة الحية عند الاستلام."
              : "Inspired by the storied Saturday open-air gathering of Souq Diana in Downtown Cairo, we created a trusted sanctuary where verified provenance meets insured white-glove collection."}
          </p>
        </div>
      </section>

      {/* Main Narrative Container */}
      <main className="aboutMainContainer">
        {/* Chapter 1: The Origin of the Name */}
        <section className="aboutChapter">
          <div className="chapterGrid">
            <div className="chapterText">
              <span className="chapterTag">{isAr ? "الفصل الأول" : "Chapter I"}</span>
              <h2>{isAr ? "سر الاسم: سينما ديانا وشارع عماد الدين (Broadway الشرق)" : "The Origin: Diana Palace & Emad El-Deen Street"}</h2>
              <p>
                {isAr
                  ? "في مطلع ثلاثينيات القرن العشرين، ومع افتتاح دار سينما «ديانا بالاس» المعمارية الفاخرة بشارع عماد الدين في قلب القاهرة الخديوية، كان الشارع يعيش عصره الذهبي كقلب نابض للفنون والثقافة والمسارح في الشرق الأوسط. التقت حوله مقاهي الأدباء، ودور النشر، وأرقى الصالونات الأرستقراطية."
                  : "In the early 1930s, with the opening of the grand Diana Palace Cinema on Emad El-Deen Street in Downtown Cairo, the district served as the vibrant Broadway of the East, attracting artists, literati, and aristocratic patrons."}
              </p>
              <p>
                {isAr
                  ? "كان الترام القاهري الأخضر القديم يتهادى وسط بنايات وسط البلد ذات الطراز الأوروبي الخديوي البديع، حاملاً رواد المسارح وعشاق الجمال. من هذه البقعة التاريخية استمدت «ديانا أنتيك» اسمها وهويتها؛ تكريماً لزمن كانت فيه القطعة تُصنع لتدوم وتتحول بمرور السنين إلى شاهد حي على الحضارة."
                  : "Cairo's vintage electric trams meandered past grand Belle Époque stone facades, ferrying connoisseurs and theatergoers. Diana Antique took its name from this storied crossroads to honor an era where artifacts were crafted to outlast centuries."}
              </p>
            </div>
            <div className="chapterMediaCard">
              <img
                src="/media/generated/cairo_tram_diana_street.webp"
                alt="ترام القاهرة وشارع عماد الدين في زمن القاهرة الجميل"
                className="chapterImg"
              />
              <span className="chapterMediaCaption">
                {isAr ? "ترام القاهرة الخديوية وشارع عماد الدين في زمن الصالونات الراقية" : "Vintage Cairo Electric Tram & Downtown Emad El-Deen Street"}
              </span>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Saturday Dawn Ritual at Souq Diana */}
        <section className="aboutChapter">
          <div className="chapterGrid chapterGridReverse">
            <div className="chapterMediaCard">
              <img
                src="/media/generated/souq_diana_saturday_morning.webp"
                alt="تجمع فجر السبت في سوق ديانا للأنتيكات بوسط البلد"
                className="chapterImg"
              />
              <span className="chapterMediaCaption">
                {isAr ? "طقس فجر السبت الأسبوعي في سوق ديانا بوسط البلد بين الهواة والمقتنين" : "Saturday Dawn Gathering at Historic Souq Diana in Downtown Cairo"}
              </span>
            </div>
            <div className="chapterText">
              <span className="chapterTag">{isAr ? "الفصل الثاني" : "Chapter II"}</span>
              <h2>{isAr ? "طقس فجر السبت: المتحف المفتوح لهواة التراث" : "The Saturday Dawn Ritual: Cairo's Living Open-Air Museum"}</h2>
              <p>
                {isAr
                  ? "مع خيوط الفجر الأولى من كل يوم سبت، يتحول الممر المحيط بسينما ديانا إلى أعرق سوق مفتوح للمقتنيات في العالم العربي. يفرش كبار هواة التحف وتجار الأنتيكات طاولاتهم المخملية، لتلتقي أجيال من الباحثين عن جرامفون عتيق، أو راديو صالون خشبي استمعت منه العائلات لحفلات أم كلثوم، أو كاميرا ألمانية ميكانيكية وثقت ملامح القرن الماضي."
                  : "At first light every Saturday, the courtyard around Diana Cinema transformed into Egypt's most celebrated antique exchange. Connoisseurs, diplomat families, and theater set designers gathered to discover rare phonographs, valve radios, and mechanical treasures."}
              </p>
              <p>
                {isAr
                  ? "كان السوق ملتقى للمؤرخين، والدبلوماسيين، ومصممي ديكورات السينما والمسرح الذين يبحثون عن عبق الأصلية و«ريحة زمان». لكن الشراء التقليدي كان دائماً محفوفاً بالقلق: هل الماكينة تعمل؟ هل هذا النحاس أصلي أم مقلد؟ كيف أضمن سلامتها في التوصيل؟ من هنا انطلقت فكرة منصة «ديانا أنتيك» لتنقل هذا السوق الأسطوري إلى فضاء رقمي موثق ومضمون مئة بالمئة."
                  : "Yet acquiring antiques traditionally came with uncertainty: is the movement authentic? Has the brass been artificially aged? Diana Antique was born to elevate this heritage into a rigorously authenticated, door-to-door verified marketplace."}
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 3: The Art of Verification & Horology Workshop */}
        <section className="aboutChapter">
          <div className="chapterGrid">
            <div className="chapterText">
              <span className="chapterTag">{isAr ? "الفصل الثالث" : "Chapter III"}</span>
              <h2>{isAr ? "فن التوثيق والترميم: كيف نحيي القطعة دون إتلاف تاريخها؟" : "The Art of Verification: Preserving History & Natural Patina"}</h2>
              <p>
                {isAr
                  ? "لا نتعامل مع التحف كسلع صامتة، بل كأمانات تاريخية ذات روح. كل قطعة تنضم إلى معروضات ديانا أنتيك تخضع لمنهجية فحص علمية دقيقة في ورشتنا المتخصصة: نفحص محركات الساعات البندولية وتروسها بدقة الميكرون، نتأكد من نقاء غشاء الميكا في الرؤوس الصوتية للجراموفونات، ونختبر الرائحة الفينولية للباكليت الأصلي."
                  : "We treat artifacts not as static inventory, but as living history. Every piece undergoes rigorous horological and material examination: inspecting deadbeat clock escapements, acoustic mica diaphragms, and original Bakelite resins."}
              </p>
              <p>
                {isAr
                  ? "نرفض تماماً أساليب التلميع الكيميائي الجائر أو التجديد العشوائي الذي يمحو «الباتينا الزمنية» الطبيعية التي اكتسبتها القطعة عبر عقود. نرفق مع كل مقتنى «وثيقة هوية أثرية» تفصل عصر تصنيعها، مواصفاتها الميكانيكية، وقواعد العناية بها لتبقى إرثاً حياً تتوارثه الأجيال."
                  : "We strictly preserve natural aged patina and reject harsh chemical alterations. Every artifact arrives with an archival provenance dossier detailing its fabrication era, mechanical attributes, and preservation guidelines."}
              </p>
            </div>
            <div className="chapterMediaCard">
              <img
                src="/media/generated/antique_restorer_workshop.webp"
                alt="ورشة فحص وترميم الساعات والأنتيكات النادرة"
                className="chapterImg"
              />
              <span className="chapterMediaCaption">
                {isAr ? "فحص دقيق لمحركات الساعات الميكانيكية وأبواق الجرامفونات الأصلية" : "Master Horologist Inspecting Antique Escapements & Acoustic Relics"}
              </span>
            </div>
          </div>
        </section>

        {/* Chapter 4: From Historic Salons to Modern Homes */}
        <section className="aboutChapter">
          <div className="chapterGrid chapterGridReverse">
            <div className="chapterMediaCard">
              <img
                src="/media/generated/cairo_belle_epoque_salon.webp"
                alt="صالون أرستقراطي بالقاهرة الخديوية في منتصف القرن العشرين"
                className="chapterImg"
              />
              <span className="chapterMediaCaption">
                {isAr ? "صالونات القاهرة الخديوية في زمن الراديو الصمامي والشاي النحاسي" : "Aristocratic Mid-Century Cairo Salon with Valve Radio & Brass Hospitality"}
              </span>
            </div>
            <div className="chapterText">
              <span className="chapterTag">{isAr ? "الفصل الرابع" : "Chapter IV"}</span>
              <h2>{isAr ? "من صالونات القصور إلى منازل اليوم: حكاية إرث يتوارثه الأجيال" : "From Historic Salons to Modern Homes: A Generational Legacy"}</h2>
              <p>
                {isAr
                  ? "في صالونات جاردن سيتي والزمالك ومصر الجديدة خلال النصف الأول من القرن العشرين، كانت هذه القطع هي روح البيت ونبضه اليومي: راديو الصالون الخشبي ذو العين الخضراء الذي جمع العائلة كل خميس للاستماع لكوكب الشرق، تليفون الباكليت الأسود ذو الجرس الرنان الذي حمل أهم المراسلات، وصينية النحاس المطروقة يدوياً التي جسدت كرم الضيافة المصرية الأصيلة."
                  : "In the cosmopolitan salons of Garden City, Zamalek, and Heliopolis, these artifacts formed the beating heart of domestic life: the valve console radio uniting families for live concerts, the rotary phone carrying fateful news, and hand-chased brass trays embodying timeless hospitality."}
              </p>
              <p>
                {isAr
                  ? "مهمتنا في «ديانا أنتيك» ليست فقط عرض التحف للبيع؛ بل إعادة هذا الدفء والعمق الثقافي إلى البيوت المعاصرة. عندما تقتني قطعة أصلية من ديانا أنتيك، فإنك لا تشتري أثاثاً للديكور، بل تستقبل في بيتك قطعة من روح التاريخ تزيد قيمتها المادية والمعنوية مع كل يوم يمر."
                  : "At Diana Antique, our mission is to revive this cultural resonance in contemporary living spaces. Acquiring an original artifact means welcoming an enduring piece of history that appreciates in both emotional and financial value over time."}
              </p>
            </div>
          </div>
        </section>

        {/* 5. The Three Pillars of Trust */}
        <section className="aboutPillarsSection">
          <div className="aboutSectionHeader">
            <div className="aboutEyebrowTag">
              <Award size={14} className="goldIcon" />
              <span>{isAr ? "ميثاق الجودة والمصداقية" : "Our Quality Charter"}</span>
            </div>
            <h2>{isAr ? "أركان الثقة الثلاثة في ديانا أنتيك" : "Our Three Guarantees of Trust"}</h2>
            <p>{isAr ? "معايير صارمة تضمن لك تجربة اقتناء تليق بقيمة أندر المقتنيات التاريخية" : "Uncompromising curation and doorstep physical inspection standards"}</p>
          </div>

          <div className="aboutPillarsGrid">
            <div className="aboutPillarCard">
              <div className="pillarIconWrap">
                <ShieldCheck size={28} className="goldIcon" />
              </div>
              <h3>{isAr ? "معاينة حية عند الاستلام" : "Doorstep Live Inspection"}</h3>
              <p>
                {isAr
                  ? "حقك الأصيل في فحص المقتنى بيدك، والتأكد من أصالته وحالته المادية ومطابقته للمواصفات قبل أن تدفع قرشاً واحداً لمندوب التوصيل."
                  : "You inspect every detail of the artifact physically before handing over payment to our white-glove courier."}
              </p>
            </div>

            <div className="aboutPillarCard">
              <div className="pillarIconWrap">
                <Sparkles size={28} className="goldIcon" />
              </div>
              <h3>{isAr ? "شهادة توثيق وتاريخ مادي" : "Living Provenance Dossier"}</h3>
              <p>
                {isAr
                  ? "بطاقة توثيق تاريخية معتمدة لكل مقتنى؛ تسرد العصر المصنوع فيه، طريقة استخدامه في صالونات زمان، وحكايته الثقافية والاجتماعية."
                  : "Archival provenance certificate documenting the piece's fabrication period, cultural role, and historical authenticity."}
              </p>
            </div>

            <div className="aboutPillarCard">
              <div className="pillarIconWrap">
                <Truck size={28} className="goldIcon" />
              </div>
              <h3>{isAr ? "شحن مصفح ومؤمن" : "White-Glove Insured Delivery"}</h3>
              <p>
                {isAr
                  ? "تغليف هيدروليكي وحماية مخصصة للأنتيكات الزجاجية، والأبواق النحاسية، والساعات الميكانيكية لضمان وصولها بحالتها الأصلية دون خدش."
                  : "Specialized shockproof packaging engineered specifically for fragile brass gramophone horns, porcelain, and pendulum clocks."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="aboutCtaStrip">
          <div className="aboutCtaInner">
            <div className="aboutCtaText">
              <h2>{isAr ? "مستعد لاقتناء قطعتك التاريخية الأولى؟" : "Ready to Acquire Your First Historical Relic?"}</h2>
              <p>{isAr ? "تصفح سوق ديانا الآن واستمتع بمعاينة حية عند الاستلام في جميع محافظات مصر." : "Explore our authenticated collectibles with live doorstep verification across Egypt."}</p>
            </div>
            <Link href="/shop" className="aboutPrimaryBtn">
              <span>{isAr ? "تصفح متجر المقتنيات" : "Explore Marketplace"}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
