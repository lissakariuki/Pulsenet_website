"use client";

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Wifi,
  Users,
  MapPin,
  Award,
  Target,
  Eye,
  Heart,
  ChevronDown,
  Play,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import Link from "next/link"

const stats = [
  { number: 500, suffix: "+", label: "Connected Homes", icon: Users },
  { number: 5, suffix: "+", label: "Cities Covered", icon: MapPin },
  { number: 99, suffix: "%", label: "Uptime SLA", icon: Shield },
  { number: 100, suffix: "Mbps", label: "Max Speed", icon: Zap },
]

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "Pioneering next-generation fiber technology to deliver unmatched internet experiences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise-grade infrastructure ensuring 99% uptime with 24/7 monitoring.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Empowering local communities through digital inclusion and economic growth.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Customer Success",
    description: "Dedicated support and personalized solutions that exceed expectations.",
    gradient: "from-yellow-500 to-orange-500",
  },
]

const timeline = [
  {
    year: "2023",
    title: "Foundation & Vision",
    description: "PulseNet was founded with a mission to democratize high-speed internet access across Kenya.",
    achievement: "Secured initial funding and regulatory approvals",
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Network Launch",
    description: "Deployed our first fiber network in Nairobi, connecting 500+ customers in the first quarter.",
    achievement: "Achieved 98% customer satisfaction rating",
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Rapid Expansion",
    description: "Expanded to 5 major areas with strategic partnerships and infrastructure investments.",
    achievement: "Reached 500 active subscribers",
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Growing Strong",
    description: "Becoming Kenya's fastest-growing ISP with cutting-edge technology and exceptional service.",
    achievement: "500+ customers and industry recognition",
    color: "bg-orange-500",
  },
]

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                PulseNet
              </span>
            </motion.div>

            <div className="hidden lg:flex items-center gap-8">
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
                      item.name === "About" ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  Get Connected
                </Button>
              </motion.div>

              <button 
                className="lg:hidden p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Kenya's Growing ISP</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Connecting</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering Kenya's digital future with ultra-fast fiber internet that empowers communities, businesses,
              and dreams to flourish in the connected age.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/coverage">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl px-8 py-4 text-lg font-semibold"
                  >
                    Explore Coverage
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30" data-section>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transforming Kenya's Digital Landscape
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="text-center p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                    <CardContent className="p-0">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24" data-section>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Bridging the Digital Divide,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  One Connection at a Time
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Born from a vision to democratize internet access across Kenya, PulseNet emerged as a catalyst for
                  digital transformation. We recognized that reliable, high-speed internet isn't just a utility— it's
                  the foundation for economic growth, education, and social progress.
                </p>
                <p>
                  Our journey began with a simple belief: every Kenyan deserves access to world-class internet
                  infrastructure. Today, we're proud to serve over 500 customers across 5+ areas, delivering not
                  just connectivity, but possibilities.
                </p>
                <p>
                  Through strategic partnerships, cutting-edge technology, and an unwavering commitment to excellence,
                  we've built more than a network—we've built bridges to the future.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                    Learn More About Our Impact
                  </Button>
                </motion.div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">ISO 27001 Certified</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-3xl"
                    poster="/background1.gif"
                  >
                    <source src="/background1.mp4" type="video/mp4" />
                    <source src="/background1.gif" type="image/gif" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern Infrastructure</h3>
                    <p className="text-blue-100">Fiber optic network growing across Nairobi</p>
                  </div>
                  {/* Overlay to hide watermark */}
                  <div
                    className="absolute bottom-4 right-3 bg-white/100 rounded-full py-2"
                    style={{ minWidth: '60px', minHeight: '28px' }}
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30" data-section>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Values That Drive Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core principles guide every decision, innovation, and interaction as we build Kenya's digital future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24" data-section>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">Our Milestones</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">A Journey of Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped PulseNet into Kenya's leading fiber internet provider.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {item.year.slice(-2)}
                          </motion.div>
                          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">{item.year}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4" />
                          {item.achievement}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Future?
              </span>
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join over 500 satisfied customers who trust PulseNet for lightning-fast, reliable internet that powers
              their digital lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/coverage">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl px-12 py-6 text-xl font-semibold"
                  >
                    Check Your Coverage
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-12 py-6 text-xl font-semibold"
                >
                  Schedule Installation
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-blue-200">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Installation</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Support</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-Day Guarantee</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

