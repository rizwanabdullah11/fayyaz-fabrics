import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.sale && (
          <Badge className="absolute top-2 left-2 bg-blue-500">
            Sale
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              Rs.{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="font-bold text-lg">
            Rs.{product.price.toLocaleString()}
          </span>
        </div>
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </Button>
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy with Cash on Delivery
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}