const { useState } = React;

const types = [
  {
    id:"insulin",icon:"🩸",color:"#C0392B",bg:"#FDF2F2",border:"#E74C3C",
    title:"PCOS المقاومة للأنسولين",subtitle:"الأكثر شيوعاً • 70% من الحالات",
    cause:"المقاومة الخلوية للأنسولين → ارتفاع الأنسولين → زيادة الأندروجينات من المبيضين",
    symptoms:["زيادة وزن في البطن","شهية للسكر","تعب بعد الأكل","حب الشباب","دورات غير منتظمة","شعر زائد"],
    best:["تدريب المقاومة 3x أسبوعياً","بيلاتس لتحسين حساسية الأنسولين","كارديو معتدل","وجبة خفيفة قبل التمرين"],
    avoid:["كارديو مكثف يومياً","HIIT أكثر من 2x أسبوع","التمرين على معدة فارغة"],
    surprising:"حتى بدون خسارة وزن، يحسّن تدريب القوة حساسية الأنسولين ويخفض التستوستيرون",
    diet:{
      title:"نظام منخفض المؤشر الجلايسيمي",
      science:"DASH diet الأفضل علمياً لخفض HOMA-IR بنسبة 92% — مراجعة منهجية 2024، 727 مشاركة",
      eat:["بروتين في كل وجبة: بيض، دجاج، سمك، عدس","خضار غير نشوية بكميات كبيرة","حبوب كاملة: شوفان، كينوا، أرز بني","دهون صحية: أفوكادو، زيت زيتون، مكسرات","بذور الكتان والشيا","قرفة: تحسّن حساسية الأنسولين"],
      avoid:["سكر مضاف ومشروبات محلاة","دقيق أبيض ومنتجاته","عصائر فواكه","وجبات كبيرة متباعدة"],
      supplement:["إينوزيتول Myo+D-chiro","ماغنيسيوم","أوميغا-3","فيتامين D"],
      timing:"الإفطار الكبير أفضل — دراسة: إفطار كبير أنتج انخفاض 56% في مقاومة الأنسولين و50% زيادة في التبويض"
    }
  },
  {
    id:"adrenal",icon:"⚡",color:"#D35400",bg:"#FEF5EC",border:"#E67E22",
    title:"PCOS الغدة الكظرية",subtitle:"نادر نسبياً • 10% من الحالات",
    cause:"استجابة مفرطة للتوتر → ارتفاع DHEA-S من الغدة الكظرية",
    symptoms:["قلق مستمر","إرهاق رغم النوم","شعر خفيف","حب شباب","متعبة لكن صاحية","اضطراب النوم"],
    best:["بيلاتس 3-4x أسبوعياً","المشي والسباحة","اليوغا والتأمل"],
    avoid:["HIIT بشكل متكرر","كارديو مكثف طويل","أي تمرين مكثف يومي"],
    surprising:"DHEA-S لا يُختبر روتينياً! كثيرات يُعالَجن خطأً كأنهن مقاومات للأنسولين",
    diet:{
      title:"نظام داعم للغدة الكظرية ومضاد للتوتر",
      science:"التوتر المزمن يرفع الكورتيزول الذي يزيد DHEA-S — الغذاء المضاد للتوتر يقطع هذه الحلقة",
      eat:["بروتين معتدل منتظم","كربوهيدرات معقدة في كل وجبة","مغنيسيوم: سبانخ، شوكولا داكنة، أفوكادو","فيتامين C: فلفل ألوان، توت، حمضيات","أشواغاندا: عشبة مدعومة بدراسات","ماء كافٍ طوال اليوم"],
      avoid:["الكافيين الزائد","الصيام المتقطع","تخطي الوجبات","السكر المكرر"],
      supplement:["فيتامين B5 حمض البانتوثينيك","ماغنيسيوم غليسينات","فيتامين C","أشواغاندا"],
      timing:"وجبات كل 3-4 ساعات ضرورية — تخطي وجبة = ارتفاع كورتيزول = مزيد من الأعراض"
    }
  },
  {
    id:"inflammatory",icon:"🔥",color:"#7D3C98",bg:"#F5EEF8",border:"#9B59B6",
    title:"PCOS الالتهابي",subtitle:"التهاب مزمن منخفض الدرجة",
    cause:"التهاب مزمن يرفع الأندروجينات ويُعطل الإباضة — حلقة مفرغة",
    symptoms:["صداع متكرر","آلام مفاصل","إجهاق غير مُفسَّر","إكزيما أو بسوريازيس","اضطراب معوي IBS","CRP مرتفع"],
    best:["بيلاتس يُحسّن الدورة الدموية","تدريب قوة معتدل","تغذية مضادة للالتهاب"],
    avoid:["تمارين مكثفة ترفع الالتهاب","حجم تدريبي عالٍ"],
    surprising:"جلسة تمرين مكثفة واحدة ترفع السيتوكينات الالتهابية مؤقتاً — خطير لهذا النوع",
    diet:{
      title:"النظام المتوسطي المضاد للالتهاب",
      science:"النظام المتوسطي الأعلى فعالية لخفض CRP في PCOS — Frontiers in Endocrinology 2024",
      eat:["سمك سلمون وسردين وماكريل","زيت زيتون بكر يومياً","كركم مع فلفل أسود","زنجبيل طازج أو مجفف","توت أزرق، فراولة، رمان","خضار داكنة: بروكلي، كرنب، سبانخ"],
      avoid:["السكر والمحليات الصناعية","الزيوت المكررة","الأطعمة المعالجة","الغلوتين لمن لديهن حساسية"],
      supplement:["NAC N-Acetyl Cysteine","أوميغا-3 بجرعة 2-3g يومياً","كركمين مع بيبيرين","بروبيوتيك","فيتامين D"],
      timing:"تجنبي الأكل المتأخر — الالتهاب يرتفع مع اضطراب الساعة البيولوجية"
    }
  },
  {
    id:"postpill",icon:"💊",color:"#117A65",bg:"#E8F8F5",border:"#1ABC9C",
    title:"PCOS ما بعد الحبوب",subtitle:"مؤقت • يستمر 3-12 شهراً",
    cause:"الحبوب تكبح المحور الهرموني → عند الإيقاف: اضطراب مؤقت في الإباضة",
    symptoms:["دورات غير منتظمة بعد إيقاف الحبوب","أندروجينات مرتفعة مؤقتاً","DHEA-S طبيعي","مقاومة أنسولين طبيعية"],
    best:["مقاومة خفيفة","بيلاتس","مشي يومي","إدارة التوتر والصبر"],
    avoid:["تقييد حاد للسعرات مع تمرين مكثف","الكارديو المفرط"],
    surprising:"كثير من النساء لا يكنّ مصابات بـ PCOS أصلاً — الحبوب كانت تُخفي الدورة الطبيعية",
    diet:{
      title:"نظام تعويض المغذيات وإعادة التوازن",
      science:"الحبوب تستنزف عدة عناصر غذائية — إعادة تعبئتها تُسرّع استعادة التبويض",
      eat:["زنك: بذور اليقطين، كاجو","B6 وB12: بيض، دجاج، سمك","حمض الفوليك: خضار ورقية، عدس","ماغنيسيوم: شوكولا داكنة، لوز","الكوليسترول الصحي: بيض، زيتون"],
      avoid:["البلاستيك وBPA مُعطّلات هرمونية","الصويا بكميات كبيرة","الكحول"],
      supplement:["B-Complex عالي الجودة","زنك 15-30mg يومياً","ماغنيسيوم","فيتامين D3+K2"],
      timing:"وجبات منتظمة لدعم الكبد في معالجة الهرمونات المتراكمة"
    }
  },
  {
    id:"lean",icon:"🪶",color:"#1A5276",bg:"#EBF5FB",border:"#2E86C1",
    title:"Lean PCOS السليم وزنياً",subtitle:"20-30% من الحالات • الأكثر سوء تشخيص",
    cause:"وزن طبيعي أو منخفض مع اضطراب هرموني كامل: أندروجينات مرتفعة + دورات غير منتظمة",
    symptoms:["وزن طبيعي أو منخفض","دورات غير منتظمة","صعوبة بناء عضلات","حب شباب رغم النحافة","تعب مزمن","لا تبدو عليكِ PCOS"],
    best:["تدريب مقاومة تدريجي الأهم","فائض سعراتي + بروتين 1.6-2g/kg","بيلاتس لخفض التوتر","إدارة الكورتيزول أولاً"],
    avoid:["خسارة وزن إضافية","تمارين الحرق المكثفة","المقارنة بغيركِ"],
    surprising:"الكورتيزول المرتفع يكسر العضلات — التوتر النفسي يمنع بناء الجسم حرفياً",
    diet:{
      title:"نظام بناء عضلي ومضاد للالتهاب بدون قيود",
      science:"Lean PCOS تحمل التهاباً مرتفعاً مستقلاً عن الوزن — تحتاج غذاءً بانياً لا مقيِّداً (PMC 2021)",
      eat:["فائض سعراتي خفيف +200-300 سعرة","بروتين عالٍ 1.6-2g لكل كيلو يومياً","كربوهيدرات معقدة بشكل حر","دهون صحية كافية","أطعمة غنية بالحديد","كولاجين لدعم المفاصل"],
      avoid:["تقييد السعرات يزيد الكورتيزول","الأنظمة الصارمة للتنحيف","القهوة على معدة فارغة"],
      supplement:["إينوزيتول","NAC مضاد الالتهاب","ماغنيسيوم","أوميغا-3","فيتامين D"],
      timing:"وجبات كل 3-4 ساعات — تخطي الوجبات يزيد الكورتيزول بشكل حاد في هذا النوع"
    }
  }
];

