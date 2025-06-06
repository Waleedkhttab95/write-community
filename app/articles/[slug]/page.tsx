import React from 'react';
import { Clock, User, ArrowRight, ChevronLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

// Dummy articles data
const articles = {
  'writing-basics': {
    title: 'أُنس التدوين!',
    content: `كان يُبهرني في صغري صديقٌ للعائلة ملازم لاجتماعاتنا، طالما تميز عن البقية بالمعلومات التاريخية التي يتحدث بها، ويُراهن الجميع على دقتها، وإذا احتد النقاش؛ ذهب مسرعًا إلى سيارته وجاء بـ"دفتر الذكريات"، ليثبت به لمن كان يُشكك.

هذه القدرة العجيبة؛ حفزتني على تدوين يومياتي منذُ عشرين عامًا وفق أربعة محاور: (الحدث، التاريخ، الرأي الشخصي، الشعور اللحظي)، مما أنتج مجموعتي الخاصة من الذكريات الموثقة للأحداث والمشاعر المسجلة، عبر عدد من الأدوات البسيطة: بدايةً من التدوين الورقي نهاية كل يوم، مرورًا بالأجهزة الذكية واستخدام "ملاحظات آيفون"، حتى تعرفت على برنامج "Day One" الذي أحدث نقلة كبيرة في تدوين اليوميات.

من المفارقات الونيسة للتدوين؛ أني وجدت شهر أكتوبر هو الأكثر اكتئابًا، والسبب يعود في نظري إلى كونه موعد الانتقال من فصل الصيف إلى الشتاء، ننعم ببعض الأيام اللطيفة لتداهمنا الحرارة مرة أخرى لأيام. كما أن نهاية مارس هي الأجمل مزاجيًا، لتزامنه مع توزيع التعويضات السنوية التي دائمًا ما يتبعها سفرة خارجية.

ولأن اليوميات سرية لما تحملهُ من خصوصية، سأذكر بعض العموميات التي توضح المغزى؛ وجدت دائمًا أن دعواتي الصادقة التي تضّرعت وانكسرت بها لله قد قُبلت، وهذا عكس ما كُنت أعتقده! ومما لاحظته كذلك أني أصبحت أكتشف السوداويين وأصحاب الطاقة السلبية سريعًا من خلال سطور التدوين، فيما أن النعمة العظيمة هي: بأني أعي وأجدد من نفسي وأطور مفاهيمي في التعامل مع الآخر، مثل قاعدة "تفاعل ولا تتأثر" التي اعتنقتها حرفيًا؛ وجعلتني أفضل نفسيًا دائمًا.

التدوين مهمة بسيطة لكنها لا تنجح بالتمني والمحاولات غير الجادة بل بالرصد والتسجيل اليومي حتى نعتاده فيثمر معرفيًا على مستقبلنا.`,
    author: 'محمد الغيهب',
    date: '2025-05-16',
    category: 'مقالات تعليمية',
    image: 'https://images.pexels.com/photos/6980425/pexels-photo-6980425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'reading-writing': {
    title: 'لماذا تكتب؟',
    content: `تحدث سارتر في سيرة طفولته "الكلمات" عن علاقته بالكتابة، ومما قاله:
"كان وجودي في الكتابة، كنت أهرب لها من الكبار، لم أكن أوجد إلا لأكتب".

يبرر كثير من الكتّاب استمرارهم في الكتابة بقضائهم وقتًا طويلًا معها، وأنهم لا يجيدون غيرها، وكثير من الإجابات في كتاب "لماذا نكتب" كانت من هذا النوع.

الاضطرار لا فضيلة فيه. 
أن تكتب يعني أن تذهب إلى الكتابة باختيارك، واضطرار أفكارك ومشاعرك، لا أن تذهب إليها رغمًا عنك.

فرق شاسع بين الاضطرار الحياتي للكتابة، والاضطرار الفكري لها، الأولى هي أن تذهب إليها لتعيش بها، والأخرى أن تذهب إليها لأنك لا تستطيع العيش بدونها.

يكره نيتشه الإجابة على سؤال "لماذا تكتب"، ويقول: "أشمئز من الكلام عن الكتابة، ولكن لماذا نكتب؟ 
بيني وبينك، لأنني لم أجد وسيلة أخرى للتخلص بها من أفكاري".

هل لديك وسيلة أخرى للتعبير عن مشاعرك؟ 
والتخلص من أفكارك؟ 
ومع ذلك اخترت الكتابة!`,
    author: 'رائد العيد',
    date: '2025-05-17',
    category: 'مقالات رأي',
    image: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'modern-narrative': {
    title: 'نصائحٌ لكاتبٍ شاب',
    content: `آني ديلارد، كاتبة أمريكية فازت بجائزة بولتزر لكتابها "الحج في خور تنكر" وعدد من أعمال النثر السردي، وهي محاضرة جامعية في جامعة ويسيلان في كونيتيكت بالولايات المتحدة. أرسلت المقالة أدناه لطلاب الكتابة الإبداعية في جامعة نورث كارولاينا بتشابيل هيل بعد عدة حوارات خاضتها آني ديلارد معهم:
 
بعد مغادرتي لتشابيل هيل، فكرت بكل الأِشياء التي أود قولها لكم. تجدون هنا بعضها:

1. ابذل كل حياتك، أعظم قدرٍ ممكن منها، لشيءٍ أكبر من ذاتك، وأكبر من المتعة: لله، لمساعدة المحتاج، للمساهمة في المعرفة، لترك أثر في الأدب، أو شيء آخر. بذلك تجد السعادة، وهي أعظم من المتعة.

2. كان أحد الفيزيائيين العظماء الذين درّسوا في معهد ماساتشوستس للتقنية ونشر عدة كتب وأوراق بحث مهمة غالبًا ما تأتيه فكرة في منتصف الليل، يقوم من فراشه، يغتسل، وينظف شعره، ويحلق دقنه. ويرتدي لباسه كاملًا، بقميص نظيف، وحذاء ملمع، ومعطفًا وربطة عنق. ويجلس حينها على مكتبه ويكتب فكرته. عندما سأله أحد أصدقائي عن سبب هذا النظام قال: "لماذا!"، متفاجئًا من السؤال، "لعظمة الفيزياء". وبالمناسبة، كان فتى عربيًا صغيرًا أميًا بدون أي تعليم، سافر مرة واحدة عندما كان في الثالثة عشرة أو الرابعة عشرة إلى مكان ما. وتحدث معه السائق الذي اصطحبه لمدة خمس ساعات، حتى أدرك أن الصبي الذي أمامه عبقري في التفكير الرياضي، فتكفل السائق بتعليم الصبي حتى الدكتوراه في الخارج على نفقته الخاصة، وهذا النوع من الأشياء يحدث في البلدان العربية حيث يمارس الناس دينهم بالفعل.

3. في حال توفر لك الخيار، عِش في أجزاء مختلفة في البلاد لمدة سنة.

4. لا تضع نفسك أبدًا أبدًا في وضع لا يكون لديك شيءُ لتقرأه أو لتكتبه. ستدخل في دوامة اكتئاب. يجب أن تقوم بشيء مفيد للعالم، بشيء مفيد بما لا يدع مجال للإنكار؛ تحتاج لممارسة الرياضة، وتحتاج للناس أيضًا.

5. اقرأ للمتعة. إذا كنت تحب تولستوي، اقرأ لتولستوي؛ وإذا كنت تحب دوستويفسكي، اقرأ لدوستويفكسي. واذهب بعيدًا بعض الشيء، لكن لا تقرأ شيئًا مختلفًا عن طبعك بشكل كامل وتقول بعدها "لن أتمكن من الكتابة بهذا الشكل أبدًا". بالتأكيد لن يمكنك. اقرأ كتبًا تود كتابتها. فإذا أردت كتابة الأدب، اقرأ الأدب، واكتب الكتب التي تود قراءتها. اتبع غرابتك.

6. ستجد وقتًا للقراءة بعد الجامعة.

7. لا تقلق على ما ستفعله خلال السنة الأولى بعد الجامعة. لن يكون هو عملك لبقية حياتك.

8. قرأت مرة أن العاملين في مجال الفن يستغرقون ثمانية سنين تقريبًا لاكتشاف الفن الذي يستهويهم. أخبر والديك بذلك.

9. درجة الماجستير في الفنون الجميلة والكتابة الإبداعية ممتعة، وكثير منها رخيص أو مجاني.

10. تعلّم النحو. اقتن كتاب نحو واقرأه مرتين أو ثلاث في السنة، (كتاب ستنك ووايت نموذج رائع).

11. تعلّم الترقيم: فهي طبلتك الصغيرة، أحد الأدوات القليلة المتوفرة لديك للإشارة للقارئ أين الإيقاع والتركيز. وإذا أخطأت فيها ولو قليلًا، سيرمي المحرر مسودة كتابك. لا تتشابه علامات الترقيم مع النوتات الموسيقية: فهي لا تحدد طول الوقفة، ولكن تشير للارتباطات المنطقية. هناك أشخاص كثر يعرفون ذلك جيدًا، ويجب أن تكون من ضمنهم لتبدأ مسيرتك.

12. تأكد من إملائك؛ ودقق. واجعل أحداً يدقق نصوصك كذلك.

13. لا تستخدم صيغة الأفعال المبنية للمجهول، ويمكنك إعادة كتابة أي جملة.

14. لا تغير الإملاء بناءً على اللكنة المستخدمة. دع تركيب الجملة والكلمات تحدد نطقها.

15. لا تستخدم كلمات بديلة لـ"مشى" أو "قال" سوى "مشى" و"قال". أعلم أن معلمتك/معلمك في الصف السادس أخبرتك غير ذلك. لأنها أخبرتني أيضّا، ولا زالت تقول ذلك لطلابها.

16. ضع القارئ دائمًا في مكان وزمان وكرر ذلك مجددًا. يستعجل الكتاب المبتدئون بالكتابة عن المشاعر، الحيوات الداخلية. وبدلًا من ذلك، ركز على المظاهر الخارجية؛ العب على وتر الحواس الخمسة؛ أعط تاريخ الشخص والمكان وشكل الشخص والمكان. استخدم اسم العائلة والاسم الأول، وأثناء كتابتك ضع كل شيء في مكان وزمان.

17. لا تصف المشاعر.

18. الطريق لعاطفة القارئ هي حواسه.

19. في حال وجود جزء مهم في نصك أو قصيدتك، أعطه مساحة كافية. أعني عدة سنتيمترات. ينبغي للقارئ أن يقضي وقتًا مع الموضوع ليهتم بأمره. لا تتجنب المشاهد الطويلة، أطلها أكثر.

20. كتابة المشاهد لا تعني مشاهد تلفزيونية. لا تحتاج لحوارات مملة: "عزيزتي لقد وصلت! أين البيرة؟"، "في الثلاجة!" أعتقد أن كثيرًا من القصص والروايات تحوي على حوارات أكثر من اللازم.

21. تصوير الطبيعي ليس فضيلة، بل الفضيلة في خلق شيء جديد ومثير. إذا وجدت الحياة مملة والناس كريهين، استمر بالتفكير حتى تراهم بطريقة أخرى. ما الذي سيدفع القارئ إلى قراءة وصف مفصل لأكثر الأشياء إزعاجًا في حياته اليومية؟

22. لا تستخدم كلمات زائدة، فالجملة كالآلة: لديها وظيفة تؤديها. فالكلمة الزائدة في الجملة كالجورب في الآلة.

23. اشتر قصصًا ودواوين شعر بأغلفة مقواة. اطلب قصصًا ودواوين شعر كهدايا لكل من تعرف. أعطها كهدايا للجميع. لم يُذكر أن قميصًا أو كنزة صوف غيرت حياة أحدهم.

24. اشتر كتبًا من الباعة المستقلين، ولا تشتر من الشركات التجارية. لأن الشركات التجارية -لأسباب معقدة- تساهم في اجتثاث النشر الأدبي. وبشكل مشابه، سجل اسمك وصوّت، وإذا لم تصوّت، لا تشتك.

25. اكتب للقراء. اسأل نفسك كيف ستؤثر كل جملة وكل شطر في القارئ. بذلك ستستطيع معرفة ما إذا كنت تقودهم بشكل خاطئ، أو ممل. من الصعب أن تقرأ شيئًا كتبته للتو؛ لأنه يبدو واضحًا وقويًا. ضع نصك جانبًا وأعد كتابته لاحقًا. لا تكرر قراءته مرةً تلو الأخرى، لأنه سيقودك للانتظار وقتًا أطول حتى تراه بعين جديدة.  

26. لا تكتب عن نفسك. فكّر بالكتب التي تحبها، أليست مواضيعها هي المفضلة لديك؟ عادةً ما يتكلم الأشخاص المملون عن أنفسهم.

27. وحدة العمل/النص أكثر أهمية من أي شيء آخر. يجب عليك حذف الاستطرادات التي استمتعت بكتابتها.

28. يتوجب عليك عادةً إعادة كتابة أول ربع أو ثلث ما كنت تكتب. لا تهدر كثيرًا من الوقت لتحسين هذا الجزء؛ سيتوجب عليك أن تأخذ نفسًا عميقًا وتضعه جانبًا في كل الأحوال، وبمجرد انتهائك من العمل سيكون لديك شعور أوضح عمّا هو عنه. مزّق مَدرج انطلاقك؛ فقد ساعدك بالانطلاق، ولست بحاجته الآن. وهذا هو السبب الذي يدفع بعض الكتّاب للقول بأن الكتابة تتطلب "شجاعة". وهي فعلًا كذلك. سيتوجب عليك دائمًا وأبدًا اختيار الكتاب على حساب مشاعرك وأمانيك.

29. تجاهل مشاعرك حيال عملك، لوجود خطرٍ مهني. فلو كنت تكتب كتابًا، استمر بالعمل عليه، وانطلق أعمق وأعمق، وعند إحساسك بأنه سيء: استمر بإعادة صياغته وتحسينه حتى تشعر بروعته. حين تكون صغيرًا وفي بداياتك، يُفضّل على الأغلب أن تكتب شيئًا آخر عوضًا عن العمل على شيء مبني على فكرة سيئة في المقام الأول. اكتب شيئًا آخر؛ وبعدها اكتب شيئًا آخر: وبعدها كذلك اكتب شيئًا آخر. ومهما بلغت خبرتك، لا توجد أي علاقة، مباشرةً كانت أم غير مباشرة، بين مشاعرك الحالية حيال جودة عملك وجودته الفعلية، كل ما يمكنك عمله هو تجاهل مشاعرك بشكل كامل، وهو أمر صعب، ولكن يمكنك فعله.

30. عندما تعمل ككاتب بشكل رسمي، ثلاث ساعات إلى أربع في اليوم، اذهب إلى غرفتك مع كتابك كل يوم، بغض النظر عن مشاعرك. في حال توقفت ليوم واحد، فستحتاج إلى ثلاثة أيام متعبة ليعود إيمانك بالنص مرةً أخرى. وليكن لديك مكان يمكنك أن تترك عملك مكشوفًا فيه، حتى لا تحتاج لإخراجه وترتيبه مرةً أخرى قبل أن تبدأ مجددًا.

31. كلما قرأت أكثر، كلما كتبت أكثر. وكلما زادت جودة ما تقرأ، ستزداد جودة ما تكتب. لديك سنين عديدة، ويمكنك تطوير ذوق للأدب الجيد في نهاية المطاف. سجل كل الكتب التي تود قراءتها بقائمة. ستتعلم سريعًا أن كل "الأعمال الكلاسيكية" تقريبًا هي كتب مثيرة بشكل لا نهائي. ويمكنك إعادة قراءتها طيلة حياتك كل عشر سنوات تقريبًا، وعديد منها تضيء لك في مراحل مختلفة من حياتك.  

32. لا تحدد قصة حقيقية ممتعة حول حياة، أو حادثة تاريخية، وتقرر تحويلها إلى رواية بدل أن تكون سيرة ذاتية أو سردًا تاريخيًّا. عادة الروايات المبنية على حقائق مزيج عكر لا يمكن للقرّاء تحديد الحقيقي فيه. ولن يلمسها الناشرون. اكتبها كقصة واقعية إذا أردت كتابتها.

33. إذا أردت كتابة رواية، وأنت لا زلت تشتري الروايات ذات الغلاف المقوى بانتظام، انطلق واكتب رواية. ومع ذلك، مجال النشر تغير، وأصبحت الروايات صعبة النشر. إذا أردت تحسين احتمالات أن الناس ستقرأ ما تكتب، اكتب سردًا واقعيًا.

34. في الأدب القصصي، أو الشعر، أو السرد الواقعي كلما بحثت أكثر، كلما توفرت لك أدوات للعب بها. فأنت تكتب لفئة القراء المثقفة في البلاد، وهو تحد ممتع أن تخبرهم بشيء لا يعرفوه مسبقًا. فكلما قرأت أكثر، ستعرف أكثر ممّا يعرفون.

35. لا يستطيع أحد مساعدتك إذا علقت في نص ما، فقط أنت من يمكنه إيجاد طريقةٍ ما، لأنك الوحيد الذي يرى احتمالات النص. في كل عمل، هناك استحالة محتومة ستكتشفها عاجلًا أم آجلًا، سبب متأصل وكامن لاستحالة الاستمرار بالعمل، يمكنك إيجاد طرق حوله. وعادةّ أن الطريق المؤلم حوله هو التخلص من الفكرة الأساسية، الفكرة التي بدأت بها.

36. النشر ليس مقياس الامتياز. وهذا من أصعب وأهم الأشياء التي نتعلمها عن النشر. في السابق إذا كانت المسودة "جيدة" فهي "تستحق" النشر. وهذا لم يعد صحيحًا الآن وخلال العشرين سنة الماضية، ولم تُنقَّ الأخبار لتغيير المفاهيم. يقول بعضهم: "لذلك، حتى فاوكنر لن يتمكن من نشر كتبه اليوم!" كمبالغة. وفي الواقع، إن فاوكنر بالتأكيد لن يستطيع نشر أعماله اليوم ولا ينكر الناشرون ذلك. فسوق الأدب القصصي بالأغلفة المقواة هم المتزوجون الأغنياء أو أرملة بلغ عمرها فوق الخمسين حتى تبدأ بشراء كتب الأدب.

صغار الناشرين الذين يختارون أعمالًا جديدة هم من نساء نيويورك في العشرينات من عمرهن، واللاتي يتركز اهتمامهم عمّا هو أنيق هذا الأسبوع في نيويورك، واللاتي أصبحن خبيرات فيما ستشتريه النساء الأكبر عمرًا من كتب. لكل 8 كتب من أدب الواقع يوجد كتاب قصصي. فرصة أن تدخل مسودة إلى دار نشر وتنشره هي 1 في 3000. الوكلاء عادةً من يرسل المسودات. وأغلب الوكلاء لن يلمسوا الكتب القصصية حتى.

37. حيت ترفض مجلة قصتك أو قصيدتك، لا يعني ذلك أنها لم تكن "جيدة" كفاية. بل يعني أن المجلة تعتقد أنها لا تتناسب مع قرائها المحددين. يفكر المحررون دائمًا بالقراء: كيف ستفيد القارئ؟ وهناك أيضًا عقيدة للمشاهير في هذه الدولة، والعديد من المجلات تنشر للمشاهير فقط، وترفض أعمالًا أفضل للكتّاب غير المعروفين.  

38. يجب عليك معرفة هذه الأمور في عقلك الباطن، وتحتاج لأنها تنساها وتكتب أيًّا كان ما تود كتابته.`,
    author: 'آني ديلارد',
    date: '2025-06-30',
    category: 'مقالات نقدية',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'hemingway-tips': {
    title: 'نصائح كتابية من إرنست همنغواي',
    content: `ترجمة لمقالة تضم أهم النصائح الكتابية التي قدمها الروائي الأمريكي الشهير إرنست همنغواي للكتاب الطموحين، مع تعليقات توضيحية.

    إرنست همنغواي، أحد أشهر الكتاب في القرن العشرين، ترك وراءه إرثاً غنياً من النصائح والتوجيهات للكتاب الطموحين. في هذا المقال، نستعرض أهم هذه النصائح مع تحليل وتوضيح لكل منها.

    أولاً، "اكتب ما تعرفه". يؤكد همنغواي على أهمية الكتابة من واقع الخبرة والمعرفة. الكتابة عن ما نعرفه بشكل عميق تضيف مصداقية وعمقاً للنص.

    ثانياً، "استخدم جمل قصيرة". من أشهر نصائح همنغواي هي استخدام جمل قصيرة ومباشرة. هذا الأسلوب يجعل النص أكثر وضوحاً وقوة.

    ثالثاً، "اكتب كل يوم". يؤكد همنغواي على أهمية الممارسة اليومية. الكتابة المنتظمة تساعد في تطوير المهارات وتنمية الأسلوب.

    رابعاً، "اقرأ أعمالك بصوت عالٍ". هذه النصيحة تساعد في اكتشاف الإيقاع والتناغم في النص، وتكشف عن أي مشاكل في التدفق اللغوي.

    وأخيراً، "توقف عندما تعرف ما سيحدث بعد ذلك". هذه النصيحة الذكية تساعد في الحفاظ على الزخم الإبداعي للجلسة الكتابية التالية.`,
    author: 'ترجمة: نورة القحطاني',
    date: '2025-08-05',
    category: 'ترجمات أدبية',
    image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'self-editing': {
    title: 'التحرير الذاتي: دليل الكاتب لتنقيح عمله',
    content: `ترجمة لدليل شامل حول كيفية تحرير ومراجعة النصوص ذاتياً، يقدم خطوات عملية للكشف عن نقاط الضعف في النص وتحسينه.

    التحرير الذاتي هو مهارة أساسية يحتاجها كل كاتب. في هذا المقال، نقدم دليلاً شاملاً لمساعدة الكتاب على تحرير أعمالهم بشكل فعال.

    أولاً، خذ مسافة من النص. من المهم أن تأخذ فترة راحة بعد الانتهاء من الكتابة قبل البدء في التحرير. هذا يساعد في رؤية النص بعين جديدة.

    ثانياً، ركز على البنية الكلية. ابدأ بمراجعة البنية العامة للنص، وتأكد من تناسق الأفكار وتسلسلها المنطقي.

    ثالثاً، انتبه للتفاصيل. بعد مراجعة البنية، انتقل إلى التفاصيل مثل الأخطاء الإملائية والنحوية، واختيار الكلمات المناسبة.

    رابعاً، استخدم أدوات التحرير. هناك العديد من الأدوات الرقمية التي يمكن أن تساعد في عملية التحرير، مثل المدقق الإملائي والنحوي.

    وأخيراً، اطلب رأي الآخرين. بعد الانتهاء من التحرير الذاتي، من المفيد الحصول على آراء خارجية من قراء موثوقين.`,
    author: 'ترجمة: خالد العبيدي',
    date: '2025-07-12',
    category: 'ترجمات عملية',
    image: 'https://images.pexels.com/photos/6980464/pexels-photo-6980464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'digital-publishing': {
    title: 'مستقبل النشر الرقمي: توقعات وتحديات',
    content: `ترجمة لدراسة استشرافية حول مستقبل صناعة النشر الرقمي عالمياً وعربياً، وأبرز التحديات والفرص التي ستواجه الكتاب والناشرين.

    يشهد عالم النشر الرقمي تطورات سريعة ومتغيرة. في هذا المقال، نستكشف مستقبل هذه الصناعة والتحديات التي تواجهها.

    أولاً، تطور منصات النشر. شهدنا تطوراً كبيراً في منصات النشر الرقمي، مما أتاح فرصاً جديدة للكتاب للوصول إلى قرائهم مباشرة.

    ثانياً، تحديات حقوق النشر. مع سهولة النسخ واللصق، أصبحت حماية حقوق الملكية الفكرية تحدياً كبيراً في العصر الرقمي.

    ثالثاً، تطور نماذج الأعمال. ظهرت نماذج أعمال جديدة في النشر الرقمي، مثل الاشتراكات والدفع حسب الفصل.

    رابعاً، تأثير الذكاء الاصطناعي. بدأ الذكاء الاصطناعي يلعب دوراً في صناعة النشر، من تحرير النصوص إلى توليد المحتوى.

    وأخيراً، مستقبل الكتب المطبوعة. رغم التطور الرقمي، لا يزال للكتب المطبوعة مكانتها، مما يطرح تساؤلات حول مستقبل التعايش بين الشكلين.`,
    author: 'ترجمة: لمياء الصالح',
    date: '2025-06-18',
    category: 'ترجمات تقنية',
    image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'writing-journey': {
    title: 'رحلتي مع الكتابة: من الهواية إلى الاحتراف',
    content: `تجربة شخصية لكاتب شاب يشارك رحلته في عالم الكتابة، والتحديات التي واجهها، وكيف تحولت الكتابة من هواية إلى مهنة احترافية.

    رحلتي مع الكتابة بدأت كهواية بسيطة، ثم تحولت إلى شغف، وأخيراً إلى مهنة احترافية. في هذا المقال، أشارك معكم تجربتي الشخصية.

    أولاً، البداية. بدأت الكتابة كوسيلة للتعبير عن نفسي، ثم اكتشفت أنني أستمتع بها أكثر من أي شيء آخر.

    ثانياً، التحديات. واجهت العديد من التحديات، من الشك الذاتي إلى رفض الناشرين، لكن كل تحدٍ كان درساً قيماً.

    ثالثاً، النقاط المفصلية. كانت هناك لحظات حاسمة في رحلتي، مثل نشر أول مقال، وتوقيع أول عقد نشر.

    رابعاً، الدروس المستفادة. تعلمت أن النجاح في الكتابة يتطلب الصبر والمثابرة، وأن الفشل هو جزء من الرحلة.

    وأخيراً، النصائح. أشارك بعض النصائح العملية للكتاب الطموحين، بناءً على تجربتي الشخصية.`,
    author: 'عبدالله النجدي',
    date: '2025-08-20',
    category: 'تجارب شخصية',
    image: 'https://images.pexels.com/photos/4050319/pexels-photo-4050319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'social-media-writing': {
    title: 'الكتابة في زمن السوشيال ميديا',
    content: `تأملات حول تأثير وسائل التواصل الاجتماعي على أسلوب الكتابة المعاصر، وكيف يمكن للكاتب الموازنة بين متطلبات المنصات الرقمية والقيمة الأدبية.

    وسائل التواصل الاجتماعي غيرت بشكل جذري طريقة كتابتنا وتفاعلنا مع النصوص. في هذا المقال، نستكشف هذا التأثير.

    أولاً، تغير أسلوب الكتابة. أصبحت الكتابة أكثر إيجازاً ومباشرة، مع التركيز على جذب الانتباه السريع.

    ثانياً، تحديات العمق. في عصر المحتوى السريع، أصبح الحفاظ على العمق الفكري تحدياً كبيراً للكتاب.

    ثالثاً، فرص جديدة. وفرت المنصات الرقمية فرصاً جديدة للكتاب للوصول إلى جمهور أوسع وتفاعل مباشر مع القراء.

    رابعاً، الموازنة. كيف يمكن للكاتب الموازنة بين متطلبات المنصات الرقمية والحفاظ على القيمة الأدبية لعمله؟

    وأخيراً، المستقبل. ما هو مستقبل الكتابة في عصر السوشيال ميديا؟ وكيف يمكن للكتاب التكيف مع هذه التغييرات؟`,
    author: 'هدى المالكي',
    date: '2025-07-25',
    category: 'تأملات كتابية',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'echo-of-silence': {
    title: 'قصتي القصيرة: صدى الصمت',
    content: `قصة قصيرة فائزة في مسابقة مجتمع الكتابة السنوية، تستكشف عالم امرأة تعيش في عزلة اختيارية وعلاقتها المعقدة مع الكلمات والصمت.

    في شقة صغيرة في الطابق الخامس، تعيش سارة في عزلة اختيارية. اختارت الصمت كرفيق يومي، لكن الكلمات لم تتركها أبداً.

    أولاً، العزلة. اختارت سارة العزلة بعد سنوات من الضجيج والكلام الكثير. وجدت في الصمت راحة لم تعرفها من قبل.

    ثانياً، الكلمات. رغم عزلة سارة، كانت الكلمات تزورها كل يوم. تظهر في أحلامها، وتتراقص على جدران شقتها.

    ثالثاً، الكتابة. بدأت سارة تكتب. كانت تكتب في صمت، وتخفي ما تكتبه في صناديق تحت سريرها.

    رابعاً، الاكتشاف. ذات يوم، وجدت سارة أن كلماتها بدأت تتحدث بصوت عالٍ، رغم صمتها هي.

    وأخيراً، الصدى. اكتشفت سارة أن الصمت لم يكن سوى صدى لكلماتها الخاصة، التي كانت تنتظر أن تُسمع.`,
    author: 'سمية الدوسري',
    date: '2025-06-10',
    category: 'إبداعات',
    image: 'https://images.pexels.com/photos/6471854/pexels-photo-6471854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <Link href="/#articles" className="text-gold hover:text-gold-dark inline-flex items-center">
          <ChevronLeft className="ml-1" size={20} />
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom pt-24 pb-8">
        <nav className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500">
            <li className="inline-flex items-center gap-1.5">
              <Link href="/" className="hover:text-gold transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="mx-1">/</span>
              <Link href="/#articles" className="hover:text-gold transition-colors">
                المقالات
              </Link>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="mx-1">/</span>
              <span className="font-medium text-gray-900">{article.title}</span>
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gold text-white text-sm px-4 py-2 rounded-full">
              {article.category}
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User size={18} className="ml-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="ml-2" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link 
            href="/#articles"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <ChevronLeft className="ml-2" size={20} />
            العودة إلى المقالات
          </Link>
        </div>
      </div>
    </div>
  );
} 