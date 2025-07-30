"use client";

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
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PULSENET</h1>
                  <p className="text-xs text-blue-600 uppercase tracking-wide">Bringing Fast Fiber to Your Doorstep</p>
                </div>
              </Link>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Coverage", href: "/coverage" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    className={`text-gray-600 hover:text-blue-600 transition-colors font-medium ${
                      item.name === "Coverage" ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Expanding Network</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Coverage Areas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expanding across Kenya to bring high-speed fiber internet to your doorstep
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Coverage Status Legend */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Active Coverage</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Clock className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">Coming Soon</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <AlertCircle className="w-5 h-5 text-blue-500" />
              <span className="font-medium">In Planning</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
              Network Coverage
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Check Your Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if PulseNet fiber internet is available in your area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-gray-900">{area.area}</h3>
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {area.status === "active" ? (
                        <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
                          <Button
                            className={`w-full ${
                              area.status === "active"
                                ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                : area.status === "coming-soon"
                                  ? "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            } text-white shadow-lg`}
                          >
                            Get Connected
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          className={`w-full ${
                            area.status === "active"
                              ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                              : area.status === "coming-soon"
                                ? "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          } text-white shadow-lg`}
                        >
                          {area.status === "coming-soon"
                            ? "Notify Me"
                            : "Express Interest"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">PULSENET</h3>
              </div>
              <p className="text-blue-200">Connecting you to the world with reliable, high-speed fiber internet.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-blue-200 hover:text-white transition-colors">Home</Link>
                <Link href="/coverage" className="block text-blue-200 hover:text-white transition-colors">Coverage</Link>
                <Link href="/contact" className="block text-blue-200 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                  Technical Support
                </Link>
                <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                  Installation
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-200">
                <p>📞 0746 406 499</p>
                <p>📧 <a href="mailto:info@pulsenet.co.ke" className="text-blue-200 hover:text-white transition-colors">info@pulsenet.co.ke</a></p>
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