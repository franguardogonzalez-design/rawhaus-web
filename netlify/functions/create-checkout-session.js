const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const products = require("../../js/data/products.js");

const headers = {
  "Content-Type": "application/json"
};

function response(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body)
  };
}

function getSiteUrl(event) {
  const configuredUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");
  return `https://${event.headers.host}`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Metodo no permitido" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return response(500, { error: "Falta configurar STRIPE_SECRET_KEY" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return response(400, { error: "Peticion invalida" });
  }

  const items = Array.isArray(payload.items) ? payload.items : [];
  const lineItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      const quantity = Number.parseInt(item.qty, 10);
      if (!product || !Number.isFinite(quantity) || quantity < 1) return null;

      return {
        quantity,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            description: product.shortDescription,
            images: product.image ? [`${getSiteUrl(event)}/${product.image}`] : undefined,
            metadata: {
              product_id: product.id
            }
          }
        }
      };
    })
    .filter(Boolean);

  if (!lineItems.length) {
    return response(400, { error: "El carrito esta vacio" });
  }

  try {
    const siteUrl = getSiteUrl(event);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/pago-exito.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/carrito.html`,
      shipping_address_collection: {
        allowed_countries: ["ES"]
      },
      phone_number_collection: {
        enabled: true
      },
      metadata: {
        source: "rawhaus-web"
      }
    });

    return response(200, { url: session.url });
  } catch (error) {
    return response(500, { error: error.message || "No se pudo iniciar el pago" });
  }
};
