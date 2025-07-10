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
  Users,
  Award,
  Target,
  Heart,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <span className="font-medium">+++++++</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">+++++</span>
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
                <p className="text-xs text-blue-600 uppercase tracking-wide">GET CONNECTED.STAY CONNECTED</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-900 font-semibold border-b-2 border-blue-600">
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
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PulseNet</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connecting communities across Kenya with reliable, high-speed fiber internet solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the digital divide in Kenya, PulseNet has been at the forefront of
                providing reliable, high-speed fiber internet solutions to homes and businesses across the country.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our inception, we've connected thousands of customers, enabling them to work, learn, and stay
                connected with the world. Our commitment to excellence and customer satisfaction has made us a trusted
                name in the telecommunications industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that fast, reliable internet is not a luxury but a necessity in today's digital world. That's
                why we continue to expand our network and improve our services to reach every corner of Kenya.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="PulseNet team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, affordable, and high-speed internet connectivity that empowers individuals and
                  businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
                <p className="text-gray-600">
                  To be Kenya's leading fiber internet service provider, connecting every home and business with
                  world-class internet infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, integrity, innovation, and customer-centricity guide everything we do as we build lasting
                  relationships with our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose PulseNet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best internet experience with unmatched service quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Reliable Network</h3>
              <p className="text-gray-600">99.9% uptime guarantee with redundant infrastructure</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Expert Support</h3>
              <p className="text-gray-600">24/7 technical support from certified professionals</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Quality Service</h3>
              <p className="text-gray-600">Award-winning customer service and satisfaction</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Wifi className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Fast Installation</h3>
              <p className="text-gray-600">Quick and professional installation within 24-48 hours</p>
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
                <Link href="/contact" className="block text-blue-200 hover:text-white">
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
