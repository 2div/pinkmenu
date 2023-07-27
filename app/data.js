const menu = [
  {
    id: 1,
    title: 'AVOCADO POACHED EGGS',
    titleAr: 'أفوكادو بوتشد إيقز',
    category: 'Breakfast/الفطور',
    price: 3.250,
    img: '/images/Avocado-Poached-Eggs.jpg',
    desc: `2 eggs, avocado /guacamole, mix capsicum, sourdough bread,butter`,
    descAr: `اثنان (2) بيض نصف سلق ، لحم بقري مفروم ، أعشاب متنوعة ، بذور السمسم ، صلصة هولانديز`,
  },                                    
  {
    id: 2,
    title: 'BERRIES FRENCH TOAST',
    titleAr: 'توست فرنسي بالتوت',
    category: 'Breakfast/الفطور',
    price: 3.500,
    img: '/images/Berries-French-Toast.jpg',
    desc: 'FRENCH TOAST, MIX BERRIES, MAPLE ..................................................',
    descAr: `توست فرنسي ، توت مشكل ، مابل سيريب`,
  },
 {
    id: 3,
    title: 'PINK PANCAKES (OPTION W/ MAPLE OR CHOCOLATE SAUCE)',
    titleAr: 'بينك بان كيك (إختيار مع مابل سيريب أو الشوكولاته)',
    category: 'Breakfast/الفطور',
    price: 3.00,
    img: '/images/Pink Pancake chocolate.jpg',
    desc: `3 PCS PANCAKES, MIX BERRIES, ICING SUGAR, MAPLE SYRUP, BUTTER`,
    descAr: ` ثلاث (3) قطع بان كيك ، توت مشكل ، بودرة سكر ، مابل سيريب ، زبدة `,
 },
  {
    id: 4,
    title: 'SHAKSHOKA',
    titleAr: 'شكشوكة',
    category: 'Breakfast/الفطور',
    price: 3.500,
    img: '/images/Shakshoka new.jpg',
    desc: `GRILLED EGGS, MUSHROOM, TOMATO, ONION, FETA CHEESE, `,
    descAr: `بيض مشوي ، مشروم ، طماطم ، بصل ، جبنة فيتا`,
  },
  {
    id: 5,
    title: 'CLUB SANDWICH AND FRIES',
    titleAr: 'كلوب ساندويتش مع بطاط',
    category: 'Breakfast/الفطور',
    price: 4.500,
    img: '/images/sandwich.jpg',
    desc: `WHITE BREAD, MIX RANCH MAYO, TURKEY, TURKEY BACON, LETTUCE,TOMATO, EGG, SWISS CHEESE`,
    descAr: `خبز ابيض ، ميكس رانش مايو ، تركي الديك الرومي ،تركي اللحم المقدد ، خس ، طماطم ، بيضة ، جبنة سويسرية`,
  },
  {
    id: 6,
    title: 'CLASSIC EGGS BENEDICT',
    titleAr: 'بيض بينديكت الكلاسيكيه',
    category: 'Breakfast/الفطور',
    price: 3.500,
    img: '/images/Classic Egg Benedict new.jpg',
    desc: `2 POUCHED EGG, MINCED BEEF, ASSORTED HERBS, SESAME SEED HOLLANDISE SAUCE `,
    descAr: ` ثلاث (3) بيض نصف سلق ، لحم بقري مفروم ، أعشاب متنوعة ، بذور السمسم ، صلصة هولانديز `,
  },
//   {
//     id: 7,
//     title: 'CHICKEN QUESADILLA W/ SWEET POTATO',
//     title: 'كاسادييا بالدجاج مع بطاطا حلوه',

//     category: 'APPETIZERS',
//     price: 3.500,
//     img: './images/Chicken Quesadilla with Sweet Potatoes.jpg',
//     desc: `TORTILLA BREAD, MIX RANCH CHIVES, DICED CHICKEN, BLACK OLIVES,
//             MIX CAPSICUMS, CORN, MOZZARELLA CHEESE, POTATOES, ARUGULA,
//             CARROTS, SIGNATURE SAUCE, SWEET POTATO FRIES`,
//     descAr: ` خبز تورتيلا ، ميكس رانش ثوم ، مكعبات دجاج ، زيتون أسود ، فليفلة
//     مشكلة ، ذرة ، جبنة موزاريلا ، بطاطس ، جرجير ، جزر ، صلصة خاصة ،
//     بطاطا حلوة`,
//   },
//   {
//     id: 8,
//     title: 'VOLCANO BITES',
//     titleAr: 'ڤولكينو بايتس',

//     category: 'APPETIZERS',
//     price: 3.750,
//     img: './images/Volcano Bites.jpg',
//     desc: `CHICKEN BREAST WITH SPICY SAUCE, CARROTS, RANCH SAUCE`,
//     descAr: `دجاج مع صلصة حارة، جزر ، صلصة رانش`,
//   },
//   {
//     id: 9,
//     title: 'STREET STYLE FRIES',
//     titleAr: 'ستريت ستايل فرايز',

//     category: 'APPETIZERS',
//     price: 3.500,
//     img: './images/Street style fries.jpg',
//     desc: `FRESH CUT FRIES, SPECIAL SAUCE, GRILLED ONION, FRIED ONION,
//           PARMESAN CHEESE, CHEESE SAUCE, GARNISH SPRING ONION`,
//     descAr: `بطاطا مقلية طازجة، صلصة خاصة، بصل مشوي ، بصل مقلي، جبنة
//     بارميزان ، صوص جبنة، بصل أخضر مقبلات`,
//   },
//   {
//     id: 10,
//     title: 'MOZARELLA BALLS',
//     titleAr: 'كرات الموزاريل',
 
//     category: 'APPETIZERS',
//     price: 3.250,
//     img: './images/Mzzarella Balls.jpg',
//     desc: `FRESH MUSHROM, MOZZARELLA CHEESE, SRIRACHA SAUCE`,
//     descAr: `فطر فريش ، جبنة موزاريلا ، صلصة سريراتشا`,
//   },
//   {
//     id: 11,
//     title: 'DYNAMITE PINK SHRIMP',
//     titleAr: 'دايناميت بينك شريمب',
//      svg:'',
//     category: 'APPETIZERS',
//     price: 4.250,
//     img: './images/Pink dynamite shrimp.jpg',
//     desc: `8 PCS SHIRMP, PINK SAUCE, SPRING ONION, LOLOBIANDO LETTUCE`,
//     descAr: ` ثمان (8) قطع ربيان ، صلصة وردية، بصل أخضر ، خس لوبيوندو `,
//   },
//   {
//     id: 12,
//     title: 'LOS ANGELES FRIES',
//     titleAr: 'بطاط لوس انجلوس',
//     svg:'',
//     category: 'APPETIZERS',
//     price: 3.500,
//     img: './images/Los-Angeles-Fries.jpg',
//     desc: `FRESH CUT FRIES, SAUCE, CARAMELIZED ONION, CHEESE SAUCE`,
//     descAr: `بطاطا مقلية طازجة ، صوص ، بصل مكرمل ، صوص جبنة`,
//   },
//   {
//     id: 13,
//     title: 'BUFFALO CHICKEN',
//     titleAr: 'بافلو دجاج',
//     svg:'./images/Green Chilli.svg',
//     category: 'APPETIZERS',
//     price: 3.750,
//     img: './images/Buffalo-Chicken.jpg',
//     desc: `6 PCS CHICKEN, ONION, WORCESTERSHIRE SAUCE, BROWNE
//           SUGAR, WHITE PEPPER, RED HOT SAUCE, SRIRACHA, HONEY,
//           CILANTRO GREEN PASTE`,
//           descAr: ` ستة (6) قطع دجاج ، بصل ، صلصة رسيستيرشاير ، سكر بني ، فلفل أبيض 
//           صوص أحمر حار ، سريراتشا ، عسل ، عجينة الكزبرة الخضراء `,
//   },
//   {
//     id: 14,
//     title: 'BUFFALO SHRIMP',
//     titleAr: 'بافلو شريمب',
//     svg:'./images/Green Chilli.svg',
//     category: 'Appetizers / المقبلات',
//     price: 3.750,
//     img: './images/Buffalo Shrimp.jpg',
//     desc: `6 PCS SHRIMP, ONION, WORCESTERSHIRE SAUCE, BROWNE
//           SUGAR, WHITE PEPPER, RED HOT SAUCE, SRIRACHA, HONEY,
//           CILANTRO GREEN PASTE`,
//           descAr: ` ستة (6) قطع ربيان  بصل ، صلصة رسيستيرشاير ، سكر بني ، فلفل أبيض
//           صوص أحمر حار ، سريراتشا ، عسل ، عجينة الكزبرة الخضراء `,
//   },
  
//   {
//     id: 15,
//     title: 'BUFFALO MIX (CHICKEN + SHRIMP)',
//     titleAr: 'ميكس البافلو ( دجاج + شريمب )',
//     svg:'./images/Green Chilli.svg',
//     category: 'Appetizers / المقبلات',
//     price: 4.250,
//     img: './images/Buffalo Mix.jpg',
//     desc: `4 PCS CHICKEN, 4 PCS SHRIMP, ONION, WORCESTERSHIRE
//           SAUCE, BROWNE SUGAR, WHITE PEPPER, RED HOT SAUCE,
//           SRIRACHA, HONEY, CILANTRO GREEN PASTE`,
//           descAr: ` أربع (4) قطع دجاج ، 4 قطع ربيان ، بصل ، صلصة رسيستيرشاير ، سكر بني
//           فلفل أبيض ، صوص أحمر حار ، سريراتشا ، عسل ، عجينة الكزبرة الخضراء`,
//   },

//   {
//     id: 16,
//     title: 'STRAWBERRY FETA',
//     titleAr: 'سلطة الفيتا بالفراولة',
//      svg:'./images/Veg.svg',
//     category: 'Salads / السلطات',
//     price: 3.750,
//     img: './images/salads/Strawberry-Feta.jpg',
//     desc: `ROCCA, FRESH STRAWBERRIES, FETA CHEESE, ALMONDS, SLICE PINE
//            NUTS, BALSAMIC VINAIGRETTE`,
//     descAr: `جرجير ، فراولة طازجة ، جبنة فيتا ، لوز ، شرائح صنوبر ، خل بلسميك`,
//   },
//   {
//     id: 17,
//     title: 'CEASER (OPTION W/ CHICKEN OR SHRIMP)',
//     titleAr: 'سيزر (إختيار مع / دجاج او ربيان)',
//     category: 'Salads / السلطات',
//     price: 3.750,
//     img: './images/salads/Caesar Salad.jpg',
//     desc: `LETTUCE, BLACK OLIVE, CROUTONS, RANCH, PARMESAN CHEESE`,
//     descAr: `خس ، زيتون أسود ، خبز محمص ، رانش ، جبنة بارميزان`,
//   },
//   {
//     id: 18,
//     title: 'POWERHOUSE QUINOA',
//     titleAr: 'باور هاوس كينو',
//     svg:'',
//     category: 'SALADS',
//     price: 3.750,
//     img: './images/salads/Powerhouse Quinoa Salad.jpg',
//     desc: `ROCCA, QUINOA, CORN, EDAMAME, AVOCADO, CRANBERRIES,
//           PARSLEY, ALMONDS, FETA CHEESE`,
//     descAr: `جرجير ، كينوا ، ذرة ، ادامامي ، افوكادو ، توت بري ، بقدونس ، لوز ،
//     جبنة فيتا`,
//   },
//   {
//     id: 19,
//     title: 'BEETROOT SALAD',
//     titleAr: 'سلطة الشمندر',
//     svg:'',
//     category: 'SALADS',
//     price: 3.750,
//     img: './images/salads/Beetroot Salad.jpg',
//     desc: `ROCCA, FRESH BEETROOT, SPINACH, FETA CHEESE, POMEGRANATE,
//     PINE NUTS, BALSAMIC VINAIGRETTE`,
//     descAr: `جرجير ، شمندر طازج ، سبانخ ، جبنة فيتا ، رمان ، صنوبر ، خل بلسميك`,
//   },
//   {
//     id: 20,
//     title: 'DORITOS BACON',
//     titleAr: 'دوريتوس بيكن',
//     svg:'',
//     category: 'SALADS',
//     price: 3.750,
//     img: './images/salads/Dorito-Salad.jpg',
//     desc: `CABBAGE, SWEET CORN, ROMAINE LETTUCE, TOMATO, ONION
//     CARROTS, CHIVES, DORITOS, RANCH, CORIANDER`,
//     descAr: `ملفوف ، ذرة حلوة ، خس ، طماطم ، بصل، جزر ، ثوم ، دوريتوس ،
//     رانش ، كزبرة`,
//   },
//   {
//     id: 21,
//     title: 'SPICY CRAB',
//     titleAr: 'سبايسي كراب',
//      svg:'',
//     category: 'SALADS',
//     price: 3.750,
//     img: './images/salads/Spicy Crab Salad.jpg',
//     desc: `CARROTS, CUCUMBER, MANGO, CABBAGE, SWEET SPICY MAYO
//     SAUCE, SHREDDED ICEBERG LETTUCE, CRAB SHREDDED, AVOCADO`,
//     descAr: `جزر ، خيار ، مانجو ، ملفوف ، صوص مايو حار حلو ، خس ايسبيرج
//     مبشور ، كابوريا مبشور ، افوكادو`,
//   },
//   {
//     id: 22,
//     title: 'PECAN STRAWBERRY SALAD ',
//     titleAr: 'سلطة الفراولة والبيكان ',
//      svg:'',
//     category: 'SALADS',
//     price: 3.750,
//     img: './images/salads/Peacan & Strawberry salad.jpg',
//     desc: `ARUGULA, BABY SPINACH, LOLO ROSSO, FRESH STRAWBERRY,
//           JACKFRUIT, ROASTED PECAN, FETA CHEESE, PARMESAN CHIPS, FRESH
//           ORANGE JUICE, FRESH LEMON JUICE, DIJON MUSTARD, HONEY,
//           BALSAMIC VINAIGRETTE, SALT & WHITE PEPPER`,
//     descAr: `جرجير ، سبانخ صغير ، لولو روسو ، فراولة طازجة ، جاك فروت ، بيكان
//     محمص ، جبنة فيتا ، رقائق بارميزان ، عصير برتقال طازج ، عصير ليمون
//     طازج ، خردل ديجون ، عسل ، خل بلسميك ، ملح وفلفل أبيض`,
//   },
//   {
//     id: 23,
//     title: 'CLASSIC CEASAR SALAD',
//     titleAr: 'سلطة السيزر الكلاسيكية',
//      svg:'',
//     category: 'SALADS',
//     price: 3.250,
//     img: './images/salads/Caesar Salad classic.jpg',
//     desc: `LETTUCE ROMAINE, CAESAR DRESSING, GARLIC CROUTON, PARMESAN
//     CHEESE, GRILLED CHICKEN, MAYONNAISE, YELLOW MUSTARD, WHITE
//     VINEGAR, GARLIC, CAPERS ANCHOVIES`,
//     descAr: `خس رومين ، صلصة سيزر ، خبز محمص بالثوم ، جبنة بارميزان ، دجاج
//     مشوي ، مايونيز ، خردل أصفر ، خل أبيض ، ثوم ، أنشوجة كبر`,
//   },
//    {
//     id: 23,
//     title: 'BRISKET',
//     titleAr: 'بريسكت',
//     category: 'Burgers / برجر',
//     price: 4.500,
//     img: './images/burgers/Brisket.jpg',
//     desc: `BEEF BRISKET, CHOPPED LETTUCE, WHITE ONION`,
//     descAr: `بريسكت لحم بقري ، خس مقطع ، بصل أبيض ، ملح وفلفل ، مسحوق
//     فلفل حار`,
//    },
//    {
//     id: 24,
//     title: 'CLASSIC LOS ANGELES',
//     titleAr: 'كلاسيك لوس انجلوس',
//     category: 'Burgers / برجر',
//     price: 3.750,
//     img: './images/burgers/Classic Los Angeles.jpg',
//     desc: `PATTY, CARAMELIZED ONION, MUSTARD, CHEESE, PICKLES, LETTUCE, 
//     TOMATO, SPECIAL SAUCE`,
//     descAr: `شريحة لحم ، بصل مكرمل ، خردل ، جبنة ، مخلل ، خس ، طماطم ،
//     صوص خاصة`,
//    },
//    {
//     id: 25,
//     title: 'GRILLED CHICKEN BURGER',
//     titleAr: 'برغر الدجاج المشوي',
//     category: 'Burgers / برجر',
//     price: 4.500,
//     img: './images/burgers/Grill Chicken Burger.jpg',
//     desc: `CHICKEN, MUSTARD, CHEESE, PICKLES, ONIONS, LETTUCE, TOMATOES, 
//     SPECIAL SAUCE`,
//     descAr: `دجاج ، بصل ، خردل ، جبنة ، مخلل ، خس ، طماطم ، صوص خاصة`,
//    },
//    {
//     id: 26,
//     title: 'CLASSIC CRUNCHY CHICKEN',
//     titleAr: 'كلاسيك دجاج كرنشي',
//     category: 'Burgers / برجر',
//     price: 3.500,
//     img: './images/burgers/Classic-Crunchy-Chicken-.jpg',
//     desc: `CRISPY CHICKEN BREAST, RED CABBAGE, CARROTS, LETTUCE, 
//     PICKLES, CHEESE, YUMMY SAUCE`,
//     descAr: `صدر دجاج مقرمش ، ملفوف أحمر ، جزر ، خس ، مخلل ، جبن ، صلصة لذيذة`,
//    },
//    {
//     id: 27,
//     title: 'SLIDERS (CHICKEN OR BEEF)',
//     titleAr: 'سلايدر (دجاج او لحم بقري)',
//     category: 'Burgers / برجر',
//     price: 3.750,
//     img: './images/burgers/Sliders.jpeg',
//     desc: `2 PCS CHICKEN OR BEEF PATTIES, CHEESE, LETTUCE, ONIONS, 
//     PICKLES, REGULAR FRIES, KETCHUP`,
//     descAr: `قطعتين دجاج أو لحم بقري ، جبن ، خس ، بصل ، مخلل ، بطاطا حجم
//     عادي ، كاتشب`,
//    },
];
export default menu;
