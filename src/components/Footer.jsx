export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">WHATSAPP 03068013329</h2>
          <div className="space-y-2">
            <p className="text-lg font-semibold">15 DAYS RETURN MONEY BACK POLICY</p>
            <p>30 DAYS EXCHANGE POLICY</p>
            <p>OUTLET ADDRESS GULBADSHAH FABRICS MAIN RAIL BAZAR FAISALABAD</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>© 2025, GULBADSHAH FABRICS Powered by Shopify</span>
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Refund policy</a>
            <a href="#" className="hover:text-white">Terms of service</a>
            <a href="#" className="hover:text-white">Contact information</a>
            <a href="#" className="hover:text-white">Shipping policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}