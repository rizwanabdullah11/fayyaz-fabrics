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
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Top Products</h2>
          <p className="text-sm text-gray-500">Best performing items this month</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl font-bold text-sm text-white shadow-lg">
              {index + 1}
              {index === 0 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                  👑
                </div>
              )}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 rounded-xl object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate group-hover:text-indigo-600 transition-colors">
                {product.name}
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {product.sales} sales
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 text-sm">{product.revenue}</p>
              <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +{product.trend}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
