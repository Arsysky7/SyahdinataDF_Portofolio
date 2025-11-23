'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Phone } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Pre-defined animated circles */}
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 200,
            height: 200,
            left: '10%',
            top: '20%',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 150,
            height: 150,
            left: '70%',
            top: '60%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 180,
            height: 180,
            left: '30%',
            top: '70%',
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 120,
            height: 120,
            left: '80%',
            top: '30%',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 220,
            height: 220,
            left: '15%',
            top: '50%',
          }}
          animate={{
            x: [0, 35, 0],
            y: [0, -15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: 160,
            height: 160,
            left: '60%',
            top: '10%',
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-medium">
                Hello, I'm
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 blur-xl opacity-70"></span>
              <span className="relative bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Syahdinata Dwi Fachril
              </span>
            </span>
          </motion.h1>

          {/* Nickname */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-cyan-200 font-medium">
                Call me <span className="font-bold text-white">Aril</span> 👨‍💻
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-cyan-100 font-light mb-2">
              Backend Developer & Cybersecurity Enthusiast
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Passionate about building scalable backend systems with Rust & Axum,
              while actively learning cybersecurity through real-world penetration testing
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                <Download size={20} />
                Download CV
              </div>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg group-hover:bg-white/30 transition-colors"></div>
              <div className="relative text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                <ExternalLink size={20} />
                View Projects
              </div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6"
          >
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/Arsysky7' },
              {
                icon: InstagramIcon,
                label: 'Instagram',
                href: 'https://www.instagram.com/syahdinata/'
              },
              {
                icon: Phone,
                label: 'WhatsApp',
                href: 'https://wa.me/628987164767'
              },
              { icon: Mail, label: 'Email', href: 'mailto:arilsyah25@gmail.com' },
            ].map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/20 transition-colors">
                  <Icon size={24} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero