(function () {
  const root = document.querySelector("[data-product-page]");
  if (!root || !window.RAWHAUS_PRODUCTS) return;

  const params = new URLSearchParams(window.location.search);
  const product = window.RAWHAUS_PRODUCTS.find((item) => item.id === params.get("id")) || window.RAWHAUS_PRODUCTS[0];
  const categoryClass = `category-${product.category.toLowerCase().replace(/\s+/g, "-")}`;
  const productClass = `product-${product.id}`;
  const format = (value) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

  document.title = `${product.name} | RawHaus`;
  document.querySelector("meta[name='description']")?.setAttribute("content", `${product.name}: ${product.shortDescription} Fabricacion premium en roble macizo y hierro negro satinado.`);

  const hasGallery = product.gallery && product.gallery.length > 0;
  const gallery = hasGallery
    ? `
      <div class="gallery-main">
        <img src="${product.gallery[0]}" alt="${product.name}" data-gallery-main>
      </div>
      <div class="gallery-thumbs">
        ${product.gallery.map((src, index) => `
        <button class="thumb" type="button" aria-current="${index === 0}" data-gallery-thumb="${src}" data-gallery-index="${index}">
            <img src="${src}" alt="Vista ${index + 1} de ${product.name}">
          </button>
        `).join("")}
      </div>
    `
    : `<div class="gallery-main gallery-main-empty"><span>Imagen pendiente</span></div>`;

  root.innerHTML = `
    <div class="product-gallery ${categoryClass} ${productClass}" data-gallery data-active-gallery="0">
      ${gallery}
    </div>
    <article class="product-detail">
      <p class="eyebrow">${product.category}</p>
      <h1>${product.name}</h1>
      <p class="lead">${product.shortDescription}</p>
      <p>${product.description}</p>
      <p class="price">${format(product.price)}</p>
      <div class="cta-row">
        <button class="btn" type="button" data-add-cart>Añadir al carrito</button>
        <a class="btn btn-ghost" href="carrito.html">Ir a pagar</a>
      </div>
      <ul class="spec-list">
        <li><strong>Materiales</strong><span>${product.materials.join(", ")}</span></li>
        <li><strong>Medidas</strong><span>${product.dimensions.join(" / ")}</span></li>
        <li><strong>Acabados</strong><span>${product.finishes.join(", ")}</span></li>
        <li><strong>Entrega estimada</strong><span>${product.leadTime}</span></li>
      </ul>
      <div>
        <h2 class="sr-only">Opciones personalizadas</h2>
        <p class="eyebrow">Configuracion</p>
        <div class="option-grid">
          <label><input type="radio" name="finish" checked> Roble natural + hierro negro satinado</label>
          <label><input type="radio" name="finish"> Roble ahumado + hierro negro satinado</label>
          <label><input type="radio" name="finish"> Medida y acabado personalizados</label>
        </div>
      </div>
    </article>
  `;

  root.querySelector("[data-add-cart]")?.addEventListener("click", () => window.RawHausCart?.add(product));

  root.querySelectorAll("[data-gallery-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelector("[data-gallery-main]").src = button.dataset.galleryThumb;
      root.querySelector("[data-gallery]").dataset.activeGallery = button.dataset.galleryIndex || "0";
      root.querySelectorAll("[data-gallery-thumb]").forEach((node) => node.setAttribute("aria-current", String(node === button)));
    });
  });
})();
