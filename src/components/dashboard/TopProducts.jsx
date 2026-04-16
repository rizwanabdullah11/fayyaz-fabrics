import { TrendingUp } from "lucide-react"

export default function TopProducts() {
  const products = [
    {
      id: 1,
      name: "ASAL DOUBLE GHORA BOSKI",
      sales: 45,
      revenue: "Rs. 2,92,500",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop",
      trend: 12
    },
    {
      id: 2,
      name: "KHAADI PREMIUM COTTON",
      sales: 38,
      revenue: "Rs. 1,21,600",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop",
      trend: 8
    },
    {
      id: 3,
      name: "SAPPHIRE SILK BLEND",
      sales: 32,
      revenue: "Rs. 1,66,400",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100&h=100&fit=crop",
      trend: 15
    },
    {
      id: 4,
      name: "ROYAL BOSKI PREMIUM",
      sales: 28,
      revenue: "Rs. 1,82,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
      trend: 5
    },
    {
      id: 5,
      name: "NISHAT LUXURY BLEND",
      sales: 24,
      revenue: "Rs. 98,400",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
      trend: 10
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top Products</h2>
        <TrendingUp className="w-5 h-5 text-green-600" />
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm">
              {index + 1}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">
                {product.name}
              </p>
              <p className="text-xs text-gray-500">
                {product.sales} sales
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 text-sm">{product.revenue}</p>
              <p className="text-xs text-green-600">+{product.trend}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
