import { Monitor, Smartphone, Tablet } from "lucide-react"

export default function DeviceBreakdown() {
  const devices = [
    {
      name: "Mobile",
      users: 7245,
      percentage: 58.1,
      sessions: 12450,
      bounceRate: 45.2,
      icon: Smartphone,
      color: "bg-blue-500"
    },
    {
      name: "Desktop",
      users: 3890,
      percentage: 31.2,
      sessions: 8920,
      bounceRate: 38.7,
      icon: Monitor,
      color: "bg-purple-500"
    },
    {
      name: "Tablet",
      users: 1323,
      percentage: 10.7,
      sessions: 2180,
      bounceRate: 42.1,
      icon: Tablet,
      color: "bg-green-500"
    }
  ]

  const totalUsers = devices.reduce((sum, device) => sum + device.users, 0)

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
            Device Breakdown
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="font-bold text-purple-600">{totalUsers.toLocaleString()}</span>
            total users
          </p>
        </div>
      </div>

      {/* Donut Chart Representation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          {/* Simple circular progress bars */}
          <svg className="w-full h-full transform -rotate-90">
            {devices.map((device, index) => {
              const radius = 70 - (index * 15)
              const circumference = 2 * Math.PI * radius
              const offset = circumference - (device.percentage / 100) * circumference
              
              return (
                <circle
                  key={index}
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke={device.color.replace('bg-', '')}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className={device.color.replace('bg-', 'stroke-')}
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{totalUsers.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Total Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Device Stats */}
      <div className="space-y-3">
        {devices.map((device, index) => (
          <div key={index} className="group bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`relative w-12 h-12 ${device.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <device.icon className="w-6 h-6 text-white" />
                  <div className={`absolute inset-0 ${device.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{device.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{device.percentage}% of traffic</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {device.users.toLocaleString()}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/50 rounded-lg p-2">
                <p className="text-gray-500 font-medium">Sessions</p>
                <p className="font-bold text-gray-900 text-sm">{device.sessions.toLocaleString()}</p>
              </div>
              <div className="bg-white/50 rounded-lg p-2">
                <p className="text-gray-500 font-medium">Bounce Rate</p>
                <p className="font-bold text-gray-900 text-sm">{device.bounceRate}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
