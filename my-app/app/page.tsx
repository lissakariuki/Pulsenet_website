import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Check,
  Headphones,
  Globe,
  Shield,
  Users,
  Zap,
  Wifi,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PulseNetHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
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
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">PULSENET</h1>
                <p className="text-xs text-blue-600 uppercase tracking-wide">GET CONNECTED.STAY CONNECTED</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-700 hover:text-blue-900 font-medium">
                About
              </Link>
              <Link href="/coverage" className="text-blue-700 hover:text-blue-900 font-medium">
                Our Coverage
              </Link>
              <Link href="/contact" className="text-blue-700 hover:text-blue-900 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stay Connected,
                <br />
                <span className="text-blue-100">with our unlimited</span>
                <br />
                Internet from Kes 2,000
              </h1>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="text-lg font-medium">Free Installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="text-lg font-medium">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="text-lg font-medium">Fast Fiber Internet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="text-lg font-medium">Quick Installation</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Connected
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happy customers using PulseNet internet"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900">24/7 Customer Service</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900">Wide Coverage</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900">Qualified Technicians</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900">Secure Connection</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900">High Speed Internet</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">PulseNet Internet Plans for You!</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">BASIC</h3>
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">10mbps</div>
                  <div className="text-3xl font-bold text-blue-700">
                    Ksh 2000 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  GET CONNECTED
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="relative overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">STANDARD</h3>
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-green-900 mb-2">20mbps</div>
                  <div className="text-3xl font-bold text-green-700">
                    Ksh 2500 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  GET CONNECTED
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">PREMIUM</h3>
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-purple-900 mb-2">50mbps</div>
                  <div className="text-3xl font-bold text-purple-700">
                    Ksh 3500 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  GET CONNECTED
                </Button>
              </CardContent>
            </Card>
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
                <Link href="/" className="block text-blue-200 hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="block text-blue-200 hover:text-white">
                  About
                </Link>
                <Link href="/plans" className="block text-blue-200 hover:text-white">
                  Plans
                </Link>
                <Link href="/coverage" className="block text-blue-200 hover:text-white">
                  Coverage
                </Link>
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
                <p>📞 07** *** ***</p>
                <p>💬 07********</p>
                <p>📧 info@pulsenet.co.ke</p>
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
