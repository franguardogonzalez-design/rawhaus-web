(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const productField = form.querySelector("[name='producto']");
  const messageField = form.querySelector("[name='mensaje']");
  const selectedProducts = params.get("productos") || params.get("producto");

  if (productField && selectedProducts) productField.value = selectedProducts;
  if (messageField && selectedProducts && !messageField.value) {
    messageField.value = `Hola RawHaus, tengo una consulta sobre: ${selectedProducts}.`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("[data-form-success]");
    message?.classList.add("is-visible");
    form.reset();
  });
})();
