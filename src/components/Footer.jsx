import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">FF</span>
              </div>
              <h3 className="text-xl font-bold">FAYYAZ FABRICS</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted source for premium quality fabrics since 1990. We bring you the finest collection from top brands.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Sale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Return & Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Fabric Street, Textile Market<br />
                  Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@fayyazfabrics.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  info@fayyazfabrics.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-indigo-400 focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 Fayyaz Fabrics. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}