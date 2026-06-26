import { useState } from "react";

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
      title:"نظام منخفض المؤشر الجلايسيمي (Low-GI)",
      science:"DASH diet هو الأفضل علمياً لخفض HOMA-IR بنسبة 92% — مراجعة منهجية 2024، 19 تجربة عشوائية، 727 مشاركة",
      eat:["بروتين في كل وجبة (بيض، دجاج، سمك، عدس)","خضار غير نشوية بكميات كبيرة","حبوب كاملة: شوفان، كينوا، أرز بني","دهون صحية: أفوكادو، زيت زيتون، مكسرات","بذور الكتان والشيا (أوميغا-3 + ألياف)","قرفة: تحسّن حساسية الأنسولين (دراسات متعددة)"],
      avoid:["سكر مضاف ومشروبات محلاة","دقيق أبيض ومنتجاته","أرز وخبز أبيض","عصائر فواكه (ترفع السكر سريعاً)","وجبات كبيرة متباعدة جداً"],
      supplement:["إينوزيتول Myo+D-chiro (محاكي أنسولين طبيعي)","ماغنيسيوم (يحسّن استجابة الخلايا)","أوميغا-3 (مضاد التهاب + يحسّن التبويض)","فيتامين D (نقصه مرتبط بمقاومة الأنسولين)"],
      timing:"الإفطار الكبير أفضل: دراسة على 60 امرأة lean PCOS — إفطار كبير أنتج انخفاض 56% في مقاومة الأنسولين و50% زيادة في التبويض"
    }
  },
  {
    id:"adrenal",icon:"⚡",color:"#D35400",bg:"#FEF5EC",border:"#E67E22",
    title:"PCOS الغدة الكظرية",subtitle:"نادر نسبياً • 10% من الحالات",
    cause:"استجابة مفرطة للتوتر → ارتفاع DHEA-S من الغدة الكظرية (لا علاقة للمبيضين)",
    symptoms:["قلق مستمر","إرهاق رغم النوم","شعر خفيف","حب شباب","متعبة لكن صاحية","اضطراب النوم"],
    best:["بيلاتس 3-4x أسبوعياً","المشي والسباحة","اليوغا والتأمل"],
    avoid:["HIIT بشكل متكرر","كارديو مكثف طويل","أي تمرين مكثف يومي"],
    surprising:"DHEA-S لا يُختبر روتينياً! كثيرات يُعالَجن خطأً كأنهن مقاومات للأنسولين",
    diet:{
      title:"نظام داعم للغدة الكظرية ومضاد للتوتر",
      science:"التوتر المزمن يرفع الكورتيزول الذي يزيد DHEA-S — الغذاء المضاد للتوتر يقطع هذه الحلقة مباشرة",
      eat:["بروتين معتدل منتظم (يحافظ على استقرار سكر الدم)","كربوهيدرات معقدة في كل وجبة (تمنع ارتفاع الكورتيزول)","أطعمة غنية بالمغنيسيوم: سبانخ، شوكولا داكنة، أفوكادو","فيتامين C: فلفل ألوان، توت، حمضيات","أشواغاندا: عشبة adaptogen مدعومة بدراسات للكورتيزول","ماء كافٍ طوال اليوم"],
      avoid:["الكافيين الزائد (يرفع الكورتيزول والأدرينالين)","الصيام المتقطع (يُجهد الغدة الكظرية)","تخطي الوجبات (سكر منخفض = كورتيزول أعلى)","السكر المكرر (يسبب ارتفاعاً وانخفاضاً يُرهق الكظريات)"],
      supplement:["فيتامين B5 حمض البانتوثينيك (غذاء الكظريات)","ماغنيسيوم غليسينات (يهدّئ الجهاز العصبي)","فيتامين C بجرعات معتدلة","أشواغاندا (adaptogen موثوق للكورتيزول)"],
      timing:"وجبات كل 3-4 ساعات ضرورية — تخطي وجبة = ارتفاع كورتيزول = مزيد من DHEA-S = مزيد من الأعراض"
    }
  },
  {
    id:"inflammatory",icon:"🔥",color:"#7D3C98",bg:"#F5EEF8",border:"#9B59B6",
    title:"PCOS الالتهابي",subtitle:"التهاب مزمن منخفض الدرجة",
    cause:"التهاب مزمن ← يرفع الأندروجينات ← يُعطل الإباضة — حلقة مفرغة: التهاب → مقاومة أنسولين → التهاب",
    symptoms:["صداع متكرر","آلام مفاصل","إجهاق غير مُفسَّر","إكزيما أو بسوريازيس","اضطراب معوي IBS","CRP مرتفع في الدم"],
    best:["بيلاتس يحسّن الدورة الدموية ويخفض الالتهاب","تدريب قوة معتدل","تغذية مضادة للالتهاب"],
    avoid:["تمارين مكثفة ترفع الالتهاب مؤقتاً","حجم تدريبي عالٍ"],
    surprising:"جلسة تمرين مكثفة واحدة ترفع السيتوكينات الالتهابية مؤقتاً — خطير لهذا النوع",
    diet:{
      title:"النظام المتوسطي المضاد للالتهاب",
      science:"النظام المتوسطي الأعلى فعالية لخفض CRP والالتهاب في PCOS — Frontiers in Endocrinology 2024",
      eat:["سمك سلمون وسردين وماكريل (أوميغا-3 عالي)","زيت زيتون بكر ممتاز يومياً","كركم مع فلفل أسود (كيوسيرسيتين + بيبيرين)","زنجبيل طازج أو مجفف","توت أزرق، فراولة، رمان (مضادات أكسدة قوية)","خضار داكنة: بروكلي، كرنب، سبانخ"],
      avoid:["السكر والمحليات الصناعية","الزيوت المكررة: زيت الذرة وفول الصويا","الأطعمة المعالجة والمواد الحافظة","الغلوتين لمن لديهن حساسية معوية","الألبان غير المخمرة عند بعض النساء"],
      supplement:["NAC N-Acetyl Cysteine (MVP مضاد الالتهاب في PCOS)","أوميغا-3 بجرعة 2-3g يومياً","كركمين مع بيبيرين","بروبيوتيك (صحة الأمعاء = خفض الالتهاب)","فيتامين D (نقصه مرتبط بزيادة الالتهاب)"],
      timing:"تجنبي الأكل المتأخر جداً — الالتهاب يرتفع مع اضطراب الساعة البيولوجية والنوم المتأخر"
    }
  },
  {
    id:"postpill",icon:"💊",color:"#117A65",bg:"#E8F8F5",border:"#1ABC9C",
    title:"PCOS ما بعد الحبوب",subtitle:"مؤقت • يستمر 3-12 شهراً",
    cause:"الحبوب تكبح المحور الهرموني → عند الإيقاف: اضطراب مؤقت في إشارات الإباضة",
    symptoms:["دورات غير منتظمة بعد إيقاف الحبوب","أندروجينات مرتفعة مؤقتاً","DHEA-S طبيعي","مقاومة أنسولين طبيعية"],
    best:["مقاومة خفيفة","بيلاتس","مشي يومي","إدارة التوتر والصبر"],
    avoid:["تقييد حاد للسعرات + تمرين مكثف في آنٍ واحد","الكارديو المفرط"],
    surprising:"كثير من النساء لا يكنّ مصابات بـ PCOS أصلاً — الحبوب كانت تُخفي الدورة الطبيعية فقط",
    diet:{
      title:"نظام تعويض المغذيات وإعادة التوازن الهرموني",
      science:"الحبوب تستنزف عدة عناصر غذائية أساسية — إعادة تعبئتها تُسرّع استعادة التبويض الطبيعي",
      eat:["زنك: بذور اليقطين، لحم عشبي، كاجو (ضروري لإنتاج البروجيستيرون)","B6 وB12: بيض، دجاج، سمك (تستنزفهما الحبوب)","حمض الفوليك: خضار ورقية، عدس، بذور الشمس","ماغنيسيوم: شوكولا داكنة، لوز، سبانخ","الكوليسترول الصحي: بيض، زيتون (مادة خام للهرمونات)"],
      avoid:["البلاستيك وBPA مُعطّلات هرمونية","الصويا بكميات كبيرة (فيتواستروجين)","الكحول (يُثقل الكبد المسؤول عن معالجة الهرمونات)"],
      supplement:["B-Complex عالي الجودة (تعويض ما استنزفته الحبوب)","زنك 15-30mg يومياً","ماغنيسيوم","فيتامين D3+K2"],
      timing:"وجبات منتظمة لدعم الكبد في معالجة الهرمونات المتراكمة — تجنبي الوجبات الكبيرة النادرة"
    }
  },
  {
    id:"lean",icon:"🪶",color:"#1A5276",bg:"#EBF5FB",border:"#2E86C1",
    title:"Lean PCOS • السليم وزنياً",subtitle:"20-30% من الحالات • الأكثر سوء تشخيص",
    cause:"وزن طبيعي أو منخفض لكن مع اضطراب هرموني كامل: أندروجينات مرتفعة + دورات غير منتظمة",
    symptoms:["وزن طبيعي أو منخفض","دورات غير منتظمة","صعوبة بناء عضلات","حب شباب رغم النحافة","تعب مزمن","لا تبدو عليكِ PCOS"],
    best:["تدريب مقاومة تدريجي (الأهم)","فائض سعراتي + بروتين كافٍ 1.6-2g/kg","بيلاتس لتحسين التوتر","إدارة الكورتيزول أولاً"],
    avoid:["خسارة وزن إضافية","تمارين الحرق المكثفة","المقارنة بنساء PCOS ذوات الوزن الزائد"],
    surprising:"الكورتيزول المرتفع يكسر العضلات (تأثير كاتابوليكي) — التوتر النفسي يمنع بناء الجسم حرفياً",
    diet:{
      title:"نظام بناء عضلي + مضاد التهاب (بدون قيود سعرات)",
      science:"Lean PCOS تحمل التهاباً مرتفعاً بشكل مستقل عن الوزن — تحتاج غذاءً بانياً وليس مقيِّداً (PMC, 2021)",
      eat:["فائض سعراتي خفيف +200-300 سعرة للبناء العضلي","بروتين عالٍ: 1.6-2g لكل كيلو وزن يومياً","كربوهيدرات معقدة بشكل حر — لا قيود صارمة","دهون صحية كافية: أفوكادو، مكسرات، زيت زيتون","أطعمة غنية بالحديد (قد يكون منخفضاً في هذا النوع)","كولاجين لدعم المفاصل والجلد"],
      avoid:["تقييد السعرات (يزيد الكورتيزول ويُفاقم PCOS)","الأنظمة الصارمة للتنحيف","القهوة على معدة فارغة (ترفع الكورتيزول)"],
      supplement:["إينوزيتول (حتى في غياب مقاومة الأنسولين الظاهرة)","NAC مضاد الالتهاب — مهم جداً لـ lean PCOS","ماغنيسيوم لخفض الكورتيزول ودعم النوم","أوميغا-3 للالتهاب المزمن المخفي","فيتامين D: كثيرات lean PCOS لديهن نقص مخفي"],
      timing:"وجبات كل 3-4 ساعات — تخطي الوجبات يزيد الكورتيزول بشكل حاد في هذا النوع تحديداً"
    }
  }
];

