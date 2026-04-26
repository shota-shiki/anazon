/* ============================================================
   Anazon — 共通ユーティリティ
   ============================================================ */

/* ---- カート管理 ---- */
const Cart = {
  KEY: 'kekkonzon_cart',
  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || null; }
    catch { return null; }
  },
  set(product) {
    localStorage.setItem(this.KEY, JSON.stringify(product));
    this.updateBadge();
  },
  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
  },
  count() { return this.get() ? 1 : 0; },
  updateBadge() {
    const el = document.getElementById('cart-cnt');
    if (!el) return;
    const n = this.count();
    el.textContent = n;
    el.style.display = n > 0 ? 'flex' : 'none';
  }
};

/* ---- 注文詳細の保存/取得 ---- */
const Order = {
  KEY: 'kekkonzon_order',
  set(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || null; }
    catch { return null; }
  },
  clear() { localStorage.removeItem(this.KEY); }
};

/* ---- ★ 星レンダリング ---- */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  for (let i = full + (half ? 1 : 0); i < 5; i++) s += '☆';
  return s;
}

/* ---- 価格フォーマット ---- */
function fmtPrice(n) {
  if (n === 0) return '¥0（品切れ）';
  return '¥' + n.toLocaleString();
}

/* ---- 思い出写真スロット生成 ---- */
function memPhotoSlot(idx, classes = '') {
  const p = MEMORY_PHOTOS[idx] || { src: `images/memories/photo${idx+1}.jpg`, caption: `思い出写真${idx+1}` };
  return `<div class="${classes}">
    <img src="${p.src}" alt="${p.caption}" loading="lazy"
         onerror="this.closest('.frame,${classes.split(' ').map(c=>'.' + c).join(',')}').classList.add('noph')">
    <div class="ph">
      <span>📸</span>
      <strong>思い出写真${idx+1}</strong>
      <small>${p.src}</small>
    </div>
  </div>`;
}

/* ---- ヘッダー HTML ---- */
function buildHeader(activePage) {
  const cnt = Cart.count();
  return `
<header class="site-header">
  <!-- 行1: ロゴ + カート (SP) -->
  <div class="header-row1">
    <a href="index.html" class="logo">Ana<span>zon</span><small>.co.jp</small></a>
    <div class="header-spacer"></div>
    <div class="header-right">
      <a href="cart.html" class="header-cart">
        <span class="cart-icon">🛒</span>
        <span class="cart-cnt" id="cart-cnt" style="display:${cnt>0?'flex':'none'}">${cnt}</span>
        <span class="cart-label">カート</span>
      </a>
    </div>
  </div>
  <!-- 行2: 検索バー (SP) -->
  <div class="header-row2">
    <form class="search-form" onsubmit="return false">
      <input class="search-input" type="text" placeholder="Anazonを検索…（機能しません）">
      <button class="search-btn" type="submit">🔍</button>
    </form>
  </div>
  <nav class="navbar">
    <div class="navbar-inner">
      <a class="nav-item bold" href="index.html">☰ カテゴリー</a>
      <a class="nav-item" href="index.html#shokuhin">🍽️ 食品</a>
      <a class="nav-item" href="index.html#shokuzai">🥬 食材</a>
      <a class="nav-item" href="index.html#sake">🍶 酒</a>
      <a class="nav-item" href="index.html#adult">🔞 アダルト</a>
      <a class="nav-item" href="index.html#other">📦 その他</a>
      <a class="nav-item" style="color:#FF9900;font-weight:bold" href="index.html">🔥 セール中</a>
      <a class="nav-item" href="index.html">💍 結婚祝い</a>
    </div>
  </nav>
</header>`;
}

/* ---- フッター HTML ---- */
function buildFooter() {
  return `
<footer>
  <div class="footer-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">▲ トップへ戻る</div>
  <div class="footer-main">
    <div class="footer-cols">
      <div class="footer-col">
        <h4>Anazonについて</h4>
        <ul>
          <li><a href="#">Anazonについて</a></li>
          <li><a href="#">採用情報</a></li>
          <li><a href="#">プレスリリース</a></li>
          <li><a href="#">社会的責任</a></li>
          <li><a href="#">投資家向け情報</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ビジネス・出品</h4>
        <ul>
          <li><a href="#">出品する</a></li>
          <li><a href="#">Anazonビジネス</a></li>
          <li><a href="#">アフィリエイト</a></li>
          <li><a href="#">広告掲載</a></li>
          <li><a href="#">パートナープログラム</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>カスタマーサービス</h4>
        <ul>
          <li><a href="#">ヘルプ</a></li>
          <li><a href="#">返品・交換</a></li>
          <li><a href="#">配送状況の確認</a></li>
          <li><a href="#">お問い合わせ</a></li>
          <li><a href="#">Anazonポイント</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>お支払い方法</h4>
        <ul>
          <li><a href="#">クレジットカード</a></li>
          <li><a href="#">コンビニ払い</a></li>
          <li><a href="#">Anazonギフト券</a></li>
          <li><a href="#">代金引換</a></li>
          <li><a href="#">電子マネー</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-logo">Ana<span>zon</span>.co.jp</div>
    <p>© 2026 Anazon, Inc. All rights reserved.</p>
  </div>
</footer>`;
}

/* ---- プロダクトカード HTML ---- */
function buildProductCard(p) {
  const disc = p.origPrice ? Math.round((1 - p.price / p.origPrice) * 100) : 0;
  const soldOut = p.soldOut || p.stock === 0;
  return `
<a class="p-card" href="product.html?id=${p.id}">
  ${p.badge ? `<span class="p-badge ${p.badge}">${p.badgeText}</span>` : ''}
  <div class="p-card-img">
    <img src="${p.img}" alt="${p.name}" loading="lazy">
  </div>
  <div class="p-card-body">
    ${p.prime ? '<span class="p-prime">prime</span>' : ''}
    <p class="p-card-name">${p.name}</p>
    <div class="p-card-stars">
      <span class="stars">${renderStars(p.rating)}</span>
      <span class="rev-cnt">(${p.revCnt.toLocaleString()})</span>
    </div>
    <div>
      <span class="p-card-price">${soldOut ? '在庫切れ' : '¥' + p.price.toLocaleString()}</span>
      ${p.origPrice ? `<span class="p-card-orig">¥${p.origPrice.toLocaleString()}</span><span class="p-card-disc">-${disc}%</span>` : ''}
    </div>
    <button class="p-card-btn" ${soldOut ? 'disabled' : ''}
            onclick="event.preventDefault(); window.location.href='product.html?id=${p.id}'">
      ${soldOut ? '在庫切れ' : 'カートに追加'}
    </button>
  </div>
</a>`;
}

/* ---- DOMロード後に共通初期化 ---- */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  // 思い出写真: 画像が存在しない場合にnophクラスを付与（フォールバック表示）
  document.querySelectorAll('.frame img').forEach(img => {
    img.addEventListener('error', () => {
      img.closest('.frame') && img.closest('.frame').classList.add('noph');
    });
    if (img.complete && !img.naturalWidth) {
      img.closest('.frame') && img.closest('.frame').classList.add('noph');
    }
  });
});
