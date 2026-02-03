'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { useState, useMemo } from 'react'

const ContactSection = () => {
  // Generate consistent random values for bubbles to avoid hydration mismatch
  const floatingCircles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      key: `circle-${i}`,
      width: 100 + (i * 25) % 200,
      height: 100 + (i * 30) % 200,
      left: `${(i * 12.5) % 100}%`,
      top: `${(i * 11.7) % 100}%`,
      xMove: ((i * 13) % 100) - 50,
      yMove: ((i * 11) % 100) - 50,
      scale: 0.8 + ((i * 3) % 20) / 100,
      duration: 10 + ((i * 7) % 10),
      delay: (i * 1.5) % 5,
    })), [])

  const techIcons = useMemo(() =>
    [Mail, Phone, MapPin].map((Icon, i) => ({
      Icon,
      key: `icon-${i}`,
      left: 10 + ((i * 23) % 70),
      top: 10 + ((i * 19) % 70),
      scale: 0.8 + ((i * 4) % 20) / 100,
      duration: 15 + ((i * 9) % 20),
    })), [])

  const gradientOrbs = useMemo(() =>
    Array.from({ length: 3 }, (_, i) => ({
      key: `orb-${i}`,
      width: 200 + ((i * 47) % 300),
      height: 200 + ((i * 53) % 300),
      left: `${(i * 33.3) % 100}%`,
      top: `${(i * 27.7) % 100}%`,
      duration: 12 + ((i * 5) % 8),
    })), [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arilsyah25@gmail.com',
      href: 'mailto:arilsyah25@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+628987164767',
      href: 'https://wa.me/628987164767'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kab. Bekasi, Jawa Barat, Indonesia',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Arsysky7',
      label: 'GitHub'
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/syahdinata/',
      label: 'Instagram'
    },
    {
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/syahdinata-dwi-fachril-a52596210/',
      label: 'LinkedIn'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        {floatingCircles.map((circle) => (
          <motion.div
            key={circle.key}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              x: [0, circle.xMove, 0],
              y: [0, circle.yMove, 0],
              scale: [1, circle.scale, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.delay,
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        {techIcons.map((item, index) => (
          <motion.div
            key={item.key}
            className="absolute opacity-10"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, item.scale, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2,
            }}
          >
            <item.Icon size={60} className="text-blue-500" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        {gradientOrbs.map((orb) => (
          <motion.div
            key={orb.key}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: parseInt(orb.key.split('-')[1]) * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology.
                Whether you're looking for a developer or want to discuss ideas, don't hesitate to reach out!
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{
                      x: 10,
                      scale: 1.02,
                    }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-3 rounded-lg"
                    >
                      <info.icon size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur-sm opacity-0 group-hover:opacity-60 transition-opacity"></div>
                      <div className="relative bg-white border border-gray-200 text-gray-700 p-3 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                        <social.icon size={20} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:shadow-md"
                    placeholder="Syahdinata Dwi Fachril"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:shadow-md"
                    placeholder="john.doe@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 resize-none text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:shadow-md"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-blue-400/50 shadow-lg">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="drop-shadow-md" />
                        Send Message
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              {/* Form Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <p className="text-sm text-blue-700">
                  <strong>Response Time:</strong> I typically respond within 24 hours.
                  For urgent matters, please feel free to call or message me directly.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection