// ==========================================
// 1. STORE CONFIGURATION & STOCK DATA
// ==========================================
const WHATSAPP_NUMBER = "27686726508";
const FREE_SHIPPING_THRESHOLD = 500;
const BUNDLE_MIN_ITEMS = 3;
const BUNDLE_DISCOUNT_RATE = 0.10;

const products = [
  // --- GOLD PIECES ---
  {
    id: "fc-01",
    name: "Chunky Gold Hoops",
    category: "earrings",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 140,
    inStock: true,
    image: "images/chunky-gold-hoop-earrings.jpg",
    description: "Bold, lightweight croissant dome hoops designed for everyday statement wear."
  },
  {
    id: "fc-02",
    name: "Gold Italian Charm",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/gold-italian-charm-bracelet.jpg",
    description: "Classic Italian charm link bracelet that catches the light beautifully."
  },
  {
    id: "fc-03",
    name: "Gold Nail Cuff Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/gold-nail-cuff-bracelet.jpg",
    description: "Modern, chic structural nail cuff with a secure hinged closure for a sleek stacked look."
  },
  {
    id: "fc-04",
    name: "Gold Nomination Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 250,
    inStock: true,
    image: "images/gold-nomination-bracelet.jpg",
    description: "Classic interlocking link charm bracelet offering a timeless, elegant finish for your daily stack."
  },
  {
    id: "fc-05",
    name: "Gold Pearl Earrings",
    category: "earrings",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 100,
    inStock: true,
    image: "images/gold-pearl-earrings.jpg",
    description: "Dainty gold-plated studs featuring a delicate suspended pearl drop."
  },
  {
    id: "fc-06",
    name: "Gold Pearl Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/gold-pearl-necklace.jpg",
    description: "Romantic pearl pendant suspended on a shimmering stainless steel cable chain."
  },
  {
    id: "fc-07",
    name: "Gold Closed Clover Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 120,
    inStock: true,
    image: "images/gold-closed-clover-bracelet.jpg",
    description: "Stunning multi-motif clover bracelet crafted in gold-plated stainless steel."
  },
  {
    id: "fc-08",
    name: "Gold Clover Cuff",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/gold-clover-cuff-bracelet.jpg",
    description: "Open-ended cuff featuring delicate clover motifs on either end."
  },
  {
    id: "fc-09",
    name: "Gold Clover Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/gold-clover-bracelet.jpg",
    description: "Statement link bracelet combining interlocking details with clover charms."
  },
  {
    id: "fc-10",
    name: "Gold Cuff Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/gold-cuff-bracelet.jpg",
    description: "Minimalist smooth polished cuff designed for effortless standalone or layered styling."
  },
  {
    id: "fc-11",
    name: "Gold Flat Snake Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 150,
    inStock: true,
    image: "images/gold-flat-snake-necklace.jpg",
    description: "Ultra-sleek flat snake chain that drapes softly along the collarbone."
  },
  {
    id: "fc-12",
    name: "Gold Flower Pearl Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/gold-flower-pearl-necklace.jpg",
    description: "Delicate chain featuring an intricate flower and pearl pairing."
  },
  {
    id: "fc-13",
    name: "Gold Bubble Name Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 280,
    inStock: true,
    customizable: true,
    image: "images/gold-bubble-name-necklace.jpg",
    description: "Playful personalised bubble-font name pendant on a durable gold stainless steel chain."
  },
  {
    id: "fc-14",
    name: "Large Gold Hoops",
    category: "earrings",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 90,
    inStock: true,
    image: "images/large-gold-hoops.jpg",
    description: "Classic lightweight large hoops with a high-shine polished finish."
  },
  {
    id: "fc-15",
    name: "Medium Gold Hoops",
    category: "earrings",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 80,
    inStock: true,
    image: "images/medium-gold-hoops.jpg",
    description: "Your new everyday go-to medium hoops. Comfort-engineered for daily wear."
  },
  {
    id: "fc-16",
    name: "Small Gold Hoops",
    category: "earrings",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 70,
    inStock: true,
    image: "images/small-gold-hoops.jpg",
    description: "Dainty huggie-style small gold hoops for second piercings or subtle daily wear."
  },
  {
    id: "fc-17",
    name: "Twisty Gold Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 120,
    inStock: true,
    image: "images/twisty-gold-bracelet.jpg",
    description: "Textured twist cable design that catches light from every angle."
  },
  {
    id: "fc-18",
    name: "Pink Aurora Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 190,
    inStock: true,
    image: "images/pink-aurora-bracelet.jpg",
    description: "Gorgeous pastel pink crystal-accented bracelet set in gold stainless steel."
  },
  {
    id: "fc-19",
    name: "Twisty Gold Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 150,
    inStock: true,
    image: "images/twisty-gold-necklace.jpg",
    description: "A rich, light-catching twisted rope chain in warm gold-plated stainless steel. The ultimate layering staple designed to elevate everything from a basic tee to evening wear."
  },
  {
    id: "fc-20",
    name: "Infinity Name Necklace",
    category: "necklaces",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 250,
    inStock: true,
    image: "images/gold-infinity-name-necklace.jpg",
    customizable: true,
    customLabel: "Names / Shimmer Finish",
    options: [
      { label: "1 Name (Gold / Silver) — R250", price: 250 },
      { label: "2 Names (Gold / Silver) — R350", price: 350 },
      { label: "3 Names (Gold / Silver) — R450", price: 450 },
      { label: "4 Names (Gold / Silver) — R550", price: 550 }
    ]
  },
  {
    id: "fc-21",
    name: "Pink Flower Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/pink-flower-bracelet.jpg",
    description: "A dainty gold-plated stainless steel chain interspersed with charming clover-shaped flower motifs sparkling with soft pink crystals. Sweet, feminine, and utterly timeless."
  },
  {
    id: "fc-22",
    name: "Red Flower Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/red-flower-bracelet.jpg",
    description: "A vibrant statement piece featuring radiant red crystal flower stations along a polished gold-plated link chain. Adds a gorgeous pop of rich colour to your wrist stack."
  },
  {
    id: "fc-23",
    name: "Dainty Flower Bracelets",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 120,
    inStock: true,
    image: "images/dainty-flower-bracelets.jpg",
    description: "A playful yet elegant collection-inspired bracelet featuring delicate floral stations available in a variety of gemstone and pearl finishes, set on both gold and silver-plated stainless steel chains."
  },
  {
    id: "fc-24",
    name: "White Aurora Bracelet",
    category: "bracelets",
    finish: "gold",
    finishLabel: "Gold-Plated Stainless Steel",
    price: 190,
    inStock: true,
    image: "images/gold-white-aurora-bracelet.jpg",
    description: "Shimmering clear crystal aurora bracelet set in polished gold."
  },

  // --- SILVER PIECES ---
  {
    id: "fc-25",
    name: "Chunky Silver Hoops",
    category: "earrings",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 140,
    inStock: true,
    image: "images/chunky-silver-hoop-earrings.jpg",
    description: "Bold silver dome hoops offering maximum shine and comfort."
  },
  {
    id: "fc-26",
    name: "Silver Italian Charm",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/silver-italian-charm-bracelet.jpg",
    description: "Sleek silver Italian charm link bracelet that feels comfortable against the skin."
  },
  {
    id: "fc-27",
    name: "Silver Nail Cuff Bracelet",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/silver-nail-cuff-bracelet.jpg",
    description: "Edgy and refined silver nail bangle with secure hinge opening."
  },
  {
    id: "fc-28",
    name: "Silver Nomination Bracelet",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 250,
    inStock: true,
    image: "images/silver-nomination-bracelet.jpg",
    description: "Polished silver link charm bracelet, comfortable for everyday wear."
  },
  {
    id: "fc-29",
    name: "Silver Bubble Name Necklace",
    category: "necklaces",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 280,
    inStock: true,
    customizable: true,
    image: "images/silver-bubble-name-necklace.jpg",
    description: "Cute personalised bubble-style name pendant on a delicate silver chain."
  },
  {
    id: "fc-30",
    name: "Silver Clover Cuff",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/silver-clover-cuff-bracelet.jpg",
    description: "Open silver cuff adorned with lucky clover details."
  },
  {
    id: "fc-31",
    name: "Silver Clover Bracelet",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 120,
    inStock: true,
    image: "images/silver-clover-bracelet.jpg",
    description: "Multi-motif silver clover chain with adjustable length extender."
  },
  {
    id: "fc-32",
    name: "Silver Cuff Bracelet",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 160,
    inStock: true,
    image: "images/silver-cuff-bracelet.jpg",
    description: "Clean minimalist silver bangle designed for effortless stacking."
  },
  {
    id: "fc-33",
    name: "Silver Flat Snake Necklace",
    category: "necklaces",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 150,
    inStock: true,
    image: "images/silver-flat-snake-necklace.jpg",
    description: "Flat mirror-finish silver snake chain necklace."
  },
  {
    id: "fc-34",
    name: "Silver Flower Pendant Necklace",
    category: "necklaces",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/silver-flower-pearl-necklace.jpg",
    description: "Romantic silver flower and pearl drop accent piece."
  },
  {
    id: "fc-35",
    name: "Large Silver Hoops",
    category: "earrings",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 90,
    inStock: true,
    image: "images/large-silver-hoops.jpg",
    description: "Lightweight, high-impact large silver hoops."
  },
  {
    id: "fc-36",
    name: "Medium Silver Hoops",
    category: "earrings",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 80,
    inStock: true,
    image: "images/medium-silver-hoops.jpg",
    description: "The ultimate classic medium silver hoops for daily wear."
  },
  {
    id: "fc-37",
    name: "Small Silver Hoops",
    category: "earrings",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 70,
    inStock: true,
    image: "images/small-silver-hoops.jpg",
    description: "Subtle huggie-style small silver hoops."
  },
  {
    id: "fc-38",
    name: "Pearl Earrings",
    category: "earrings",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 100,
    inStock: true,
    image: "images/silver-pearl-earrings.jpg",
    description: "Simple pearl drop earrings on a polished silver base."
  },
  {
    id: "fc-39",
    name: "Pearl Necklace",
    category: "necklaces",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 130,
    inStock: true,
    image: "images/silver-pearl-necklace.jpg",
    description: "Classic pearl pendant necklace in polished silver."
  },
  {
    id: "fc-40",
    name: "Twisty Silver Bracelet",
    category: "bracelets",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 110,
    inStock: true,
    image: "images/twisty-silver-bracelet.jpg",
    description: "A sleek and tactile twisted rope chain crafted from tarnish-free silver-plated stainless steel. Designed to catch the light beautifully whether worn solo or paired with your favourite everyday watch and stacked bracelets."
  },
  {
    id: "fc-41",
    name: "Twisty Silver Necklace",
    category: "necklaces",
    finish: "silver",
    finishLabel: "Silver-Plated Stainless Steel",
    price: 150,
    inStock: true,
    image: "images/twisty-silver-necklace.jpg",
    description: "An effortless statement piece featuring a finely twisted silver rope chain. Crafted from durable stainless steel to give you that radiant, high-shine look with zero tarnish worries."
  },
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem("4evercharmed_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("4evercharmed_wishlist")) || [];
let lastOrderRef = localStorage.getItem("4evercharmed_last_ref") || "";
let activeCategory = "all";
let activeFinish = "all";
let searchQuery = "";

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const productGrid = document.getElementById("productGrid");
const categoryBtns = document.querySelectorAll("#categoryFilters .filter-btn");
const finishFilter = document.getElementById("finishFilter");
const searchInput = document.getElementById("searchInput");
const wishlistCountEl = document.getElementById("wishlistCount");

const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartFooter = document.getElementById("cartFooter");

const shippingPromoBox = document.getElementById("shippingPromoBox");
const shippingPromoText = document.getElementById("shippingPromoText");
const shippingProgressFill = document.getElementById("shippingProgressFill");
const upsellBox = document.getElementById("upsellBox");
const upsellItemContainer = document.getElementById("upsellItemContainer");

const deliveryOption = document.getElementById("deliveryOption");
const paymentMethod = document.getElementById("paymentMethod");
const subtotalAmount = document.getElementById("subtotalAmount");
const bundleDiscountRow = document.getElementById("bundleDiscountRow");
const bundleDiscountAmount = document.getElementById("bundleDiscountAmount");
const deliveryAmount = document.getElementById("deliveryAmount");
const grandTotalAmount = document.getElementById("grandTotalAmount");
const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
const notifyPaymentBtn = document.getElementById("notifyPaymentBtn");
const copyOrderBtn = document.getElementById("copyOrderBtn");
const checkoutFeedback = document.getElementById("checkoutFeedback");

const quickViewModal = document.getElementById("quickViewModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContent = document.getElementById("modalContent");

const paymentConfirmModal = document.getElementById("paymentConfirmModal");
const closePaymentModalBtn = document.getElementById("closePaymentModalBtn");
const modalOrderRef = document.getElementById("modalOrderRef");
const bankDetailsCard = document.getElementById("bankDetailsCard");
const modalNotifyPaidBtn = document.getElementById("modalNotifyPaidBtn");

// ==========================================
// 4. WISHLIST LOGIC
// ==========================================
function toggleWishlist(e, productId) {
  e.stopPropagation();
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
  } else {
    wishlist.splice(idx, 1);
  }
  localStorage.setItem("4evercharmed_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  if (wishlistCountEl) {
    wishlistCountEl.textContent = wishlist.length;
  }
}

// ==========================================
// 5. RENDER PRODUCTS & FILTERS
// ==========================================
function renderProducts() {
  const filtered = products.filter((item) => {
    const matchesCat =
      activeCategory === "all"
        ? true
        : activeCategory === "wishlist"
        ? wishlist.includes(item.id)
        : item.category === activeCategory;
    const matchesFinish = activeFinish === "all" || item.finish === activeFinish;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);
    return matchesCat && matchesFinish && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 2rem 0;">${
      activeCategory === "wishlist"
        ? "You haven't saved any pieces yet. Tap the ♥ on items you love!"
        : "No pieces match your current filter or search."
    }</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const isSaved = wishlist.includes(product.id);
      const actionHandler = product.customizable
        ? `openQuickView('${product.id}')`
        : `addToCart('${product.id}')`;
      const btnText = product.customizable ? "Personalise & Add" : "Add to Bag";

      return `
      <article class="product-card">
        <div class="product-img-wrap" onclick="openQuickView('${product.id}')">
          <span class="finish-pill">${product.finishLabel}</span>
          <button 
            class="wishlist-heart-btn ${isSaved ? "saved" : ""}" 
            onclick="toggleWishlist(event, '${product.id}')"
            aria-label="Save to wishlist"
          >
            ${isSaved ? "♥" : "♡"}
          </button>
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            onerror="this.src='https://placehold.co/400x500/f4ede6/786a65?text=4evercharmed'"
          />
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">R${product.price}</p>
          <button 
            class="add-to-bag-btn" 
            onclick="${actionHandler}"
          >
            ${btnText}
          </button>
        </div>
      </article>
    `;
    })
    .join("");
}

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.filter;
    renderProducts();
  });
});

