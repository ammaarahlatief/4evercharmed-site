document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mainNav.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Charm bar category filter
  const tabBtns = document.querySelectorAll(".tab-btn");
  const itemCards = document.querySelectorAll(".item-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category || "all";

      itemCards.forEach((card) => {
        const match = cat === "all" || card.dataset.category === cat;
        card.classList.toggle("hidden-item", !match);
      });
    });
  });

  // Bag state
  let bag = [];
  const bagCountEl = document.getElementById("bagCount");
  const bagItemsList = document.getElementById("bagItemsList");
  const bagTotalEl = document.getElementById("bagTotal");
  const bagWhatsappOrder = document.getElementById("bagWhatsappOrder");
  const bagDrawer = document.getElementById("bagDrawer");

  function renderBag() {
    if (bagCountEl) bagCountEl.textContent = String(bag.length);

    if (!bagItemsList || !bagTotalEl || !bagWhatsappOrder) return;

    if (bag.length === 0) {
      bagItemsList.innerHTML = '<p class="bag-empty">Your bag is empty right now. Tap "Add to Bag" on any cute piece!</p>';
      bagTotalEl.textContent = "R0";
      bagWhatsappOrder.href = "https://wa.me/27839561961?text=" + encodeURIComponent("Hi 4evercharmed, I'd like to ask about your charms and Aramex delivery (1-2 weeks).");
      return;
    }

    let total = 0;
    bagItemsList.innerHTML = "";
    const summaryLines = [];

    bag.forEach((item, idx) => {
      total += item.price;
      summaryLines.push(`${item.name} (R${item.price})`);

      const row = document.createElement("div");
      row.className = "bag-row";
      row.innerHTML = `<span>${item.name} — <strong>R${item.price}</strong></span>`;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn btn-sm btn-cream";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        bag.splice(idx, 1);
        renderBag();
      });

      row.appendChild(removeBtn);
      bagItemsList.appendChild(row);
    });

    bagTotalEl.textContent = `R${total}`;
    const msg = `Hi 4evercharmed, I'd like to order: ${summaryLines.join(", ")}. Total: R${total} (Aramex delivery 1-2 weeks).`;
    bagWhatsappOrder.href = `https://wa.me/27839561961?text=${encodeURIComponent(msg)}`;
  }

  document.querySelectorAll(".add-bag-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name || "Charm Piece";
      const price = Number(btn.dataset.price || 0);
      bag.push({ name, price });
      renderBag();
      if (bagDrawer) {
        bagDrawer.classList.add("open");
        bagDrawer.setAttribute("aria-hidden", "false");
      }
    });
  });

  const openBagBtn = document.getElementById("openBagBtn");
  const closeBagBtn = document.getElementById("closeBagBtn");
  const closeBagBackdrop = document.getElementById("closeBagBackdrop");
  const clearBagBtn = document.getElementById("clearBagBtn");

  function closeBag() {
    if (!bagDrawer) return;
    bagDrawer.classList.remove("open");
    bagDrawer.setAttribute("aria-hidden", "true");
  }

  if (openBagBtn && bagDrawer) {
    openBagBtn.addEventListener("click", () => {
      bagDrawer.classList.add("open");
      bagDrawer.setAttribute("aria-hidden", "false");
    });
  }
  if (closeBagBtn) closeBagBtn.addEventListener("click", closeBag);
  if (closeBagBackdrop) closeBagBackdrop.addEventListener("click", closeBag);
  if (clearBagBtn) {
    clearBagBtn.addEventListener("click", () => {
      bag = [];
      renderBag();
    });
  }

  renderBag();
});