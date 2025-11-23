'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart, ArrowUp } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Arsysky7', label: 'GitHub' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/syahdinata/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:arilsyah25@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Syahdinata Dwi Fachril
            </h3>
            <p className="text-gray-400 mb-2">
              Backend Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-gray-400 mb-4">
              Passionate about building scalable Rust applications and cybersecurity exploration.
              Currently studying at Universitas Esa Unggul with GPA 3.82.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {typeof social.icon === 'function' ?
                    <social.icon size={20} /> :
                    <social.icon size={20} />
                  }
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'HackTheBox', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{
                      x: 5,
                      color: '#60A5FA',
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors block py-1"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Rust', 'Axum', 'PostgreSQL', 'Redis', 'NATS.io', 'Docker', 'Kali Linux', 'Ubuntu'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800 hover:bg-blue-800/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 mt-6">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:arilsyah25@gmail.com" className="hover:text-blue-400 transition-colors">
                  arilsyah25@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Kab. Bekasi, Jawa Barat</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <span>© 2025 Syahdinata Dwi Fachril (Aril). Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <span>using Next.js & Rust</span>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer