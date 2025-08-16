"use client"

import { useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductCard from "@/components/ProductCard"
import Footer from "@/components/Footer"
import { useCart } from "@/hooks/useCart"
import { ChevronRight, Star, Quote, TrendingUp, Clock, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Enhanced product data with categories
const sampleProducts = [
  {
    id: 1,
    name: "ASAL DOUBLE GHORA BOSKI (8 POUND)",
    price: 6500,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    sale: true,
    bestseller: true,
    category: "boski"
  },
  {
    id: 2,
    name: "PREMIUM ITALIAN BOSKI",
    price: 6500,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    sale: true,
    isNew: true,
    category: "boski"
  },
  {
    id: 3,
    name: "IMPORTED DESIGNER WOOL (FEROZA)",
    price: 3150,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
    sale: true,
    category: "wool"
  },
  {
    id: 4,
    name: "IMPORTED DESIGNER WOOL (GOLDEN SKIN)",
    price: 3150,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop",
    sale: true,
    category: "wool"
  },
  {
    id: 5,
    name: "PREMIUM ROYAL BOSKI",
    price: 4200,
    originalPrice: 7000,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    sale: true,
    bestseller: true,
    category: "boski"
  },
  {
    id: 6,
    name: "DYNASTY COTTON BY GUL AHMED",
    price: 2800,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    sale: true,
    category: "cotton"
  },
  {
    id: 7,
    name: "LOPAZ EXECUTIVE FABRIC",
    price: 3500,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
    sale: true,
    isNew: true,
    category: "cotton"
  },
  {
    id: 8,
    name: "RAHAT WOOL BY GRACE",
    price: 2900,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop",
    sale: true,
    category: "wool"
  }
]

const categories = [
  {
    id: "boski",
    name: "Premium Boski",
    icon: "👔",
    description: "Finest quality Boski fabrics",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop"
  },
  {
    id: "cotton",
    name: "Cotton Collection",
    icon: "🌿",
    description: "Comfortable & breathable cotton",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: "wool",
    name: "Designer Wool",
    icon: "🧶",
    description: "Imported premium wool fabrics",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
  }
]

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    location: "Karachi",
    rating: 5,
    comment: "Excellent quality fabrics! The Royal Boski collection is absolutely premium. Very satisfied with my purchase.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Fatima Sheikh",
    location: "Lahore",
    rating: 5,
    comment: "Best fabric store in Pakistan! Amazing variety and unbeatable prices. The customer service is outstanding.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Muhammad Ali",
    location: "Islamabad",
    rating: 5,
    comment: "I've been buying from Fayyaz Fabrics for years. Their quality never disappoints. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
]

export default function Home() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = selectedCategory === "all" 
    ? sampleProducts 
    : sampleProducts.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      {/* Hero Section */}
      <HeroSection />

      <main className="flex-1">
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl font-display font-bold mb-4 text-gradient">Shop By Category</h2>
              <p className="text-lg text-muted-foreground">Explore our premium fabric collections</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="relative h-64">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/80">{category.description}</p>
                    <Button 
                      className="mt-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all"
                    >
                      Shop Now <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="animate-slideInLeft">
                <h2 className="text-4xl font-display font-bold mb-4">
                  <span className="text-gradient">Featured</span> Products
                </h2>
                <p className="text-lg text-muted-foreground">Handpicked premium fabrics just for you</p>
              </div>
              
              <div className="flex gap-2 mt-6 md:mt-0 animate-slideInRight">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all" ? "gradient-primary text-white" : ""}
                >
                  All Products
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "gradient-primary text-white" : ""}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={addToCart}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="gradient-primary text-white px-8">
                View All Products <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "100% Authentic", desc: "Genuine fabrics guaranteed" },
                { icon: TrendingUp, title: "Best Prices", desc: "Competitive market rates" },
                { icon: Clock, title: "Fast Delivery", desc: "Quick nationwide shipping" },
                { icon: Award, title: "Premium Quality", desc: "Top-grade materials only" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center text-white animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-purple-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl font-display font-bold mb-4">
                What Our <span className="text-gradient">Customers</span> Say
              </h2>
              <p className="text-lg text-muted-foreground">Real reviews from our valued customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat opacity-20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white animate-fadeIn">
              <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white px-6 py-2 text-lg">
                Limited Time Offer
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Get <span className="text-gradient-gold">20% OFF</span> on Your First Order!
              </h2>
              <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience premium quality fabrics at unbeatable prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  Shop Now <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg">
                  Contact Us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
