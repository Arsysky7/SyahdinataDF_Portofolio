'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'HackTheBox', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/30'
          : 'bg-transparent backdrop-blur-xl border-b border-white/20'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-lg blur-sm opacity-60"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-bold text-lg">
              Portfolio
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  textShadow: scrolled ? '0 0 20px rgba(59, 130, 246, 0.8)' : '0 0 20px rgba(59, 130, 246, 0.8)'
                }}
                className={`relative font-medium transition-colors cursor-pointer group ${
                  scrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {item}
                <div className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent ${
                  scrolled ? 'via-blue-600' : 'via-cyan-300'
                } to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 pb-4 ${
              scrolled ? 'bg-white rounded-lg' : 'bg-white/10 backdrop-blur-lg rounded-lg'
            }`}
          >
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  whileHover={{
                    x: 10,
                    textShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors pl-4 border-l-2 ${
                    scrolled
                      ? 'text-gray-800 hover:text-blue-600 border-transparent hover:border-blue-600'
                      : 'text-white hover:text-cyan-300 border-transparent hover:border-cyan-300'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header