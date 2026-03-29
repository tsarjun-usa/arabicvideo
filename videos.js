// ═══════════════════════════════════════════════════════════════
//  KHALIJI LANGUAGE ENGINE — VIDEO BANK
//  To add a new video: copy any entry, fill in the fields,
//  paste cleaned transcript, add vocab. Save → push to GitHub.
//  The app rebuilds all word connections automatically on load.
// ═══════════════════════════════════════════════════════════════

const VIDEO_BANK = [

  // ─────────────────────────────────────────────────────────────
  {
    id: "JRmZezdmOdM",
    title: "الأم عمود البيت",
    titleEn: "Mother is the Pillar of the Home",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "family",
    difficulty: 1,
    transcript: [
      { t:"0:00", ar:"الام الام هي عمود البيت اترك كلامي شوف لما امك تمرض ش يصير في البيت تسخن بس" },
      { t:"0:09", ar:"فلونزا ولما يمرض ابوك كلهم على العين والراس والله كلهم لكن اذا الاب مرض يعني" },
      { t:"0:17", ar:"تحس ان البيت ممكن يمشي لكن اذا الام جاها شيء كلنا نتعطل اول شيء ابوك يتعطل" },
      { t:"0:23", ar:"ما عاد ندري ايش نسوي ما عاد نقدر نتحرك لا شك ان غياب الام اخطر في اداره المنزل" },
      { t:"0:31", ar:"اداره المشاعر وان كان الاب دور كبير جدا بس عند المقارنه لا ربما الطفل في حاجته" },
      { t:"0:40", ar:"الى امه اكثر من حاجته الى ابيه" },
    ],
    vocab: [
      { ar:"بيت",  tr:"bayt",    en:"house",   type:"noun", poss:{ana:"بيتي",anta:"بيتك",hiya:"بيتها",huwa:"بيته",nahnu:"بيتنا",hum:"بيتهم"} },
      { ar:"أم",   tr:"um",      en:"mother",  type:"noun", poss:{ana:"أمي", anta:"أمك", hiya:"أمها", huwa:"أمه", nahnu:"أمنا", hum:"أمهم"} },
      { ar:"أب",   tr:"ab",      en:"father",  type:"noun", irregular:true,
        poss:{ana:"أبي",anta:"أبوك",hiya:"أبوها",huwa:"أبوه",nahnu:"أبونا",hum:"أبوهم"} },
      { ar:"طفل",  tr:"tifl",    en:"child",   type:"noun", poss:{ana:"طفلي",anta:"طفلك",hiya:"طفلها",huwa:"طفله",nahnu:"طفلنا",hum:"طفلهم"} },
      { ar:"منزل", tr:"manzil",  en:"home",    type:"noun", poss:{ana:"منزلي",anta:"منزلك",hiya:"منزلها",huwa:"منزله",nahnu:"منزلنا",hum:"منزلهم"} },
      { ar:"مرض",  tr:"marad",   en:"be sick", type:"verb",
        conj:{ana:"أمرض",anta:"تمرض",hiya:"تمرض",huwa:"يمرض",nahnu:"نمرض"} },
      { ar:"تعطل", tr:"ta'attal",en:"stall",   type:"verb",
        conj:{ana:"أتعطل",anta:"تتعطل",hiya:"تتعطل",huwa:"يتعطل",nahnu:"نتعطل"} },
      { ar:"درى",  tr:"dara",    en:"know",    type:"verb",
        conj:{ana:"أدري",anta:"تدري",hiya:"تدري",huwa:"يدري",nahnu:"ندري"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "t5LFiko_1LY",
    title: "الثقة بالنفس",
    titleEn: "Self-Confidence",
    channel: "Thmanyah",
    region: "SA",
    topic: "self-improvement",
    difficulty: 1,
    transcript: [
      { t:"0:00", ar:"الثقه بالنفس مرتبطه بالاداء باداء الانسان ومرتبطه انا اعرف اسوي ما اعرف اسوي" },
      { t:"0:08", ar:"لكن هذا الشعور اللي يهتز اذا جيت تدخل مجلس وتحس انهم اجمل منك او افضل منك" },
      { t:"0:08", ar:"هذا الشعور هو مشكله في تقبلك لذاتك" },
      { t:"0:16", ar:"ربما في تقديرك لذاتك وضع قيمه لها لكن ليس له علاقه بالثقه" },
    ],
    vocab: [
      { ar:"نفس",    tr:"nafs",   en:"self",       type:"noun", poss:{ana:"نفسي",anta:"نفسك",hiya:"نفسها",huwa:"نفسه",nahnu:"نفسنا",hum:"نفسهم"} },
      { ar:"شعور",   tr:"shu'ur", en:"feeling",    type:"noun", poss:{ana:"شعوري",anta:"شعورك",hiya:"شعورها",huwa:"شعوره",nahnu:"شعورنا",hum:"شعورهم"} },
      { ar:"مجلس",   tr:"majlis", en:"gathering",  type:"noun", poss:{ana:"مجلسي",anta:"مجلسك",hiya:"مجلسها",huwa:"مجلسه",nahnu:"مجلسنا",hum:"مجلسهم"} },
      { ar:"ثقة",    tr:"thiqa",  en:"confidence", type:"noun", poss:{ana:"ثقتي",anta:"ثقتك",hiya:"ثقتها",huwa:"ثقته",nahnu:"ثقتنا",hum:"ثقتهم"} },
      { ar:"حس",     tr:"hass",   en:"feel",       type:"verb",
        conj:{ana:"أحس",anta:"تحس",hiya:"تحس",huwa:"يحس",nahnu:"نحس"} },
      { ar:"عرف",    tr:"'araf",  en:"know/can",   type:"verb",
        conj:{ana:"أعرف",anta:"تعرف",hiya:"تعرف",huwa:"يعرف",nahnu:"نعرف"} },
      { ar:"سوّى",   tr:"sawwa",  en:"do/make",    type:"verb",
        conj:{ana:"أسوي",anta:"تسوي",hiya:"تسوي",huwa:"يسوي",nahnu:"نسوي"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "sXtYb9Pcruk",
    title: "منكسر خاطري",
    titleEn: "My Heart is Broken",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "life",
    difficulty: 1,
    transcript: [
      { t:"0:00", ar:"دي السؤال ترى بشوف انت تعرفين تحلين ولا لا بس بقوللك شيء ترى ماني بزعلانه" },
      { t:"0:09", ar:"منكسر خاطري وخاطري ما هو بزين ما تحبين الانسان وتخلصين عنه ويصير م بكفو مقهر" },
      { t:"0:19", ar:"عادي الانسان يخطي فهي ممكن اخط هالمره يا ام عبد العزيز بس ممكن مو قصدها" },
      { t:"0:29", ar:"الحديه حد تفشلني عند الحريم؟ اي ممكن هي مو مستوعبه انها فشلت قدام الحريم" },
      { t:"0:37", ar:"ونبدا نجيب مكوناتنا اللي راح تخفف على ام عبد العزيز" },
    ],
    vocab: [
      { ar:"خاطر",     tr:"khaatir", en:"heart/feelings", type:"noun", poss:{ana:"خاطري",anta:"خاطرك",hiya:"خاطرها",huwa:"خاطره",nahnu:"خاطرنا",hum:"خاطرهم"} },
      { ar:"إنسان",    tr:"insaan",  en:"person/human",   type:"noun", poss:{ana:"إنساني",anta:"إنسانك",hiya:"إنسانها",huwa:"إنسانه",nahnu:"إنساننا",hum:"إنسانهم"} },
      { ar:"شخصية",    tr:"shakhsiya",en:"personality",  type:"noun", poss:{ana:"شخصيتي",anta:"شخصيتك",hiya:"شخصيتها",huwa:"شخصيته",nahnu:"شخصيتنا",hum:"شخصيتهم"} },
      { ar:"حب",       tr:"hubb",    en:"love/like",      type:"verb",
        conj:{ana:"أحب",anta:"تحب",hiya:"تحب",huwa:"يحب",nahnu:"نحب"} },
      { ar:"عرف",      tr:"'araf",   en:"know",           type:"verb",
        conj:{ana:"أعرف",anta:"تعرف",hiya:"تعرف",huwa:"يعرف",nahnu:"نعرف"} },
      { ar:"صار",      tr:"saar",    en:"happen/become",  type:"verb",
        conj:{ana:"أصير",anta:"تصير",hiya:"تصير",huwa:"يصير",nahnu:"نصير"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "aOOfp8LzBUY",
    title: "حمد البائع",
    titleEn: "Hamad the Salesman",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "funny",
    difficulty: 1,
    transcript: [
      { t:"0:00", ar:"طيب زميلكم حمد قدر ثلاث مرات يبيع المنتجات اللي عنده فقدر يوصل لهدافه" },
      { t:"0:08", ar:"طيب الحين جاهزين للثانيه؟ جاهزين جاهز جاهزين جاهزين شباب نشوفهم جاهزين" },
      { t:"0:38", ar:"يا اخي رجلي عورتني طولت اصبر جايك في الطريق عجل" },
      { t:"0:45", ar:"السلام عليكم اخوي لو سمحت" },
      { t:"0:50", ar:"عساء خير ان شاء الله ايش فيك حزين امي ماتت لا حول ولا قوه الا بالله" },
      { t:"1:00", ar:"ام صار لها حادث حادث ما يهمني الله يرحمها يعني هي ماتت" },
      { t:"1:08", ar:"خلصت اوراق الوفاه ايه باقي شوي باقي شوي باقي يعني اوراق تحسها كثير" },
      { t:"1:25", ar:"هذا عشان نجمع الاوراق مع بعض بحيث انه ما نضيع تعرف الوالده غاليه تحتاج صح" },
      { t:"1:34", ar:"يعطيك العافيه شكرا انقدت حياتي" },
      { t:"1:44", ar:"يعني قدر ينهي المهمه وباع المنتج اللي عنده مع انه منصور قفلها في وجهه" },
    ],
    vocab: [
      { ar:"منتج",   tr:"muntaj",  en:"product",   type:"noun", poss:{ana:"منتجي",anta:"منتجك",hiya:"منتجها",huwa:"منتجه",nahnu:"منتجنا",hum:"منتجهم"} },
      { ar:"حياة",   tr:"hayaa",   en:"life",      type:"noun", poss:{ana:"حياتي",anta:"حياتك",hiya:"حياتها",huwa:"حياته",nahnu:"حياتنا",hum:"حياتهم"} },
      { ar:"أوراق",  tr:"awraq",   en:"papers",    type:"noun", poss:{ana:"أوراقي",anta:"أوراقك",hiya:"أوراقها",huwa:"أوراقه",nahnu:"أوراقنا",hum:"أوراقهم"} },
      { ar:"أم",     tr:"um",      en:"mother",    type:"noun", poss:{ana:"أمي",anta:"أمك",hiya:"أمها",huwa:"أمه",nahnu:"أمنا",hum:"أمهم"} },
      { ar:"باع",    tr:"baa'",    en:"sell",      type:"verb",
        conj:{ana:"أبيع",anta:"تبيع",hiya:"تبيع",huwa:"يبيع",nahnu:"نبيع"} },
      { ar:"قدر",    tr:"gadar",   en:"manage/can",type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
      { ar:"صار",    tr:"saar",    en:"happen",    type:"verb",
        conj:{ana:"أصير",anta:"تصير",hiya:"تصير",huwa:"يصير",nahnu:"نصير"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "mxl6VwVnFL0",
    title: "التفتيش المدرسي",
    titleEn: "School Inspection",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "funny",
    difficulty: 1,
    transcript: [
      { t:"0:07", ar:"تعال انت وينك على الفصل؟ رايح الفصل انحاش بالتفتيش" },
      { t:"0:23", ar:"هات هات الشنطه هاتها هاتها هلا مسعود تعال تعال انت ما شاء الله ايش دري ريحه" },
      { t:"0:31", ar:"ريحه عطر اعجبك استاذ اه تستخف دمك لا وين كيف ما اتوقع ان ريحه عطر" },
      { t:"0:39", ar:"هات هات الشنطه يا استاذ عطل استاذ الشنطه هات" },
      { t:"0:47", ar:"ما شاء الله هذا وش اوف طلعت ساحر استاذ برجر" },
      { t:"1:04", ar:"احنا صادرنا اشياء كثير من الطلبه بس والله ذا مصلحتهم زين قواكم الله" },
      { t:"1:13", ar:"واي اكل ما يتلف حطوه في صناديق وودوه للمستودع بعدين نشوف ايش نسوي فيه" },
      { t:"1:20", ar:"والله بيني وبينك الطلبه ما هم متحمسين بس والله هذا المفيد لهم" },
    ],
    vocab: [
      { ar:"طالب",    tr:"taalib",  en:"student",   type:"noun", poss:{ana:"طالبي",anta:"طالبك",hiya:"طالبها",huwa:"طالبه",nahnu:"طالبنا",hum:"طالبهم"} },
      { ar:"شنطة",    tr:"shanta",  en:"bag",       type:"noun", poss:{ana:"شنطتي",anta:"شنطتك",hiya:"شنطتها",huwa:"شنطته",nahnu:"شنطتنا",hum:"شنطتهم"} },
      { ar:"أستاذ",   tr:"ustaadh", en:"teacher",   type:"noun", poss:{ana:"أستاذي",anta:"أستاذك",hiya:"أستاذها",huwa:"أستاذه",nahnu:"أستاذنا",hum:"أستاذهم"} },
      { ar:"ريحة",    tr:"riiHa",   en:"smell",     type:"noun", poss:{ana:"ريحتي",anta:"ريحتك",hiya:"ريحتها",huwa:"ريحته",nahnu:"ريحتنا",hum:"ريحتهم"} },
      { ar:"جاء",     tr:"ja",      en:"come",      type:"verb",
        conj:{ana:"أجي",anta:"تجي",hiya:"تجي",huwa:"يجي",nahnu:"نجي"} },
      { ar:"عرف",     tr:"'araf",   en:"know",      type:"verb",
        conj:{ana:"أعرف",anta:"تعرف",hiya:"تعرف",huwa:"يعرف",nahnu:"نعرف"} },
      { ar:"سوّى",    tr:"sawwa",   en:"do/make",   type:"verb",
        conj:{ana:"أسوي",anta:"تسوي",hiya:"تسوي",huwa:"يسوي",nahnu:"نسوي"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "llTRmssTS4g",
    title: "وصفة نار",
    titleEn: "Killer Recipe — Caesar Salad",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "cooking",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"اليوم بسوي لك وصفه وش ده يا كثر شذ" },
      { t:"0:07", ar:"راحت شارت السوق كله والله ان البنت جيده شلون بس جمعتن لانها حريصه" },
      { t:"0:13", ar:"بسوي لك وصفه نار ام عبد العزيز طبعا مكوننا الاساسي فيها الزبده" },
      { t:"0:20", ar:"الزبده وبسوي لك سايد ديش وبسوي لك كمان شيء ثالث" },
      { t:"0:29", ar:"هذه مكونات السيزر سلت اللي مره ثانيه عرفتها عرفتها احبها اي وهذه مكونات دجاج سندوتش" },
      { t:"0:54", ar:"طيب بالنسبه لمكونات السيزر سلت عندنا الدجاج وعندنا الخس وعندنا العيش وعندنا الصوص" },
      { t:"1:19", ar:"الرنش وشو ما ادري صوص ثوم شويه يعني مكس مكس اشياء" },
      { t:"1:26", ar:"مايز ثوم واشياء مكتوب في السوبر ماركه رنش اي ويبيعونه في المحلات والمطاعم" },
      { t:"1:33", ar:"عندنا عيش اللي هو خبزنا اللي راح نسويه توست خبز توست" },
    ],
    vocab: [
      { ar:"وصفة",   tr:"wasfa",   en:"recipe",    type:"noun", poss:{ana:"وصفتي",anta:"وصفتك",hiya:"وصفتها",huwa:"وصفته",nahnu:"وصفتنا",hum:"وصفتهم"} },
      { ar:"دجاج",   tr:"dajaj",   en:"chicken",   type:"noun", poss:{ana:"دجاجي",anta:"دجاجك",hiya:"دجاجها",huwa:"دجاجه",nahnu:"دجاجنا",hum:"دجاجهم"} },
      { ar:"خبز",    tr:"khubz",   en:"bread",     type:"noun", poss:{ana:"خبزي",anta:"خبزك",hiya:"خبزها",huwa:"خبزه",nahnu:"خبزنا",hum:"خبزهم"} },
      { ar:"صوص",    tr:"saws",    en:"sauce",     type:"noun", poss:{ana:"صوصي",anta:"صوصك",hiya:"صوصها",huwa:"صوصه",nahnu:"صوصنا",hum:"صوصهم"} },
      { ar:"سوق",    tr:"suq",     en:"market",    type:"noun", poss:{ana:"سوقي",anta:"سوقك",hiya:"سوقها",huwa:"سوقه",nahnu:"سوقنا",hum:"سوقهم"} },
      { ar:"سوّى",   tr:"sawwa",   en:"make/cook", type:"verb",
        conj:{ana:"أسوي",anta:"تسوي",hiya:"تسوي",huwa:"يسوي",nahnu:"نسوي"} },
      { ar:"عرف",    tr:"'araf",   en:"know",      type:"verb",
        conj:{ana:"أعرف",anta:"تعرف",hiya:"تعرف",huwa:"يعرف",nahnu:"نعرف"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "hy1PnlLNSJk",
    title: "وين نكشف؟",
    titleEn: "Where Shall We Camp?",
    channel: "Ma'isha — معيشه",
    region: "SA",
    topic: "travel",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"وين اللي بيفطر الفطور يا مرحبا انا محمد السعدون رفيقكم في الموسم الاول من وين نكشف" },
      { t:"0:23", ar:"يا ولد يا ولد يا ولد المجلس احسن من الشيء لا والله ملكي" },
      { t:"0:30", ar:"يا ولد ايش الحركات هذه صحراء تعلمك على الجلاده وعلى الصبر ترانا راجعين بماسم جديد" },
      { t:"0:49", ar:"هالمره ما راح ندلك على المكان وبس محمد اللي هو انا بيكون الرفيق اللي بياخذكم" },
      { t:"0:58", ar:"مرات بتشوف تشوفني لحالي ومرات مع رفقتن تسليه اذا ما تدري وين وشلون تكشت معي" },
      { t:"1:07", ar:"بنجرب شيء جديد نستمتع فيها بجمال المكان والتجربه محمد بسيط ويقول لك ترى الكشته" },
      { t:"1:14", ar:"سهله والمكان قريب يا اخي اطلع اكشت نزل عزبتنا بسم الله تابع حلقات وين نكشت" },
    ],
    vocab: [
      { ar:"مكان",    tr:"makaan",  en:"place",     type:"noun", poss:{ana:"مكاني",anta:"مكانك",hiya:"مكانها",huwa:"مكانه",nahnu:"مكاننا",hum:"مكانهم"} },
      { ar:"صحراء",   tr:"sahraa",  en:"desert",    type:"noun", poss:{ana:"صحرائي",anta:"صحراءك",hiya:"صحراءها",huwa:"صحراءه",nahnu:"صحراءنا",hum:"صحراءهم"} },
      { ar:"رفيق",    tr:"rafiiq",  en:"companion", type:"noun", poss:{ana:"رفيقي",anta:"رفيقك",hiya:"رفيقها",huwa:"رفيقه",nahnu:"رفيقنا",hum:"رفيقهم"} },
      { ar:"شيء",     tr:"shay",    en:"thing",     type:"noun", poss:{ana:"شيئي",anta:"شيئك",hiya:"شيئها",huwa:"شيئه",nahnu:"شيئنا",hum:"شيئهم"} },
      { ar:"عرف",     tr:"'araf",   en:"know",      type:"verb",
        conj:{ana:"أعرف",anta:"تعرف",hiya:"تعرف",huwa:"يعرف",nahnu:"نعرف"} },
      { ar:"جرّب",    tr:"jarrab",  en:"try",       type:"verb",
        conj:{ana:"أجرب",anta:"تجرب",hiya:"تجرب",huwa:"يجرب",nahnu:"نجرب"} },
      { ar:"رجع",     tr:"raja'",   en:"return",    type:"verb",
        conj:{ana:"أرجع",anta:"ترجع",hiya:"ترجع",huwa:"يرجع",nahnu:"نرجع"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "k18oZNyn1NA",
    title: "الجوهرة",
    titleEn: "The Gem — Youngest Volunteer",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "life",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"انا الجوهره اصغر عضويه في جمعيه الانسان اصغر عضويه في المنظمه العربيه في حقوق الطفل" },
      { t:"0:09", ar:"ممثله ومغنيه ومذيعه طفله مهوبه ومميزه" },
      { t:"0:15", ar:"في التطوع مره حلوه ومره تجنن وكثيره مره بس انها سهله واللي حفظني امي وابوي" },
      { t:"0:23", ar:"وبديت من عاد عمري اربع سنوات" },
      { t:"0:41", ar:"زرت مستشفى مرضى الكلى وزرت مستشفى مرضى السرطان الله يشفيهم" },
      { t:"1:08", ar:"اثر فيني انهم الحمد لله انبسطوا تعلمت منه اوزع كسوه الشتاء واساعد المحتاجين" },
      { t:"1:36", ar:"فخور بامي وابوي انهم وصلون هذا المكان ورساله اللي بقولها طوعوا والديكم" },
      { t:"1:45", ar:"واذا قدمت الحين تلقاها بعدين مثلا يعني اذا الانسان ما فهمها" },
    ],
    vocab: [
      { ar:"طفل",    tr:"tifl",    en:"child",       type:"noun", poss:{ana:"طفلي",anta:"طفلك",hiya:"طفلها",huwa:"طفله",nahnu:"طفلنا",hum:"طفلهم"} },
      { ar:"أم",     tr:"um",      en:"mother",      type:"noun", poss:{ana:"أمي",anta:"أمك",hiya:"أمها",huwa:"أمه",nahnu:"أمنا",hum:"أمهم"} },
      { ar:"أب",     tr:"ab",      en:"father",      type:"noun", irregular:true,
        poss:{ana:"أبي",anta:"أبوك",hiya:"أبوها",huwa:"أبوه",nahnu:"أبونا",hum:"أبوهم"} },
      { ar:"مستشفى", tr:"mustashfa",en:"hospital",  type:"noun", poss:{ana:"مستشفاي",anta:"مستشفاك",hiya:"مستشفاها",huwa:"مستشفاه",nahnu:"مستشفانا",hum:"مستشفاهم"} },
      { ar:"ساعد",   tr:"saa'ad",  en:"help",        type:"verb",
        conj:{ana:"أساعد",anta:"تساعد",hiya:"تساعد",huwa:"يساعد",nahnu:"نساعد"} },
      { ar:"زار",    tr:"zaar",    en:"visit",       type:"verb",
        conj:{ana:"أزور",anta:"تزور",hiya:"تزور",huwa:"يزور",nahnu:"نزور"} },
      { ar:"تعلم",   tr:"ta'allam",en:"learn",       type:"verb",
        conj:{ana:"أتعلم",anta:"تتعلم",hiya:"تتعلم",huwa:"يتعلم",nahnu:"نتعلم"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "m37OYc4VH4g",
    title: "عربات الطواف",
    titleEn: "Tawaf Carts — Mecca Service",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "daily-life",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"نبي نجرب اليوم واحده من هذه العربات" },
      { t:"0:07", ar:"يعني تخيل انا ابغى اعرف سبحان الله شعور الشخص اللي يسوق هذه العربات وهو كل يوم" },
      { t:"0:14", ar:"ياخذ الطواف بعدد كبير من الناس ويساعدهم في تاديه المناسك احس شعور جدا رهيب يعني" },
      { t:"0:23", ar:"هذه الوظيفه اللي فعلا احسها من الوظائف اللي نغبط اصحابها صراحه" },
      { t:"0:31", ar:"شكرا صراحه للهيئه العامه لانه من خلال هذه الخدمه صراحه سهلوا الطواف على كثير من الناس" },
      { t:"0:48", ar:"يوجد اكثر من 400 عربه كهربائيه واكثر من 1900 عربه مطوره واكثر من 6000 عربه مجانيه" },
      { t:"0:56", ar:"السؤال كيف يتم الحجز لهذه العربه؟ عن طريق منصه التنقل الموحد" },
      { t:"1:04", ar:"تقدر تحجز الوقت اللي بتركب فيه العربه تجي تلقى العربه امامك عن طريق الباركود" },
    ],
    vocab: [
      { ar:"عربة",    tr:"'araba",  en:"cart/vehicle",type:"noun", poss:{ana:"عربتي",anta:"عربتك",hiya:"عربتها",huwa:"عربته",nahnu:"عربتنا",hum:"عربتهم"} },
      { ar:"خدمة",    tr:"khidma",  en:"service",     type:"noun", poss:{ana:"خدمتي",anta:"خدمتك",hiya:"خدمتها",huwa:"خدمته",nahnu:"خدمتنا",hum:"خدمتهم"} },
      { ar:"وظيفة",   tr:"wazheefa",en:"job",         type:"noun", poss:{ana:"وظيفتي",anta:"وظيفتك",hiya:"وظيفتها",huwa:"وظيفته",nahnu:"وظيفتنا",hum:"وظيفتهم"} },
      { ar:"ناس",     tr:"naas",    en:"people",      type:"noun", poss:{ana:"ناسي",anta:"ناسك",hiya:"ناسها",huwa:"ناسه",nahnu:"ناسنا",hum:"ناسهم"} },
      { ar:"ساعد",    tr:"saa'ad",  en:"help",        type:"verb",
        conj:{ana:"أساعد",anta:"تساعد",hiya:"تساعد",huwa:"يساعد",nahnu:"نساعد"} },
      { ar:"حجز",     tr:"Hajaz",   en:"book/reserve",type:"verb",
        conj:{ana:"أحجز",anta:"تحجز",hiya:"تحجز",huwa:"يحجز",nahnu:"نحجز"} },
      { ar:"قدر",     tr:"gadar",   en:"can/manage",  type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "hB5jRnJTRfk",
    title: "التطوع الطبي",
    titleEn: "Medical Volunteering",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "life",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"وجه كل الشكر للدكتوره هناء مدني الكلينيكال ليد في التجمع الصحي الاول" },
      { t:"0:09", ar:"وحمسنا احنا كدكاتره عشان حملات التطوع فاول واحده كانت بمشوراتها" },
      { t:"0:17", ar:"نفسهم الشباب كانوا دائما يكلمونا على الحملات التطوع ونشارك فيها انا لي تقريبا ثلاث او اربع تطوعات" },
      { t:"0:25", ar:"بالمناطق الطرفيه عيادات او بعضها كانت على الاونلاين استشارات على الاونلاين" },
      { t:"0:39", ar:"فانت مجرد ما تبدا باول تطوع حتلاقي نفسك تطوع ورا الثاني التطوع الصراحه لها تاثير كبير" },
      { t:"0:46", ar:"لها علاقه يعني اداره الوقت كيف تعمل بجروب يعني هو تيم ورك" },
      { t:"0:54", ar:"اضافه يخليك تقابل ناس على يعني مختلف فئات المجتمع ساعدني على اتخاذ قرارات" },
    ],
    vocab: [
      { ar:"وقت",     tr:"waqt",    en:"time",        type:"noun", poss:{ana:"وقتي",anta:"وقتك",hiya:"وقتها",huwa:"وقته",nahnu:"وقتنا",hum:"وقتهم"} },
      { ar:"مجتمع",   tr:"mujtama'",en:"society",     type:"noun", poss:{ana:"مجتمعي",anta:"مجتمعك",hiya:"مجتمعها",huwa:"مجتمعه",nahnu:"مجتمعنا",hum:"مجتمعهم"} },
      { ar:"تأثير",   tr:"ta'thiir",en:"impact",      type:"noun", poss:{ana:"تأثيري",anta:"تأثيرك",hiya:"تأثيرها",huwa:"تأثيره",nahnu:"تأثيرنا",hum:"تأثيرهم"} },
      { ar:"نفس",     tr:"nafs",    en:"self",        type:"noun", poss:{ana:"نفسي",anta:"نفسك",hiya:"نفسها",huwa:"نفسه",nahnu:"نفسنا",hum:"نفسهم"} },
      { ar:"شارك",    tr:"shaarik", en:"participate", type:"verb",
        conj:{ana:"أشارك",anta:"تشارك",hiya:"تشارك",huwa:"يشارك",nahnu:"نشارك"} },
      { ar:"ساعد",    tr:"saa'ad",  en:"help",        type:"verb",
        conj:{ana:"أساعد",anta:"تساعد",hiya:"تساعد",huwa:"يساعد",nahnu:"نساعد"} },
      { ar:"تعلم",    tr:"ta'allam",en:"learn",       type:"verb",
        conj:{ana:"أتعلم",anta:"تتعلم",hiya:"تتعلم",huwa:"يتعلم",nahnu:"نتعلم"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "F-54gBNFQ-I",
    title: "مدن تحت الأرض",
    titleEn: "Underground Cities",
    channel: "Thmanyah",
    region: "SA",
    topic: "travel",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"اكثر من 20 الف شخص كان عايش تحت الارض لاسابيع وشهور في مدينه درينكيو بتركيا" },
      { t:"0:10", ar:"بس ش لغز هالمدينه والمدن المبنيه تحت الارض ش علاقتهم بالحفره اللي قاعدين نحفر لها بالدرعيه" },
      { t:"0:20", ar:"من الاف السنين والناس تخترع طرق تساعدهم للهرب وحمايه نفسهم من الاعداء" },
      { t:"0:35", ar:"في سنه 1963 ضاعت دجاجه المزارع وقعد يدور عليها" },
      { t:"0:43", ar:"طلع بفكره غريبه وهي ممكن يلقاها تحت الارض فحفر وقتها شوي في قبو بيته ولقى" },
      { t:"0:50", ar:"غرفه ثم مر وبعدها سلسله ممرات متصله تمتد على اكثر من ثمان طوابق" },
      { t:"1:20", ar:"نموذج مدينتهم الارضيه بشكل يخلي الناس تعيش بشكل امن بغرف تمنع تسرب غازات" },
      { t:"1:46", ar:"بنو تحتهم انفاق انظمه تبريد مواقف سيارات وخزانات مويه" },
      { t:"2:08", ar:"ما راح نعيش تحتها بس اللي تحت هو اللي بيضمن تشغيل الكهرب والمويه وخطوط الاتصال" },
    ],
    vocab: [
      { ar:"مدينة",   tr:"madeena", en:"city",        type:"noun", poss:{ana:"مدينتي",anta:"مدينتك",hiya:"مدينتها",huwa:"مدينته",nahnu:"مدينتنا",hum:"مدينتهم"} },
      { ar:"أرض",     tr:"ard",     en:"ground/earth",type:"noun", poss:{ana:"أرضي",anta:"أرضك",hiya:"أرضها",huwa:"أرضه",nahnu:"أرضنا",hum:"أرضهم"} },
      { ar:"غرفة",    tr:"ghurfa",  en:"room",        type:"noun", poss:{ana:"غرفتي",anta:"غرفتك",hiya:"غرفتها",huwa:"غرفته",nahnu:"غرفتنا",hum:"غرفتهم"} },
      { ar:"بيت",     tr:"bayt",    en:"house",       type:"noun", poss:{ana:"بيتي",anta:"بيتك",hiya:"بيتها",huwa:"بيته",nahnu:"بيتنا",hum:"بيتهم"} },
      { ar:"عاش",     tr:"'aash",   en:"live",        type:"verb",
        conj:{ana:"أعيش",anta:"تعيش",hiya:"تعيش",huwa:"يعيش",nahnu:"نعيش"} },
      { ar:"لقى",     tr:"laqa",    en:"find",        type:"verb",
        conj:{ana:"ألقى",anta:"تلقى",hiya:"تلقى",huwa:"يلقى",nahnu:"نلقى"} },
      { ar:"قدر",     tr:"gadar",   en:"can/manage",  type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "WBC0Msg-WEA",
    title: "بطارية السيارة",
    titleEn: "How Car Batteries Work",
    channel: "Thmanyah",
    region: "SA",
    topic: "science",
    difficulty: 2,
    transcript: [
      { t:"0:00", ar:"اغلبنا قد واجه مشكله مع بطاريه جواله وبعد فتره من الاستخدام ولاحظ انها تخرب" },
      { t:"0:05", ar:"وتصير تخلص بسرعه اما اننا مقبلين على فتره بتنتشر فيها السيارات الكهربائيه" },
      { t:"0:10", ar:"اللي تشتغل بالبطاريه زي جوالك فهل ممكن مع الوقت تصير للسيارات نفس المشكله" },
      { t:"0:21", ar:"فكره السيارات الكهربائيه ما هي جديده هي فعليا بدات قبل سياره البنزين" },
      { t:"0:28", ar:"لما قدر واحد اسمه روبرت اندرسون يركب محرك كهربائي على هيكل سياره بسيطه" },
      { t:"1:01", ar:"لحظه هل قد تساءلت كيف تشتغل البطاريه اصلا" },
      { t:"1:09", ar:"البطاريه تقل تخيل معاي البطاريه مقسمه لغرفتين الغرفه اللي على اليمين سالبه" },
      { t:"2:38", ar:"وهذا بالضبط يشرح ليش بطاريه الجوال تضعف وتصير تخلص بسرعه" },
    ],
    vocab: [
      { ar:"سيارة",   tr:"sayyara", en:"car",         type:"noun", poss:{ana:"سيارتي",anta:"سيارتك",hiya:"سيارتها",huwa:"سيارته",nahnu:"سيارتنا",hum:"سيارتهم"} },
      { ar:"بطارية",  tr:"battaariya",en:"battery",   type:"noun", poss:{ana:"بطاريتي",anta:"بطاريتك",hiya:"بطاريتها",huwa:"بطاريته",nahnu:"بطاريتنا",hum:"بطاريتهم"} },
      { ar:"مشكلة",   tr:"mushkila", en:"problem",    type:"noun", poss:{ana:"مشكلتي",anta:"مشكلتك",hiya:"مشكلتها",huwa:"مشكلته",nahnu:"مشكلتنا",hum:"مشكلتهم"} },
      { ar:"وقت",     tr:"waqt",    en:"time",        type:"noun", poss:{ana:"وقتي",anta:"وقتك",hiya:"وقتها",huwa:"وقته",nahnu:"وقتنا",hum:"وقتهم"} },
      { ar:"شتغل",    tr:"shtughal", en:"work/function",type:"verb",
        conj:{ana:"أشتغل",anta:"تشتغل",hiya:"تشتغل",huwa:"يشتغل",nahnu:"نشتغل"} },
      { ar:"قدر",     tr:"gadar",   en:"can/manage",  type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
      { ar:"صار",     tr:"saar",    en:"become/happen",type:"verb",
        conj:{ana:"أصير",anta:"تصير",hiya:"تصير",huwa:"يصير",nahnu:"نصير"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "RvGGLf1CNp8",
    title: "موسم اصفري",
    titleEn: "Flu Season Explained",
    channel: "Thmanyah",
    region: "SA",
    topic: "health",
    difficulty: 3,
    transcript: [
      { t:"0:00", ar:"كل سنه وفي هذا التوقيت تطلع تحذيرات على الجو والمكيف دخل موسم اصفري" },
      { t:"0:07", ar:"فكيف هالاشياء جيب لنا انفلونزا طول عمر التعب كان مربوط باشياء غريبه" },
      { t:"0:16", ar:"انه يغير المزاج او ان البشر يتعبون بسبب اشياء غريبه" },
      { t:"0:55", ar:"الناس ومرضهم في فتره تبدل الاجواء خلينا نتفق ان الانفلونزا واي تعب له علاقه بالجراثيم" },
      { t:"1:40", ar:"قطعه بمخك وقطعه ثانيه عباره عن مناعتك اللي موزعه اسلاكها على كامل جسمك" },
      { t:"1:47", ar:"فالقطعه الاولى عباره عن عداد اسمه الهيبوثمس بالمخ وظيفته يثبت درجه حرارتنا" },
      { t:"2:09", ar:"اشارات تخلي اوعيتنا الدمويه تتمدد ونعرق لين نرجع مره ثانيه لدرجه الثبات" },
    ],
    vocab: [
      { ar:"جسم",     tr:"jism",    en:"body",        type:"noun", poss:{ana:"جسمي",anta:"جسمك",hiya:"جسمها",huwa:"جسمه",nahnu:"جسمنا",hum:"جسمهم"} },
      { ar:"مزاج",    tr:"mizaaj",  en:"mood",        type:"noun", poss:{ana:"مزاجي",anta:"مزاجك",hiya:"مزاجها",huwa:"مزاجه",nahnu:"مزاجنا",hum:"مزاجهم"} },
      { ar:"حرارة",   tr:"Haraara", en:"temperature", type:"noun", poss:{ana:"حرارتي",anta:"حرارتك",hiya:"حرارتها",huwa:"حرارته",nahnu:"حرارتنا",hum:"حرارتهم"} },
      { ar:"مناعة",   tr:"manaa'a", en:"immunity",    type:"noun", poss:{ana:"مناعتي",anta:"مناعتك",hiya:"مناعتها",huwa:"مناعته",nahnu:"مناعتنا",hum:"مناعتهم"} },
      { ar:"تعب",     tr:"ti'ib",   en:"get tired/sick",type:"verb",
        conj:{ana:"أتعب",anta:"تتعب",hiya:"تتعب",huwa:"يتعب",nahnu:"نتعب"} },
      { ar:"غيّر",    tr:"ghayyar", en:"change",      type:"verb",
        conj:{ana:"أغير",anta:"تغير",hiya:"تغير",huwa:"يغير",nahnu:"نغير"} },
      { ar:"رجع",     tr:"raja'",   en:"return",      type:"verb",
        conj:{ana:"أرجع",anta:"ترجع",hiya:"ترجع",huwa:"يرجع",nahnu:"نرجع"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "nqcERsnAzNM",
    title: "النامس وفصيلة الدم",
    titleEn: "Mosquitos & Blood Type",
    channel: "Thmanyah",
    region: "SA",
    topic: "health",
    difficulty: 3,
    transcript: [
      { t:"0:00", ar:"ليه بكل جلسه في واحد يتاذى من نامس وكانه الحاله اللي مستقصدينه النامس" },
      { t:"0:07", ar:"ولاي درجه الموضوع له علاقه بفصيله دمنا اللي تشوفه قدامك الحين هو قعده ناس في بيتهم" },
      { t:"0:29", ar:"قبل نفهم الشيء نحتاج نفهم كم شغله اللي يقرصنا دائما هم اناث النامس لان الذكور نباتيين" },
      { t:"1:09", ar:"لنفترض انها ساره ساره كانت نايمه بغرفه النوم لابسه غامق وراح لها كل النامس" },
      { t:"1:18", ar:"وابوها خالد بالصاله ولابس ثوب ابيض هنا ليه بالضبط ساره اللي تجمعوا عليها النامس" },
      { t:"3:17", ar:"كل اللي تحتاجه كم تكنيكه عشان تخفي بصمه ريحتك اولها حل كليشي بس تحتاج تغير الوان ملابسك" },
      { t:"3:34", ar:"انك تقضي على اي مويه راكده حولك لانها مملكتهم الكبيره اللي يتكاثرون فيها" },
    ],
    vocab: [
      { ar:"دم",      tr:"dam",     en:"blood",       type:"noun", poss:{ana:"دمي",anta:"دمك",hiya:"دمها",huwa:"دمه",nahnu:"دمنا",hum:"دمهم"} },
      { ar:"جلد",     tr:"jild",    en:"skin",        type:"noun", poss:{ana:"جلدي",anta:"جلدك",hiya:"جلدها",huwa:"جلده",nahnu:"جلدنا",hum:"جلدهم"} },
      { ar:"غرفة",    tr:"ghurfa",  en:"room",        type:"noun", poss:{ana:"غرفتي",anta:"غرفتك",hiya:"غرفتها",huwa:"غرفته",nahnu:"غرفتنا",hum:"غرفتهم"} },
      { ar:"بيت",     tr:"bayt",    en:"house",       type:"noun", poss:{ana:"بيتي",anta:"بيتك",hiya:"بيتها",huwa:"بيته",nahnu:"بيتنا",hum:"بيتهم"} },
      { ar:"فهم",     tr:"faham",   en:"understand",  type:"verb",
        conj:{ana:"أفهم",anta:"تفهم",hiya:"تفهم",huwa:"يفهم",nahnu:"نفهم"} },
      { ar:"شاف",     tr:"shaaf",   en:"see/look",    type:"verb",
        conj:{ana:"أشوف",anta:"تشوف",hiya:"تشوف",huwa:"يشوف",nahnu:"نشوف"} },
      { ar:"احتاج",   tr:"iHtaaj",  en:"need",        type:"verb",
        conj:{ana:"أحتاج",anta:"تحتاج",hiya:"تحتاج",huwa:"يحتاج",nahnu:"نحتاج"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "lKZNq2PYkFk",
    title: "الحراسات الأمنية",
    titleEn: "Security Guard",
    channel: "Saudi Channel 1",
    region: "SA",
    topic: "life",
    difficulty: 3,
    transcript: [
      { t:"0:05", ar:"معك احمد غالب مسؤول الحراسات الامنيه الحدائق العامه والواجهات البحريه اكتسبت" },
      { t:"0:13", ar:"خبرات كثيره ما يقارب ال 15 سنه" },
      { t:"0:26", ar:"طبيعه العمل هو متابعه الحراسات الامنيه في المواقع الموقع العامه الحدائق العامه" },
      { t:"0:34", ar:"الجولات التفقديه على الحراسات في المواقع متابعه الحراسات اول باول متابعه البلاغات" },
      { t:"0:54", ar:"توازن بين العمل والحياه واكتساب الانضباط والتنظيم التحمل البدني" },
      { t:"2:40", ar:"والله شعور جميل يعني انت لما تخدم الزوار الحدائق والواجهات البحريه وتلبي" },
      { t:"2:49", ar:"الطلبات اللي يبها فهذا احساس جميل" },
    ],
    vocab: [
      { ar:"عمل",     tr:"'amal",   en:"work",        type:"noun", poss:{ana:"عملي",anta:"عملك",hiya:"عملها",huwa:"عمله",nahnu:"عملنا",hum:"عملهم"} },
      { ar:"حديقة",   tr:"Hadeeqa", en:"park/garden", type:"noun", poss:{ana:"حديقتي",anta:"حديقتك",hiya:"حديقتها",huwa:"حديقته",nahnu:"حديقتنا",hum:"حديقتهم"} },
      { ar:"حياة",    tr:"Hayaa",   en:"life",        type:"noun", poss:{ana:"حياتي",anta:"حياتك",hiya:"حياتها",huwa:"حياته",nahnu:"حياتنا",hum:"حياتهم"} },
      { ar:"شعور",    tr:"shu'ur",  en:"feeling",     type:"noun", poss:{ana:"شعوري",anta:"شعورك",hiya:"شعورها",huwa:"شعوره",nahnu:"شعورنا",hum:"شعورهم"} },
      { ar:"خدم",     tr:"khadam",  en:"serve",       type:"verb",
        conj:{ana:"أخدم",anta:"تخدم",hiya:"تخدم",huwa:"يخدم",nahnu:"نخدم"} },
      { ar:"اكتسب",   tr:"iktasab", en:"gain/acquire",type:"verb",
        conj:{ana:"أكتسب",anta:"تكتسب",hiya:"تكتسب",huwa:"يكتسب",nahnu:"نكتسب"} },
      { ar:"تعلم",    tr:"ta'allam",en:"learn",       type:"verb",
        conj:{ana:"أتعلم",anta:"تتعلم",hiya:"تتعلم",huwa:"يتعلم",nahnu:"نتعلم"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "_71dSNHgo64",
    title: "ما تعيش بدونه",
    titleEn: "Things You Can't Live Without",
    channel: "Ma'isha — معيشه",
    region: "SA",
    topic: "fun",
    difficulty: 1,
    transcript: [
      { t:"0:04", ar:"سرقين الحرامي ام تشارلز هذا اصلي" },
      { t:"0:13", ar:"شيخ اصلي والله توقعتها نظاره هذا اصلي" },
      { t:"0:30", ar:"بموت يعني اذا انقطعت القهوه" },
      { t:"0:47", ar:"ش جايبين معكم اليوم يا الله ش الشيء اللي ما تقدر تعيش بدونه" },
      { t:"0:56", ar:"هل هي شيء ما استغني عنه؟ اقدر اقول ما استغني عنها" },
      { t:"1:03", ar:"اللي قدامي حصلنا شي بشي حلو انا احمد الزامل اسمي يوسف حناوي خلود عولقي" },
      { t:"1:10", ar:"انا راكان الشاي وهذه ثمان اشياء ماعيش بدونها تابع حلقات" },
    ],
    vocab: [
      { ar:"قهوة",    tr:"qahwa",   en:"coffee",      type:"noun", poss:{ana:"قهوتي",anta:"قهوتك",hiya:"قهوتها",huwa:"قهوته",nahnu:"قهوتنا",hum:"قهوتهم"} },
      { ar:"شاي",     tr:"shay",    en:"tea",         type:"noun", poss:{ana:"شايي",anta:"شايك",hiya:"شايها",huwa:"شايه",nahnu:"شاينا",hum:"شايهم"} },
      { ar:"شيء",     tr:"shay",    en:"thing",       type:"noun", poss:{ana:"شيئي",anta:"شيئك",hiya:"شيئها",huwa:"شيئه",nahnu:"شيئنا",hum:"شيئهم"} },
      { ar:"حياة",    tr:"Hayaa",   en:"life",        type:"noun", poss:{ana:"حياتي",anta:"حياتك",hiya:"حياتها",huwa:"حياته",nahnu:"حياتنا",hum:"حياتهم"} },
      { ar:"عاش",     tr:"'aash",   en:"live",        type:"verb",
        conj:{ana:"أعيش",anta:"تعيش",hiya:"تعيش",huwa:"يعيش",nahnu:"نعيش"} },
      { ar:"قدر",     tr:"gadar",   en:"can/manage",  type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
      { ar:"جاب",     tr:"jaab",    en:"bring",       type:"verb",
        conj:{ana:"أجيب",anta:"تجيب",hiya:"تجيب",huwa:"يجيب",nahnu:"نجيب"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "_mjJr8FZx6I",
    title: "تخطيط المدن",
    titleEn: "Why Riyadh Was Built for Cars",
    channel: "Thmanyah",
    region: "SA",
    topic: "history",
    difficulty: 3,
    transcript: [
      { t:"0:00", ar:"لو انت بالرياض وكل يوم عالق بزحمه" },
      { t:"0:30", ar:"مكان ما كانت موجوده قبل عام 1908 يوم واحد اسمه هنري فورد وصل للتصميم المثالي للسياره" },
      { t:"0:38", ar:"اختصر وقت الانتاج والتكلفه وبعد ما كانت السيارات متاحه للاغنياء بس صارت متاحه لكل الناس" },
      { t:"0:55", ar:"يبني اول شبكه طرق سريعه غيرت تخطيط المدينه كامله" },
      { t:"1:01", ar:"وصاروا الناس ينقون للضواحي بعيد عن زحمه المدن" },
      { t:"1:18", ar:"انقسمت المدن لنوعين النوع الاول مدن مشت على التخطيط الامريكي اللي مصمم للسيارات" },
      { t:"1:27", ar:"والنوع الثاني المدن المصممه للانسان مثل باريس اللي اعتمدت تخطيطها" },
      { t:"1:36", ar:"الرياض تعتبر من النوع الاول وخططت بالتخطيط الامريكي تحديدا بفتره الطفره بالسبعينات" },
      { t:"2:02", ar:"الحين صرت ما تقدر تروح من الدوام للمقهى اللي حوله الا بالسياره" },
    ],
    vocab: [
      { ar:"مدينة",   tr:"madeena", en:"city",        type:"noun", poss:{ana:"مدينتي",anta:"مدينتك",hiya:"مدينتها",huwa:"مدينته",nahnu:"مدينتنا",hum:"مدينتهم"} },
      { ar:"سيارة",   tr:"sayyara", en:"car",         type:"noun", poss:{ana:"سيارتي",anta:"سيارتك",hiya:"سيارتها",huwa:"سيارته",nahnu:"سيارتنا",hum:"سيارتهم"} },
      { ar:"وقت",     tr:"waqt",    en:"time",        type:"noun", poss:{ana:"وقتي",anta:"وقتك",hiya:"وقتها",huwa:"وقته",nahnu:"وقتنا",hum:"وقتهم"} },
      { ar:"ناس",     tr:"naas",    en:"people",      type:"noun", poss:{ana:"ناسي",anta:"ناسك",hiya:"ناسها",huwa:"ناسه",nahnu:"ناسنا",hum:"ناسهم"} },
      { ar:"صار",     tr:"saar",    en:"become/happen",type:"verb",
        conj:{ana:"أصير",anta:"تصير",hiya:"تصير",huwa:"يصير",nahnu:"نصير"} },
      { ar:"قدر",     tr:"gadar",   en:"can/manage",  type:"verb",
        conj:{ana:"أقدر",anta:"تقدر",hiya:"تقدر",huwa:"يقدر",nahnu:"نقدر"} },
      { ar:"غيّر",    tr:"ghayyar", en:"change",      type:"verb",
        conj:{ana:"أغير",anta:"تغير",hiya:"تغير",huwa:"يغير",nahnu:"نغير"} },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "ixsM7LCL0iE",
    title: "وصفتنا من المطبخ",
    titleEn: "Kibbeh with Yoghurt — UAE Kitchen",
    channel: "Sama Dubai",
    region: "UAE",
    topic: "cooking",
    difficulty: 2,
    transcript: [
      { t:"0:03", ar:"السلام عليكم ورحمه الله وبركاته اليوم وصفتنا من المطبخ" },
      { t:"0:11", ar:"الشامي مقاديرنا اليوم عندنا هني لبن يفضل يكون عيران عشان يعطيكم حموضه" },
      { t:"0:18", ar:"عندنا هني كيلو رب ماجي خضاب نعناع مجفف وملح" },
      { t:"0:23", ar:"هني كبه جاهزه وهذه كبه باللحم مقادير الطشه عندنا بقدونس وثوم" },
      { t:"0:33", ar:"يلا نبتدي وصفتنا اول شيء راح اضيف تقريبا كوب لبن" },
      { t:"1:52", ar:"اللبن بشيل التاوه وبتاوه الثانيه بجهز معكم الطشه" },
      { t:"2:02", ar:"بحضر الطشه هني بحط شويه بصل لين ما احضر" },
      { t:"2:27", ar:"هذا كبده باللبن صارتنا جاهز بنقل على صحن التقديم" },
      { t:"2:43", ar:"وهذه كبه اللبن صارت جاهزه وحلاته مع الرز بالشعريه وعليكم بالف عافيه" },
    ],
    vocab: [
      { ar:"لبن",     tr:"laban",   en:"yoghurt/milk",type:"noun", poss:{ana:"لبني",anta:"لبنك",hiya:"لبنها",huwa:"لبنه",nahnu:"لبننا",hum:"لبنهم"} },
      { ar:"ثوم",     tr:"thoom",   en:"garlic",      type:"noun", poss:{ana:"ثومي",anta:"ثومك",hiya:"ثومها",huwa:"ثومه",nahnu:"ثومنا",hum:"ثومهم"} },
      { ar:"مطبخ",    tr:"maTbakh", en:"kitchen",     type:"noun", poss:{ana:"مطبخي",anta:"مطبخك",hiya:"مطبخها",huwa:"مطبخه",nahnu:"مطبخنا",hum:"مطبخهم"} },
      { ar:"صحن",     tr:"Sahn",    en:"plate/dish",  type:"noun", poss:{ana:"صحني",anta:"صحنك",hiya:"صحنها",huwa:"صحنه",nahnu:"صحننا",hum:"صحنهم"} },
      { ar:"أضاف",    tr:"adaaf",   en:"add",         type:"verb",
        conj:{ana:"أضيف",anta:"تضيف",hiya:"تضيف",huwa:"يضيف",nahnu:"نضيف"} },
      { ar:"حطّ",     tr:"Hatt",    en:"put",         type:"verb",
        conj:{ana:"أحط",anta:"تحط",hiya:"تحط",huwa:"يحط",nahnu:"نحط"} },
      { ar:"صار",     tr:"saar",    en:"become/ready",type:"verb",
        conj:{ana:"أصير",anta:"تصير",hiya:"تصير",huwa:"يصير",nahnu:"نصير"} },
    ]
  },

];

// ═══════════════════════════════════════════════════════════════
//  Cross-video word index — built automatically at load time
//  Keys are stripped Arabic words (no diacritics)
//  Values are arrays of {videoId, segIdx, timestamp}
// ═══════════════════════════════════════════════════════════════
const WORD_INDEX = {};

(function buildWordIndex() {
  VIDEO_BANK.forEach(video => {
    video.transcript.forEach((seg, segIdx) => {
      const words = seg.ar.match(/[\u0600-\u06FF]{2,}/g) || [];
      words.forEach(w => {
        const key = w.replace(/[\u064B-\u065F\u0670]/g,'')
                     .replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه');
        if (!WORD_INDEX[key]) WORD_INDEX[key] = [];
        const already = WORD_INDEX[key].find(e => e.videoId === video.id);
        if (!already) WORD_INDEX[key].push({ videoId: video.id, segIdx, t: seg.t });
      });
    });
  });
})();
