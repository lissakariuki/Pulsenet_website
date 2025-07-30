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
  Check,
  Headphones,
  Globe,
  Shield,
  Users,
  Zap,
  Wifi,
  Search,
  ChevronDown,
  HelpCircle,
  Clock,
  Router,
  CreditCard,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

export default function PulseNetHomePage() {
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
              <span className="font-medium">0746 406 499</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">0746 406 499</span>
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
      </div>*/}

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
                <p className="text-xs text-blue-600 uppercase tracking-wide">Bringing Fast Fiber to Your Doorstep</p>
              </div>
            </div>
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Connected
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-3xl"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="rounded-3xl shadow-2xl w-full h-auto"
                poster="/pulse.gif"
              >
                <source src="/video.mp4" type="video/mp4" />
                <source src="/pulse.gif" type="image/gif" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay to hide watermark */}
              <div
                className="absolute bottom-4 right-3 bg-white/100 rounded-full py-2"
                style={{ minWidth: '60px', minHeight: '28px' }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">BASIC</h3>
              </div>
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">10mbps</div>
                  <div className="text-3xl font-bold text-blue-700">
                    Ksh 2000 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Perfect for individuals and small households who need reliable internet for browsing, social media, and streaming in HD. Enjoy unlimited data and free installation.</p>
                <ul className="mb-6 space-y-2 text-left">
                  <li className="flex items-center gap-2 text-blue-800"><Check className="w-4 h-4" /> Unlimited Data</li>
                  <li className="flex items-center gap-2 text-blue-800"><Check className="w-4 h-4" /> Free Install</li>
                  <li className="flex items-center gap-2 text-blue-800"><Check className="w-4 h-4" /> 24/7 Support</li>
                </ul>
                <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-auto">
                    GET CONNECTED
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Standard Plan */}
            <Card className="relative overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">STANDARD</h3>
              </div>
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-green-900 mb-2">20mbps</div>
                  <div className="text-3xl font-bold text-green-700">
                    Ksh 2500 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Ideal for families and remote workers who need fast, stable connections for video calls, online learning, and streaming on multiple devices. Includes unlimited data and free installation.</p>
                <ul className="mb-6 space-y-2 text-left">
                  <li className="flex items-center gap-2 text-green-800"><Check className="w-4 h-4" /> Unlimited Data</li>
                  <li className="flex items-center gap-2 text-green-800"><Check className="w-4 h-4" /> Free Install</li>
                  <li className="flex items-center gap-2 text-green-800"><Check className="w-4 h-4" /> 24/7 Support</li>
                </ul>
                <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-auto">
                    GET CONNECTED
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Premium Plan */}
            <Card className="relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide">PREMIUM</h3>
              </div>
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-purple-900 mb-2">50mbps</div>
                  <div className="text-3xl font-bold text-purple-700">
                    Ksh 3500 <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Best for power users, gamers, and small businesses who demand ultra-fast speeds, seamless 4K streaming, and a free router. Experience top-tier internet with unlimited data and priority support.</p>
                <ul className="mb-6 space-y-2 text-left">
                  <li className="flex items-center gap-2 text-purple-800"><Check className="w-4 h-4" /> Unlimited Data</li>
                  <li className="flex items-center gap-2 text-purple-800"><Check className="w-4 h-4" /> Free Router</li>
                  <li className="flex items-center gap-2 text-purple-800"><Check className="w-4 h-4" /> Free Install</li>
                  <li className="flex items-center gap-2 text-purple-800"><Check className="w-4 h-4" /> 24/7 Support</li>
                </ul>
                <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-auto">
                    GET CONNECTED
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <FAQSection />
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="https://wa.me/254746406499" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </Link>
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

