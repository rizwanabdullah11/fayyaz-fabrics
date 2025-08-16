"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ShoppingBag, TrendingUp, Award, Truck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Luxurious Fabrics",
      subtitle: "NEW YEAR MEGA SALE",
      description: "Premium Quality Fabrics with up to 54% OFF",
      cta: "Shop Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop",
      badge: "Limited Time",
      discount: "54% OFF"
    },
    {
      id: 2,
      title: "Premium Royal Boski",
      subtitle: "EXCLUSIVE COLLECTION",
      description: "Finest Quality Boski Fabrics from Pakistan",
      cta: "Explore Now",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1920&h=800&fit=crop",
      badge: "Bestseller",
      discount: "40% OFF"
    },
    {
      id: 3,
      title: "Designer Wool Collection",
      subtitle: "WINTER SPECIAL",
      description: "Imported Designer Wool at Unbeatable Prices",
      cta: "View Collection",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=800&fit=crop",
      badge: "New Arrival",
      discount: "45% OFF"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders above Rs.5000" },
    { icon: Award, title: "Premium Quality", desc: "100% Authentic Fabrics" },
    { icon: TrendingUp, title: "Best Prices", desc: "Guaranteed lowest prices" },
    { icon: Star, title: "Customer Satisfaction", desc: "15 days return policy" }
  ]

  return (
    <section className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-2xl animate-fadeIn">
                <Badge className="mb-4 bg-gradient-gold text-white px-4 py-1 text-sm animate-pulse-glow">
                  {slide.badge}
                </Badge>
                
                <h3 className="text-lg md:text-xl text-yellow-400 font-medium mb-2 animate-slideInLeft">
                  {slide.subtitle}
                </h3>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 animate-slideInLeft">
                  {slide.title}
                  <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-gradient-gold">
                    {slide.discount}
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white px-8 py-6 text-lg font-semibold hover-scale"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {slide.cta}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black transition-all"
                  >
                    View All Offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-gradient-gold' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              } rounded-full`}
            />
          ))}
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-white animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-purple-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-2xl h-64 hover-lift cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=400&fit=crop"
              alt="Cotton Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Badge className="mb-2 bg-red-500 text-white">Hot Deal</Badge>
              <h3 className="text-2xl font-bold text-white mb-1">Cotton Collection</h3>
              <p className="text-white/80">Starting from Rs.2,800</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl h-64 hover-lift cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop"
              alt="Wool Selection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Badge className="mb-2 bg-gradient-primary text-white">Premium</Badge>
              <h3 className="text-2xl font-bold text-white mb-1">Designer Wool</h3>
              <p className="text-white/80">Luxury fabrics at best prices</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl h-64 hover-lift cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop"
              alt="Boski Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Badge className="mb-2 bg-gradient-gold text-white">Exclusive</Badge>
              <h3 className="text-2xl font-bold text-white mb-1">Royal Boski</h3>
              <p className="text-white/80">Premium quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
