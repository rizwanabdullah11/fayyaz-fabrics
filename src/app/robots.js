export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fayyazfabrics.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/checkout/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
