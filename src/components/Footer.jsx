"use client"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Youtube, Shield, Truck, RefreshCw, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail("")
    }
  }

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#" },
      { name: "All Products", href: "#" },
      { name: "Special Offers", href: "#" },
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" }
    ],
    "Categories": [
      { name: "Premium Boski", href: "#" },
      { name: "Cotton Collection", href: "#" },
      { name: "Designer Wool", href: "#" },
      { name: "Executive Fabrics", href: "#" },
      { name: "Sale Items", href: "#" }
    ],
    "Customer Service": [
      { name: "Contact Us", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-4 animate-fadeIn">
              Subscribe to Our <span className="text-gradient-gold">Newsletter</span>
            </h3>
            <p className="text-purple-100 mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              Get exclusive offers, new product updates, and fabric care tips!
            </p>
            
            <form 
              onSubmit={handleSubscribe} 
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-white/40 transition-all"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-gold text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                {subscribed ? (
                  <>✓ Subscribed!</>
                ) : (
                  <>
                    Subscribe <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
            
            {subscribed && (
              <p className="mt-4 text-green-300 animate-fadeIn">
                Thank you for subscribing! Check your email for a welcome discount.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-black/20 py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-sm mb-1">15 Days Return</h4>
              <p className="text-xs text-gray-400">Money back guarantee</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <RefreshCw className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-sm mb-1">30 Days Exchange</h4>
              <p className="text-xs text-gray-400">Hassle-free exchange</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Truck className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-sm mb-1">Free Shipping</h4>
              <p className="text-xs text-gray-400">On orders above Rs.5000</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-sm mb-1">Premium Quality</h4>
              <p className="text-xs text-gray-400">100% authentic fabrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold mb-4 text-gradient-gold">
                FAYYAZ FABRICS
              </h2>
              <p className="text-gray-300 mb-6">
                Your trusted partner for premium quality fabrics since 1985. 
                We offer the finest collection of Boski, Cotton, and Wool fabrics 
                at unbeatable prices.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:03068013329" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp / Call</p>
                    <p className="text-sm">0306-8013329</p>
                  </div>
                </a>
                
                <a href="mailto:info@fayyazfabrics.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm">info@fayyazfabrics.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Our Store</p>
                    <p className="text-sm">Main Rail Bazar, Faisalabad</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-all hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-6 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex gap-2">
                <Badge className="bg-white/10 text-white">Cash on Delivery</Badge>
                <Badge className="bg-white/10 text-white">Bank Transfer</Badge>
                <Badge className="bg-white/10 text-white">EasyPaisa</Badge>
                <Badge className="bg-white/10 text-white">JazzCash</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-400">100% Secure Shopping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 FAYYAZ FABRICS. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <p className="text-xs">
              Designed with ❤️ by Premium UI
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