finishFilter.addEventListener("change", (e) => {
  activeFinish = e.target.value;
  renderProducts();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderProducts();
});

// ==========================================
// 6. QUICK VIEW MODAL (WITH CUSTOM NAME INPUT)
// ==========================================
function openQuickView(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const customInputHTML = product.customizable
    ? `
      <div class="custom-name-box">
        <label for="customNameInput" class="field-label" style="display:block; margin-bottom:0.35rem;">Enter Custom Name / Initials *</label>
        <input type="text" id="customNameInput" class="form-input" placeholder="e.g. Ammaarah" maxlength="14" />
        <p id="customNameError" style="color:#b55d68; font-size:0.76rem; margin-top:0.3rem; display:none;">Please enter a name for your necklace.</p>
      </div>
    `
    : "";

  modalContent.innerHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}" 
      onerror="this.src='https://placehold.co/400x500/f4ede6/786a65?text=4evercharmed'"
    />
    <div>
      <p class="eyebrow">${product.finishLabel}</p>
      <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 0.4rem;">${product.name}</h2>
      <p style="color: var(--accent-gold-dark); font-weight: 600; font-size: 1.15rem; margin-bottom: 0.9rem;">R${product.price}</p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">${product.description}</p>
      ${customInputHTML}
      <button 
        class="btn-primary full-width" 
        onclick="handleModalAdd('${product.id}', ${Boolean(product.customizable)})"
      >
        Add to Bag
      </button>
    </div>
  `;
  quickViewModal.classList.add("open");
}

function handleModalAdd(productId, isCustomizable) {
  let customText = "";
  if (isCustomizable) {
    const input = document.getElementById("customNameInput");
    const err = document.getElementById("customNameError");
    customText = input ? input.value.trim() : "";
    if (!customText) {
      if (err) err.style.display = "block";
      return;
    }
  }
  addToCart(productId, customText);
  closeQuickView();
}

function closeQuickView() {
  quickViewModal.classList.remove("open");
}

closeModalBtn.addEventListener("click", closeQuickView);
quickViewModal.addEventListener("click", (e) => {
  if (e.target === quickViewModal) closeQuickView();
});

// ==========================================
// 7. SHOPPING BAG, UPSELLS & BUNDLE LOGIC
// ==========================================
function saveCart() {
  localStorage.setItem("4evercharmed_cart", JSON.stringify(cart));
}

function addToCart(productId, customName = "") {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find(
    (item) => item.id === productId && (item.customName || "") === customName
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1, customName });
  }
  saveCart();
  updateCartUI();
  openCart();
}

function updateQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function renderUpsell() {
  const inCartIds = cart.map((c) => c.id);
  const candidate = products.find((p) => !inCartIds.includes(p.id) && !p.customizable);

  if (!candidate) {
    upsellBox.style.display = "none";
    return;
  }

  upsellBox.style.display = "block";
  upsellItemContainer.innerHTML = `
    <div class="upsell-card">
      <div class="upsell-info">
        <img src="${candidate.image}" alt="${candidate.name}" onerror="this.src='https://placehold.co/80x100/f4ede6/786a65?text=4e'" />
        <div>
          <p style="font-size:0.84rem; font-weight:600;">${candidate.name}</p>
          <p style="font-size:0.78rem; color:var(--text-muted);">R${candidate.price}</p>
        </div>
      </div>
      <button class="upsell-add-btn" onclick="addToCart('${candidate.id}')">+ Add</button>
    </div>
  `;
}

function calculateTotals() {
  let subtotal = 0;
  let totalItems = 0;
  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    if (product) {
      subtotal += product.price * cartItem.qty;
      totalItems += cartItem.qty;
    }
  });

  const bundleDiscount =
    totalItems >= BUNDLE_MIN_ITEMS ? Math.round(subtotal * BUNDLE_DISCOUNT_RATE) : 0;
  const discountedSubtotal = subtotal - bundleDiscount;

  const selectedOption = deliveryOption.options[deliveryOption.selectedIndex];
  let deliveryFee = Number(selectedOption.dataset.fee);
  if (selectedOption.value === "aramex" && discountedSubtotal >= FREE_SHIPPING_THRESHOLD) {
    deliveryFee = 0;
  }

  return {
    subtotal,
    totalItems,
    bundleDiscount,
    discountedSubtotal,
    deliveryFee,
    grandTotal: discountedSubtotal + deliveryFee
  };
}

function updateCartUI() {
  const totals = calculateTotals();
  cartCount.textContent = totals.totalItems;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-bag-msg">Your bag is currently empty.<br>Explore the collection to add pieces.</p>`;
    cartFooter.style.display = "none";
    shippingPromoBox.style.display = "none";
    upsellBox.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";
  shippingPromoBox.style.display = "block";

  cartItemsContainer.innerHTML = cart
    .map((cartItem, idx) => {
      const product = products.find((p) => p.id === cartItem.id);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/100x120/f4ede6/786a65?text=Item'" />
          <div class="cart-item-details">
            <p class="cart-item-title">${product.name}</p>
            ${cartItem.customName ? `<p class="cart-item-custom">✦ Name: "${cartItem.customName}"</p>` : ""}
            <p class="cart-item-meta">${product.finishLabel} &bull; R${product.price}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQty(${idx}, -1)">-</button>
              <span>${cartItem.qty}</span>
              <button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button>
              <button class="remove-item-btn" onclick="removeFromCart(${idx})">Remove</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  if (totals.bundleDiscount > 0) {
    bundleDiscountRow.style.display = "flex";
    bundleDiscountAmount.textContent = `-R${totals.bundleDiscount}`;
  } else {
    bundleDiscountRow.style.display = "none";
  }

  // Free Shipping Progress Bar (Unlocks at R500)
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - totals.discountedSubtotal);
  const progressPct = Math.min(100, (totals.discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  shippingProgressFill.style.width = `${progressPct}%`;

  if (remainingForFreeShip === 0) {
    shippingPromoText.innerHTML = `✦ You've unlocked <strong>FREE Aramex Delivery</strong>! ✦`;
  } else {
    shippingPromoText.innerHTML = `Spend <strong>R${remainingForFreeShip}</strong> more for <strong>FREE Aramex Delivery</strong>!`;
  }

  subtotalAmount.textContent = `R${totals.subtotal}`;
  deliveryAmount.textContent = totals.deliveryFee === 0 ? "Free" : `R${totals.deliveryFee}`;
  grandTotalAmount.textContent = `R${totals.grandTotal}`;

  renderUpsell();
}

deliveryOption.addEventListener("change", updateCartUI);

// ==========================================
// 8. ORDER RECEIPT & PAYMENT NOTIFICATION FLOW
// ==========================================
function getOrCreateOrderRef() {
  if (!lastOrderRef) {
    lastOrderRef = "4EC-" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("4evercharmed_last_ref", lastOrderRef);
  }
  return lastOrderRef;
}

function buildOrderText() {
  const name = document.getElementById("customerName").value.trim();
  if (!name) {
    checkoutFeedback.textContent = "Please enter your name before placing your order.";
    return null;
  }

  checkoutFeedback.textContent = "";
  const orderRef = getOrCreateOrderRef();
  const selectedOption = deliveryOption.options[deliveryOption.selectedIndex];
  const deliveryLabel = selectedOption.text;
  const selectedPayment = paymentMethod.options[paymentMethod.selectedIndex].text;
  const notes = document.getElementById("deliveryNotes").value.trim();
  const totals = calculateTotals();

  const itemLines = cart.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    const lineTotal = product.price * cartItem.qty;
    const customLabel = cartItem.customName ? ` [Name: ${cartItem.customName}]` : "";
    return `• ${cartItem.qty}x ${product.name}${customLabel} (${product.finishLabel}) — R${lineTotal}`;
  });

  return [
    `Hi 4evercharmed! I'd like to place an order ✨`,
    ``,
    `*Order Ref:* ${orderRef}`,
    `*Name:* ${name}`,
    ``,
    `*Items:*`,
    ...itemLines,
    ``,
    totals.bundleDiscount > 0 ? `*Stack Bundle (10% Off):* -R${totals.bundleDiscount}` : null,
    `*Delivery:* ${totals.deliveryFee === 0 && selectedOption.value === "aramex" ? "Aramex Door-to-Door Courier — FREE (Over R500)" : deliveryLabel}`,
    `*Payment Method:* ${selectedPayment}`,
    `*Turnaround:* 1–2 weeks`,
    notes ? `*Details/Address:* ${notes}` : null,
    `*Total Due:* R${totals.grandTotal}`,
    ``,
    `Please confirm banking details so I can send my Proof of Payment!`
  ]
    .filter(Boolean)
    .join("\n");
}

