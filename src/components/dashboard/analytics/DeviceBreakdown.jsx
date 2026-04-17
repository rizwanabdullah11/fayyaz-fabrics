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
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Device Breakdown</h2>
          <p className="text-sm text-gray-500">{totalUsers.toLocaleString()} total users</p>
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
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${device.color} rounded-lg flex items-center justify-center`}>
                  <device.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{device.name}</p>
                  <p className="text-xs text-gray-500">{device.percentage}% of traffic</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {device.users.toLocaleString()}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-gray-500">Sessions</p>
                <p className="font-semibold text-gray-900">{device.sessions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500">Bounce Rate</p>
                <p className="font-semibold text-gray-900">{device.bounceRate}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
