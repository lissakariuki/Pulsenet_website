import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Wifi,
  Mail,
  MapPin,
  Clock,
  Headphones,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <span className="font-medium">07** *** ***</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for support, inquiries, or to get connected
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+254 700 000 000" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea id="message" rows={5} placeholder="Tell us more about your inquiry..." />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help! Reach out to us through any of the following channels and our team will get back
                  to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Phone Support</h3>
                      <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                      <div className="space-y-1">
                        <p className="text-blue-600 font-medium">0746 406 499</p>
                        <p className="text-blue-600 font-medium">0746 406 499</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Chat with us on WhatsApp</p>
                      <p className="text-green-600 font-medium">0746406499</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-purple-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">Send us an email</p>
                      <p className="text-purple-600 font-medium">info@pulsenet.co.ke</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Office Location</h3>
                      <p className="text-gray-600 mb-2">Visit our main office</p>
                      <p className="text-orange-600 font-medium">
                        PulseNet House, Westlands
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600 mb-2">We're available</p>
                      <div className="text-blue-600 font-medium">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Sat: 9:00 AM - 4:00 PM</p>
                        <p>Sun: Emergency support only</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <Headphones className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
            <p className="text-red-100 mb-6 text-lg">
              Experiencing connectivity issues? Our emergency support team is available around the clock to help resolve
              critical problems.
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 px-8 py-3">
              Emergency Support: 0709 517 917
            </Button>
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

