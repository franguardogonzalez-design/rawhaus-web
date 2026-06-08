(function () {
  const key = "rawhaus-cart";
  const drawer = document.querySelector("[data-cart]");
  const itemsNode = document.querySelector("[data-cart-items]");
  const countNodes = document.querySelectorAll("[data-cart-count]");
  const totalNode = document.querySelector("[data-cart-total]");

  const getCart = () => JSON.parse(localStorage.getItem(key) || "[]").map((item) => ({
    ...item,
    price: item.price ?? item.priceFrom ?? 0
  }));
  const setCart = (cart) => localStorage.setItem(key, JSON.stringify(cart));
  const format = (value) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

  function totals(cart) {
    return {
      count: cart.reduce((sum, item) => sum + item.qty, 0),
      amount: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    };
  }

  function render() {
    const cart = getCart();
    const summary = totals(cart);

    countNodes.forEach((node) => {
      node.textContent = summary.count;
    });

    if (!itemsNode || !totalNode) return;

    itemsNode.innerHTML = cart.length
      ? cart.map((item) => `
        <article class="cart-item" data-cart-item="${item.id}">
          <div>
            <strong>${item.name}</strong>
            <span class="muted">${item.qty} x ${format(item.price)}</span>
            <span>${format(item.price * item.qty)}</span>
          </div>
          <button class="cart-remove" type="button" data-cart-remove="${item.id}">Quitar</button>
        </article>
      `).join("")
      : "<p class=\"muted\">Todavia no has añadido productos. Añade piezas al carrito para continuar con el pago.</p>";

    totalNode.textContent = format(summary.amount);
  }

  window.RawHausCart = {
    all: getCart,
    total() {
      return totals(getCart());
    },
    format,
    add(product) {
      const cart = getCart();
      const existing = cart.find((item) => item.id === product.id);
      if (existing) existing.qty += 1;
      else cart.push({ id: product.id, name: product.name, price: product.price ?? product.priceFrom ?? 0, qty: 1 });
      setCart(cart);
      render();
      window.dispatchEvent(new CustomEvent("rawhaus:cart-change", { detail: { cart } }));
      window.RawHausCart.open();
    },
    remove(id) {
      const cart = getCart().filter((item) => item.id !== id);
      setCart(cart);
      render();
      window.dispatchEvent(new CustomEvent("rawhaus:cart-change", { detail: { cart } }));
    },
    decrease(id) {
      const cart = getCart()
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0);
      setCart(cart);
      render();
      window.dispatchEvent(new CustomEvent("rawhaus:cart-change", { detail: { cart } }));
    },
    clear() {
      setCart([]);
      render();
      window.dispatchEvent(new CustomEvent("rawhaus:cart-change", { detail: { cart: [] } }));
    },
    open() {
      drawer?.classList.add("is-open");
      drawer?.setAttribute("aria-hidden", "false");
    },
    close() {
      drawer?.classList.remove("is-open");
      drawer?.setAttribute("aria-hidden", "true");
    }
  };

  document.querySelectorAll("[data-cart-open]").forEach((button) => {
    button.addEventListener("click", window.RawHausCart.open);
  });

  document.querySelectorAll("[data-cart-close]").forEach((button) => {
    button.addEventListener("click", window.RawHausCart.close);
  });

  drawer?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-cart-remove]");
    if (removeButton) {
      window.RawHausCart.decrease(removeButton.dataset.cartRemove);
      return;
    }
    if (event.target === drawer) window.RawHausCart.close();
  });

  render();
})();
