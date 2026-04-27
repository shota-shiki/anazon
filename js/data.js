/* ============================================================
   Anazon — サイト設定 & 商品データ
   ============================================================ */

const CONFIG = {
  siteTitle: 'Anazon',
  ownerEmail: 'shota.shiki@outlook.jp',
  /* --- 動画設定（要変更） ---
     videoUrl に YouTube の埋め込みURLを入れてください
     例: 'https://www.youtube.com/embed/xxxxxxxxxxx'
     YouTube動画のURLが https://youtu.be/xxxxxxxxxxx の場合
     → 'https://www.youtube.com/embed/xxxxxxxxxxx' に変換
  */
  videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
  /* --- EmailJS 設定（要変更） ---
     1. https://www.emailjs.com にアクセスしてアカウント作成
     2. Email Service を追加 (GmailやOutlookを選択)
     3. Email Template を作成（下記変数を使用）：
        件名: 【Anazon】{{product_name}} の注文が届きました！
        本文:
          注文者：{{customer_name}}
          商品：{{product_name}}
          金額：{{product_price}}円
          郵便番号：〒{{zip_code}}
          住所：{{pref}}{{city}}{{address}}
          電話：{{phone}}
          メッセージ：{{message}}
     4. 下記の YOUR_～ を実際のIDに変更してください
  */
  emailjs: {
    serviceId:  'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey:  'YOUR_PUBLIC_KEY',
  }
};

/* 思い出写真
   → images/memories/photo1.png ～ photo10.png に差し替えてください
   → captionは好きに変更してください */
const MEMORY_PHOTOS = [
  { src: 'images/memories/photo1.png',  caption: '懐かしの一枚①' },
  { src: 'images/memories/photo2.png',  caption: '懐かしの一枚②' },
  { src: 'images/memories/photo3.png',  caption: '懐かしの一枚③' },
  { src: 'images/memories/photo4.jpg',  caption: '懐かしの一枚④' },
  { src: 'images/memories/photo5.jpg',  caption: '懐かしの一枚⑤' },
  { src: 'images/memories/photo6.jpg',  caption: '懐かしの一枚⑥' },
  { src: 'images/memories/photo7.jpeg',  caption: '懐かしの一枚⑦' },
  { src: 'images/memories/photo8.jpeg',  caption: '懐かしの一枚⑧' },
  { src: 'images/memories/photo9.jpg',  caption: '懐かしの一枚⑨' },
  { src: 'images/memories/photo10.png', caption: '懐かしの一枚⑩' },
];