const pillars=[
  {icon:"🏋️‍♀️",title:"تدريب المقاومة",color:"#C0392B",points:["الأقوى أثراً على مقاومة الأنسولين","يخفض التستوستيرون الحر","يزيد SHBG يقيّد الأندروجينات","يُقلل الدهون الحشوية","2-3 مرات أسبوعياً بأيام غير متتالية"]},
  {icon:"🧘‍♀️",title:"بيلاتس",color:"#7D3C98",points:["يُفعّل الجهاز العصبي السمبتاوي (خفض الكورتيزول)","يُنظّم الدورة الشهرية دراسة 2024","يبني عضلات الكور العميقة والحوض","يُحسّن صورة الجسم والصحة النفسية","آمن لجميع أنواع PCOS"]},
  {icon:"🚶‍♀️",title:"الحركة المعتدلة",color:"#117A65",points:["30 دقيقة مشي يومياً تحسّن الإباضة","يخفض الكورتيزول تراكمياً","لا يضغط على المحور الكظري","مناسب لكل أنواع PCOS","يُقلل مقاومة الأنسولين بفعالية"]},
  {icon:"⚡",title:"HIIT بحذر",color:"#D35400",points:["فعّال لمقاومة الأنسولين meta-analysis 2023","يخفض التستوستيرون في بعض الدراسات","الحد الأقصى مرتين أسبوعياً","ممنوع في Adrenal PCOS","يرفع الكورتيزول 40-80% لساعات"]}
];