// FAQAccordion component
function FAQAccordion() {
  const faqs = [
    {
      q: "How long does installation take?",
      a: "Standard installation is completed within 24-48 hours after signup.",
    },
    {
      q: "Is there a data cap on any plan?",
      a: "No, all our plans offer unlimited data usage with no hidden limits.",
    },
    {
      q: "How do I get support if I have an issue?",
      a: "You can reach our 24/7 support team via phone, WhatsApp, or the support form on our website.",
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, you can change your plan at any time by contacting our support team.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept M-Pesa, bank transfer, and online payments through our customer portal.",
    },
    {
      q: "Do you provide a free router?",
      a: "A free router is included with our Premium plan. Other plans include free installation.",
    },
  ];
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(search.toLowerCase()) ||
    faq.a.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 sticky top-0 z-10 bg-gray-50 pb-2">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          aria-label="Search FAQs"
        />
      </div>
      <ul className="space-y-4">
        {filteredFaqs.length === 0 && (
          <li className="text-center text-gray-500 py-8">No FAQs found for your search.</li>
        )}
        {filteredFaqs.map((item, idx) => (
          <li key={idx}>
            <AccordionItem
              question={item.q}
              answer={item.a}
              open={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              id={`faq-${idx}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// AccordionItem component
function AccordionItem({ question, answer, open, onClick, id }: { question: string; answer: string; open: boolean; onClick: () => void; id: string }) {
  return (
    <div className={`border rounded-xl bg-white shadow-md transition-all duration-200 ${open ? 'ring-2 ring-blue-400' : 'hover:shadow-lg'}`}> 
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left text-blue-900 font-semibold focus:outline-none focus:ring rounded-xl"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={id + '-panel'}
        id={id + '-button'}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={id + '-panel'}
        role="region"
        aria-labelledby={id + '-button'}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 py-2 px-6' : 'max-h-0 py-0 px-6'}`}
        style={{
          transitionProperty: 'max-height, padding',
        }}
      >
        <div className={`text-gray-700 text-base ${open ? 'opacity-100' : 'opacity-0'}`}>{answer}</div>
      </div>
    </div>
  );
}

const faqData = [
  {
    id: 1,
    category: "Installation",
    question: "How long does installation take?",
    answer:
      "Standard installation is completed within 24-48 hours after signup. Our professional technicians will contact you to schedule a convenient time that works with your schedule.",
    icon: Clock,
    popular: true,
  },
  {
    id: 2,
    category: "Plans",
    question: "Is there a data cap on any plan?",
    answer:
      "No, all our plans offer unlimited data usage with no hidden limits. Stream, game, and browse as much as you want without worrying about overage charges.",
    icon: Zap,
    popular: true,
  },
  {
    id: 3,
    category: "Support",
    question: "How do I get support if I have an issue?",
    answer:
      "You can reach our 24/7 support team via phone, WhatsApp, live chat, or through the support form on our website. Our average response time is under 5 minutes.",
    icon: Phone,
    popular: true,
  },
  {
    id: 4,
    category: "Plans",
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time through your customer portal or by contacting our support team. Changes take effect on your next billing cycle with no additional fees.",
    icon: Router,
    popular: false,
  },
  {
    id: 5,
    category: "Billing",
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, debit cards, bank transfers, and digital wallets including PayPal, Apple Pay, and Google Pay. Auto-pay discounts are available.",
    icon: CreditCard,
    popular: false,
  },
  {
    id: 6,
    category: "Equipment",
    question: "Do you provide a free router?",
    answer:
      "Yes, we provide a high-performance Wi-Fi 6 router at no additional cost with all our plans. The router includes advanced security features and parental controls.",
    icon: Shield,
    popular: false,
  },
  {
    id: 7,
    category: "Installation",
    question: "Is professional installation required?",
    answer:
      "Professional installation is included free with all plans and is highly recommended for optimal performance. However, self-installation kits are available for tech-savvy customers.",
    icon: HelpCircle,
    popular: false,
  },
  {
    id: 8,
    category: "Support",
    question: "What if I'm not satisfied with the service?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied, you can cancel within 30 days for a full refund, no questions asked.",
    icon: Shield,
    popular: false,
  },
]

const categories = ["All", "Installation", "Plans", "Support", "Billing", "Equipment"]

function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularFAQs = faqData.filter((faq) => faq.popular)

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <HelpCircle className="w-4 h-4" />
          Support Center
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about PulseNet's internet services and get the help you need.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Popular Questions */}
      {searchTerm === "" && selectedCategory === "All" && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            Most Popular Questions
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularFAQs.map((faq) => {
              const Icon = faq.icon
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{faq.question}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* FAQ List */}
      <div className="space-y-4">
        {searchTerm !== "" || selectedCategory !== "All" ? (
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {filteredFAQs.length} {filteredFAQs.length === 1 ? "Result" : "Results"} Found
          </h3>
        ) : (
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Questions</h3>
        )}

        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h4>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          filteredFAQs.map((faq) => {
            const Icon = faq.icon
            const isOpen = openItems.includes(faq.id)

            return (
              <Collapsible key={faq.id} open={isOpen} onOpenChange={() => toggleItem(faq.id)}>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {faq.category}
                            </Badge>
                            {faq.popular && (
                              <Badge className="text-xs bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-900 text-lg leading-tight">{faq.question}</h4>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <div className="ml-16 pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            )
          })
        )}
      </div>

      {/* Contact Support CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
