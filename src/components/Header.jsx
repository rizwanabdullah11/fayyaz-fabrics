import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShoppingCartSheet from "./ShoppingCart"

export default function Header({ cart, updateQuantity, removeFromCart }) {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
              <Search className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold">GULBADSHAH FABRICS</h1>
          </div>
          <ShoppingCartSheet 
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      <nav className="bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-2 text-sm overflow-x-auto">
            <a href="#" className="whitespace-nowrap hover:text-gray-300">Home</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">Catalog</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">ASAL DOUBLE GHORA BOSKI FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">ITALIAN BOSKI FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">SHAHI BOSKI FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">PREMIUM ROYAL BOSKI NEW YEAR SAL 54% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">DYNASTY COTTON BY GUL AHMED FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">LOPAZ EXECUTIVE FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">IMPORTED DESIGNER WOOL FLAT 40% OFF</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-300">RAHAT WOOL BY GRACE FLAT 40% OFF</a>
          </div>
        </div>
      </nav>
    </header>
  )
}