const hourglassData=[
  {zone:"الكتفين",exercises:["رفع جانبي بالأثقال","تمرين الكتف المحوري في بيلاتس","تمارين الصدر بالضغط"],goal:"توسيع الجزء العلوي"},
  {zone:"الخصر",exercises:["تمارين المائل في بيلاتس","Russian Twists","تمارين الكور العميق","تخفيض دهون البطن بتحسين الأنسولين"],goal:"تعريف وتضييق الوسط"},
  {zone:"الردفين والوركين",exercises:["Hip Thrusts الأهم","Sumo Squats","Romanian Deadlifts","سلسلة الأرجل الجانبية في بيلاتس"],goal:"بناء حجم الأسفل"}
];

const toxicSigns=["دورتك أصبحت أكثر اضطراباً بعد بدء الرياضة","حب الشباب يزداد رغم ممارسة التمارين","إجهاق متصاعد بدلاً من الطاقة","وزن يرتفع أو يثبت بعد انخفاض أولي","نوبات شراهة على السكر والكارب بعد التمرين","مزاج أسوأ — قلق وتهيج وانعدام الحافز"];

const fertilitySteps=[
  {
    phase:"المرحلة 1 — أسابيع 1-4",color:"#C0392B",icon:"🌱",title:"بناء الأساس الهرموني",
    exercise:["مشي يومي 30-40 دقيقة بإيقاع معتدل","بيلاتس 2x أسبوعياً (يُهيّئ عضلات الحوض)","تمارين تنفس عميق يومياً"],
    mechanism:"خفض الكورتيزول يُعيد توازن محور HPO — الخطوة الأولى الضرورية قبل أي تحسن في التبويض",
    stat:"30 دقيقة تمرين 3x أسبوعياً يزيد فرص الحمل حتى بدون خسارة وزن — Palomba et al."
  },
  {
    phase:"المرحلة 2 — أسابيع 4-12",color:"#E67E22",icon:"🌿",title:"تحسين الإباضة بتدريب القوة",
    exercise:["تدريب مقاومة 3x أسبوعياً تركيز على الأرجل والكور","بيلاتس 2x أسبوعياً","المشي اليومي محافظاً عليه"],
    mechanism:"بناء العضلات يزيد SHBG → يُقيّد التستوستيرون الحر → تنخفض الأندروجينات → تعود الإباضة",
    stat:"دراسة 2024 (100 امرأة PCOS): تدريب القوة أنتج 2.3 دورة تبويض مقابل 0.9 في المجموعة الضابطة (p<0.001)"
  },
  {
    phase:"المرحلة 3 — أسابيع 12+",color:"#27AE60",icon:"🌸",title:"تعزيز الخصوبة والاستدامة",
    exercise:["الحفاظ على الروتين — الانقطاع يعيد الأعراض","إضافة بيلاتس + يوغا للدعم النفسي","تقليل HIIT قرب محاولة الحمل"],
    mechanism:"التحسن في تكوين الجسم يُعيد انتظام الدورة في 38% من الحالات مقابل 12% بدون تمرين",
    stat:"5-10% خسارة وزن تُعيد الإباضة لـ 50-60% من النساء غير المتبيّضات — لا يُشترط الوصول لـ BMI طبيعي"
  }
];

const fertilityFacts=[
  {icon:"📊",text:"تدريب القوة ينتج 2.3 دورة تبويض/6 أشهر مقابل 0.9 فقط بدون تمرين (دراسة 2024, n=100)"},
  {icon:"⚡",text:"HIIT يُحسّن مقاومة الأنسولين بنسبة 17% في PCOS — University of California"},
  {icon:"🚶‍♀️",text:"30 دقيقة مشي 3x أسبوعياً كافٍ لرفع فرص الحمل في النساء ذوات الوزن الزائد"},
  {icon:"🏋️‍♀️",text:"تمرين 24 أسبوعاً أعاد انتظام الدورة في 38% مقابل 12% في المجموعة الضابطة"},
  {icon:"💪",text:"انخفاض HOMA-IR بمقدار 0.57 يرفع SHBG بنسبة 7.2% وهو ما يُقيّد الأندروجينات الزائدة"},
  {icon:"🌿",text:"تمرين 50+ ساعة تراكمي = الأثر الأكبر على خفض مؤشر الأندروجين الحر FAI"}
];

/* ──────────────────── SUB-COMPONENTS ──────────────────── */
const TypeCard=({type,isOpen,onToggle})=>(
  <div style={{border:`2px solid ${type.border}`,borderRadius:16,marginBottom:14,overflow:"hidden",background:"#fff",boxShadow:isOpen?`0 4px 20px ${type.color}22`:"0 2px 8px #0001",transition:"box-shadow .3s"}}>
    <button onClick={onToggle} style={{width:"100%",background:isOpen?type.bg:"#fff",border:"none",padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"right",transition:"background .2s"}}>
      <span style={{fontSize:28}}>{type.icon}</span>
      <div style={{flex:1,textAlign:"right"}}>
        <div style={{fontWeight:800,fontSize:16,color:type.color}}>{type.title}</div>
        <div style={{fontSize:12,color:"#666",marginTop:2}}>{type.subtitle}</div>
      </div>
      <span style={{fontSize:18,color:type.color,transform:isOpen?"rotate(180deg)":"rotate(0)",transition:"transform .3s"}}>▾</span>
    </button>
    {isOpen&&(
      <div style={{padding:"0 18px 18px",background:type.bg,direction:"rtl"}}>
        <div style={{background:"#fff8",borderRadius:10,padding:"10px 12px",marginBottom:12,borderRight:`4px solid ${type.color}`}}>
          <div style={{fontSize:11,color:"#888",marginBottom:3,fontWeight:700}}>السبب الجذري</div>
          <div style={{fontSize:13,color:"#333",lineHeight:1.7}}>{type.cause}</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
          <div style={{background:"#fff",borderRadius:10,padding:10}}>
            <div style={{fontSize:11,fontWeight:700,color:"#555",marginBottom:6}}>🩺 الأعراض</div>
            {type.symptoms.map((s,i)=><div key={i} style={{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}}><span style={{color:type.color}}>•</span>{s}</div>)}
          </div>
          <div style={{background:"#fff",borderRadius:10,padding:10}}>
            <div style={{fontSize:11,fontWeight:700,color:"#27AE60",marginBottom:6}}>✅ الأمثل</div>
            {type.best.map((s,i)=><div key={i} style={{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}}><span style={{color:"#27AE60"}}>✓</span>{s}</div>)}
            <div style={{fontSize:11,fontWeight:700,color:"#E74C3C",marginBottom:4,marginTop:8}}>⛔ تجنبي</div>
            {type.avoid.map((s,i)=><div key={i} style={{fontSize:12,color:"#444",padding:"2px 0",display:"flex",gap:5}}><span style={{color:"#E74C3C"}}>✗</span>{s}</div>)}
          </div>
        </div>
        <div style={{background:`${type.color}18`,borderRadius:10,padding:"8px 12px",borderRight:`3px solid ${type.color}`}}>
          <span style={{fontSize:11,fontWeight:700,color:type.color}}>💡 حقيقة مفاجئة: </span>
          <span style={{fontSize:12,color:"#333"}}>{type.surprising}</span>
        </div>
      </div>
    )}
  </div>
);

