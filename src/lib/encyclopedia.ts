export type VisualVariant = {
  title: string;
  titleEn: string;
  era: string;
  image: string;
  description: string;
  rarity: "نادر جداً" | "نادر" | "متاح للمقتنين";
};

export type AuthenticityChecklist = {
  genuinePoints: string[];
  replicaWarnings: string[];
  testMethod: string;
};

export type ValueTier = {
  title: string;
  priceRangeEgp: string;
  criteria: string;
  features: string[];
  tierLevel: "high" | "mid" | "entry";
};

export type EncyclopediaArticle = {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  category: string;
  categoryEn: string;
  eraId: string;
  eraLabel: string;
  readTimeMinutes: number;
  publishDate: string;
  heroImage: string;
  summary: string;
  summaryEn: string;
  content: {
    heading: string;
    text: string;
  }[];
  contentEn: {
    heading: string;
    text: string;
  }[];
  visualVariants: VisualVariant[];
  authenticityGuide: AuthenticityChecklist;
  valueTiers: ValueTier[];
  pricingRule: string;
  verificationTips: string[];
  verificationTipsEn: string[];
  relatedProductSlugs: string[];
};

export const ENCYCLOPEDIA_ARTICLES: EncyclopediaArticle[] = [
  {
    slug: "gramophone-era-first-recordings",
    title: "عصر الفونوغراف والجراموفون: دليل كشف النسخ المقلدة وسُلّم القيمة المادية",
    titleEn: "The Gramophone Era: Identifying Fake Crap-o-phones & Market Valuation Ladder",
    subtitle: "أسرار النفير النحاسي والأسطوانات الحجرية 78 لفة، وكيف تكشف ألاعيب التعتيق الصناعي",
    subtitleEn: "Acoustic mechanics of flower horns, 78 RPM shellac records, and how to spot fraudulent modern replicas",
    category: "تاريخ الموسيقى والصوتيات",
    categoryEn: "Acoustic History",
    eraId: "1900-1920",
    eraLabel: "1900 – 1920",
    readTimeMinutes: 8,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/generated/encyclopedia_gramophone_forms.webp",
    summary: "قبل عصر الإلكترونيات ومكبرات الصوت، كانت الموسيقى تتدفق بآلية ميكانيكية بحتة: إبرة فولاذية تهتز على أسطوانة حجرية، وغشاء ميكا رقيق ينقل النغم إلى نفير نحاسي مطروق يدوياً. نقدم هنا دليلاً موثقاً للتمييز بين الجراموفون الإنجليزي الأصلي والنسخ المصنوعة حديثاً.",
    summaryEn: "Before electric amplifiers, acoustic vibration across shellac grooves brought music alive. An authoritative collector guide on distinguishing genuine British horn gramophones from modern decorative fakes.",
    content: [
      {
        heading: "الميكانيكا البحتة: كيف يعمل الجراموفون بدون كهرباء؟",
        text: "يعتمد الجراموفون الكلاسيكي على محرك زنبركي ملفوف يدوياً بواسطة ذراع دوران (مانيفيلّا). يقوم الزنبرك بتدوير الصحن بسرعة معايرة تبلغ 78 دورة في الدقيقة (RPM) تحت سيطرة ميزان طرد مركزي (Governor). تمر الإبرة الفولاذية فوق التعرجات المجهرية المحفورة في أسطوانة الشلاك (Shellac)، فتنتقل الاهتزازات إلى غشاء رقيق من الميكا الطبيعية داخل الرأس الصوتي (Soundbox)، ثم يتدفق الصوت عبر الذراع الأنبوبي إلى النفير النحاسي الذي يضخمه بصورة صوتية طبيعية نقية."
      },
      {
        heading: "ظاهرة 'Crap-o-phones': أخطر فخ يقع فيه هواة الأنتيكات",
        text: "تنتشر في الأسواق والمزادات نسخ حديثة مصنعة في الهند وباكستان تُعرف عالمياً لدى خبراء المقتنيات بلقب 'Crap-o-phones'. تتميز هذه النسخ بنفير نحاسي لامع جداً وحديث مطلي بورنيش اصطناعي، وصناديق خشبية رخيصة (غالباً من خشب المانجو) ذات أشكال هندسية لم تصنعها الشركات الأصلية إطلاقاً (مثل الصناديق السداسية أو المستديرة المزخرفة بنقوش ورود نافرة عشوائية). يُثبت عليها شعار ملصق مزيف لكلب نيبير (His Master's Voice)، ويُركب داخلها محركات خفيفة مأخوذة من ساعات منبه قديمة. تشغيل أسطوانة حجرية على هذا الرأس المقلد يؤدي إلى تلف وسحق الأخاديد الصوتية في غضون ثوانٍ قليلة."
      },
      {
        heading: "مصر واستوديوهات التسجيل الأسطورية في القاهرة",
        text: "كانت القاهرة والإسكندرية من أوائل العواصم في العالم التي افتتحت فيها كبرى شركات الأسطوانات الدولية مثل Gramophone Company و Baidaphon و Odeon فروعاً دائمة. استقبلت هذه الاستوديوهات رواد الطرب الأصيل كالشيخ سلامة حجازي وسيد درويش ومنيرة المهدية، وصولاً إلى التسجيلات المبكرة لكوكب الشرق أم كلثوم والموسيقار محمد عبد الوهاب."
      }
    ],
    contentEn: [
      {
        heading: "Pure Mechanical Acoustics",
        text: "Operated by a hand-cranked mainspring governed at 78 RPM. Vibrations from a steel needle running through shellac grooves resonate across a natural mica diaphragm."
      },
      {
        heading: "The 'Crap-o-phone' Epidemic",
        text: "Modern counterfeit decorative units featuring glaringly shiny brass horns, crude hexagonal soft-wood cases, and fake HMV dog transfers that destroy vintage 78 RPM records."
      }
    ],
    visualVariants: [
      {
        title: "جراموفون النفير الخارجي الكلاسيكي (External Flower Horn)",
        titleEn: "External Brass Flower Horn Gramophone",
        era: "1905 – 1918",
        image: "/media/extracted/prod_classic_gramophone.webp",
        description: "النمط الملكي الأشهر والأعلى قيمة؛ يتميز بنفير نحاسي كبير مطروق يدوياً بشكل بتلات الزهور وصندوق من خشب الماهوجني الإنجليزي الفاخر.",
        rarity: "نادر جداً"
      },
      {
        title: "جراموفون الصالون المكتبي المغلق (Tabletop Cabinet)",
        titleEn: "Tabletop Internal Horn Gramophone",
        era: "1920 – 1935",
        image: "/media/extracted/hero_museum_world.webp",
        description: "نمط متطور أدمج فيه النفير داخل الصندوق الخشبي مع بوابتين ميكانيكيتين للتحكم في مستوى الصوت، شاع استخدامه في صالونات الطبقة الراقية.",
        rarity: "نادر"
      },
      {
        title: "جراموفون شنطة الرحلات المحمول (Portable Suitcase)",
        titleEn: "Portable Suitcase Gramophone (HMV 102)",
        era: "1930 – 1948",
        image: "/media/extracted/stories_vintage_photos.webp",
        description: "تصميم مدمج داخل حقيبة جلدية مقاومة للصدمات، كان يُحمل في نزهات حدائق القناطر الخيرية والرحلات النيلية في مصر.",
        rarity: "متاح للمقتنين"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "صندوق خشبي مربع أو مستطيل من خشب الماهوجني أو البلوط المشبع بالبولش الفرنسي العتيق، بدون نقوش خشبية رخيصة أو أشكال سداسية.",
        "رأس صوتي أصلي ثقيل الوزن (HMV No. 4 أو Exhibition) بقرص ميكا طبيعي شفاف وجوانات كاوتشوك أصلية مدموغة برقم تسلسلي.",
        "محرك زنبركي من الحديد الزهر الثقيل (Cast Iron) يدور بسلاسة وصمت تام ويحافظ على سرعة 78 لفة ثابتة طوال مدة عزف أسطوانة كاملة.",
        "مسامير التثبيت الأصلية ذات شق فردي مسطح (Slotted screws) وليس مسامير صليبة حديثة."
      ],
      replicaWarnings: [
        "نفير نحاسي أصفر شديد اللمعان كأنه خرج من ورشة أمس، برائحة ورنيش حديث وملمس معدني رقيق وخفيف.",
        "صندوق خشبي سداسي أو مثمن من خشب أبيض خفيف أو مانجو مصبوغ بدهان رديء ومطلي باللون الأسود من الداخل لإخفاء عيوبه.",
        "محرك يرتجف ويصدر أصوات طحن خشنة ومسنناته تنكسر بعد عدة دورات.",
        "ملصق كلب نيبير (His Master's Voice) مطبوع حديثاً بألوان ناصعة ولامعة على خشب غير معالج."
      ],
      testMethod: "افحص أسفل صحن التدوير ومسامير تثبيت الماكينة، وتحقق من مرونة غشاء الميكا في الرأس الصوتي وتطابق الدمغات الإنجليزية مع كتالوج الصانع."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: النفير النحاسي الخارجي المكتمل والموثق",
        priceRangeEgp: "12,000 – 25,000 ج.م",
        criteria: "قطعة أصلية تعود لأوائل القرن العشرين (1905–1915) بكامل أجزائها الميكانيكية والنفير النحاسي الأصلي دون أي تعديل صناعي.",
        features: ["محرك أصلي يدور بثبات", "نفير بتلات النحاس الأصلي", "شعار الصانع الإنجليزي الموثق", "حالة عزف ممتازة"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: كونسول مكتبي أو شنطة أصلية بحالة ممتازة",
        priceRangeEgp: "5,000 – 9,000 ج.م",
        criteria: "جراموفونات الصالونات ذات النفير المدمج أو جراموفونات الشنطة الإنجليزية طراز HMV 101/102 بكامل مكوناتها العاملة.",
        features: ["صندوق خشب جوز أو جلد أصلي", "ماكينة إنجليزية عاملة", "تحتاج فقط ضبط خفيف"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: قطع تحتاج صيانة أو نماذج ديكورية",
        priceRangeEgp: "1,500 – 3,500 ج.م",
        criteria: "قطع قديمة تعرض زنبركها للكسر أو استُبدل رأسها الصوتي، أو نماذج ديكورية حديثة مخصصة للعرض فقط دون عزف.",
        features: ["مخصصة للديكور المنزلي", "لا ينصح بتشغيل الأسطوانات النادرة عليها"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "الجراموفون الإنجليزي الكلاسيكي الأصلي موديل 1912 بكامل ماكينته وتروسه ومحركه الميكانيكي النحاسي والنفير المطروق يعمل بامتياز يساوي 12,000 ج.م؛ فإذا كان الصندوق مجدداً أو النفير بديلاً تنخفض قيمته إلى 4,500 ج.م، بينما النسخ المقلدة الحديثة (Crap-o-phones) لا تتجاوز قيمتها الديكورية التقديرية 2,000 ج.م.",
    verificationTips: [
      "فحص علامة الصانع: التأكد من اللوحة النحاسية الأصلية المدموغة مثل 'The Gramophone Co. Ltd. London'.",
      "قوة الزنبرك الداخلي: التأكد من أن الزنبرك يلف بسلاسة ويحتفظ بالسرعة طوال مدة عزف أسطوانة 78 لفة كاملة دون توقف.",
      "فحص مادة النفير: النفير الأصلي يظهر آثار الطرق واللحام القديم بالقصدير وتدرج الباتينا العتيقة."
    ],
    verificationTipsEn: [
      "Maker's badge verification (The Gramophone Co. Ltd., Odeon, Columbia).",
      "Spring integrity: Platter must maintain steady 78 RPM for a full record side.",
      "Aged brass seams with authentic tinning patina."
    ],
    relatedProductSlugs: [
      "classic-antique-gramophone"
    ]
  },
  {
    slug: "bakelite-design-wonder",
    title: "الباكليت وأجهزة الاتصال: كيف تفرق بين خامة 1930 الأصلية والبلاستيك المصبوب، ومحددات السعر",
    titleEn: "Bakelite & Telecommunications: Testing 1930s Resonance vs Plastic Replicas",
    subtitle: "تاريخ أول مادة صناعية بوليمرية مقاومة للحرارة صنعت أيقونات التصميم الريترو",
    subtitleEn: "Testing authenticity via formaldehyde aroma, weight standards, and debossed factory markings",
    category: "الخامات والابتكارات القديمة",
    categoryEn: "Materials & Innovations",
    eraId: "1920-1940",
    eraLabel: "1920 – 1940",
    readTimeMinutes: 7,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/generated/encyclopedia_telephone_variants.webp",
    summary: "اخترعه العالم البلجيكي ليو بيكلاند عام 1907، ليصبح العمود الفقري لصناعة الهواتف الأرضية ذات القرص الدوار، وأجهزة الراديو ذات العزل الكهربائي الفائق. نوضح هنا الاختبارات المعملية التي تكشف الباكليت الأصلي عن اللدائن البلاستيكية الرخيصة، وسُلّم تسعير الهواتف الكلاسيكية.",
    summaryEn: "Invented by Leo Baekeland in 1907, Bakelite revolutionised modern design. A technical masterclass on weight tests, debossed markings, and market pricing factors.",
    content: [
      {
        heading: "ما هو الباكليت ولماذا كان ثورة صناعية وتصميمية؟",
        text: "قبل ظهور الباكليت، كانت الصناعات تعتمد على العاج أو الخشب أو اللك الطبيعي (Shellac). تميز الباكليت بأنه مادة متصلبة بالحرارة (Thermosetting resin) ناتجة عن تفاعل الفينول والفورمالدهيد؛ أي أنه لا يذوب عند تسخينه، ولا يوصل الكهرباء، ومقاوم تماماً للرطوبة والمواد الكيميائية. صُبت القوالب تحت ضغط هيدروليكي هائل، مما أتاح إنتاج تصميمات منحوتة بانسيابية لم تكن ممكنة من قبل."
      },
      {
        heading: "الصوت والثقل واختبار الرائحة: كيف تعرف الباكليت الأصلي؟",
        text: "الهواتف المصنوعة من الباكليت الأسود تتميز بوزن ثقيل وصوت نقر رنان وعميق يشبه الحجر المصقول أو الرخام. عندما تفرك سطح الباكليت بإبهامك بقوة وسرعة حتى يسخن موضع الفرك، تنبعث منه رائحة خفيفة مميزة تشبه الفورمالدهيد والمطهر الطبي، وهو الاختبار الكلاسيكي المعتمد لدى خبراء التقييم. كما أن الباكليت الأصلي يحتفظ ببرودة طفيفة عند ملامسته، ولا يتأثر بالكحول المخفف."
      },
      {
        heading: "علامات الغش في هواتف الباكليت (المستوردة والمجمعة)",
        text: "انتشرت في الآونة الأخيرة أغطية هواتف مقلدة تُصب من مادة البلاستيك الحديث (ABS) أو الراتنج في مصانع تجارية. تتميز النسخ المقلدة بأن حروف الطراز المطبوعة على السماعة تكون بارزة ونافرة (Raised text)، بينما في الهواتف الإنجليزية الأصلية الصنع تكون الحروف والأرقام غائرة ومحفورة في عمق الباكليت (Debossed). كما أن مكان خروج السلك في الأصل يكون دائماً من قاع ظهر الهاتف وليس من جانبه."
      }
    ],
    contentEn: [
      {
        heading: "What made Bakelite revolutionary?",
        text: "A thermosetting resin resistant to heat and electricity. Moulded under immense hydraulic pressure, creating enduring architectural designs."
      },
      {
        heading: "The Professional Verification Test",
        text: "Friction heat releases a faint carbolic/formaldehyde scent. Authentic pieces possess cool stone-like tactile qualities and heavy mass."
      }
    ],
    visualVariants: [
      {
        title: "هاتف الشمعة الكلاسيكي (Candlestick Phone)",
        titleEn: "Early Candlestick Telephone",
        era: "1905 – 1925",
        image: "/media/extracted/cat_phones.webp",
        description: "عمود نحاسي طويل مع سماعة أذن منفصلة وقاعدة ثقيلة، يمثل العصر الذهبي لبدايات شبكات الاتصال السلكي.",
        rarity: "نادر جداً"
      },
      {
        title: "هاتف الهرم الباكليتي الإنجليزي (GPO 232 Pyramid)",
        titleEn: "GPO 232 Pyramid Bakelite Phone",
        era: "1930 – 1945",
        image: "/media/extracted/prod_english_phone.webp",
        description: "التصميم الهرمي الأيقوني بقرص دوار نحاسي وصندوق أجراس منفصل، استخدمته المصالح الملكية والدوائر الدبلوماسية في مصر.",
        rarity: "نادر"
      },
      {
        title: "هاتف الصالون المكتبي المستطيل (GPO 332 Desk Phone)",
        titleEn: "GPO 332 Desk Telephone",
        era: "1940 – 1959",
        image: "/media/extracted/detail_phone_large.webp",
        description: "النموذج الأكثر شهرة في صالونات الخمسينيات بأجراسه النحاسية الداخلية المزدوجة وصوته الرنان المميز.",
        rarity: "متاح للمقتنين"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "سماعة الهاتف الأصلية تحمل كتابات وأرقام طراز محفورة إلى الداخل (Debossed) وليست بارزة للخارج.",
        "قاعدة الهاتف المعدنية السفلية مدموغة برمز الصانع وتاريخ الصنع (مثل S-35 لشركة سيمنز 1935، أو PL لشركة بليسي).",
        "القرص الدوار نحاسي أو ستانلس ستيل قديم مع حركة رجوع سلسة ومخمدة ميكانيكياً، وليس قرصاً بلاستيكياً خفيفاً.",
        "فتحة سلك الخط الأرضي تقع في أسفل منتصف ظهر الصندوق الخلفي حصراً."
      ],
      replicaWarnings: [
        "كتابات بارزة ونافرة على ذراع السماعة، أو وجود أخطاء إملائية في اسم الطراز الإنجليزي.",
        "هيكل خفيف الوزن ومصنوع من بلاستيك حديث لامع بدون أي برودة رخامية.",
        "فتحة خروج السلك موجودة في جانب الهاتف أو مزودة بمقبس هاتف مودرن (RJ11) بدون تحويل احترافي.",
        "دهان رش حديث يغطي الشروخ أو يحاكي ألوان الباكليت النادرة كاللون الأحمر والأخضر الفاقع."
      ],
      testMethod: "افحص علامات الدمغ أسفل القاعدة المعدنية، وفرك السطح للتأكد من الرائحة الفينولية، واختبر وزن الهاتف (يجب ألا يقل عن 1.8 كجم)."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: هاتف الهرم 1930 مع صندوق الأجراس النحاسية المنفصل",
        priceRangeEgp: "9,000 – 16,000 ج.م",
        criteria: "هواتف حقبة الثلاثينيات الإنجليزية الأصلية بكامل مكوناتها وصندوق الأجراس الجداري (Bell Box No. 26).",
        features: ["باكليت أسود خالي من الشروخ", "قرص دوار نحاسي أصلي", "سلك قماشي مجدول أصلي", "أجراس داخلية رنانة"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: هاتف صالون إنجليزي أو مصري طراز 1935–1955",
        priceRangeEgp: "6,000 – 8,500 ج.م",
        criteria: "هواتف الصالونات الإنجليزية ذات الأجراس المدمجة (GPO 300 Series) أو هواتف مصلحة السلكي واللاسلكي المصرية بحالة فنية ممتازة.",
        features: ["مفحوصة ميكانيكياً", "جاهزة للاقتناء والتشغيل التراثي", "باكليت ملمع بأصالة"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: هواتف السبعينات البلاستيكية أو هياكل غير مكتملة",
        priceRangeEgp: "1,500 – 3,000 ج.م",
        criteria: "هواتف السبعينيات المصنوعة من البلاستيك العادي أو هواتف الباكليت التي تعرضت لكسور أو أفرغت من أجهزتها الداخلية.",
        features: ["قيمة ديكورية رمزية", "غير مناسبة للمجموعات التوثيقية الاحترافية"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "تليفون الصالون الإنجليزي القديم طراز 1935 بقرص دوار نحاسي وأجراس رنانة أصلية وباكليت مشبع بالنقاء يساوي 7,800 ج.م؛ فإذا كان الهاتف طراز الهرم 1930 النادر بكامل صندوق أجراسه ترتفع قيمته إلى 11,500 ج.م، بينما إذا كان السلك مبدلاً بسلك بلاستيكي رديء أو تضرر القرص الدوار تنخفض قيمته إلى 3,500 ج.م.",
    verificationTips: [
      "اختبار الوزن: الهواتف الباكليتية تزن عادة من 1.8 إلى 2.5 كجم بفضل كثافة المادة وأجراس النحاس والمحول الحثي.",
      "ملمس السطح: الباكليت الأصلي يحتفظ ببرودة طفيفة تشبه الرخام عند لمسه، وينبعث منه وميض معتق.",
      "عدم وجود خطوط لحام بلاستيكية حديثة: صُبت القوالب بضغط هيدروليكي عالي لا يترك نتوءات خشنة كالبلاستيك الحديث."
    ],
    verificationTipsEn: [
      "Weight test: True Bakelite phones typically weigh between 1.8kg and 2.5kg.",
      "Cool-to-touch: Retains a mild, stone-like cool sensation similar to polished marble.",
      "No modern injection mold seams."
    ],
    relatedProductSlugs: [
      "vintage-english-rotary-phone",
      "vintage-wooden-tube-radio"
    ]
  },
  {
    slug: "vienna-regulator-clockmaking",
    title: "ساعات فيينا البندولية وساعات الطاولة المذهبة: أسرار الأوزان الثلاثة وميزان السير الميت",
    titleEn: "Vienna Regulators & Ormolu Clocks: Three-Weight Escapements & Horological Pricing",
    subtitle: "قصة التحفة الميكانيكية التي ضبطت إيقاع القصور والمؤسسات قبل عصر الكهرباء",
    subtitleEn: "Master horology analysis of deadbeat escapements, mercury fire-gilding, and weight-driven values",
    category: "الساعات والميكانيكا",
    categoryEn: "Horology",
    eraId: "pre-1900",
    eraLabel: "ما قبل 1900",
    readTimeMinutes: 8,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/generated/encyclopedia_vienna_clock_movement.webp",
    summary: "ساعات 'فيينا ريجوليتور' وساعات الصالونات الفرنسية المذهبة بالبرونز تمثل قمة ما وصل إليه علم قياس الوقت في القرنين الثامن عشر والتاسع عشر. نكشف هنا الفارق الميكانيكي بين ساعات الوزن الواحد والوزنين والثلاثة أوزان، وكيف تفحص حركة البندول والأختام النمساوية والفرنسية.",
    summaryEn: "A comprehensive investigation into Austrian Vienna Regulators and French Ormolu mantle timepieces. Comparing 1-weight, 2-weight, and 3-weight Grande Sonnerie mechanisms and authenticity marks.",
    content: [
      {
        heading: "الريجوليتور: المعيار المطلق لضبط الوقت في المدينة",
        text: "كلمة 'Regulator' لم تكن مجرد اسم لساعة حائط عادية؛ بل كانت تُطلق حصراً على الساعات ذات الدقة الفائقة التي تُستخدم كمرجع رئيسي لضبط جميع الساعات الأخرى في المدينة، ومحطات القطارات والقصور الملكية. تعتمد هذه الساعات على ميزان السير الميت (Deadbeat Escapement) الذي ابتكره جورج جراهام، مع بندول دقيق مصنوع من الخشب والصلب والنحاس يعوض التمدد والانكماش الحراري."
      },
      {
        heading: "الفارق بين ساعات الوزن الواحد، الوزنين، والثلاثة أوزان",
        text: "ساعات الوزن الواحد (Time-only) مخصصة فقط لضبط الوقت بدقة دون رنين. ساعات الوزنين (Time and Strike) تحتوي على أسطوانة وزن ثانية تدير شوك الأجراس لتعلن عن تمام كل ساعة ونصف ساعة. أما درّة التاج فهي ساعات الثلاثة أوزان (Grande Sonnerie)؛ حيث يدير الوزن الثالث آلية معقدة تدق أرباع الساعات ونغمات متسلسلة على أوتار أو أنابيب نحاسية متعددة، وهي الأندر عالمياً والأعلى قيمة في المزادات."
      },
      {
        heading: "ساعات الصالونات الفرنسية المذهبة (French Ormolu Clocks)",
        text: "في صالونات فرنسا والقصور الخديوية في مصر، كانت ساعات الطاولة تُصنع من البرونز المصمت وتُطلى بماء الذهب بتقنية الحرق بالزئبق (Dorure au mercure)، وتحمل توقيع أشهر دور الصياغة مثل Japy Frères و Raingo Frères. تتميز هذه الساعات بتماثيل برونزية متقونة التفاصيل وموانئ من الخزف والبورسلين المكتوب بالأرقام الرومانية."
      }
    ],
    contentEn: [
      {
        heading: "The Regulator Standard",
        text: "Deadbeat escapements engineered with precision pinned brass plates, providing the absolute accuracy against which public dials were calibrated."
      },
      {
        heading: "The Triple Weight Grande Sonnerie",
        text: "One weight powers the time train, the second powers the hour strike, and the third drives intricate sequential quarter-chimes."
      }
    ],
    visualVariants: [
      {
        title: "ساعة الصالون الفرنسية المذهبة (French Gilt Bronze Ormolu)",
        titleEn: "French Gilt Bronze Ormolu Mantle Clock",
        era: "1860 – 1890",
        image: "/media/extracted/prod_french_clock.webp",
        description: "تحفة برونزية مصمتة مذهبة بتقنية الحرق بالزئبق، مزخرفة بتيجان كلاسيكية وميناء مذهب دقيق.",
        rarity: "نادر جداً"
      },
      {
        title: "ساعة فيينا ريجوليتور خشب جوز (Vienna Regulator 2-Weight)",
        titleEn: "Walnut Vienna Regulator Two-Weight",
        era: "1875 – 1900",
        image: "/media/extracted/cat_clocks.webp",
        description: "صندوق أركتيكاني من خشب الجوز المذهب مع عمودين رومانيين وأوزان نحاسية ثقيلة تتدلى بكابلات حريرية.",
        rarity: "نادر"
      },
      {
        title: "ساعة الحائط الخشبية المستديرة (English Fusee Dial Clock)",
        titleEn: "English Fusee Railway Dial Clock",
        era: "1890 – 1920",
        image: "/media/extracted/epoch_renaissance.webp",
        description: "ساعة جدارية بقرص أبيض كبير من البورسلين وماكينة فيوزي مسننة، استُخدمت في مكاتب البريد والسكك الحديدية.",
        rarity: "متاح للمقتنين"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "أوزان نحاسية أصلية ثقيلة ومملوءة بالرصاص هي المحرك الفعلي للساعة عبر بكرات نحاسية وكابلات حريرية أو سلكية قديمة.",
        "ماكينة نحاسية سميكة مثبتة بدبابيس صلب (Pinned pillars) وتحمل دمغة الصانع ورقماً تسلسلياً متطابقاً على ظهر الحركة.",
        "ميناء الساعة مصنوع من البورسلين أو المينا البيضاء (Enamel) المتعددة القطع ومثبت بمسامير نحاسية مخفية.",
        "صوت التكة منتظم وثابت كنبض القلب بفضل ميزان السير الميت الأصلي."
      ],
      replicaWarnings: [
        "ساعات تحتوي على أوزان نحاسية وهمية متدلية للزينة فقط، بينما الحركة الحقيقية داخل الصندوق تعمل بزنبرك عادي أو ببطارية كوارتز حديثة!",
        "صندوق خشبي مصنوع من ألواح الأبلكاش أو النشارة المضغوطة (MDF) مغطى بقشرة صناعية رديئة.",
        "ميناء بلاستيكي أو معدني مطبوع بماكينات حديثة مع عقارب ألومنيوم خفيفة الوزن.",
        "مسامير صليبة حديثة أو لحامات قصدير رديئة تثبت الماكينة في الخشب."
      ],
      testMethod: "انظر أسفل الماكينة للتأكد من أن كابلات الأوزان متصلة مباشرة بالتروس الداخلية، وتأكد من وجود مفتاح التعبئة النحاسي الأصلي."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: ساعات الأوزان الثلاثة (Grande Sonnerie) والبرونز المذهب الفرنسي",
        priceRangeEgp: "15,000 – 45,000 ج.م",
        criteria: "ساعات فيينا ريجوليتور ثلاثية الأوزان أو ساعات صالونات باريسية برونزية مذهبة وموقعة من كبار صناع القرن التاسع عشر.",
        features: ["ميكانيكا ريجوليتور كاملة", "أوزان نحاسية ثقيلة أصلية", "صندوق خشب جوز منحوت يدوياً", "أختام الصانع الأصلية"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: ساعات الوزنين النمساوية وساعات الطاولة الفرنسية",
        priceRangeEgp: "7,000 – 12,000 ج.م",
        criteria: "ساعات الصالونات الفرنسية المذهبة أو ساعات جوستاف بيكر ذات الوزنين العاملة بكفاءة ممتازة وبندول متزن.",
        features: ["مفحوصة ميكانيكياً ومضبوطة", "صوت رنين رخيم كل نصف ساعة", "حالة خشب ومعدن ممتازة"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: ساعات الزنبرك المفرد أو الساعات التي تحتاج ترميماً ميكانيكياً",
        priceRangeEgp: "2,500 – 4,500 ج.م",
        criteria: "ساعات أواخر عصر الآرت ديكو أو ساعات فقدت بندولها الأصلي وتتطلب تدخلاً متخصصاً لترميمها.",
        features: ["قيمة مادية منخفضة", "تحتاج مهارة خبير ساعات أثرية لإحيائها"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "ساعة الطاولة الفرنسية المذهبة بالبرونز عيار القرن التاسع عشر بكامل أجزائها الميكانيكية البندولية وعقاربها النحاسية ورنينها المتزن تساوي 9,200 ج.م؛ فإذا كانت الساعة ذات 3 أوزان كاملة برنين الجراند سونري ترتفع إلى أكثر من 20,000 ج.م، بينما إذا كان البندول مستبدلاً أو تعرضت الماكينة لإصلاحات عشوائية بقطع حديثة تنخفض قيمتها إلى 4,000 ج.م.",
    verificationTips: [
      "فحص ميزان السير الميت: التأكد من أن حركة شوكة الإفلات منتظمة بدون ارتداد أو فجوة بين أسنان الترس.",
      "الأوزان النحاسية: التأكد من ثقل البكرات النحاسية وأسلاك التعليق ومفتاح التدوير الأصلي.",
      "تطابق الأرقام التسلسلية المنقوشة على لوحة النحاس الخلفية للماكينة مع كتالوجات الصانع."
    ],
    verificationTipsEn: [
      "Deadbeat escapement verification.",
      "Authentic brass weight mass and braided cables.",
      "Movement serial numbering matching period foundry ledgers."
    ],
    relatedProductSlugs: [
      "french-antique-table-clock"
    ]
  },
  {
    slug: "egyptian-salons-vintage-life",
    title: "صالونات مصر زمان: راديو الصمامات الأخضر، صواني خان الخليلي، وسوق المقايضة التاريخي",
    titleEn: "Egyptian Salons: Tube Radios with Magic Eye, Hand-Hammered Trays & Heirloom Hospitality",
    subtitle: "نوستالجيا تفاصيل الحياة اليومية في القاهرة والإسكندرية في النصف الأول من القرن العشرين",
    subtitleEn: "The cultural heritage of Thursday night Umm Kulthum radio broadcasts and Cairo's artisan copper bazaar",
    category: "من ذاكرة مصر",
    categoryEn: "Egyptian Heritage",
    eraId: "1940-1960",
    eraLabel: "1940 – 1960",
    readTimeMinutes: 7,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/extracted/prod_wooden_radio.webp",
    summary: "الصالون المصري في العصر الذهبي لم يكن مجرد غرفة استقبال؛ بل كان متحفاً مصغراً تتباهى به العائلة، مركزه راديو الصالون الخشبي ذو الصمامات المشعة وعين التردد الخضراء، وصواني الشاي النحاسية المنقوشة يدوياً في خان الخليلي. نسرد هنا تاريخ هذه المقتنيات ومحددات قيمتها في السوق التراثي.",
    summaryEn: "The traditional Egyptian salon was a living cultural sanctuary, centered around the glowing valve radio on Thursday nights and hand-etched brass tea trays from historic Cairo.",
    content: [
      {
        heading: "حفلة أم كلثوم: طقس الخميس الأول من كل شهر الذي وحّد الشوارع",
        text: "كانت شوارع القاهرة والمدن والقرى المصرية تخلو تماماً من المارة مع دقات الساعة العاشرة مساءً في أول خميس من كل شهر. يلتف أفراد الأسرة والأصدقاء حول راديو الصالون الخشبي الكبير (ماركات فيليبس المجمعة في مصر، أو تيليفونكن الألمانية، أو سابا). يضيء مؤشر التردد باللون البرتقالي الدافئ وتتوهج 'العين السحرية' الخضراء (Magic Eye Tube) لتشير إلى نقاء التقاط المحطة، لتبدأ نغمات تخت محمد القصبجي ورياض السنباطي معلنة انطلاق ساعات من الطرب الذي شكّل وجدان الأمة."
      },
      {
        heading: "صينية الشاي النحاسية: كرم الضيافة وأسرار خان الخليلي",
        text: "لم تكن صواني الضيافة في البيوت المصرية تُشترى عشوائياً؛ بل كانت تطلب بالاسم من شيوخ حرفة النحاس في خان الخليلي والنحاسين بباب النصر. تُطرق الصينية من لوح نحاس أحمر أو أصفر سميك، وتُفرغ بزخارف الخط الكوفي وأبيات الشعر العربي، مع دلال الشاي والقهوة وطاسات الخضة التراثية. الصينية الأصلية تزن عدة كيلوجرامات وتتميز برنين معدني عميق وباتينيا طبيعية اكتسبتها من حرارة فناجين الشاي ومرور أجيال العائلة."
      },
      {
        heading: "كيف تفحص راديو الصالون الخشبي الصمامي الأصلي؟",
        text: "الراديو القديم الأصلي يعتمد على صمامات زجاجية مفرغة (Vacuum Tubes) ومحول كهربائي من الحديد الزهر ومكبر صوت ذو قماش منسوج يدوياً. النسخ المزيفة أو المحدثة عشوائياً يقوم بعض الهواة بنزع قلبها الصمامي وتركيب كارت بلوتوث أو راديو ترانزستور رخيص داخل الصندوق الخشبي؛ مما يفقد القطعة أكثر من 70% من قيمتها التوثيقية والتراثية."
      }
    ],
    contentEn: [
      {
        heading: "Umm Kulthum Thursday Broadcasts",
        text: "Egyptian streets fell still at 10 PM on the first Thursday of every month as families gathered around glowing valve console radios tuned via the green Magic Eye tube."
      },
      {
        heading: "Hand-Hammered Hospitality",
        text: "Heavy copper and brass tea trays hand-chased in Khan El-Khalili, bearing Kufic inscriptions and acquiring rich generational patina."
      }
    ],
    visualVariants: [
      {
        title: "راديو الصالون الصمامي الخشبي الأفقي (Wooden Tube Console)",
        titleEn: "Mid-Century Wooden Tube Console Radio",
        era: "1948 – 1958",
        image: "/media/extracted/prod_wooden_radio.webp",
        description: "صندوق خشب جوز ملمع بأسلوب الأرت ديكو، مع عين تردد خضراء وشاشة محطات قماشية نادرة.",
        rarity: "نادر"
      },
      {
        title: "صينية الشاي النحاسية الملكية بخط كوفي (Cairo Hand-Chased Brass Tray)",
        titleEn: "Royal Hand-Engraved Cairo Brass Tray",
        era: "1920 – 1940",
        image: "/media/extracted/prod_brass_plate.webp",
        description: "لوح نحاس أحمر ثقيل مطروق يدوياً ومزخرف بأدعية الخير وبحر من الأرابيسك المتشابك.",
        rarity: "نادر"
      },
      {
        title: "تمثال البرونز الصالوني الكلاسيكي (Classical Bronze Figurine)",
        titleEn: "Antique Bronze Salon Sculpture",
        era: "1890 – 1920",
        image: "/media/extracted/prod_bronze_statue.webp",
        description: "تمثال برونزي مصمت استقر في أركان صالونات جاردن سيتي والزمالك، يعكس الطابع الأوروبي الأرستقراطي.",
        rarity: "نادر جداً"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "الراديو الصمامي الأصلي يحتوي على الصمامات الزجاجية الأصلية (Tubes) ومحول كهربائي ثقيل، وتفوح منه رائحة خشب دافئ عند تسخين الصمامات.",
        "العين السحرية (Magic Eye) تتوهج بضوء أخضر زمردي نقي وتتسع وتضيق استجابة لقوة إشارة محطة الراديو.",
        "الصينية النحاسية تظهر عليها ضربات الإزميل اليدوي الدقيقة غير المتطابقة تماماً كدليل على الصنع اليدوي وليس الكبس بالماكينات.",
        "وزن النحاس سميك وثقيل وصوته رنان لا يصدر صدى معدن الصفيح الخفيف."
      ],
      replicaWarnings: [
        "راديو مفرغ من صماماته الأصلية ومزود بسماعة كمبيوتر أو بوردة بلوتوث رخيصة لإيهام المشتري بأنه يعمل.",
        "صينية نحاسية خفيفة الوزن ذات لمعان أصفر براق ومصنوعة من صاج مطلي بطبقة نحاس رقيقة تتآكل سريعاً.",
        "صندوق راديو مطلي ببوية حديثة تخفي ألياف خشب الجوز أو القرو العريق.",
        "أقمشة سماعة حديثة من البوليستر بدلاً من النسيج الكتاني القديم المقاوم للحرارة."
      ],
      testMethod: "اطلب فحص ظهر الراديو ورؤية وهج الفتائل داخل الصمامات الزجاجية، وتأكد من ثقل الصينية النحاسية وخلوها من التعرجات الصناعية للكباسات الآلية."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: راديو صالون خشبي بكامل صماماته الأصلية وعينه الخضراء الشغالة",
        priceRangeEgp: "5,500 – 12,000 ج.م",
        criteria: "راديوهات صالون خشبية ماركة فيليبس أو تيليفونكن بحالة صوتية ممتازة وخشب جوز أصلي بكامل الصمامات والعين السحرية.",
        features: ["صمامات كاملة متوهجة", "عين سحرية خضراء تعمل", "صندوق خشب جوز سليم", "استقبال إذاعي ممتاز"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: راديو صالون يعمل أو صواني نحاسية ثقيلة مطروقة يدوياً",
        priceRangeEgp: "3,000 – 5,000 ج.م",
        criteria: "راديو الصالون الخشبي الأصلي طراز الخمسينيات المجمع لمصر زمان، أو صواني الشاي النحاسية الكبيرة بقطر يتجاوز 60 سم.",
        features: ["قطعة تراثية أصيلة", "أثر الباتينا التاريخية الطبيعية", "جاهزة للاقتناء والضيافة"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: راديوهات صامتة للديكور أو مشغولات نحاسية متوسطة",
        priceRangeEgp: "1,200 – 2,500 ج.م",
        criteria: "راديوهات محترقة الصمامات مخصصة للعرض الديكوري التراثي أو صواني نحاسية صغيرة وخفيفة الوزن.",
        features: ["مظهر نوستالجي جميل", "قيمة مادية منخفضة"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "راديو الصالون الخشبي ماركة فيليبس طراز 1954 بمكوناته الصمامية الأصلية وخشب الجوز المصقول وعين التردد الخضراء الشغالة يساوي 4,700 ج.م؛ فإذا كانت الصينية النحاسية المرافقة مطعمة بالفضة وبقطر كبير ترتفع قيمتها إلى 6,000 ج.م، بينما إذا كان الراديو معدلاً ومفرغاً من صماماته التاريخية تنخفض قيمته إلى 1,800 ج.م فقط.",
    verificationTips: [
      "فحص وهج الصمامات: التأكد من توهج أسلاك الفتيل داخل الصمامات الزجاجية عند توصيل الجهاز بمحول كهربائي آمن.",
      "فحص مادة الصندوق: التأكد من أن الصندوق مصنوع من خشب طبيعي سميك عازل للصوت وليس ألواحاً مصنعة.",
      "فحص الباتينا النحاسية: النحاس التراثي يحمل تدرجاً داكناً جميلاً ناتجاً عن الأكسدة الطبيعية، ولا يترك أثراً كيميائياً نفاذاً."
    ],
    verificationTipsEn: [
      "Tube filament glow verification.",
      "Acoustic walnut cabinet inspection.",
      "Authentic naturally aged copper patina."
    ],
    relatedProductSlugs: [
      "vintage-wooden-tube-radio",
      "carved-antique-brass-plate",
      "vintage-english-rotary-phone"
    ]
  },
  {
    slug: "classic-cameras-mechanical-optics",
    title: "الكاميرات الميكانيكية الكلاسيكية: فحص زجاج العدسات الألمانية، ستائر الغالق، وتقييم الندرة",
    titleEn: "Mechanical Film Cameras: German Optical Glass, Shutter Curtains & Valuation",
    subtitle: "الدليل العملي لتقييم كاميرات لايكا وروليفلكس وبراون باكسيت الميكانيكية بالكامل",
    subtitleEn: "Testing mechanical escapements, optical fungus, rangefinder alignment, and market tiers",
    category: "البصريات والتصوير الكلاسيكي",
    categoryEn: "Classic Optics",
    eraId: "1940-1960",
    eraLabel: "1940 – 1960",
    readTimeMinutes: 7,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/extracted/prod_camera_german.webp",
    summary: "في عصر ما قبل الرقائق الإلكترونية والبطاريات الرقمية، كانت الكاميرا الفوتوغرافية تحفة هندسية فائقة الدقة: تروس صلب ميكانيكية تتحكم في أجزاء من الألف من الثانية، وعدسات زجاجية مصنوعة من الكوارتز النقي في ألمانيا. نستعرض هنا المنهجية المتبعة لفحص العدسات والغالق ومحددات القيمة.",
    summaryEn: "Before sensors and electronic chips, mechanical cameras relied purely on clockwork escapements and hand-ground German optics. A methodical guide on testing shutters, optical fungus, and collector rarity.",
    content: [
      {
        heading: "دقة الهندسة الميكانيكية: الغالق وسرعات الزمن",
        text: "الكاميرات الألمانية الكلاسيكية مثل Braun Paxette و Leica و Voigtländer تعتمد على غالق ميكانيكي بالكامل (مثل غالق Prontor-SVS أو Compur). هذا الغالق يحتوي على ميزان تروس ساعة دقيق يحدد زمن فتح شفرات العدسة من ثانية كاملة، ونصف ثانية، وربع ثانية، وصولاً إلى 1/500 من الثانية دون الحاجة إلى بطارية واحدة. المشكلة الشائعة في الكاميرات القديمة هي جفاف الزيوت التراثية مما يجعل السرعات البطيئة تعلق أو تتباطأ."
      },
      {
        heading: "فحص زجاج العدسات: كيف تكتشف العفن والخدوش والانفصال؟",
        text: "العدسة هي قلب الكاميرا وقيمتها الأساسية. لتفحص عدسة قديمة، افتح فتحة العدسة بالكامل وسلط ضوء كشاف هاتف دقيق عبر الزجاج من الخلف: ابحث عن شبكات بيضاء دقيقة تشبه بيوت العنكبوت (وهو عفن العدسات الناتج عن الرطوبة)، أو ضبابية بيضاء بين العناصر الزجاجية الملصوقة بصمغ كندا (Balsam separation)، أو خدوش تنظيف دقيقة ناتجة عن مسح الزجاج بأقمشة خشنة."
      },
      {
        heading: "محاذاة المدى البصري المزدوج (Rangefinder)",
        text: "في كاميرات المدى الميكانيكية 35mm، ينظر المصور عبر محدد بصري يدمج صورتين متطابقتين عند ضبط التركيز الدقيق. يجب التأكد من أن الصورة المنعكسة تتطابق أفقياً ورأسياً عند نقطة اللانهاية (Infinity)، وهو اختبار يكشف ما إذا كانت الكاميرا قد تعرضت لصدمات قوية أزاحت منشوراتها البصرية الداخلية."
      }
    ],
    contentEn: [
      {
        heading: "Clockwork Shutter Mechanisms",
        text: "Fully mechanical leaf and focal-plane shutters regulated by clockwork escapements operating from 1 second down to 1/500s without battery power."
      },
      {
        heading: "Optical Glass Inspection",
        text: "Inspecting through a rear penlight for fungus web filaments, Canada balsam separation, and cleaning scratches."
      }
    ],
    visualVariants: [
      {
        title: "كاميرا المدى الألمانية 35mm (German 35mm Rangefinder)",
        titleEn: "German 35mm Rangefinder (Braun Paxette / Leica)",
        era: "1950 – 1962",
        image: "/media/extracted/prod_camera_german.webp",
        description: "كاميرا ميكانيكية مدمجة من سبيكة الألمنيوم والجلد الطبيعي، بعدسة شتاينهايل كاسار الألمانية القابلة للتغيير.",
        rarity: "نادر"
      },
      {
        title: "كاميرا العدستين التوأم العاكسة (Twin Lens Reflex TLR)",
        titleEn: "Twin-Lens Reflex (Rolleiflex / Rolleicord)",
        era: "1935 – 1958",
        image: "/media/extracted/cat_cameras.webp",
        description: "تصميم عمودي يضم عدستين متطابقتين؛ العليا للرؤية عبر مرآة مائلة والسفلى لالتقاط الصورة على فيلم عريض 120.",
        rarity: "نادر جداً"
      },
      {
        title: "كاميرا المنفاخ القابلة للطي (Folding Bellows Camera)",
        titleEn: "Folding Medium Format Bellows Camera",
        era: "1920 – 1940",
        image: "/media/extracted/epoch_biplane.webp",
        description: "كاميرا تفتح كالأكورديون بمنفاخ جلدي مطوي وغالق دائري أمامي، تمثل أيقونة التصوير في النصف الأول من القرن العشرين.",
        rarity: "متاح للمقتنين"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "عدسة زجاجية ألمانية أصلية مدموغة باسم المصنع العريق (مثل Carl Zeiss أو Steinheil München أو Schneider-Kreuznach).",
        "الغالق الميكانيكي يطلق بانتظام ملحوظ مع سماع صوت همس التروس الدقيقة في السرعات البطيئة (1 ثانية ونصف ثانية).",
        "حركة التدوير وتقديم الفيلم سلسة مع تصفير العداد الميكانيكي تلقائياً.",
        "الجلد الطبيعي المغلف للهيكل مشدود وخالي من التشققات العميقة أو الصمغ الحديث."
      ],
      replicaWarnings: [
        "عدسات مليئة بالعفن الداخلي (Fungus) والغيوم البيضاء التي تجعل الصورة غير واضحة وتتلف الزجاج.",
        "شفرات الغالق ملتصقة بالزيت ولا تفتح أو تغلق عند الضغط على زر التصوير.",
        "نسخ روسية مقلدة (مثل كاميرات Zorki أو FED) ممسوحة الدمغات الأصلية ومحفور عليها شعارات لايكا الألمانية للغش التجاري.",
        "منفاخ جلدي ممزق يسرب الضوء ويتلف الأفلام الحساسة."
      ],
      testMethod: "أطلق الغالق عند سرعة ثانية واحدة واستمع لنبض التروس الداخلية، وسلط ضوءاً عبر العدسة للتأكد من صفاء الزجاج التام."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: كاميرات لايكا وروليفلكس الألمانية الأصلية بعدسات فائقة النقاء",
        priceRangeEgp: "15,000 – 45,000+ ج.م",
        criteria: "كاميرات لايكا الميكانيكية فئة M أو روليفلكس TLR بعدسات كارل زايس بلانار أو تيسار بحالة متحفية كاملة التشغيل.",
        features: ["عدسات خالية تماماً من العفن والخدوش", "غالق ميكانيكي دقيق", "هيكل سليم مئة بالمئة", "ندرة تاريخية عالية"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: كاميرات 35mm الألمانية الأصلية (براون باكسيت وكوداك ريتينا)",
        priceRangeEgp: "6,000 – 9,500 ج.م",
        criteria: "كاميرات المدى الألمانية طراز الخمسينيات بعدسات Steinheil Cassar وغالق ميكانيكي يعمل بجميع سرعاته بسلاسة.",
        features: ["مفحوصة ميكانيكياً وبصرياً", "جاهزة للاقتناء والتصوير الحقيقي", "حالة جمالية ممتازة"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: كاميرات ذات غالق معطل أو عدسات ضبابية مخصصة للديكور",
        priceRangeEgp: "2,000 – 3,500 ج.م",
        criteria: "كاميرات المنفاخ القديمة التي تعرضت لتمزق جلدي أو الكاميرات التي علق غالقها الداخلي وتحتاج قطع غيار نادرة.",
        features: ["مظهر جمالي على أرفف المكتبات", "قيمة فوتوغرافية معطلة"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "كاميرا ألمانية كلاسيكية 35mm طراز 1955 ماركة براون باكسيت بعدسة شتاينهايل كاسار نقية تماماً وغالق برونتور يعمل بسلاسة في كافة السرعات تساوي 8,500 ج.م؛ فإذا كانت العدسة تحتوي على غيوم عفن داخلي أو علق الغالق تنخفض قيمتها إلى 3,800 ج.م، بينما النسخ الروسية المقلدة لا تتجاوز 1,800 ج.م.",
    verificationTips: [
      "فحص السرعات البطيئة: اضبط الغالق على سرعة 1 ثانية وسرعة 1/2 ثانية؛ يجب أن يستمر صوت التروس لثانية كاملة تماماً دون توقف مفاجئ.",
      "فحص زجاج العدسة: تسليط ضوء كشاف أبيض مائل من الخلف لكشف العفن والضبابية والانفصال البلسمي.",
      "فحص الشفرات: التأكد من أن شفرات فتحة العدسة وشفرات الغالق خالية من الزيوت اللزجة وتتحرك فوراً."
    ],
    verificationTipsEn: [
      "Slow-shutter escapement testing at 1 second.",
      "Rear penlight internal optical transparency test.",
      "Dry aperture and shutter leaf actuation check."
    ],
    relatedProductSlugs: [
      "classic-german-film-camera"
    ]
  },
  {
    slug: "cairo-brass-mamluk-revival",
    title: "النحاس المصري والأنتيك الشرقي: أسرار التكفيت بالفضة، دمغات خان الخليلي، وتمييز الطرق اليدوي",
    titleEn: "Egyptian Brass & Mamluk Revival: Silver Inlay, Cairo Hallmarks & Hand-Chasing",
    subtitle: "الدليل الشامل لفحص صواني وطاسات النحاس الأحمر والأصفر والتماثيل البرونزية العتيقة",
    subtitleEn: "Masterclass on authentic chased repoussé vs machine stamping, silver damascening, and natural age patina",
    category: "النحاسيات والتحف الشرقية",
    categoryEn: "Brass & Orientalia",
    eraId: "pre-1900",
    eraLabel: "ما قبل 1900",
    readTimeMinutes: 6,
    publishDate: "أرشيف التوثيق – ديانا أنتيك",
    heroImage: "/media/extracted/prod_brass_plate.webp",
    summary: "عصر 'إحياء الفن المملوكي' في أواخر القرن التاسع عشر وبدايات القرن العشرين في القاهرة شهد ولادة أندر المشغولات النحاسية في العالم. نوضح هنا كيفية التفريق بين الطرق اليدوي بالأزاميل والكبس الميكانيكي الحديث، وأسرار التكفيت بأسلاك الفضة، وسُلّم تقييم النحاس والبرونز.",
    summaryEn: "Cairo's Mamluk Revival produced exquisite silver-inlaid brassware. Learn how to verify hand-chased chisel marks, guild hallmarks, and evaluate historical bronze figurines.",
    content: [
      {
        heading: "فن التكفيت بالفضة (Damascening) وإحياء التراث المملوكي",
        text: "في ورش سوق النحاسين بشارع المعز وخان الخليلي، كان المعلم ينحت أخاديد دقيقة في سطح النحاس الأحمر أو الأصفر الصلب، ثم يدق فيها أسلاكاً رقيقة من الفضة الخالصة أو الذهب (وهي تقنية التكفيت). تشكل هذه الأسلاك نصوصاً بخط الثلث والخط الكوفي تتضمن أدعية باليمن والبركة، أو مشاهد صيد وزخارف نباتية وهندسية بالغة التعقيد."
      },
      {
        heading: "كيف تميز الطرق اليدوي بالأزاميل عن الكبس الآلي الحديث؟",
        text: "القطعة النحاسية الأصلية تُصنع بالكامل بيدي الحرفي باستخدام المطرقة وسلسلة من الأزاميل الفولاذية المدببة (Repoussé & Chasing). تحت المجهر أو العدسة المكبرة، تظهر ضربات الإزميل كآثار متتابعة فردية تختلف طفيفاً في العمق والزاوية بأسلوب عضوي حيوي، بينما الصواني المقلدة والمطبوعة بالماكينات الحديثة تكون خطوطها موحدة ومسطحة تماماً كأنها صورة مطبوعة على ورق، وتفتقد لعمق وحرارة العمل اليدوي."
      },
      {
        heading: "طاسات الخضة والرقية وصواني الصالونات",
        text: "من أندر المقتنيات النحاسية الشعبية في مصر 'طاسات الخضة' المنقوشة بآيات قرآنية وأرقام فلكية وأسماء البروج، مع عصافير نحاسية معلقة على حوافها ترن عند صب الماء. كانت هذه الطاسات تورث عبر الأجيال في بيوت القاهرة والإسكندرية كرمز للحماية والبركة والتراث الروحي."
      }
    ],
    contentEn: [
      {
        heading: "Silver Inlay Damascening",
        text: "Hand-chiselling fine dovetail grooves into solid red or yellow brass and hammering pure silver wire to form Quranic calligraphy and intricate arabesques."
      },
      {
        heading: "Hand-Chased Chisel Strikes vs Stamped Metal",
        text: "Authentic historic brass displays organic variations in chisel depth and tactile tool strike rhythms, unlike uniform modern stamping."
      }
    ],
    visualVariants: [
      {
        title: "صينية الشاي النحاسية المطروقة (Hand-Chased Cairo Brass Tray)",
        titleEn: "Hand-Chased Cairo Brass Tray",
        era: "1910 – 1935",
        image: "/media/extracted/prod_brass_plate.webp",
        description: "لوح نحاس أصفر سميك مطروق يدوياً بأشكال النجوم الإسلامية المثمنة وحواف متموجة معتقة.",
        rarity: "نادر"
      },
      {
        title: "التمثال البرونزي الكلاسيكي المصمت (Classical Patinated Bronze)",
        titleEn: "Patinated Classical Bronze Figurine",
        era: "1885 – 1915",
        image: "/media/extracted/prod_bronze_statue.webp",
        description: "تمثال برونزي أوروبي كلاسيكي مصمت بباتينا برونزية خضراء وبنية عميقة تعكس فخامة صالونات القرن التاسع عشر.",
        rarity: "نادر جداً"
      },
      {
        title: "الفازة الخزفية الشرقية المزخرفة (Antique Hand-Painted Porcelain)",
        titleEn: "Imperial Porcelain Vase",
        era: "1890 – 1920",
        image: "/media/extracted/prod_chinese_vase.webp",
        description: "فازة أثرية بزخارف كلاسيكية زرقاء مرسومة يدوياً وصلت عبر قوافل طريق الحرير والموانئ المصرية.",
        rarity: "نادر"
      }
    ],
    authenticityGuide: {
      genuinePoints: [
        "نحاس مصمت ثقيل الوزن يصدر رنيناً صوتياً ممتداً وعميقاً عند النقر عليه بخفة.",
        "ضربات الإزميل اليدوي تظهر في الخلف كبروزات طبيعية متناغمة مع النقش الأمامي (Repoussé).",
        "باتينا الأكسدة الطبيعية تكون متدرجة ومتركزة في الزوايا العميقة وممسوحة طبيعياً في الأسطح المعرضة للمس اليد.",
        "وجود أختام ودمغات دار الصانع القاهري أو علامة الهلال والنجوم في النحاس والفضة."
      ],
      replicaWarnings: [
        "صواني خفيفة الوزن مصنوعة من صفيح رقيق مطلي بلون نحاسي كيميائي يزول عند حكه بالليمون أو الملمع.",
        "نقوش مسطحة تماماً ومكررة بدقة كمبيوتر ميكانيكية دون أي عمق إزميل يدوي.",
        "صبغ القطعة بمادة سوداء كيميائية حديثة لمحاكاة القدم، تترك رائحة أحماض نفاذة وتتسخ بها اليد.",
        "وجود علامات لحام كهربائي حديث أو مسامير صلب غير تراثية في المقابض والقواعد."
      ],
      testMethod: "افحص خلف الصينية للتأكد من بروز ضربات الإزميل اليدوي، وتحقق من ثقل الوزن وخلو المعدن من الطلاءات الكيميائية السطحية."
    },
    valueTiers: [
      {
        title: "الفئة الذهبية: النحاس المملوكي المكفت بالفضة الخالصة والموقع من شيوخ الصنعة",
        priceRangeEgp: "9,000 – 28,000 ج.م",
        criteria: "صواني وأباريق ومشغولات نحاسية تعود لأواخر القرن التاسع عشر مطعمة بأسلاك الفضة والذهب وتحمل توقيع الصانع المعتمد.",
        features: ["تكفيت فضي سليم مئة بالمئة", "وزن نحاس أحمر ثقيل", "نقوش خط ثلث أو كوفي نادرة", "حالة توثيقية ممتازة"],
        tierLevel: "high"
      },
      {
        title: "الفئة الكلاسيكية: صواني وطاسات الصالونات النحاسية المطروقة يدوياً والتماثيل البرونزية",
        priceRangeEgp: "3,200 – 6,500 ج.م",
        criteria: "صواني الشاي المصرية المطروقة يدوياً من ثلاثينيات القرن الماضي أو التماثيل البرونزية الكلاسيكية المتقونة.",
        features: ["طرق يدوي أصلي موثق", "باتينا طبيعية دافئة", "وزن ثقيل ورنين عميق"],
        tierLevel: "mid"
      },
      {
        title: "الفئة التذكارية: مشغولات البازارات الخفيفة أو القطع الحديثة المصبوبة",
        priceRangeEgp: "600 – 1,800 ج.م",
        criteria: "مشغولات سياحية حديثة مصنوعة بالكبس الآلي أو نحاس خفيف الوزن مخصص للاستخدام الديكوري المعاصر.",
        features: ["قيمة تراثية منخفضة", "غير قابلة للتصنيف كأنتيك تاريخي"],
        tierLevel: "entry"
      }
    ],
    pricingRule: "الصينية النحاسية المزخرفة يدوياً من ثلاثينيات القرن الماضي بوزنها الثقيل ونقوش الخط العربي والباتينا التراثية تساوي 3,200 ج.م؛ فإذا كانت الصينية مطعمة بأسلاك الفضة الخالصة وبقطر واسع تتجاوز 9,000 ج.م، بينما إذا كان النحاس خفيف الوزن ومكبوساً بآلات حديثة لا تتعدى قيمتها 750 ج.م.",
    verificationTips: [
      "فحص ثقل المعدن: النحاس التراثي الأصلي سميك وثقيل وله رنين موسيقي رنان عند النقر الخفيف.",
      "فحص ضربات الإزميل: التأكد من وجود التموجات الفردية لضربات المطرقة على السطح الخلفي للقطعة.",
      "اختبار المغناطيس: النحاس والبرونز الأصلي غير مغناطيسي تماماً؛ إذا انجذب المغناطيس للقطعة فهي مصنوعة من حديد مطلي."
    ],
    verificationTipsEn: [
      "Acoustic metal resonance and mass testing.",
      "Hand-chased reverse tool strike relief check.",
      "Magnet test (genuine brass/bronze is non-ferrous)."
    ],
    relatedProductSlugs: [
      "carved-antique-brass-plate",
      "antique-bronze-classical-figurine",
      "antique-chinese-porcelain-vase"
    ]
  }
];

export function getArticleBySlug(slug: string): EncyclopediaArticle | undefined {
  return ENCYCLOPEDIA_ARTICLES.find((a) => a.slug === slug);
}
