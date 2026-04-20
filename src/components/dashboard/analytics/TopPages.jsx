import { Eye, Clock, MousePointer } from "lucide-react"

export default function TopPages() {
  const pages = [
    {
      path: "/",
      title: "Home Page",
      views: 15420,
      avgTime: "2m 45s",
      bounceRate: 38.2,
      exitRate: 25.4
    },
    {
      path: "/collections/boski-fabrics",
      title: "Boski Fabrics Collection",
      views: 8920,
      avgTime: "4m 12s",
      bounceRate: 32.1,
      exitRate: 18.7
    },
    {
      path: "/products/1",
      title: "ASAL DOUBLE GHORA BOSKI",
      views: 6540,
      avgTime: "3m 28s",
      bounceRate: 28.5,
      exitRate: 42.3
    },
    {
      path: "/collections/designer-collection",
      title: "Designer Collection",
      views: 5280,
      avgTime: "3m 56s",
      bounceRate: 35.8,
      exitRate: 22.1
    },
    {
      path: "/collections",
      title: "All Collections",
      views: 4120,
      avgTime: "2m 18s",
      bounceRate: 41.2,
      exitRate: 28.9
    },
    {
      path: "/products/9",
      title: "KHAADI PREMIUM COTTON",
      views: 3890,
      avgTime: "3m 05s",
      bounceRate: 30.4,
      exitRate: 38.6
    },
    {
      path: "/checkout",
      title: "Checkout",
      views: 2450,
      avgTime: "5m 32s",
      bounceRate: 15.2,
      exitRate: 8.4
    },
    {
      path: "/collections/wool-collection",
      title: "Wool Collection",
      views: 2180,
      avgTime: "3m 42s",
      bounceRate: 36.7,
      exitRate: 24.5
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
            Top Pages
          </h2>
          <p className="text-sm text-gray-500">Most visited pages on your site</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                Page
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                Views
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                Avg. Time
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                Bounce Rate
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                Exit Rate
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pages.map((page, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{page.title}</p>
                    <p className="text-xs text-gray-500 font-mono">{page.path}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold text-gray-900">
                      {page.views.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{page.avgTime}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                    page.bounceRate < 30 
                      ? "bg-green-100 text-green-700"
                      : page.bounceRate < 40
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {page.bounceRate}%
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-sm text-gray-700">{page.exitRate}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
