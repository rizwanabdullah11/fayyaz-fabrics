import { getProductById } from "@/data/products"

export async function generateMetadata({ params }) {
  const product = getProductById(parseInt(params.id))

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - Fayyaz Fabrics`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
      type: "product",
    },
  }
}
