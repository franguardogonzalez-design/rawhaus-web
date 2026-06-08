(function () {
  const itemsNode = document.querySelector("[data-checkout-items]");
  const totalNode = document.querySelector("[data-checkout-total]");
  const countNode = document.querySelector("[data-checkout-count]");
  const payButton = document.querySelector("[data-checkout-pay]");

  if (!itemsNode || !window.RawHausCart) return;

  function render() {
    const cart = window.RawHausCart.all();
    const total = window.RawHausCart.total();

    itemsNode.innerHTML = cart.length
      ? cart.map((item) => `
        <article class="checkout-item">
          <div>
            <p class="eyebrow">${item.qty} unidad${item.qty > 1 ? "es" : ""}</p>
            <h2>${item.name}</h2>
            <p class="muted">${window.RawHausCart.format(item.price)} por unidad</p>
          </div>
          <div class="checkout-item-actions">
            <span class="checkout-qty" aria-label="${item.qty} unidades">${item.qty}</span>
            <strong>${window.RawHausCart.format(item.price * item.qty)}</strong>
            <button class="checkout-remove" type="button" aria-label="Quitar una unidad de ${item.name}" data-checkout-remove="${item.id}">&times;</button>
          </div>
        </article>
      `).join("")
      : `<div class="catalog-empty"><p>No hay productos en el carrito.</p><a class="btn" href="catalogo.html">Ver catalogo</a></div>`;

    if (totalNode) totalNode.textContent = window.RawHausCart.format(total.amount);
    if (countNode) countNode.textContent = `${total.count} producto${total.count === 1 ? "" : "s"} añadido${total.count === 1 ? "" : "s"}`;
    if (payButton) payButton.disabled = total.count === 0;
  }

  itemsNode.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-checkout-remove]");
    if (!removeButton) return;
    window.RawHausCart.decrease(removeButton.dataset.checkoutRemove);
    render();
  });

  payButton?.addEventListener("click", async () => {
    const cart = window.RawHausCart.all();
    if (!cart.length) return;

    payButton.disabled = true;
    payButton.textContent = "Conectando pago";

    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: cart.map((item) => ({ id: item.id, qty: item.qty }))
        })
      });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error || "No se pudo iniciar el pago");
      window.location.href = data.url;
    } catch (error) {
      payButton.disabled = false;
      payButton.textContent = "Pagar ahora";
      window.alert(error.message || "No se pudo conectar con la pasarela de pago.");
    }
  });

  window.addEventListener("rawhaus:cart-change", render);
  render();
})();