const PRODUCTS = [
  // -------------------------------------------------------
  // 全品: 定価¥99,999,999 → タイムセール ¥0
  // 注文後はショータのセンスで発送
  // -------------------------------------------------------
  {
    id: 1,
    name: 'ショータ厳選！謎の食品（中身はお届けまでのお楽しみ）',
    price: 0,
    origPrice: 99999999,
    rating: 4.9,
    revCnt: 2,
    category: '食品',
    img: 'images/memories/photo12.JPG',
    badge: 'b-sale',
    badgeText: 'タイムセール',
    stock: 1,
    prime: true,
    desc: 'ショータが「これだ！」と思った謎の食品をお届けします。スーパー・コンビニ・ネットショッピング・場合によっては自作で対応します。アレルギーはメッセージ欄でご指示ください。',
    features: [
      '何が届くかはショータのセンス次第',
      '食べられるものをお送りします（たぶん）',
      'アレルギー・好み・リクエストはメッセージ欄へ',
      '返品不可（食べてみてください）',
    ],
    reviews: [
      { name: '過去に頼んだ人', stars: 5, body: '予想外のものが届いて爆笑した。でも美味しかった。' },
      { name: 'ショータ（送り主）', stars: 5, body: '全力で選びます。' },
    ],
  },
  {
    id: 2,
    name: 'ショータが市場で仕入れた謎の新鮮食材（旬・産地直送・たぶん）',
    price: 0,
    origPrice: 99999999,
    rating: 4.7,
    revCnt: 1,
    category: '食材',
    img: 'images/memories/photo14.JPG',
    badge: 'b-hot',
    badgeText: '旬',
    stock: 1,
    prime: true,
    desc: 'ショータが「これは美味い食材だ」と感じたものをお届けします。野菜・肉・魚・果物・なんでも。旬のものを中心に、産地や鮮度にこだわって選びます（気分次第）。',
    features: [
      '旬のものをショータがセレクト',
      '野菜・肉・魚・果物など何でもあり',
      '希望ジャンルはメッセージ欄へ',
      '産地・鮮度はショータの目利き次第',
    ],
    reviews: [
      { name: '料理好きな新婚', stars: 5, body: '立派なキャベツが届いた。なぜキャベツなのかは不明だが美味しかった。' },
    ],
  },
  {
    id: 3,
    name: 'ショータ厳選 謎のお酒1本（ジャンル・銘柄は完全サプライズ）',
    price: 0,
    origPrice: 99999999,
    rating: 5.0,
    revCnt: 3,
    category: '酒',
    img: 'images/memories/photo13.JPG',
    badge: 'b-hot',
    badgeText: '人気No.1',
    stock: 1,
    prime: true,
    desc: '日本酒・ビール・ワイン・焼酎・ウイスキー・テキーラ… ジャンル不問でショータが「これを飲ませたい」と思った1本をお届けします。ご希望のジャンルはメッセージ欄へ。',
    features: [
      'ジャンル・銘柄は完全サプライズ',
      '日本酒・ビール・ワイン・焼酎 etc.',
      'ご希望ジャンルはメッセージ欄へ',
      'アルコール強めが多い傾向にあります',
    ],
    reviews: [
      { name: '酒好き', stars: 5, body: '知らない銘柄が届いたけど超うまかった。ショータのセンスに脱帽。' },
      { name: 'ビール派', stars: 4, body: 'ビール希望と書いたら変わり種が届いた。これはこれでよかった。' },
      { name: 'お酒が飲めない人', stars: 3, body: 'お酒飲めないと書き忘れた私が悪い…' },
    ],
  },
  {
    id: 4,
    name: '🔞 夫婦円満グッズ（ショータ厳選・サプライズ・詳細は届いてからのお楽しみ）',
    price: 0,
    origPrice: 99999999,
    rating: 4.8,
    revCnt: 0,
    category: 'アダルト',
    img: 'images/memories/photo15.JPG',
    badge: 'b-god',
    badgeText: '18禁',
    stock: 1,
    prime: true,
    desc: '結婚おめでとうございます。大人の二人に贈る、ショータ渾身の謎のギフトです。何が届くかはお楽しみ。健全な範囲でお届けします（たぶん）。メッセージ欄での要望は考慮します。',
    features: [
      '内容は届いてからのお楽しみ',
      '健全な範囲でお届けします（たぶん）',
      '要望はメッセージ欄へ（真剣に検討します）',
      '返品・クレーム不可',
    ],
    reviews: [
      { name: 'レビュー募集中', stars: 5, body: 'まだ誰も注文したことがないので募集中です。' },
    ],
  },
  {
    id: 5,
    name: '🙏 なんでもリクエスト（ショータに頼む・物でも事でもOK）',
    price: 0,
    origPrice: 99999999,
    rating: 5.0,
    revCnt: 1,
    category: 'その他',
    img: 'images/memories/photo16.JPG',
    badge: 'b-new',
    badgeText: '新登場',
    stock: 1,
    prime: true,
    desc: '物・事・体験・サービス、ジャンルを問わずリクエストに応えます。「一緒に飲みたい」「料理を作ってほしい」「引越し手伝い」「相談に乗ってほしい」など何でも。メッセージ欄に詳しく書いてください。できる範囲で全力で頑張ります。',
    features: [
      'カテゴリ不問・物でも事でもOK',
      'メッセージ欄にリクエストを詳しく記入',
      'ショータが全力で応えます（できる範囲で）',
      '無茶なリクエストも一度ご相談ください',
    ],
    reviews: [
      { name: 'お試しで注文した人', stars: 5, body: '引越し手伝いを頼んだら本当に来た。感動。' },
    ],
  },
];
