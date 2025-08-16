"use client"

import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import Footer from "@/components/Footer"
import { useCart } from "@/hooks/useCart"

// Sample product data based on your images
const sampleProducts = [
  {
    id: 1,
    name: "ASAL DOUBLE GHORA BOSKI (8 POUND)",
    price: 6500,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 2,
    name: "ASAL DOUBLE GHORA BOSKI (8 POUND)",
    price: 6500,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 3,
    name: "IMPORTED DESIGNER WOOL (FEROZA)",
    price: 3150,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 4,
    name: "IMPORTED DESIGNER WOOL (GOLDEN SKIN)",
    price: 3150,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 5,
    name: "PREMIUM ROYAL BOSKI",
    price: 4200,
    originalPrice: 7000,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 6,
    name: "DYNASTY COTTON BY GUL AHMED",
    price: 2800,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 7,
    name: "LOPAZ EXECUTIVE FABRIC",
    price: 3500,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
    sale: true
  },
  {
    id: 8,
    name: "RAHAT WOOL BY GRACE",
    price: 2900,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
    sale: true
  }
]

export default function Home() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}