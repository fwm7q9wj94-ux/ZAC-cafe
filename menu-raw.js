// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — ZAC CAFE
//
//  欄位說明:
//    category  分類代碼
//    name      品項中文名稱
//    options   價格選項，字串陣列:
//                不分規格 → ['270']
//                分規格   → ['烤雞腿 270', '牛肉 340', '蔬食 250']
//                時價     → ['時價']
//    tags      標記代碼陣列，無標記填 []
//    image     圖片檔名(放在 images/ 資料夾)，尚無圖片填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註，不需要時填 ''
//
//  ★ 新增品項時，只要複製一個 { } 區塊，改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

export const storeInfo = {
  name: 'ZAC CAFE',
  nameChinese: 'ZAC 咖啡',
  since: '1997',
  address: '977 花蓮縣豐濱鄉靜浦村8-1號',
  phone: '03-425-1598',
  hours: '13:00 – 21:00',
  closed: '',
};

export const menuRaw = [
  // ── 零嘴小點 ──
  {
    category: 'snack',
    name: '奶油爆米花',
    options: ['100'],
    tags: [],
    image: null,
    emoji: '🍿',
    note: '鹽子彈爆米花，讓你好好下酒！一份常常難以控制！',
  },
  {
    category: 'snack',
    name: '火腿起司歐姆蛋',
    options: ['300'],
    tags: [],
    image: null,
    emoji: '🍳',
    note: '鮮軟蛋捲搭配越南豬肉火腿與濃郁起司，透有隱約的香氣天然甜感加上奶香風。',
  },
  {
    category: 'snack',
    name: '香烤蕃茄嫩雞翅',
    options: ['340'],
    tags: [],
    image: null,
    emoji: '🍗',
    note: '外表酥脆、香體脂肪低，並入特別的秘醬調味，散發誘人的天然香氣。',
  },
  {
    category: 'snack',
    name: '乳酪起司四重奏',
    options: ['390'],
    tags: [],
    image: null,
    emoji: '🧀',
    note: '精選四款濃郁系乳酪，各切三角一片，搭配海鹽、奶香餅乾與巧克力品嘗。',
  },

  // ── 鹹派&甜塔 ──
  {
    category: 'pie',
    name: '培根乳酪派',
    options: ['180'],
    tags: ['R'],
    image: null,
    emoji: '🥧',
    note: '桃山香薰肉片自製乳酪派，以新鮮乳酪融合，乳香入風。',
  },
  {
    category: 'pie',
    name: '青花鮭魚鹹派',
    options: ['180'],
    tags: [],
    image: null,
    emoji: '🥧',
    note: '優質新鮮台灣花鮭，搭配藍起司乳酪自製配方，加入大量濃郁的奶香醬。',
  },
  {
    category: 'pie',
    name: '焦糖海鹽核桃塔',
    options: ['180'],
    tags: [],
    image: null,
    emoji: '🍮',
    note: '特製焦糖液加入大量核桃碎，以海鹽平衡甜度，搭配入口即化的奶油塔皮。',
  },
  {
    category: 'pie',
    name: '奶油蔬菜鹹派（凱薩醬／和風醬）',
    options: ['150'],
    tags: ['V'],
    image: null,
    emoji: '🥧',
    note: '大量新鮮蔬菜加入自製奶油白醬，搭配凱薩醬或和風醬，濃郁奶香包裹鮮甜蔬菜。',
  },
  {
    category: 'pie',
    name: '香草檸檬塔',
    options: ['150'],
    tags: [],
    image: null,
    emoji: '🍋',
    note: '以新鮮檸檬汁加入法式特製奶油醬，佐以清爽的香草與酸甜清新感。',
  },

  // ── 精選套餐 ──
  {
    category: 'set',
    name: '蘿蔔牛腩燴飯',
    options: ['260'],
    tags: ['B'],
    image: null,
    emoji: '🍛',
    note: '以蘿蔔、老薑、多種香料大火燉煮的牛腩，口感軟嫩帶有豐富湯汁。',
  },
  {
    category: 'set',
    name: '泰式綠咖哩雞肉飯',
    options: ['280'],
    tags: ['R', '1'],
    image: null,
    emoji: '🍛',
    note: '道地泰式料理為基底，搭配特製椰奶香氣，加入大量新鮮蔬菜與嫩雞腿肉。',
  },
  {
    category: 'set',
    name: '義式蕃茄牛肉燴飯',
    options: ['280'],
    tags: ['B'],
    image: null,
    emoji: '🍝',
    note: '道地義式料理為基底，搭配特製蕃茄醬汁，加入大量新鮮蔬菜以及嫩牛肉片。',
  },
  {
    category: 'set',
    name: '牛肉千層麵',
    options: ['280'],
    tags: ['B'],
    image: null,
    emoji: '🍝',
    note: '道地義式千層麵，搭配特製番茄肉醬，加入大量新鮮蔬菜以及嫩牛肉片。',
  },
  {
    category: 'set',
    name: '煎煎小羊排拼飯',
    options: ['300'],
    tags: ['L', 'R'],
    image: null,
    emoji: '🍖',
    note: '精選紐西蘭羔羊排，以特製香料醃製，煎出外酥內嫩的完美口感。',
  },

  // ── 組合套餐 ──
  {
    category: 'combo',
    name: '鹹甜好滋味',
    options: ['565'],
    tags: [],
    image: null,
    emoji: '🍽️',
    note: '鹹派精選（NT.180）+ 甜塔一個（NT.150），鹹甜雙重享受！',
  },
  {
    category: 'combo',
    name: '雙享好滿足',
    options: ['536'],
    tags: [],
    image: null,
    emoji: '🍽️',
    note: '選購主餐1份（NT.180以上）＋鹹派甜塔任選一，雙重體驗！',
  },

  // ── 經典軟法 ──
  {
    category: 'bread',
    name: '香蒜軟法',
    options: ['220'],
    tags: ['V'],
    image: null,
    emoji: '🥖',
    note: '以自製蒜香奶油抹醬烤製，外表酥脆內裡鬆軟，入口充滿濃郁蒜香與奶油香氣。',
  },
  {
    category: 'bread',
    name: '蜜芝麻乳酪軟法',
    options: ['300'],
    tags: [],
    image: null,
    emoji: '🥖',
    note: '蜂蜜芝麻與濃郁乳酪融合，外酥內軟，甜香的蜂蜜加上芝麻香氣。',
  },
  {
    category: 'bread',
    name: '煙燻雞肉起司軟法',
    options: ['320'],
    tags: [],
    image: null,
    emoji: '🥖',
    note: '以煙燻雞肉加上濃郁起司烤製，外酥內軟，煙燻香氣與起司香氣完美融合。',
  },
];