const pillars=[
  {icon:"🏋️‍♀️",title:"تدريب المقاومة",color:"#C0392B",points:["الأقوى أثراً على مقاومة الأنسولين","يخفض التستوستيرون الحر","يزيد SHBG يقيّد الأندروجينات","يُقلل الدهون الحشوية","2-3 مرات أسبوعياً بأيام غير متتالية"]},
  {icon:"🧘‍♀️",title:"بيلاتس",color:"#7D3C98",points:["يُفعّل الجهاز العصبي السمبتاوي","يُنظّم الدورة الشهرية دراسة 2024","يبني عضلات الكور العميقة والحوض","يُحسّن صورة الجسم والصحة النفسية","آمن لجميع أنواع PCOS"]},
  {icon:"🚶‍♀️",title:"الحركة المعتدلة",color:"#117A65",points:["30 دقيقة مشي يومياً تحسّن الإباضة","يخفض الكورتيزول تراكمياً","لا يضغط على المحور الكظري","مناسب لكل أنواع PCOS","يُقلل مقاومة الأنسولين"]},
  {icon:"⚡",title:"HIIT بحذر",color:"#D35400",points:["فعّال لمقاومة الأنسولين 2023","يخفض التستوستيرون في بعض الدراسات","الحد الأقصى مرتين أسبوعياً","ممنوع في Adrenal PCOS","يرفع الكورتيزول 40-80% لساعات"]}
];