function openPaymentConfirmModal() {
  const orderRef = getOrCreateOrderRef();
  const totals = calculateTotals();

  modalOrderRef.textContent = orderRef;

  bankDetailsCard.innerHTML = `
    <p style="font-weight: 600; margin-bottom: 0.4rem;">Instant EFT / Bank Transfer Instructions:</p>
    <p>• <strong>Amount Due:</strong> R${totals.grandTotal}</p>
    <p>• <strong>Reference:</strong> ${orderRef}</p>
    <p style="margin-top: 0.5rem; font-size: 0.83rem; color: var(--text-muted);">
      We have sent our banking details to your WhatsApp chat. Once your EFT is done, tap the green button below to notify us immediately with your Proof of Payment!
    </p>
  `;

  paymentConfirmModal.classList.add("open");
}

function closePaymentModal() {
  paymentConfirmModal.classList.remove("open");
}

function sendPaymentNotification() {
  const name = document.getElementById("customerName").value.trim() || "Customer";
  const orderRef = getOrCreateOrderRef();
  const totals = calculateTotals();
  const selectedPayment = paymentMethod.options[paymentMethod.selectedIndex].text;

  const notifyMessage = [
    `🔔 *PAYMENT NOTIFICATION — 4evercharmed* ✨`,
    ``,
    `Hi! I have just completed my payment via Instant EFT.`,
    `*Order Ref:* ${orderRef}`,
    `*Name:* ${name}`,
    `*Amount Paid:* R${totals.grandTotal}`,
    `*Method:* ${selectedPayment}`,
    ``,
    `Attaching my Proof of Payment screenshot now! 💕`
  ].join("\n");

  localStorage.removeItem("4evercharmed_last_ref");
  lastOrderRef = "";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(notifyMessage)}`;
  window.open(url, "_blank");
  closePaymentModal();
}

whatsappCheckoutBtn.addEventListener("click", () => {
  const message = buildOrderText();
  if (!message) return;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  closeCart();
  openPaymentConfirmModal();
});

notifyPaymentBtn.addEventListener("click", sendPaymentNotification);
modalNotifyPaidBtn.addEventListener("click", sendPaymentNotification);

copyOrderBtn.addEventListener("click", () => {
  const message = buildOrderText();
  if (!message) return;

  navigator.clipboard.writeText(message).then(() => {
    checkoutFeedback.textContent = "Order summary copied! Ready to paste into Instagram DM or WhatsApp.";
  });
});

// ==========================================
// 9. DRAWER & MODAL CONTROLS
// ==========================================
function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
}

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

if (closePaymentModalBtn) {
  closePaymentModalBtn.addEventListener("click", closePaymentModal);
}
if (paymentConfirmModal) {
  paymentConfirmModal.addEventListener("click", (e) => {
    if (e.target === paymentConfirmModal) closePaymentModal();
  });
}

const termsModal = document.getElementById("termsModal");
const openTermsBtn = document.getElementById("openTermsBtn");
const closeTermsBtn = document.getElementById("closeTermsBtn");

function openTermsModal(e) {
  if (e) e.preventDefault();
  termsModal.classList.add("open");
}

function closeTermsModal() {
  termsModal.classList.remove("open");
}

if (openTermsBtn) openTermsBtn.addEventListener("click", openTermsModal);
if (closeTermsBtn) closeTermsBtn.addEventListener("click", closeTermsModal);
if (termsModal) {
  termsModal.addEventListener("click", (e) => {
    if (e.target === termsModal) closeTermsModal();
  });
}

// Initialize App
updateWishlistUI();
renderProducts();
updateCartUI();