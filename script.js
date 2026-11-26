document.addEventListener("DOMContentLoaded", function () {
  var HERO_IMAGE = "images/hero-bg.jpg";
  var FOOTER_IMAGE = "images/footer-love.jpeg";

  var CHARM_BAR_FEATURE = {
    img: "images/charm-bar.jpg.jpeg",
    tag: "Charm Bar Showcase",
    title: "Mix & match charms (Gold-plated & Silver-plated)",
    desc: "Pink velvet tray filled with gold-plated and silver-plated charm links alongside stacked gold-plated and silver-plated link bracelets on the display stand."
  };

  var COLLAGE_ITEMS = [
    {
      img: "images/beach-bracelet.jpg",
      caption: "Beach bracelet &#10022;"
    },
    {
      img: "images/rock-bracelet.jpg",
      caption: "Rock bracelet &#9825;"
    },
    {
      img: "images/gold-clover-bracelet-on-customer.jpg",
      caption: "Gold clover bracelet on customer &#10047;"
    },
    {
      img: "images/gold-stack-on-customer.jpg",
      caption: "Gold stack on customer &#10022;"
    },
    {
      img: "images/silver-italian-charm-bracelet-on-customer.jpg",
      caption: "Silver charm bracelet on customer &#9825;"
    },
    {
      img: "images/waterproof-jewellery.jpg",
      caption: "Waterproof jewellery &#10047;"
    }
  ];

  var LOOKBOOK_ITEMS = [
    {
      title: "Aurora Collection",
      vibe: "collections",
      vibeLabel: "Collections & Gifts",
      img: "images/aurora-collection.jpg",
      note: "Gold-plated & silver-plated aurora shine grouped for soft everyday wear."
    },
    {
      title: "Gift Pouches",
      vibe: "collections",
      vibeLabel: "Collections & Gifts",
      img: "images/gift-pouches.jpg",
      note: "Cute pouches for storing gold-plated & silver-plated pieces or gifting."
    },
    {
      title: "Pearl Collection",
      vibe: "collections",
      vibeLabel: "Collections & Gifts",
      img: "images/pearl-collection.jpg",
      note: "Gold-plated & silver-plated pearl pieces curated for girly layering."
    },
    {
      title: "Market Display",
      vibe: "markets",
      vibeLabel: "Market & Pop-Up",
      img: "images/market-display.jpg",
      note: "Gold-plated & silver-plated pieces laid out on our market table."
    },
    {
      title: "Market Family",
      vibe: "markets",
      vibeLabel: "Market & Pop-Up",
      img: "images/market-family.jpg",
      note: "Behind-the-scenes family moments at market days."
    },
    {
      title: "Market Setup",
      vibe: "markets",
      vibeLabel: "Market & Pop-Up",
      img: "images/market-setup.jpg",
      note: "Setting up the stall before market doors open."
    },
    {
      title: "Pop-Up Station",
      vibe: "markets",
      vibeLabel: "Market & Pop-Up",
      img: "images/pop-up-station.jpg",
      note: "Our pop-up station with gold-plated & silver-plated favourites."
    },
    {
      title: "SPHS Memories",
      vibe: "markets",
      vibeLabel: "Market & Pop-Up",
      img: "images/sphs-memory.jpg",
      note: "Special memories from South Peninsula High School."
    },
    {
      title: "Pink Display Chains",
      vibe: "display",
      vibeLabel: "Display",
      img: "images/pink-display-chains.jpg",
      note: "Gold-plated & silver-plated chains styled on our pink display."
    }
  ];

  var CATALOG_ITEMS = [
    { name: "Dainty Flower Bracelets", category: "bracelets", price: 185, badge: "Gold-plated", img: "images/dainty-flower-bracelets.jpg", desc: "Gold-plated floral links for a soft everyday wrist stack." },
    { name: "Gold Closed Clover Bracelet", category: "bracelets", price: 195, badge: "Gold-plated", img: "images/gold-closed-clover-bracelet.jpg", desc: "Gold-plated closed clover bracelet with a neat finish." },
    { name: "Gold Clover Bracelet", category: "bracelets", price: 195, badge: "Gold-plated", img: "images/gold-clover-bracelet.jpg", desc: "Gold-plated clover charm bracelet ready for everyday wear." },
    { name: "Gold Clover Cuff Bracelet", category: "bracelets", price: 210, badge: "Gold-plated", img: "images/gold-clover-cuff-bracelet.jpg", desc: "Gold-plated open cuff topped with sweet clover detail." },
    { name: "Gold Cuff Bracelet", category: "bracelets", price: 190, badge: "Gold-plated", img: "images/gold-cuff-bracelet.jpg", desc: "Gold-plated cuff that pairs easily with other bands." },
    { name: "Gold Nail Cuff Bracelet", category: "bracelets", price: 215, badge: "Gold-plated", img: "images/gold-nail-cuff-bracelet.jpg", desc: "Gold-plated nail cuff silhouette in stainless steel." },
    { name: "Gold White Aurora Bracelet", category: "bracelets", price: 205, badge: "Gold-plated", img: "images/gold-white-aurora-bracelet.jpg", desc: "Gold-plated bracelet with soft white aurora shine." },
    { name: "Pink Aurora Bracelet", category: "bracelets", price: 205, badge: "Gold-plated", img: "images/pink-aurora-bracelet.jpg", desc: "Gold-plated bracelet with sweet pink aurora detail." },
    { name: "Pink Flower Bracelet", category: "bracelets", price: 190, badge: "Gold-plated", img: "images/pink-flower-bracelet.jpg", desc: "Gold-plated pink flower bracelet for everyday stacks." },
    { name: "Red Flower Bracelet", category: "bracelets", price: 190, badge: "Gold-plated", img: "images/red-flower-bracelet.jpg", desc: "Gold-plated bracelet with red flower charm detail." },
    { name: "Silver Clover Bracelet", category: "bracelets", price: 195, badge: "Silver-plated", img: "images/silver-clover-bracelet.jpg", desc: "Silver-plated clover bracelet for effortless wear." },
    { name: "Silver Clover Cuff Bracelet", category: "bracelets", price: 210, badge: "Silver-plated", img: "images/silver-clover-cuff-bracelet.jpg", desc: "Silver-plated open cuff finished with clover charms." },
    { name: "Silver Cuff Bracelet", category: "bracelets", price: 190, badge: "Silver-plated", img: "images/silver-cuff-bracelet.jpg", desc: "Silver-plated cuff for mixing and matching." },
    { name: "Silver Nail Cuff Bracelet", category: "bracelets", price: 215, badge: "Silver-plated", img: "images/silver-nail-cuff-bracelet.jpg", desc: "Silver-plated nail cuff with a clean polished look." },
    { name: "Twisty Gold Bracelet", category: "bracelets", price: 185, badge: "Gold-plated", img: "images/twisty-gold-bracelet.jpg", desc: "Gold-plated twisted band that catches the light." },
    { name: "Twisty Silver Bracelet", category: "bracelets", price: 185, badge: "Silver-plated", img: "images/twisty-silver-bracelet.jpg", desc: "Silver-plated twisted band for everyday styling." },
    { name: "Wrist Stack", category: "bracelets", price: 280, badge: "Gold-plated", img: "images/wrist-stack.jpg", desc: "Gold-plated wrist stack inspiration ready to recreate." },

    { name: "Gold Italian Charm Bracelet", category: "bracelets", price: 240, badge: "Gold-plated", img: "images/gold-italian-charm-bracelet.jpg", desc: "Gold-plated Italian charm bracelet you can build your way." },
    { name: "Gold Nomination Bracelet", category: "bracelets", price: 230, badge: "Gold-plated", img: "images/gold-nomination-bracelet.jpg", desc: "Gold-plated link charm bracelet with cute custom links." },
    { name: "Silver Italian Charm Bracelet", category: "bracelets", price: 240, badge: "Silver-plated", img: "images/silver-italian-charm-bracelet.jpg", desc: "Silver-plated Italian charm links with cute motifs." },
    { name: "Silver Nomination Bracelet", category: "bracelets", price: 230, badge: "Silver-plated", img: "images/silver-nomination-bracelet.jpg", desc: "Silver-plated link charm bracelet for personal charm mixes." },

    { name: "2D Gold Name Necklace", category: "necklaces", price: 225, badge: "Gold-plated", img: "images/2d-gold-name-necklace.jpg", desc: "Gold-plated name necklace for everyday layers." },
    { name: "2D Silver Name Necklace", category: "necklaces", price: 225, badge: "Silver-plated", img: "images/2d-silver-name-necklace.jpg", desc: "Silver-plated name necklace with a dainty chain." },
    { name: "Gold Bubble Name Necklace", category: "necklaces", price: 235, badge: "Gold-plated", img: "images/gold-bubble-name-necklace.jpg", desc: "Gold-plated rounded bubble lettering on a dainty chain." },
    { name: "Gold Flat Snake Necklace", category: "necklaces", price: 210, badge: "Gold-plated", img: "images/gold-flat-snake-necklace.jpg", desc: "Gold-plated flat snake chain for clean everyday wear." },
    { name: "Gold Flower Pearl Necklace", category: "necklaces", price: 220, badge: "Gold-plated", img: "images/gold-flower-pearl-necklace.jpg", desc: "Gold-plated flower and pearl accent on a fine chain." },
    { name: "Gold Infinity Name Necklace", category: "necklaces", price: 230, badge: "Gold-plated", img: "images/gold-infinity-name-necklace.jpg", desc: "Gold-plated infinity name necklace for gifting or keeping." },
    { name: "Gold Pearl Necklace", category: "necklaces", price: 215, badge: "Gold-plated", img: "images/gold-pearl-necklace.jpg", desc: "Gold-plated chain finished with a soft pearl touch." },
    { name: "Silver Bubble Name Necklace", category: "necklaces", price: 235, badge: "Silver-plated", img: "images/silver-bubble-name-necklace.jpg", desc: "Silver-plated bubble lettering on a fresh silver chain." },
    { name: "Silver Flat Snake Necklace", category: "necklaces", price: 210, badge: "Silver-plated", img: "images/silver-flat-snake-necklace.jpg", desc: "Silver-plated flat snake chain for easy layering." },
    { name: "Silver Flower Pearl Necklace", category: "necklaces", price: 220, badge: "Silver-plated", img: "images/silver-flower-pearl-necklace.jpg", desc: "Silver-plated floral and pearl charm detail on a fine chain." },
    { name: "Silver Pearl Necklace", category: "necklaces", price: 215, badge: "Silver-plated", img: "images/silver-pearl-necklace.jpg", desc: "Silver-plated chain with a dainty pearl accent." },
    { name: "Twisty Gold Necklace", category: "necklaces", price: 200, badge: "Gold-plated", img: "images/twisty-gold-necklace.jpg", desc: "Gold-plated twisted necklace that shines gently on its own." },
    { name: "Twisty Silver Necklace", category: "necklaces", price: 200, badge: "Silver-plated", img: "images/twisty-silver-necklace.jpg", desc: "Silver-plated twisted chain for easy daily wear." },

    { name: "Chunky Gold Hoop Earrings", category: "earrings", price: 170, badge: "Gold-plated", img: "images/chunky-gold-hoop-earrings.jpg", desc: "Gold-plated chunky hoops that feel light and easy to wear." },
    { name: "Chunky Silver Hoop Earrings", category: "earrings", price: 170, badge: "Silver-plated", img: "images/chunky-silver-hoop-earrings.jpg", desc: "Silver-plated chunky hoops for an effortless everyday look." },
    { name: "Gold Hoops", category: "earrings", price: 155, badge: "Gold-plated", img: "images/gold-hoops.jpg", desc: "Gold-plated classic hoops that go with any outfit." },
    { name: "Gold Pearl Earrings", category: "earrings", price: 165, badge: "Gold-plated", img: "images/gold-pearl-earrings.jpg", desc: "Gold-plated earrings finished with pearls." },
    { name: "Large Gold Hoops", category: "earrings", price: 180, badge: "Gold-plated", img: "images/large-gold-hoops.jpg", desc: "Gold-plated statement hoops with a clean silhouette." },
    { name: "Large Silver Hoops", category: "earrings", price: 180, badge: "Silver-plated", img: "images/large-silver-hoops.jpg", desc: "Silver-plated larger hoops for a bold, cute finish." },
    { name: "Medium Gold Hoops", category: "earrings", price: 165, badge: "Gold-plated", img: "images/medium-gold-hoops.jpg", desc: "Gold-plated medium hoops for day or night." },
    { name: "Medium Silver Hoops", category: "earrings", price: 165, badge: "Silver-plated", img: "images/medium-silver-hoops.jpg", desc: "Silver-plated everyday medium hoops." },
    { name: "Silver Hoops", category: "earrings", price： 155, badge: "Silver-plated", img: "images/silver-hoops.jpg", desc："Silver-plated versatile hoops for daily wear." },
    { name: "Silver Pearl Earrings", category: "earrings", price: 165, badge: "Silver-plated", img: "images/silver-pearl-earrings.jpg", desc: "Silver-plated earrings with a pearl touch." },
    { name: "Small Gold Hoops", category: "earrings", price: 145, badge: "Gold-plated", img: "images/small-gold-hoops.jpg", desc: "Gold-plated small hoops for sweet ear stacks." },
    { name: "Small Silver Hoops (Silver-plated)", category: "earrings", price: 145, badge: "Silver-plated", img: "images/small-silver-hoops.jpg", desc: "Silver-plated small hoops that sit close and neat." }
  ];

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var heroPhotoEl = document.getElementById("heroPhoto");
  if (heroPhotoEl && HERO_IMAGE) heroPhotoEl.src = HERO_IMAGE;

  var footerPhotoEl = document.getElementById("footerPhoto");
  if (footerPhotoEl && FOOTER_IMAGE) footerPhotoEl.src = FOOTER_IMAGE;

  var charmBarFeature = document.getElementById("charmBarFeature");
  if (charmBarFeature) {
    charmBarFeature.innerHTML =
      '<div class="charm-bar-card">' +
        '<div class="charm-bar-photo">' +
          '<img src="' + CHARM_BAR_FEATURE.img + '" alt="' + CHARM_BAR_FEATURE.title + '" />' +
        "</div>" +
        '<div class="charm-bar-copy">' +
          '<span class="look-vibe">' + CHARM_BAR_FEATURE.tag + "</span>" +
          "<h3>" + CHARM_BAR_FEATURE.title + "</h3>" +
          "<p>" + CHARM_BAR_FEATURE.desc + "</p>" +
        "</div>" +
      "</div>";
  }

  var collageGrid = document.getElementById("collageGrid");
  if (collageGrid) {
    collageGrid.innerHTML = COLLAGE_ITEMS.map(function (pic, idx) {
      var rotClass = idx % 2 === 0 ? "rot-a" : "rot-b";
      var altText = pic.caption.replace(/&#\d+;/g, "").trim();
      return (
        '<figure class="scrap-photo ' + rotClass + '">' +
          '<img src="' + pic.img + '" alt="' + altText + '" />' +
          "<figcaption>" + pic.caption + "</figcaption>" +
        "</figure>"
      );
    }).join("");
  }

  var lookbookGrid = document.getElementById("lookbookGrid");
  if (lookbookGrid) {
    lookbookGrid.innerHTML = LOOKBOOK_ITEMS.map(function (look) {
      return (
        '<article class="look-card" data-look="' + look.vibe + '">' +
          '<div class="look-photo">' +
            '<img src="' + look.img + '" alt="' + look.title + '" />' +
          "</div>" +
          '<div class="look-body">' +
            '<span class="look-vibe">' + look.vibeLabel + "</span>" +
            "<h3>" + look.title + "</h3>" +
            "<p>" + look.note + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  var cardsGrid = document.getElementById("cardsGrid");
  if (cardsGrid) {
    cardsGrid.innerHTML = CATALOG_ITEMS.map(function (item) {
      var catLabel = item.category.charAt(0).toUpperCase() + item.category.slice(1);
      return (
        '<article class="item-card" data-category="' + item.category + '">' +
          '<div class="item-photo">' +
            (item.badge ? '<span class="badge-pop">' + item.badge + "</span>" : "") +
            '<img src="' + item.img + '" alt="' + item.name + '" />' +
          "</div>" +
          '<div class="item-info">' +
            '<div class="item-top">' +
              "<small>" + catLabel + "</small>" +
              "<strong>R" + Number(item.price) + "</strong>" +
            "</div>" +
            "<h3>" + item.name + "</h3>" +
            "<p>" + (item.desc || "Water-friendly stainless steel piece.") + "</p>" +
            '<button type="button" class="btn-pink btn-small add-btn" data-name="' + item.name + '" data-price="' + Number(item.price) + '">Add to Bag &#9825;</button>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  var menuBtn = document.getElementById("menuBtn");
  var navMenu = document.getElementById("navMenu");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      var open = navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    navMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var lookTabs = document.querySelectorAll(".lookbook-tab");
  var lookCards = document.querySelectorAll(".look-card");
  lookTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      lookTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var filter = tab.dataset.look;
      lookCards.forEach(function (card) {
        var show = filter === "all" || card.dataset.look === filter;
        card.classList.toggle("hide-look", !show);
      });
    });
  });

  var shopTabs = document.querySelectorAll(".shop-tab");
  var shopCards = document.querySelectorAll(".item-card");
  shopTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      shopTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var filter = tab.dataset.filter;
      shopCards.forEach(function (card) {
        var show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hide-item", !show);
      });
    });
  });

  var WA_PHONE = "27686726508";
  var bag = [];
  try {
    bag = JSON.parse(localStorage.getItem("four_ever_charmed_bag") || "[]");
  } catch (e) {
    bag = [];
  }

  var bagPanel = document.getElementById("bagPanel");
  var bagOverlay = document.getElementById("bagOverlay");
  var openBagBtn = document.getElementById("openBagBtn");
  var closeBagBtn = document.getElementById("closeBagBtn");
  var bagBody = document.getElementById("bagBody");
  var bagCount = document.getElementById("bagCount");
  var bagTotal = document.getElementById("bagTotal");
  var waOrderLink = document.getElementById("waOrderLink");

  function openBag() {
    if (bagPanel) bagPanel.classList.add("show");
    if (bagOverlay) bagOverlay.classList.add("show");
  }

  function closeBag() {
    if (bagPanel) bagPanel.classList.remove("show");
    if (bagOverlay) bagOverlay.classList.remove("show");
  }

  if (openBagBtn) openBagBtn.addEventListener("click", openBag);
  if (closeBagBtn) closeBagBtn.addEventListener("click", closeBag);
  if (bagOverlay) bagOverlay.addEventListener("click", closeBag);

  function renderBag() {
    try {
      localStorage.setItem("four_ever_charmed_bag", JSON.stringify(bag));
    } catch (e) {}

    var qtySum = bag.reduce(function (acc, item) { return acc + item.qty; }, 0);
    var totalSum = bag.reduce(function (acc, item) { return acc + item.price * item.qty; }, 0);

    if (bagCount) bagCount.textContent = String(qtySum);
    if (bagTotal) bagTotal.textContent = "R" + totalSum.toLocaleString();

    if (!bagBody) return;

    if (!bag.length) {
      bagBody.innerHTML = '<p class="empty-msg">Your bag is empty right now. Tap <strong>Add to Bag</strong> on any piece!</p>';
      if (waOrderLink) {
        waOrderLink.href = "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent("Hi 4evercharmed! I'd like to ask about your jewellery.");
      }
      return;
    }

    bagBody.innerHTML = bag.map(function (item, i) {
      return (
        '<div class="bag-line">' +
          "<div>" +
            "<strong>" + item.name + "</strong>" +
            "<span>R" + (item.price * item.qty).toLocaleString() + "</span>" +
          "</div>" +
          '<div class="bag-qty">' +
            '<button type="button" data-op="minus" data-idx="' + i + '">-</button>' +
            "<span>" + item.qty + "</span>" +
            '<button type="button" data-op="plus" data-idx="' + i + '">+</button>' +
          "</div>" +
        "</div>"
      );
    }).join("");

    var summary = bag.map(function (i) {
      return "- " + i.qty + "x " + i.name + " (R" + (i.price * i.qty) + ")";
    }).join("\n");
    var text = "Hi 4evercharmed! I'd like to order:\n\n" + summary + "\n\nItems total: R" + totalSum + "\n(Please let me know Aramex delivery details!)";
    if (waOrderLink) {
      waOrderLink.href = "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(text);
    }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".add-btn");
    if (!btn) return;
    var name = btn.dataset.name;
    var price = Number(btn.dataset.price);
    if (!name || !price) return;

    var existing = bag.find(function (x) { return x.name === name; });
    if (existing) {
      existing.qty += 1;
    } else {
      bag.push({ name: name, price: price, qty: 1 });
    }
    renderBag();
    openBag();
  });

  if (bagBody) {
    bagBody.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-op]");
      if (!btn) return;
      var idx = Number(btn.dataset.idx);
      var op = btn.dataset.op;
      if (op === "plus") bag[idx].qty += 1;
      if (op === "minus") {
        bag[idx].qty -= 1;
        if (bag[idx].qty <= 0) bag.splice(idx, 1);
      }
      renderBag();
    });
  }

  renderBag();

  document.querySelectorAll(".qa-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".qa-item");
      if (!item) return;
      var isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
});