const DietCard=({type,isOpen,onToggle})=>(
  <div style={{border:`2px solid ${type.border}`,borderRadius:16,marginBottom:14,overflow:"hidden",background:"#fff",boxShadow:isOpen?`0 4px 20px ${type.color}22`:"0 2px 8px #0001",transition:"box-shadow .3s"}}>
    <button onClick={onToggle} style={{width:"100%",background:isOpen?type.bg:"#fff",border:"none",padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"right"}}>
      <span style={{fontSize:26}}>{type.icon}</span>
      <div style={{flex:1,textAlign:"right"}}>
        <div style={{fontWeight:800,fontSize:15,color:type.color}}>{type.title}</div>
        <div style={{fontSize:12,fontWeight:600,color:"#555",marginTop:2}}>{type.diet.title}</div>
      </div>
      <span style={{fontSize:18,color:type.color,transform:isOpen?"rotate(180deg)":"rotate(0)",transition:"transform .3s"}}>▾</span>
    </button>
    {isOpen&&(
      <div style={{padding:"0 18px 18px",background:type.bg,direction:"rtl"}}>
        <div style={{background:`${type.color}15`,borderRadius:10,padding:"10px 12px",marginBottom:12,borderRight:`4px solid ${type.color}`}}>
          <div style={{fontSize:11,fontWeight:700,color:type.color,marginBottom:3}}>📚 الدليل العلمي</div>
          <div style={{fontSize:12,color:"#333",lineHeight:1.7}}>{type.diet.science}</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
          <div style={{background:"#f0fff4",borderRadius:10,padding:10,border:"1px solid #a3e4b7"}}>
            <div style={{fontSize:11,fontWeight:700,color:"#27AE60",marginBottom:6}}>✅ كلي بحرية</div>
            {type.diet.eat.map((e,i)=><div key={i} style={{fontSize:11,color:"#2d6a4f",padding:"2px 0",display:"flex",gap:5,lineHeight:1.5}}><span style={{color:"#27AE60",flexShrink:0}}>+</span>{e}</div>)}
          </div>
          <div style={{background:"#fff5f5",borderRadius:10,padding:10,border:"1px solid #f5c6cb"}}>
            <div style={{fontSize:11,fontWeight:700,color:"#E74C3C",marginBottom:6}}>⛔ تجنبي</div>
            {type.diet.avoid.map((e,i)=><div key={i} style={{fontSize:11,color:"#721c24",padding:"2px 0",display:"flex",gap:5,lineHeight:1.5}}><span style={{color:"#E74C3C",flexShrink:0}}>–</span>{e}</div>)}
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:10,padding:10,marginBottom:8,border:"1px solid #e0d7ff"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#6C3483",marginBottom:6}}>💊 مكملات موثوقة علمياً</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
            {type.diet.supplement.map((s,i)=><span key={i} style={{background:"#f0e8ff",color:"#6C3483",fontSize:10,padding:"3px 9px",borderRadius:20,border:"1px solid #d8b4fe"}}>{s}</span>)}
          </div>
        </div>
        <div style={{background:`${type.color}10`,borderRadius:10,padding:"8px 12px",borderRight:`3px solid ${type.color}`}}>
          <span style={{fontSize:11,fontWeight:700,color:type.color}}>⏰ توقيت: </span>
          <span style={{fontSize:12,color:"#444"}}>{type.diet.timing}</span>
        </div>
      </div>
    )}
  </div>
);