const fertilitySteps=[
  {phase:"المرحلة 1 — أسابيع 1-4",color:"#C0392B",icon:"🌱",title:"بناء الأساس الهرموني",exercise:["مشي يومي 30-40 دقيقة","بيلاتس 2x أسبوعياً","تمارين تنفس عميق يومياً"],mechanism:"خفض الكورتيزول يُعيد توازن محور HPO — الخطوة الأولى قبل أي تحسن في التبويض",stat:"30 دقيقة تمرين 3x أسبوعياً يزيد فرص الحمل حتى بدون خسارة وزن — Palomba et al."},
  {phase:"المرحلة 2 — أسابيع 4-12",color:"#E67E22",icon:"🌿",title:"تحسين الإباضة بتدريب القوة",exercise:["تدريب مقاومة 3x أسبوعياً","بيلاتس 2x أسبوعياً","المشي اليومي محافظاً عليه"],mechanism:"بناء العضلات يزيد SHBG → يُقيّد التستوستيرون → تنخفض الأندروجينات → تعود الإباضة",stat:"دراسة 2024 (100 امرأة): تدريب القوة أنتج 2.3 دورة تبويض مقابل 0.9 في المجموعة الضابطة (p<0.001)"},
  {phase:"المرحلة 3 — أسابيع 12+",color:"#27AE60",icon:"🌸",title:"تعزيز الخصوبة والاستدامة",exercise:["الحفاظ على الروتين — الانقطاع يعيد الأعراض","إضافة بيلاتس + يوغا للدعم النفسي","تقليل HIIT قرب محاولة الحمل"],mechanism:"التحسن في تكوين الجسم يُعيد انتظام الدورة في 38% من الحالات مقابل 12% بدون تمرين",stat:"5-10% خسارة وزن تُعيد الإباضة لـ 50-60% من النساء غير المتبيّضات"}
];

function TypeCard({type, isOpen, onToggle}) {
  return React.createElement('div', {
    style:{border:`2px solid ${type.border}`,borderRadius:16,marginBottom:14,overflow:"hidden",background:"#fff",boxShadow:isOpen?`0 4px 20px ${type.color}22`:"0 2px 8px rgba(0,0,0,0.05)"}
  },
    React.createElement('button', {
      onClick:onToggle,
      style:{width:"100%",background:isOpen?type.bg:"#fff",border:"none",padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"right",direction:"rtl"}
    },
      React.createElement('span',{style:{fontSize:28}},type.icon),
      React.createElement('div',{style:{flex:1,textAlign:"right"}},
        React.createElement('div',{style:{fontWeight:800,fontSize:16,color:type.color}},type.title),
        React.createElement('div',{style:{fontSize:12,color:"#666",marginTop:2}},type.subtitle)
      ),
      React.createElement('span',{style:{fontSize:18,color:type.color,transform:isOpen?"rotate(180deg)":"rotate(0)",transition:"transform .3s"}},"▾")
    ),
    isOpen && React.createElement('div',{style:{padding:"0 18px 18px",background:type.bg,direction:"rtl"}},
      React.createElement('div',{style:{background:"rgba(255,255,255,0.7)",borderRadius:10,padding:"10px 12px",marginBottom:12,borderRight:`4px solid ${type.color}`}},
        React.createElement('div',{style:{fontSize:11,color:"#888",marginBottom:3,fontWeight:700}},"السبب الجذري"),
        React.createElement('div',{style:{fontSize:13,color:"#333",lineHeight:1.7}},type.cause)
      ),
      React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}},
        React.createElement('div',{style:{background:"#fff",borderRadius:10,padding:10}},
          React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#555",marginBottom:6}},"🩺 الأعراض"),
          type.symptoms.map((s,i)=>React.createElement('div',{key:i,style:{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}},React.createElement('span',{style:{color:type.color}},"•"),s))
        ),
        React.createElement('div',{style:{background:"#fff",borderRadius:10,padding:10}},
          React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#27AE60",marginBottom:6}},"✅ الأمثل"),
          type.best.map((s,i)=>React.createElement('div',{key:i,style:{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}},React.createElement('span',{style:{color:"#27AE60"}},"✓"),s)),
          React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#E74C3C",marginBottom:4,marginTop:8}},"⛔ تجنبي"),
          type.avoid.map((s,i)=>React.createElement('div',{key:i,style:{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}},React.createElement('span',{style:{color:"#E74C3C"}},"✗"),s))
        )
      ),
      React.createElement('div',{style:{background:`${type.color}18`,borderRadius:10,padding:"8px 12px",borderRight:`3px solid ${type.color}`}},
        React.createElement('span',{style:{fontSize:11,fontWeight:700,color:type.color}},"💡 حقيقة مفاجئة: "),
        React.createElement('span',{style:{fontSize:12,color:"#333"}},type.surprising)
      )
    )
  );
}

