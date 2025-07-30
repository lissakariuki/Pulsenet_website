import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Wifi,
  MapPin,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function CoveragePage() {
  const coverageAreas = [
    { area: "Nairobi CBD", status: "active", households: "15,000+" },
    { area: "Westlands", status: "active", households: "8,500+" },
    { area: "Karen", status: "active", households: "6,200+" },
    { area: "Kilimani", status: "active", households: "12,000+" },
    { area: "Lavington", status: "active", households: "4,800+" },
    { area: "Kileleshwa", status: "active", households: "7,300+" },
    { area: "Parklands", status: "coming-soon", households: "Est. 5,000+" },
    { area: "Kasarani", status: "coming-soon", households: "Est. 8,000+" },
    { area: "Thika", status: "planning", households: "Est. 12,000+" },
    { area: "Machakos", status: "planning", households: "Est. 6,500+" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar 
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <div className="flex items-center space-x-2 text-blue-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium">0746 406 499</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium">07** *** ***</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">07********</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full">
              Coverage
            </Button>
            <div className="flex space-x-2">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
              <h1 className="text-xl font-bold text-blue-900">PULSENET</h1>
              <p className="text-xs text-blue-600 uppercase tracking-wide">Bringing Fast Fiber to Your Doorstep</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">Home</Link>
              <Link href="/about" className="text-blue-700 hover:text-blue-900 font-medium">About</Link>
              <Link href="/coverage" className="text-blue-700 hover:text-blue-900 font-medium">Our Coverage</Link>
              <Link href="/contact" className="text-blue-700 hover:text-blue-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Coverage Areas</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expanding across Kenya to bring high-speed fiber internet to your doorstep
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Coverage Status Legend */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Active Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">Coming Soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-500" />
              <span className="font-medium">In Planning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Coverage Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check if PulseNet fiber internet is available in your area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-blue-900">{area.area}</h3>
                    </div>
                    <div className="flex items-center space-x-1">
                      {area.status === "active" && (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">Active</span>
                        </>
                      )}
                      {area.status === "coming-soon" && (
                        <>
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-yellow-600 font-medium">Coming Soon</span>
                        </>
                      )}
                      {area.status === "planning" && (
                        <>
                          <AlertCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-blue-600 font-medium">Planning</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Connected Households: {area.households}</p>
                  <Button
                    className={`w-full ${
                      area.status === "active"
                        ? "bg-green-600 hover:bg-green-700"
                        : area.status === "coming-soon"
                          ? "bg-yellow-600 hover:bg-yellow-700"
                          : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    {area.status === "active"
                      ? "Get Connected"
                      : area.status === "coming-soon"
                        ? "Notify Me"
                        : "Express Interest"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Check Availability */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Don't See Your Area?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              We're constantly expanding our network. Contact us to check availability in your specific location or to
              express interest for future coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3">
                Check Availability
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
              >
                Request Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">Message us</div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">PULSENET</h3>
              </div>
              <p className="text-blue-200">Connecting you to the world with reliable, high-speed fiber internet.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-blue-200 hover:text-white">Home</Link>
                <Link href="/coverage" className="block text-blue-200 hover:text-white">Coverage</Link>
                <Link href="/contact" className="block text-blue-200 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-blue-200 hover:text-white">
                  Help Center
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white">
                  Contact Us
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white">
                  Technical Support
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white">
                  Installation
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-200">
                <p>📞 0746 406 499</p>
                <p>📧 <a href="mailto:info@pulsenet.co.ke" className="text-blue-200 hover:text-white">info@pulsenet.co.ke</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 PulseNet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}