/* ──────────────────── MAIN APP ──────────────────── */
export default function PCOSApp(){
  const [openType,setOpenType]=useState("insulin");
  const [openDiet,setOpenDiet]=useState("insulin");
  const [activeTab,setActiveTab]=useState("types");

  const tabs=[
    {id:"types",label:"أنواع PCOS"},
    {id:"exercise",label:"الرياضة"},
    {id:"hourglass",label:"الساعة الرملية"},
    {id:"fertility",label:"🤰 الخصوبة"},
    {id:"diet",label:"🥗 التغذية"},
    {id:"toxic",label:"⚠️ السلبيات"},
    {id:"mental",label:"🧠 النفسية"},
  ];

  return(
    <div style={{fontFamily:"'Segoe UI',Tahoma,Arial,sans-serif",direction:"rtl",background:"linear-gradient(135deg,#f8f3ff 0%,#fff5f5 50%,#f0f9ff 100%)",minHeight:"100vh",paddingBottom:40}}>

      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",color:"#fff",padding:"26px 18px 18px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-30,left:-30,width:100,height:100,borderRadius:"50%",background:"#ffffff08"}}/>
        <div style={{position:"absolute",bottom:-20,right:-20,width:70,height:70,borderRadius:"50%",background:"#ffffff06"}}/>
        <div style={{fontSize:34,marginBottom:5}}>🧬</div>
        <h1 style={{margin:0,fontSize:19,fontWeight:900}}>الرياضة والبيلاتس وتأثيرهما على PCOS</h1>
        <p style={{margin:"5px 0 0",fontSize:12,color:"#a8c6ff"}}>ملخص علمي شامل • أبحاث 2023–2026 • 7 محاور تفاعلية</p>
        <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:10,flexWrap:"wrap"}}>
          {["5 أنواع","التغذية لكل نوع","الخصوبة","السلبيات","Lean PCOS"].map(b=>(
            <span key={b} style={{background:"#ffffff14",padding:"2px 10px",borderRadius:20,fontSize:10,color:"#cce4ff"}}>{b}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{background:"#fff",boxShadow:"0 2px 10px #0001",overflowX:"auto"}}>
        <div style={{display:"flex",minWidth:"max-content",padding:"0 4px"}}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{padding:"12px 13px",border:"none",background:"none",cursor:"pointer",fontSize:12,fontWeight:activeTab===t.id?800:500,color:activeTab===t.id?"#6C3483":"#777",borderBottom:activeTab===t.id?"3px solid #6C3483":"3px solid transparent",transition:"all .2s",whiteSpace:"nowrap"}}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:720,margin:"0 auto",padding:"16px 14px"}}>

        {/* ── TYPES ── */}
        {activeTab==="types"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>أنواع PCOS الخمسة</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>اضغطي على كل نوع لعرض التفاصيل الكاملة</p>
            </div>
            {types.map(t=><TypeCard key={t.id} type={t} isOpen={openType===t.id} onToggle={()=>setOpenType(openType===t.id?null:t.id)}/>)}
            <div style={{background:"#fff3cd",border:"1px solid #ffc107",borderRadius:12,padding:"12px 14px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#856404",marginBottom:3}}>⚠️ ملاحظة علمية</div>
              <div style={{fontSize:12,color:"#664d03",lineHeight:1.7}}>معظم النساء يُظهرن عناصر من أكثر من نوع. تحديد النوع <strong>المسيطر</strong> هو المفتاح لبروتوكول التمرين والتغذية الصحيح.</div>
            </div>
          </div>
        )}

        {/* ── EXERCISE ── */}
        {activeTab==="exercise"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>الركائز الأربع للتمرين</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>ليست كل التمارين متساوية في PCOS</p>
            </div>
            {pillars.map((p,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:16,padding:"14px 18px",marginBottom:12,borderRight:`5px solid ${p.color}`,boxShadow:"0 2px 10px #0001"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <span style={{fontSize:24}}>{p.icon}</span>
                  <div style={{fontWeight:800,fontSize:14,color:p.color}}>{p.title}</div>
                </div>
                {p.points.map((pt,j)=>(
                  <div key={j} style={{display:"flex",gap:10,padding:"4px 0",alignItems:"flex-start"}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:`${p.color}18`,color:p.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,flexShrink:0}}>{j+1}</div>
                    <div style={{fontSize:13,color:"#333",lineHeight:1.6}}>{pt}</div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{background:"linear-gradient(135deg,#1a1a2e,#0f3460)",borderRadius:16,padding:"18px",color:"#fff"}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12,textAlign:"center"}}>📅 الجدول الأسبوعي المثالي</div>
              {[{day:"الأحد",type:"تدريب مقاومة",color:"#E74C3C",emoji:"🏋️‍♀️"},{day:"الاثنين",type:"بيلاتس + مشي",color:"#9B59B6",emoji:"🧘‍♀️"},{day:"الثلاثاء",type:"تدريب مقاومة",color:"#E74C3C",emoji:"🏋️‍♀️"},{day:"الأربعاء",type:"مشي / راحة نشطة",color:"#27AE60",emoji:"🚶‍♀️"},{day:"الخميس",type:"HIIT خفيف اختياري",color:"#E67E22",emoji:"⚡"},{day:"الجمعة",type:"بيلاتس + تنفس",color:"#9B59B6",emoji:"🧘‍♀️"},{day:"السبت",type:"راحة كاملة",color:"#3498DB",emoji:"😴"}].map((d,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"6px 0",borderBottom:i<6?"1px solid #ffffff10":"none"}}>
                  <span style={{fontSize:16}}>{d.emoji}</span>
                  <div style={{width:65,fontSize:11,color:"#aaa"}}>{d.day}</div>
                  <div style={{flex:1,fontSize:12,color:"#fff"}}>{d.type}</div>
                  <div style={{width:9,height:9,borderRadius:"50%",background:d.color,flexShrink:0}}/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── HOURGLASS ── */}
        {activeTab==="hourglass"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>🕰️ شكل الساعة الرملية مع PCOS</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>هدف جمالي وصحي في آنٍ واحد</p>
            </div>
            <div style={{background:"#fff0f0",border:"1.5px solid #E74C3C",borderRadius:14,padding:"12px 14px",marginBottom:16}}>
              <div style={{fontWeight:700,color:"#C0392B",marginBottom:6,fontSize:13}}>🚧 لماذا تُصعّب PCOS تحقيق هذا الشكل؟</div>
              {["الأندروجينات توجّه الدهون إلى البطن تحديداً","مقاومة الأنسولين تحافظ على تخزين دهون الوسط","الكورتيزول المرتفع يزيد دهون البطن الحشوية","صعوبة بناء العضلات بسبب الخلل الهرموني"].map((s,i)=><div key={i} style={{fontSize:12,color:"#666",padding:"2px 0",display:"flex",gap:7}}><span style={{color:"#E74C3C"}}>×</span>{s}</div>)}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:16}}>
              <div style={{flexShrink:0}}>
                <svg width="75" height="150" viewBox="0 0 80 160">
                  <defs>
                    <linearGradient id="tg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#C0392B" stopOpacity=".7"/><stop offset="100%" stopColor="#E74C3C" stopOpacity=".5"/></linearGradient>
                    <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7D3C98" stopOpacity=".7"/><stop offset="100%" stopColor="#9B59B6" stopOpacity=".5"/></linearGradient>
                  </defs>
                  <ellipse cx="40" cy="30" rx="34" ry="24" fill="url(#tg2)"/>
                  <ellipse cx="40" cy="80" rx="14" ry="12" fill="#fff" stroke="#ddd" strokeWidth="2"/>
                  <ellipse cx="40" cy="130" rx="34" ry="24" fill="url(#bg3)"/>
                  <line x1="6" y1="30" x2="26" y2="80" stroke="#C0392B" strokeWidth="1.5" strokeOpacity=".4"/>
                  <line x1="74" y1="30" x2="54" y2="80" stroke="#C0392B" strokeWidth="1.5" strokeOpacity=".4"/>
                  <line x1="26" y1="80" x2="6" y2="130" stroke="#7D3C98" strokeWidth="1.5" strokeOpacity=".4"/>
                  <line x1="54" y1="80" x2="74" y2="130" stroke="#7D3C98" strokeWidth="1.5" strokeOpacity=".4"/>
                  <text x="40" y="34" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold">كتفين</text>
                  <text x="40" y="83" textAnchor="middle" fontSize="7" fill="#333">خصر</text>
                  <text x="40" y="134" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold">وركين</text>
                </svg>
              </div>
              <div style={{flex:1}}>
                {hourglassData.map((z,i)=>(
                  <div key={i} style={{marginBottom:12}}>
                    <div style={{fontWeight:700,fontSize:13,color:i===0?"#C0392B":i===1?"#1A5276":"#7D3C98",marginBottom:4}}>{z.zone} ← {z.goal}</div>
                    {z.exercises.map((e,j)=><div key={j} style={{fontSize:12,color:"#555",padding:"2px 0",display:"flex",gap:7,alignItems:"center"}}><div style={{width:5,height:5,borderRadius:"50%",background:i===0?"#C0392B":i===1?"#2E86C1":"#9B59B6",flexShrink:0}}/>{e}</div>)}
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:"linear-gradient(135deg,#f8f3ff,#fff0f8)",border:"1.5px solid #9B59B6",borderRadius:14,padding:"14px"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#6C3483",marginBottom:10,textAlign:"center"}}>طريقة 3-2-1 المثالية</div>
              {[{n:"3",color:"#E74C3C",label:"جلسات تدريب قوة",detail:"Hip Thrusts, Squats, Deadlifts, Shoulder Press"},{n:"2",color:"#9B59B6",label:"جلسات بيلاتس",detail:"كور، حوض، تعريف الخصر، تنسيق الجسم"},{n:"1",color:"#27AE60",label:"جلسة كارديو",detail:"مشي سريع، سباحة، دراجة — 30-45 دقيقة"}].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:12,padding:"7px 0",borderBottom:i<2?"1px solid #f0e6ff":"none",alignItems:"flex-start"}}>
                  <div style={{width:32,height:32,borderRadius:"50%",background:item.color,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,flexShrink:0}}>{item.n}</div>
                  <div><div style={{fontWeight:700,fontSize:13,color:"#333"}}>{item.label}</div><div style={{fontSize:11,color:"#888",marginTop:2}}>{item.detail}</div></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FERTILITY ── */}
        {activeTab==="fertility"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>🤰 الرياضة وتحسين نسبة الحمل</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>ما تقوله أبحاث 2023–2025 بوضوح</p>
            </div>
            <div style={{background:"linear-gradient(135deg,#0f3460,#1a1a2e)",borderRadius:16,padding:"20px 18px",color:"#fff",marginBottom:16,textAlign:"center"}}>
              <div style={{fontSize:12,color:"#a8c6ff",marginBottom:5}}>الحقيقة الأهم في أبحاث الخصوبة وـ PCOS</div>
              <div style={{fontSize:26,fontWeight:900,color:"#fff",lineHeight:1.3}}>5–10٪ خسارة وزن</div>
              <div style={{fontSize:14,color:"#cce4ff",marginTop:5}}>تُعيد الإباضة لـ <strong style={{color:"#fff",fontSize:18}}>50–60٪</strong> من النساء غير المتبيّضات</div>
              <div style={{fontSize:11,color:"#7fb3d3",marginTop:6}}>European Society of Endocrinology + HealthRX 2025</div>
              <div style={{background:"#ffffff14",borderRadius:10,padding:"10px 12px",marginTop:12,textAlign:"right"}}>
                <div style={{fontSize:12,color:"#cce4ff",lineHeight:1.7}}>⚠️ لا يُشترط الوصول إلى BMI طبيعي — التحسن الجزئي يكفي لاستئناف التبويض</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:16}}>
              {fertilityFacts.map((f,i)=>(
                <div key={i} style={{background:"#fff",borderRadius:12,padding:"11px",boxShadow:"0 2px 8px #0001",border:"1px solid #e8e0ff"}}>
                  <div style={{fontSize:20,marginBottom:5}}>{f.icon}</div>
                  <div style={{fontSize:11,color:"#333",lineHeight:1.6}}>{f.text}</div>
                </div>
              ))}
            </div>
            <div style={{fontWeight:800,fontSize:14,color:"#1a1a2e",marginBottom:12,textAlign:"center"}}>🗓️ بروتوكول التمرين التدريجي للخصوبة</div>
            {fertilitySteps.map((step,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:12,boxShadow:"0 2px 10px #0001",borderRight:`5px solid ${step.color}`}}>
                <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:9}}>
                  <span style={{fontSize:24}}>{step.icon}</span>
                  <div>
                    <div style={{fontSize:11,color:step.color,fontWeight:700}}>{step.phase}</div>
                    <div style={{fontSize:14,fontWeight:800,color:"#1a1a2e"}}>{step.title}</div>
                  </div>
                </div>
                <div style={{marginBottom:9}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#555",marginBottom:5}}>🏃‍♀️ التمارين الموصى بها</div>
                  {step.exercise.map((e,j)=><div key={j} style={{fontSize:12,color:"#333",padding:"2px 0",display:"flex",gap:7}}><span style={{color:step.color}}>•</span>{e}</div>)}
                </div>
                <div style={{background:`${step.color}12`,borderRadius:9,padding:"7px 10px",marginBottom:7}}>
                  <div style={{fontSize:11,fontWeight:700,color:step.color,marginBottom:2}}>⚙️ الآلية البيولوجية</div>
                  <div style={{fontSize:11,color:"#444",lineHeight:1.6}}>{step.mechanism}</div>
                </div>
                <div style={{background:"#f8f9fa",borderRadius:9,padding:"7px 10px",borderRight:`3px solid ${step.color}`}}>
                  <div style={{fontSize:11,color:"#555",lineHeight:1.6}}>📊 <strong>الدليل: </strong>{step.stat}</div>
                </div>
              </div>
            ))}
            <div style={{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:12,border:"1.5px solid #27AE60"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#1E8449",marginBottom:10}}>📊 مقارنة أنواع التمرين على التبويض</div>
              {[
                {type:"تدريب القوة",effect:"الأقوى",detail:"2.3 دورة تبويض/6أشهر مقابل 0.9 بدون تمرين (2024)",bar:90,color:"#27AE60"},
                {type:"كارديو معتدل",effect:"جيد",detail:"30 دق 3x أسبوعياً كافية للنساء ذوات الوزن الزائد",bar:70,color:"#3498DB"},
                {type:"HIIT معتدل",effect:"فعّال",detail:"يُحسّن الأنسولين المحفّز للإباضة — خطر الإفراط",bar:75,color:"#E67E22"},
                {type:"بيلاتس + يوغا",effect:"مدعم ضروري",detail:"يخفض الكورتيزول المانع للإباضة",bar:55,color:"#9B59B6"},
                {type:"الإفراط بالكارديو",effect:"ضار",detail:"يرفع الكورتيزول → يُعطّل التبويض → يزيد الأندروجينات",bar:12,color:"#E74C3C"},
              ].map((item,i)=>(
                <div key={i} style={{marginBottom:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#333"}}>{item.type}</div>
                    <div style={{fontSize:11,fontWeight:700,color:item.color}}>{item.effect}</div>
                  </div>
                  <div style={{background:"#f5f5f5",borderRadius:20,height:7,marginBottom:3}}>
                    <div style={{width:`${item.bar}%`,height:"100%",borderRadius:20,background:item.color}}/>
                  </div>
                  <div style={{fontSize:10,color:"#666",lineHeight:1.5}}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#fffbea",border:"1.5px solid #f59e0b",borderRadius:13,padding:"12px 14px"}}>
              <div style={{fontWeight:700,fontSize:13,color:"#92400e",marginBottom:6}}>💡 نصيحة علمية ذهبية</div>
              <div style={{fontSize:12,color:"#78350f",lineHeight:1.8}}>التمرين وحده يمكنه استعادة الإباضة بشكل مستقل عن خسارة الوزن. الآلية: تقليل الكورتيزول → تحسين الأنسولين → انخفاض الأندروجينات → عودة التبويض. الجمع بين التمرين والتغذية المناسبة <strong>يُضاعف النتائج</strong> ويُقلّل وقت الانتظار.</div>
            </div>
          </div>
        )}

        {/* ── DIET ── */}
        {activeTab==="diet"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>🥗 التغذية الخاصة بكل نوع</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>مبني على مراجعات منهجية 2024–2025</p>
            </div>
            <div style={{background:"linear-gradient(135deg,#1a5276,#0f3460)",borderRadius:16,padding:"14px 16px",color:"#fff",marginBottom:14}}>
              <div style={{fontSize:14,fontWeight:800,marginBottom:9,textAlign:"center"}}>🔬 المبدأ المشترك لكل أنواع PCOS</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
                {["ثبات سكر الدم = ثبات الهرمونات","التهاب منخفض = تبويض أفضل","بروتين في كل وجبة = عضلات + شبع","دهون صحية = مادة خام للهرمونات"].map((p,i)=>(
                  <div key={i} style={{background:"#ffffff14",borderRadius:9,padding:"7px 10px",fontSize:11,color:"#cce4ff",lineHeight:1.5}}>✓ {p}</div>
                ))}
              </div>
            </div>
            <div style={{background:"#f0fff4",border:"1.5px solid #27AE60",borderRadius:13,padding:"12px 14px",marginBottom:14}}>
              <div style={{fontWeight:700,fontSize:13,color:"#1E8449",marginBottom:7}}>🏆 تصنيف الأنظمة الغذائية (مراجعة منهجية 2024 — 727 امرأة)</div>
              {[{rank:1,name:"DASH Diet",benefit:"الأفضل لخفض مقاومة الأنسولين HOMA-IR",score:"92%",color:"#27AE60"},{rank:2,name:"النظام المتوسطي",benefit:"الأفضل لخفض الالتهاب والكوليسترول",score:"85%",color:"#3498DB"},{rank:3,name:"منخفض GI",benefit:"تثبيت السكر والأنسولين",score:"78%",color:"#E67E22"},{rank:4,name:"كيتو معدّل",benefit:"خسارة وزن سريعة + تحسين أنسولين",score:"70%",color:"#9B59B6"}].map((d,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"6px 0",borderBottom:i<3?"1px solid #d4f5de":"none"}}>
                  <div style={{width:24,height:24,borderRadius:"50%",background:d.color,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:12,flexShrink:0}}>{d.rank}</div>
                  <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#333"}}>{d.name}</div><div style={{fontSize:11,color:"#666"}}>{d.benefit}</div></div>
                  <div style={{fontSize:12,fontWeight:800,color:d.color}}>{d.score}</div>
                </div>
              ))}
            </div>
            {types.map(t=><DietCard key={t.id} type={t} isOpen={openDiet===t.id} onToggle={()=>setOpenDiet(openDiet===t.id?null:t.id)}/>)}
            <div style={{background:"#fff",borderRadius:16,padding:"14px 16px",marginTop:4,border:"1.5px solid #E67E22"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#D35400",marginBottom:10}}>🌟 الأطعمة الذهبية لجميع أنواع PCOS</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
                {[{food:"بذور الكتان",why:"أوميغا-3 + فيتواستروجين يُوازن الأندروجينات"},{food:"شاي النعناع",why:"دراسات تُثبت خفض التستوستيرون الحر"},{food:"زيت الزيتون البكر",why:"مضاد التهاب + يُحسّن الأنسولين"},{food:"البروكلي والكرنب",why:"DIM يساعد الكبد على التخلص من الأندروجينات"},{food:"السمك الدهني",why:"أوميغا-3 يُحسّن جودة البويضات والتبويض"},{food:"التوت الأزرق",why:"مضادات أكسدة قوية + منخفض GI"}].map((item,i)=>(
                  <div key={i} style={{background:"#fff8f0",borderRadius:9,padding:"9px",border:"1px solid #fde8cc"}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#D35400"}}>{item.food}</div>
                    <div style={{fontSize:10,color:"#666",marginTop:2,lineHeight:1.5}}>{item.why}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TOXIC ── */}
        {activeTab==="toxic"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>⚠️ الجانب السلبي</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>عندما تُضر الرياضة بدلاً من أن تُفيد</p>
            </div>
            <div style={{background:"linear-gradient(135deg,#1a1a2e,#7b0000)",borderRadius:16,padding:"18px",color:"#fff",marginBottom:14}}>
              <div style={{fontSize:14,fontWeight:800,marginBottom:10,textAlign:"center"}}>💥 قنبلة الكورتيزول</div>
              <div style={{fontSize:13,lineHeight:1.8,color:"#ffc0c0",textAlign:"center",marginBottom:12}}>التمرين المكثف يرفع الكورتيزول وـ ACTH بنسبة <strong style={{color:"#fff",fontSize:18}}>40–80٪</strong> ويبقى مرتفعاً لساعات</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[{text:"لا حلقة تغذية راجعة للأندروجينات",sub:"الأندروجين يرتفع بلا توقف"},{text:"الكورتيزول يزيد مقاومة الأنسولين",sub:"يُضاعف المشكلة الأساسية"},{text:"الالتهاب يزداد بعد التمرين المفرط",sub:"كارثة للنوع الالتهابي"},{text:"الكورتيزول المزمن يُكسر العضلات",sub:"عكس ما تريدين"}].map((item,i)=>(
                  <div key={i} style={{background:"#ffffff12",borderRadius:9,padding:"9px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#ff8080",marginBottom:3}}>{item.text}</div>
                    <div style={{fontSize:10,color:"#ffb0b0"}}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:12,border:"1.5px solid #E74C3C"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#C0392B",marginBottom:10}}>🚨 علامات تحذيرية</div>
              {toxicSigns.map((s,i)=>(
                <div key={i} style={{display:"flex",gap:10,padding:"7px 0",borderBottom:i<toxicSigns.length-1?"1px solid #fff5f5":"none",alignItems:"center"}}>
                  <div style={{width:25,height:25,borderRadius:"50%",background:"#fdf0f0",color:"#E74C3C",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0}}>!</div>
                  <div style={{fontSize:12,color:"#444"}}>{s}</div>
                </div>
              ))}
            </div>
            {[{title:"الكارديو اليومي المفرط",color:"#D35400",detail:"دراسة 2024-2025 (200 امرأة): مجموعة الكارديو حصراً — أعلى إجهاد (32%) وأعلى اضطراب دورة (18%) رغم أكبر خسارة وزن!"},{title:"التمرين على معدة فارغة",color:"#C0392B",detail:"يُهبط السكر → يُفجّر كورتيزول وأدرينالين → ينتج المزيد من الأندروجينات. الحل: وجبة خفيفة (بروتين + كارب) قبل التمرين."},{title:"ثقافة المقارنة والعقاب الذاتي",color:"#7D3C98",detail:"المقارنة في الجيم وعلى السوشيال ميديا ترفع الكورتيزول بشكل فعلي — يتحول التمرين من علاج إلى مصدر توتر يُفاقم كل الأعراض."}].map((item,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:13,padding:"12px 14px",marginBottom:10,borderRight:`4px solid ${item.color}`}}>
                <div style={{fontWeight:700,fontSize:13,color:item.color,marginBottom:5}}>⛔ {item.title}</div>
                <div style={{fontSize:12,color:"#555",lineHeight:1.7}}>{item.detail}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── MENTAL ── */}
        {activeTab==="mental"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:16}}>
              <h2 style={{fontSize:16,fontWeight:800,color:"#1a1a2e",margin:"0 0 3px"}}>🧠 الصحة النفسية والـ PCOS</h2>
              <p style={{fontSize:12,color:"#888",margin:0}}>العبء النفسي الأكثر تجاهلاً في العلاج</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,marginBottom:16}}>
              {[{num:"×3",label:"معدل الاكتئاب مقارنة بغير المصابات",color:"#E74C3C"},{num:"72%",label:"يعانين من اضطراب الخصوبة",color:"#9B59B6"},{num:"100%",label:"تتأثر صورة الجسم والثقة",color:"#1A5276"}].map((s,i)=>(
                <div key={i} style={{background:"#fff",borderRadius:12,padding:"12px 8px",textAlign:"center",boxShadow:"0 2px 10px #0001"}}>
                  <div style={{fontSize:20,fontWeight:900,color:s.color}}>{s.num}</div>
                  <div style={{fontSize:10,color:"#666",marginTop:3,lineHeight:1.5}}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{background:"linear-gradient(135deg,#f0e8ff,#ffe8f5)",borderRadius:16,padding:"14px 16px",marginBottom:14,border:"1px solid #ddd"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#6C3483",marginBottom:9}}>الاكتئاب في PCOS: سبب بيولوجي لا نفسي فقط</div>
              {["الكورتيزول المرتفع مزمنياً يُعطّل محور HPA (محور المزاج)","الأندروجينات تؤثر مباشرة على السيروتونين والدوبامين","دراسة 2025: تحليل شعر النساء أظهر ارتفاع كورتيزول شهوراً متراكمة","الخلل الهرموني يُهيّئ بيولوجياً لاضطرابات المزاج"].map((s,i)=><div key={i} style={{display:"flex",gap:9,padding:"4px 0",fontSize:12,color:"#4a235a"}}><span>🔬</span>{s}</div>)}
            </div>
            <div style={{background:"#fff",borderRadius:16,padding:"14px 16px",marginBottom:14,border:"1.5px solid #27AE60"}}>
              <div style={{fontWeight:800,fontSize:14,color:"#1E8449",marginBottom:10}}>✅ كيف تُعالج الرياضة الصحة النفسية</div>
              {[{icon:"🧘‍♀️",title:"بيلاتس + يوغا",detail:"يُفعّل الجهاز العصبي السمبتاوي، يخفض الكورتيزول، يُحسّن الوعي الجسدي والعلاقة مع الجسم"},{icon:"🏋️‍♀️",title:"تدريب القوة",detail:"يرفع الإندورفين والسيروتونين، يُحسّن صورة الجسم من خلال الشعور بالقوة والتقدم"},{icon:"🚶‍♀️",title:"المشي اليومي",detail:"يرفع الدوبامين تراكمياً، يُقلل الكورتيزول، يُحسّن النوم"},{icon:"👥",title:"كلاسات جماعية",detail:"يُقلل العزلة المرتبطة بـ PCOS، يبني شعوراً بالانتماء والدعم المتبادل"}].map((item,i)=>(
                <div key={i} style={{padding:"8px 0",borderBottom:i<3?"1px solid #f0f9f5":"none"}}>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:3}}>
                    <span style={{fontSize:18}}>{item.icon}</span>
                    <div style={{fontWeight:700,fontSize:13,color:"#333"}}>{item.title}</div>
                  </div>
                  <div style={{fontSize:12,color:"#666",lineHeight:1.6,paddingRight:26}}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div style={{background:"linear-gradient(135deg,#1a1a2e,#0f3460)",borderRadius:16,padding:"18px",color:"#fff",textAlign:"center"}}>
              <div style={{fontSize:16,marginBottom:7}}>💬</div>
              <div style={{fontSize:13,lineHeight:1.9,color:"#c8deff"}}>
                التمرين الصحيح في PCOS ليس أداةً للعقاب أو لحرق السعرات.<br/>
                هو <strong style={{color:"#fff"}}>دواء هرموني، نفسي، وجمالي</strong> في آنٍ واحد —<br/>
                لكنه يعمل فقط عندما يكون متوافقاً مع نوعكِ وجسمكِ.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
