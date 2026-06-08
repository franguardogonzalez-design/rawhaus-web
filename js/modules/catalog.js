(function () {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid || !window.RAWHAUS_PRODUCTS) return;

  const filters = document.querySelector("[data-filters]");
  const sort = document.querySelector("[data-sort]");
  const products = window.RAWHAUS_PRODUCTS;
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("categoria");
  let activeCategory = categories.includes(initialCategory) ? initialCategory : "Todos";

  const format = (value) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const productHref = (product) => {
    const productParams = new URLSearchParams({ id: product.id });
    if (activeCategory !== "Todos") productParams.set("categoria", activeCategory);
    return `producto.html?${productParams.toString()}`;
  };

  function updateCatalogUrl() {
    const catalogParams = new URLSearchParams(window.location.search);
    if (activeCategory === "Todos") {
      catalogParams.delete("categoria");
    } else {
      catalogParams.set("categoria", activeCategory);
    }
    const query = catalogParams.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}`;
    window.history.replaceState({ category: activeCategory }, "", nextUrl);
  }

  function updateFilterState() {
    filters?.querySelectorAll("[data-category]").forEach((node) => {
      node.setAttribute("aria-pressed", String(node.dataset.category === activeCategory));
    });
  }

  function card(product) {
    const productLabel = product.subcategory || product.category;
    const categoryClass = `category-${product.category.toLowerCase().replace(/\s+/g, "-")}`;
    const productClass = `product-${product.id}`;
    const media = product.image
      ? `<img src="${product.image}" alt="${product.name} de roble macizo y hierro negro satinado" loading="lazy">`
      : `<div class="product-media-empty" aria-hidden="true"><span>Imagen pendiente</span></div>`;
    return `
      <article class="product-card ${categoryClass} ${productClass} ${product.featured ? "featured" : ""}">
        <a class="product-media" href="${productHref(product)}" aria-label="Ver ${product.name}">
          ${media}
        </a>
        <div class="product-info">
          <div class="product-meta"><span>${productLabel}</span><span>${product.leadTime}</span></div>
          <h3><a href="${productHref(product)}">${product.name}</a></h3>
          <p class="muted">${product.shortDescription}</p>
          <div class="product-meta">
            <span class="price">${format(product.price)}</span>
            <span>${product.customizable ? "Personalizable" : "Colección"}</span>
          </div>
          <button class="btn product-cart-btn" type="button" data-add-cart="${product.id}">Añadir al carrito</button>
        </div>
      </article>
    `;
  }

  function catalogSection(title, items, emptyText) {
    return `
      <section class="catalog-section">
        <div class="catalog-section-head">
          <h2>${title}</h2>
        </div>
        ${items.length
          ? `<div class="catalog-section-products grid grid-3">${items.map(card).join("")}</div>`
          : `<div class="catalog-empty"><p>${emptyText}</p></div>`}
      </section>
    `;
  }

  function render() {
    let visible = grid.dataset.featuredOnly === "true" ? products.filter((product) => product.featured) : [...products];
    visible = activeCategory === "Todos" ? visible : visible.filter((product) => product.category === activeCategory);
    if (sort?.value === "price-asc") visible.sort((a, b) => a.price - b.price);
    if (sort?.value === "price-desc") visible.sort((a, b) => b.price - a.price);
    if (sort?.value === "featured") visible.sort((a, b) => Number(b.featured) - Number(a.featured));

    if (activeCategory === "Taburetes" && grid.dataset.featuredOnly !== "true") {
      const standard = visible.filter((product) => (product.subcategory || "Taburetes") === "Taburetes");
      const design = visible.filter((product) => product.subcategory === "Taburetes de dise\u00f1o");
      grid.classList.add("catalog-section-grid");
      grid.innerHTML = [
        catalogSection("Taburetes", standard, "La seleccion principal de taburetes se anadira aqui."),
        catalogSection("Taburetes de dise\u00f1o", design, "Las piezas de diseno se anadiran aqui.")
      ].join("");
      return;
    }

    grid.classList.remove("catalog-section-grid");
    grid.innerHTML = visible.map(card).join("");
  }

  if (filters) {
    filters.innerHTML = categories.map((category) => `
      <button class="filter-btn" type="button" aria-pressed="${category === activeCategory}" data-category="${category}">${category}</button>
    `).join("");

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      updateFilterState();
      updateCatalogUrl();
      render();
    });
  }

  sort?.addEventListener("change", render);
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-cart]");
    if (!button) return;
    const product = products.find((item) => item.id === button.dataset.addCart);
    if (product) window.RawHausCart?.add(product);
  });
  updateFilterState();
  updateCatalogUrl();
  render();
})();
