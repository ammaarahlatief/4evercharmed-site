document.addEventListener("DOMContentLoaded", () => {
  // 1. Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Scroll progress bar & header shadow
  const progressEl = document.getElementById("scrollProgress");
  const headerEl = document.getElementById("siteHeader");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressEl) progressEl.style.width = `${progress}%`;
    if (headerEl) headerEl.classList.toggle("scrolled", scrollTop > 20);
  }, { passive: true });

  // 3. Mobile menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 4. Mobile-safe scroll reveals
  const revealEls = document.querySelectorAll(".reveal");
  const revealInView = () => {
    const triggerBottom = window.innerHeight * 0.96;
    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top <= triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 50px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", revealInView, { passive: true });
    setTimeout(revealInView, 150);
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // 5. Charm Bar Category Filter
  const filterButtons = document.querySelectorAll(".filter-pill");
  const productCards = document.querySelectorAll(".charm-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      productCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !match);
        if (match) card.classList.add("visible");
      });
    });
  });

  // 6. Interactive Shopping Bag & WhatsApp Order Builder
  const WHATSAPP_NUMBER = "27839561961"; // Replace with sister's WhatsApp number if different
  let bag = JSON.parse(localStorage.getItem("4evercharmed_bag") || "[]");

  const bagDrawer = document.getElementById("bagDrawer");
  const bagBackdrop = document.getElementById("bagBackdrop");
  const openBagBtn = document.getElementById("openBagBtn");
  const closeBagBtn = document.getElementById("closeBagBtn");
  const bagItemsEl = document.getElementById("bagItems");
  const bagCountEl = document.getElementById("bagCount");
  const bagTotalEl = document.getElementById("bagTotal");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  function openBag() {
    if (bagDrawer) {
      bagDrawer.classList.add("open");
      bagDrawer.setAttribute("aria-hidden", "false");
    }
    if (bagBackdrop) bagBackdrop.classList.add("open");
  }

  function closeBag() {
    if (bagDrawer) {
      bagDrawer.classList.remove("open");
      bagDrawer.setAttribute("aria-hidden", "true");
    }
    if (bagBackdrop) bagBackdrop.classList.remove("open");
  }

  if (openBagBtn) openBagBtn.addEventListener("click", openBag);
  if (closeBagBtn) closeBagBtn.addEventListener("click", closeBag);
  if (bagBackdrop) bagBackdrop.addEventListener("click", closeBag);

  function saveAndRenderBag() {
    localStorage.setItem("4evercharmed_bag", JSON.stringify(bag));

    const totalQty = bag.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = bag.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (bagCountEl) bagCountEl.textContent = String(totalQty);
    if (bagTotalEl) bagTotalEl.textContent = `R${totalPrice.toLocaleString()}`;

    if (!bagItemsEl) return;

    if (bag.length === 0) {
      bagItemsEl.innerHTML = `<p class="bag-empty">Your bag is empty right now. Tap <strong>Add to Bag</strong> on any piece you love!</p>`;
      if (whatsappOrderBtn) {
        whatsappOrderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi 4evercharmed! I'd love to ask about your jewellery pieces.")}`;
      }
      return;
    }

    bagItemsEl.innerHTML = bag
      .map(
        (item, idx) => `
        <div class="bag-row">
          <div>
            <strong>${item.name}</strong>
            <span>R${(item.price * item.qty).toLocaleString()}</span>
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-action="dec" data-index="${idx}" aria-label="Decrease quantity">-</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-action="inc" data-index="${idx}" aria-label="Increase quantity">+</button>
          </div>
        </div>`
      )
      .join("");

    const lines = bag.map((item) => `• ${item.qty}x ${item.name} (R${item.price * item.qty})`).join("\n");
    const msg = `Hi 4evercharmed! I'd love to place an order:\n\n${lines}\n\nItems total: R${totalPrice}\n(Please let me know the Aramex delivery fee & payment details!)`;

    if (whatsappOrderBtn) {
      whatsappOrderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
  }

  document.querySelectorAll(".add-to-bag").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      if (!name || !price) return;

      const existing = bag.find((item) => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        bag.push({ name, price, qty: 1 });
      }

      saveAndRenderBag();
      openBag();
    });
  });

  if (bagItemsEl) {
    bagItemsEl.addEventListener("click", (e) => {
      const target = e.target.closest(".qty-btn");
      if (!target) return;

      const idx = Number(target.dataset.index);
      const action = target.dataset.action;

      if (action === "inc") {
        bag[idx].qty += 1;
      } else if (action === "dec") {
        bag[idx].qty -= 1;
        if (bag[idx].qty <= 0) bag.splice(idx, 1);
      }

      saveAndRenderBag();
    });
  }

  saveAndRenderBag();

  // 7. FAQ Accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      questionBtn.setAttribute("aria-expanded", String(isOpen));
    });
  });
});