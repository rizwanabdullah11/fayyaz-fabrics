// Analytics utility functions
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData)
  }
  // Also log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventName, eventData)
  }
}

export const trackPageView = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

export const trackProductView = (product) => {
  trackEvent("view_item", {
    currency: "PKR",
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        item_brand: product.brand,
        price: product.price,
      },
    ],
  })
}

export const trackAddToCart = (product, quantity = 1) => {
  trackEvent("add_to_cart", {
    currency: "PKR",
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        item_brand: product.brand,
        price: product.price,
        quantity: quantity,
      },
    ],
  })
}

export const trackPurchase = (orderId, items, total) => {
  trackEvent("purchase", {
    transaction_id: orderId,
    value: total,
    currency: "PKR",
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      item_brand: item.brand,
      price: item.price,
      quantity: item.quantity,
    })),
  })
}