function DietCard({type, isOpen, onToggle}) {
  return React.createElement('div',{
    style:{border:`2px solid ${type.border}`,borderRadius:16,marginBottom:14,overflow:"hidden",background:"#fff",boxShadow:isOpen?`0 4px 20px ${type.color}22`:"0 2px 8px rgba(0,0,0,0.05)"}
  },
    React.createElement('button',{
      onClick:onToggle,
      style:{width:"100%",background:isOpen?type.bg:"#fff",border:"none",padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"right",direction:"rtl"}
    },
      React.createElement('span',{style:{fontSize:26}},type.icon),
      React.createElement('div',{style:{flex:1,textAlign:"right"}},
        React.createElement('div',{style:{fontWeight:800,fontSize:15,color:type.color}},type.title),
        React.createElement('div',{style:{fontSize:12,fontWeight:600,color:"#555",marginTop:2}},type.diet.title)
      ),
      React.createElement('span',{style:{fontSize:18,color:type.color,transform:isOpen?"rotate(180deg)":"rotate(0)",transition:"transform .3s"}},"▾")
    ),
    isOpen && React.createElement('div',{style:{padding:"0 18px 18px",background:type.bg,direction:"rtl"}},
      React.createElement('div',{style:{background:`${type.color}15`,borderRadius:10,padding:"10px 12px",marginBottom:12,borderRight:`4px solid ${type.color}`}},
        React.createElement('div',{style:{fontSize:11,fontWeight:700,color:type.color,marginBottom:3}},"📚 الدليل العلمي"),
        React.createElement('div',{style:{fontSize:12,color:"#333",lineHeight:1.7}},type.diet.science)
      ),
      React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}},
        React.createElement('div',{style:{background:"#f0fff4",borderRadius:10,padding:10,border:"1px solid #a3e4b7"}},
          React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#27AE60",marginBottom:6}},"✅ كلي بحرية"),
          type.diet.eat.map((e,i)=>React.createElement('div',{key:i,style:{fontSize:11,color:"#2d6a4f",padding:"2px 0",display:"flex",gap:5,lineHeight:1.5}},React.createElement('span',{style:{color:"#27AE60",flexShrink:0}},"+"),e))
        ),
        React.createElement('div',{style:{background:"#fff5f5",borderRadius:10,padding:10,border:"1px solid #f5c6cb"}},
          React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#E74C3C",marginBottom:6}},"⛔ تجنبي"),
          type.diet.avoid.map((e,i)=>React.createElement('div',{key:i,style:{fontSize:11,color:"#721c24",padding:"2px 0",display:"flex",gap:5,lineHeight:1.5}},React.createElement('span',{style:{color:"#E74C3C",flexShrink:0}},"–"),e))
        )
      ),
      React.createElement('div',{style:{background:"#fff",borderRadius:10,padding:10,marginBottom:8,border:"1px solid #e0d7ff"}},
        React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#6C3483",marginBottom:6}},"💊 مكملات موثوقة"),
        React.createElement('div',{style:{display:"flex",flexWrap:"wrap",gap:5}},
          type.diet.supplement.map((s,i)=>React.createElement('span',{key:i,style:{background:"#f0e8ff",color:"#6C3483",fontSize:10,padding:"3px 9px",borderRadius:20,border:"1px solid #d8b4fe"}},s))
        )
      ),
      React.createElement('div',{style:{background:`${type.color}10`,borderRadius:10,padding:"8px 12px",borderRight:`3px solid ${type.color}`}},
        React.createElement('span',{style:{fontSize:11,fontWeight:700,color:type.color}},"⏰ توقيت: "),
        React.createElement('span',{style:{fontSize:12,color:"#444"}},type.diet.timing)
      )
    )
  );
}

function PCOSApp() {
  const [openType, setOpenType] = useState("insulin");
  const [openDiet, setOpenDiet] = useState("insulin");
  const [activeTab, setActiveTab] = useState("types");

  const tabs=[
    {id:"types",label:"أنواع PCOS"},
    {id:"exercise",label:"الرياضة"},
    {id:"fertility",label:"🤰 الخصوبة"},
    {id:"diet",label:"🥗 التغذية"},
    {id:"toxic",label:"⚠️ السلبيات"},
    {id:"mental",label:"🧠 النفسية"},
  ];

  return React.createElement('div',{style:{fontFamily:"'Segoe UI',Tahoma,Arial,sans-serif",direction:"rtl",background:"linear-gradient(135deg,#f8f3ff 0%,#fff5f5 50%,#f0f9ff 100%)",minHeight:"100vh",paddingBottom:40}},

    // Header
    React.createElement('div',{style:{background:"linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",color:"#fff",padding:"26px 18px 18px",textAlign:"center"}},
      React.createElement('div',{style:{fontSize:34,marginBottom:5}},"🧬"),
      React.createElement('h1',{style:{margin:0,fontSize:19,fontWeight:900}},"الرياضة والبيلاتس وتأثيرهما على PCOS"),
      React.createElement('p',{style:{margin:"5px 0 0",fontSize:12,color:"#a8c6ff"}},"ملخص علمي شامل • أبحاث 2023–2026 • 6 محاور تفاعلية")
    ),

    // Tabs
    React.createElement('div',{style:{background:"#fff",boxShadow:"0 2px 10px rgba(0,0,0,0.05)",overflowX:"auto"}},
      React.createElement('div',{style:{display:"flex",minWidth:"max-content",padding:"0 4px"}},
        tabs.map(t=>React.createElement('button',{
          key:t.id,
          onClick:()=>setActiveTab(t.id),
          style:{padding:"12px 13px",border:"none",background:"none",cursor:"pointer",fontSize:12,fontWeight:activeTab===t.id?800:500,color:activeTab===t.id?"#6C3483":"#777",borderBottom:activeTab===t.id?"3px solid #6C3483":"3px solid transparent",whiteSpace:"nowrap"}
        },t.label))
      )
    ),

    // Content
    React.createElement('div',{style:{maxWidth:720,margin:"0 auto",padding:"16px 14px"}},

      // TYPES TAB
      activeTab==="types" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"أنواع PCOS الخمسة"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"اضغطي على كل نوع لعرض التفاصيل")
        ),
        types.map(t=>React.createElement(TypeCard,{key:t.id,type:t,isOpen:openType===t.id,onToggle:()=>setOpenType(openType===t.id?null:t.id)})),
        React.createElement('div',{style:{background:"#fff3cd",border:"1px solid #ffc107",borderRadius:12,padding:"12px 14px"}},
          React.createElement('div',{style:{fontSize:12,fontWeight:700,color:"#856404",marginBottom:3}},"⚠️ ملاحظة علمية"),
          React.createElement('div',{style:{fontSize:12,color:"#664d03",lineHeight:1.7}},"معظم النساء يُظهرن عناصر من أكثر من نوع. تحديد النوع ",React.createElement('strong',null,"المسيطر")," هو المفتاح لبروتوكول التمرين والتغذية الصحيح.")
        )
      ),

      // EXERCISE TAB
      activeTab==="exercise" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"الركائز الأربع للتمرين"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"ليست كل التمارين متساوية في PCOS")
        ),
        pillars.map((p,i)=>React.createElement('div',{key:i,style:{background:"#fff",borderRadius:16,padding:"14px 18px",marginBottom:12,borderRight:`5px solid ${p.color}`,boxShadow:"0 2px 10px rgba(0,0,0,0.05)"}},
          React.createElement('div',{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10}},
            React.createElement('span',{style:{fontSize:24}},p.icon),
            React.createElement('div',{style:{fontWeight:800,fontSize:14,color:p.color}},p.title)
          ),
          p.points.map((pt,j)=>React.createElement('div',{key:j,style:{display:"flex",gap:10,padding:"4px 0",alignItems:"flex-start"}},
            React.createElement('div',{style:{width:20,height:20,borderRadius:"50%",background:`${p.color}18`,color:p.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,flexShrink:0}},j+1),
            React.createElement('div',{style:{fontSize:13,color:"#333",lineHeight:1.6}},pt)
          ))
        )),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#1a1a2e,#0f3460)",borderRadius:16,padding:"18px",color:"#fff"}},
          React.createElement('div',{style:{fontWeight:800,fontSize:14,marginBottom:12,textAlign:"center"}},"📅 الجدول الأسبوعي المثالي"),
          [{day:"الأحد",type:"تدريب مقاومة",color:"#E74C3C",emoji:"🏋️‍♀️"},{day:"الاثنين",type:"بيلاتس + مشي",color:"#9B59B6",emoji:"🧘‍♀️"},{day:"الثلاثاء",type:"تدريب مقاومة",color:"#E74C3C",emoji:"🏋️‍♀️"},{day:"الأربعاء",type:"مشي / راحة نشطة",color:"#27AE60",emoji:"🚶‍♀️"},{day:"الخميس",type:"HIIT خفيف اختياري",color:"#E67E22",emoji:"⚡"},{day:"الجمعة",type:"بيلاتس + تنفس",color:"#9B59B6",emoji:"🧘‍♀️"},{day:"السبت",type:"راحة كاملة",color:"#3498DB",emoji:"😴"}].map((d,i)=>React.createElement('div',{key:i,style:{display:"flex",alignItems:"center",gap:10,padding:"6px 0",borderBottom:i<6?"1px solid rgba(255,255,255,0.1)":"none"}},
            React.createElement('span',{style:{fontSize:16}},d.emoji),
            React.createElement('div',{style:{width:65,fontSize:11,color:"#aaa"}},d.day),
            React.createElement('div',{style:{flex:1,fontSize:12,color:"#fff"}},d.type),
            React.createElement('div',{style:{width:9,height:9,borderRadius:"50%",background:d.color,flexShrink:0}})
          ))
        )
      ),

      // FERTILITY TAB
      activeTab==="fertility" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"🤰 الرياضة وتحسين نسبة الحمل"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"ما تقوله أبحاث 2023–2025 بوضوح")
        ),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#0f3460,#1a1a2e)",borderRadius:16,padding:"20px 18px",color:"#fff",marginBottom:16,textAlign:"center"}},
          React.createElement('div',{style:{fontSize:12,color:"#a8c6ff",marginBottom:5}},"الحقيقة الأهم في أبحاث الخصوبة وـ PCOS"),
          React.createElement('div',{style:{fontSize:26,fontWeight:900,color:"#fff",lineHeight:1.3}},"5–10٪ خسارة وزن"),
          React.createElement('div',{style:{fontSize:14,color:"#cce4ff",marginTop:5}},"تُعيد الإباضة لـ ",React.createElement('strong',{style:{color:"#fff",fontSize:18}},"50–60٪")," من النساء غير المتبيّضات"),
          React.createElement('div',{style:{fontSize:11,color:"#7fb3d3",marginTop:6}},"European Society of Endocrinology + HealthRX 2025"),
          React.createElement('div',{style:{background:"rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 12px",marginTop:12,textAlign:"right"}},
            React.createElement('div',{style:{fontSize:12,color:"#cce4ff",lineHeight:1.7}},"⚠️ لا يُشترط الوصول إلى BMI طبيعي — التحسن الجزئي يكفي لاستئناف التبويض")
          )
        ),
        React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:16}},
          [{icon:"📊",text:"تدريب القوة ينتج 2.3 دورة تبويض/6أشهر مقابل 0.9 بدون تمرين (2024)"},{icon:"⚡",text:"HIIT يُحسّن مقاومة الأنسولين بنسبة 17% في PCOS"},{icon:"🚶‍♀️",text:"30 دقيقة مشي 3x أسبوعياً كافٍ لرفع فرص الحمل"},{icon:"🏋️‍♀️",text:"تمرين 24 أسبوعاً أعاد انتظام الدورة في 38% مقابل 12% فقط بدون تمرين"}].map((f,i)=>React.createElement('div',{key:i,style:{background:"#fff",borderRadius:12,padding:"11px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid #e8e0ff"}},
            React.createElement('div',{style:{fontSize:20,marginBottom:5}},f.icon),
            React.createElement('div',{style:{fontSize:11,color:"#333",lineHeight:1.6}},f.text)
          ))
        ),
        React.createElement('div',{style:{fontWeight:800,fontSize:14,color:"#1a1a2e",marginBottom:12,textAlign:"center"}},"🗓️ بروتوكول التمرين التدريجي للخصوبة"),
        fertilitySteps.map((step,i)=>React.createElement('div',{key:i,style:{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.05)",borderRight:`5px solid ${step.color}`}},
          React.createElement('div',{style:{display:"flex",alignItems:"center",gap:9,marginBottom:9}},
            React.createElement('span',{style:{fontSize:24}},step.icon),
            React.createElement('div',null,
              React.createElement('div',{style:{fontSize:11,color:step.color,fontWeight:700}},step.phase),
              React.createElement('div',{style:{fontSize:14,fontWeight:800,color:"#1a1a2e"}},step.title)
            )
          ),
          step.exercise.map((e,j)=>React.createElement('div',{key:j,style:{fontSize:12,color:"#333",padding:"2px 0",display:"flex",gap:7}},React.createElement('span',{style:{color:step.color}},"•"),e)),
          React.createElement('div',{style:{background:`${step.color}12`,borderRadius:9,padding:"7px 10px",margin:"8px 0"}},
            React.createElement('div',{style:{fontSize:11,fontWeight:700,color:step.color,marginBottom:2}},"⚙️ الآلية البيولوجية"),
            React.createElement('div',{style:{fontSize:11,color:"#444",lineHeight:1.6}},step.mechanism)
          ),
          React.createElement('div',{style:{background:"#f8f9fa",borderRadius:9,padding:"7px 10px",borderRight:`3px solid ${step.color}`}},
            React.createElement('div',{style:{fontSize:11,color:"#555",lineHeight:1.6}},React.createElement('strong',null,"📊 الدليل: "),step.stat)
          )
        )),
        React.createElement('div',{style:{background:"#fffbea",border:"1.5px solid #f59e0b",borderRadius:13,padding:"12px 14px"}},
          React.createElement('div',{style:{fontWeight:700,fontSize:13,color:"#92400e",marginBottom:6}},"💡 نصيحة علمية ذهبية"),
          React.createElement('div',{style:{fontSize:12,color:"#78350f",lineHeight:1.8}},"التمرين وحده يمكنه استعادة الإباضة بشكل مستقل عن خسارة الوزن. الجمع بين التمرين والتغذية المناسبة ",React.createElement('strong',null,"يُضاعف النتائج")," ويُقلّل وقت الانتظار.")
        )
      ),

      // DIET TAB
      activeTab==="diet" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"🥗 التغذية الخاصة بكل نوع"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"مبني على مراجعات منهجية 2024–2025")
        ),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#1a5276,#0f3460)",borderRadius:16,padding:"14px 16px",color:"#fff",marginBottom:14}},
          React.createElement('div',{style:{fontSize:14,fontWeight:800,marginBottom:9,textAlign:"center"}},"🔬 المبدأ المشترك لكل أنواع PCOS"),
          React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}},
            ["ثبات سكر الدم = ثبات الهرمونات","التهاب منخفض = تبويض أفضل","بروتين في كل وجبة = عضلات + شبع","دهون صحية = مادة خام للهرمونات"].map((p,i)=>React.createElement('div',{key:i,style:{background:"rgba(255,255,255,0.14)",borderRadius:9,padding:"7px 10px",fontSize:11,color:"#cce4ff",lineHeight:1.5}},"✓ ",p))
          )
        ),
        types.map(t=>React.createElement(DietCard,{key:t.id,type:t,isOpen:openDiet===t.id,onToggle:()=>setOpenDiet(openDiet===t.id?null:t.id)})),
        React.createElement('div',{style:{background:"#fff",borderRadius:16,padding:"14px 16px",marginTop:4,border:"1.5px solid #E67E22"}},
          React.createElement('div',{style:{fontWeight:800,fontSize:14,color:"#D35400",marginBottom:10}},"🌟 الأطعمة الذهبية لجميع أنواع PCOS"),
          React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}},
            [{food:"بذور الكتان",why:"أوميغا-3 يُوازن الأندروجينات"},{food:"شاي النعناع",why:"يخفض التستوستيرون الحر"},{food:"زيت الزيتون",why:"مضاد التهاب + يُحسّن الأنسولين"},{food:"البروكلي والكرنب",why:"DIM يُزيل الأندروجينات الزائدة"},{food:"السمك الدهني",why:"يُحسّن جودة البويضات والتبويض"},{food:"التوت الأزرق",why:"مضادات أكسدة + منخفض GI"}].map((item,i)=>React.createElement('div',{key:i,style:{background:"#fff8f0",borderRadius:9,padding:"9px",border:"1px solid #fde8cc"}},
              React.createElement('div',{style:{fontSize:12,fontWeight:700,color:"#D35400"}},item.food),
              React.createElement('div',{style:{fontSize:10,color:"#666",marginTop:2,lineHeight:1.5}},item.why)
            ))
          )
        )
      ),

      // TOXIC TAB
      activeTab==="toxic" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"⚠️ الجانب السلبي"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"عندما تُضر الرياضة بدلاً من أن تُفيد")
        ),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#1a1a2e,#7b0000)",borderRadius:16,padding:"18px",color:"#fff",marginBottom:14}},
          React.createElement('div',{style:{fontSize:14,fontWeight:800,marginBottom:10,textAlign:"center"}},"💥 قنبلة الكورتيزول"),
          React.createElement('div',{style:{fontSize:13,lineHeight:1.8,color:"#ffc0c0",textAlign:"center",marginBottom:12}},"التمرين المكثف يرفع الكورتيزول وـ ACTH بنسبة ",React.createElement('strong',{style:{color:"#fff",fontSize:18}},"40–80٪")," ويبقى مرتفعاً لساعات"),
          React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
            [{text:"لا حلقة تغذية راجعة للأندروجينات",sub:"الأندروجين يرتفع بلا توقف"},{text:"الكورتيزول يزيد مقاومة الأنسولين",sub:"يُضاعف المشكلة الأساسية"},{text:"الالتهاب يزداد بعد التمرين المفرط",sub:"كارثة للنوع الالتهابي"},{text:"الكورتيزول المزمن يُكسر العضلات",sub:"عكس ما تريدين"}].map((item,i)=>React.createElement('div',{key:i,style:{background:"rgba(255,255,255,0.1)",borderRadius:9,padding:"9px"}},
              React.createElement('div',{style:{fontSize:11,fontWeight:700,color:"#ff8080",marginBottom:3}},item.text),
              React.createElement('div',{style:{fontSize:10,color:"#ffb0b0"}},item.sub)
            ))
          )
        ),
        React.createElement('div',{style:{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:12,border:"1.5px solid #E74C3C"}},
          React.createElement('div',{style:{fontWeight:800,fontSize:14,color:"#C0392B",marginBottom:10}},"🚨 علامات تحذيرية: برنامجك يُضر PCOS"),
          ["دورتك أصبحت أكثر اضطراباً بعد بدء الرياضة","حب الشباب يزداد رغم ممارسة التمارين","إجهاق متصاعد بدلاً من الطاقة","وزن يرتفع أو يثبت بعد انخفاض أولي","نوبات شراهة على السكر والكارب بعد التمرين","مزاج أسوأ — قلق وتهيج وانعدام الحافز"].map((s,i)=>React.createElement('div',{key:i,style:{display:"flex",gap:10,padding:"7px 0",borderBottom:i<5?"1px solid #fff5f5":"none",alignItems:"center"}},
            React.createElement('div',{style:{width:25,height:25,borderRadius:"50%",background:"#fdf0f0",color:"#E74C3C",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0}},"!"),
            React.createElement('div',{style:{fontSize:12,color:"#444"}},s)
          ))
        ),
        [{title:"الكارديو اليومي المفرط",color:"#D35400",detail:"دراسة 2024-2025 (200 امرأة): مجموعة الكارديو أظهرت أعلى إجهاد (32%) وأعلى اضطراب دورة (18%) رغم أكبر خسارة وزن!"},{title:"التمرين على معدة فارغة",color:"#C0392B",detail:"يُهبط السكر → يُفجّر كورتيزول → ينتج المزيد من الأندروجينات. الحل: وجبة خفيفة (بروتين + كارب) قبل التمرين."},{title:"ثقافة المقارنة والعقاب الذاتي",color:"#7D3C98",detail:"المقارنة ترفع الكورتيزول بشكل فعلي — يتحول التمرين من علاج إلى مصدر توتر يُفاقم كل الأعراض."}].map((item,i)=>React.createElement('div',{key:i,style:{background:"#fff",borderRadius:13,padding:"12px 14px",marginBottom:10,borderRight:`4px solid ${item.color}`}},
          React.createElement('div',{style:{fontWeight:700,fontSize:13,color:item.color,marginBottom:5}},"⛔ ",item.title),
          React.createElement('div',{style:{fontSize:12,color:"#555",lineHeight:1.7}},item.detail)
        ))
      ),

      // MENTAL TAB
      activeTab==="mental" && React.createElement('div',null,
        React.createElement('div',{style:{textAlign:"center",marginBottom:16}},
          React.createElement('h2',{style:{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}},"🧠 الصحة النفسية والـ PCOS"),
          React.createElement('p',{style:{fontSize:12,color:"#888",margin:0}},"العبء النفسي الأكثر تجاهلاً في العلاج")
        ),
        React.createElement('div',{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:16}},
          [{num:"×3",label:"معدل الاكتئاب مقارنة بغير المصابات",color:"#E74C3C"},{num:"72%",label:"يعانين من اضطراب الخصوبة",color:"#9B59B6"},{num:"100%",label:"تتأثر صورة الجسم والثقة",color:"#1A5276"}].map((s,i)=>React.createElement('div',{key:i,style:{background:"#fff",borderRadius:12,padding:"12px 8px",textAlign:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"}},
            React.createElement('div',{style:{fontSize:20,fontWeight:900,color:s.color}},s.num),
            React.createElement('div',{style:{fontSize:10,color:"#666",marginTop:3,lineHeight:1.5}},s.label)
          ))
        ),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#f0e8ff,#ffe8f5)",borderRadius:16,padding:"14px 16px",marginBottom:14}},
          React.createElement('div',{style:{fontWeight:800,fontSize:14,color:"#6C3483",marginBottom:9}},"الاكتئاب في PCOS: سبب بيولوجي لا نفسي فقط"),
          ["الكورتيزول المرتفع مزمنياً يُعطّل محور HPA (محور المزاج)","الأندروجينات تؤثر مباشرة على السيروتونين والدوبامين","دراسة 2025: تحليل شعر النساء أظهر ارتفاع كورتيزول شهوراً متراكمة","الخلل الهرموني يُهيّئ بيولوجياً لاضطرابات المزاج"].map((s,i)=>React.createElement('div',{key:i,style:{display:"flex",gap:9,padding:"4px 0",fontSize:12,color:"#4a235a"}},"🔬 ",s))
        ),
        React.createElement('div',{style:{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:14,border:"1.5px solid #27AE60"}},
          React.createElement('div',{style:{fontWeight:800,fontSize:14,color:"#1E8449",marginBottom:10}},"✅ كيف تُعالج الرياضة الصحة النفسية"),
          [{icon:"🧘‍♀️",title:"بيلاتس + يوغا",detail:"يُفعّل الجهاز العصبي السمبتاوي، يخفض الكورتيزول، يُحسّن العلاقة مع الجسم"},{icon:"🏋️‍♀️",title:"تدريب القوة",detail:"يرفع الإندورفين والسيروتونين، يُحسّن صورة الجسم من خلال الشعور بالقوة"},{icon:"🚶‍♀️",title:"المشي اليومي",detail:"يرفع الدوبامين تراكمياً، يُقلل الكورتيزول، يُحسّن النوم"},{icon:"👥",title:"كلاسات جماعية",detail:"يُقلل العزلة المرتبطة بـ PCOS، يبني شعوراً بالانتماء والدعم"}].map((item,i)=>React.createElement('div',{key:i,style:{padding:"8px 0",borderBottom:i<3?"1px solid #f0f9f5":"none"}},
            React.createElement('div',{style:{display:"flex",gap:8,alignItems:"center",marginBottom:3}},
              React.createElement('span',{style:{fontSize:18}},item.icon),
              React.createElement('div',{style:{fontWeight:700,fontSize:13,color:"#333"}},item.title)
            ),
            React.createElement('div',{style:{fontSize:12,color:"#666",lineHeight:1.6,paddingRight:26}},item.detail)
          ))
        ),
        React.createElement('div',{style:{background:"linear-gradient(135deg,#1a1a2e,#0f3460)",borderRadius:16,padding:"18px",color:"#fff",textAlign:"center"}},
          React.createElement('div',{style:{fontSize:16,marginBottom:7}},"💬"),
          React.createElement('div',{style:{fontSize:13,lineHeight:1.9,color:"#c8deff"}},"التمرين الصحيح في PCOS ليس أداةً للعقاب أو لحرق السعرات.",React.createElement('br'),"هو ",React.createElement('strong',{style:{color:"#fff"}},"دواء هرموني، نفسي، وجمالي")," في آنٍ واحد —",React.createElement('br'),"لكنه يعمل فقط عندما يكون متوافقاً مع نوعكِ وجسمكِ.")
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PCOSApp));
