'use client'

import { motion } from 'framer-motion'
import { RustIcon } from './icons/RustIcon'
import { AxumIcon } from './icons/AxumIcon'
import { PostgresIcon } from './icons/PostgresIcon'
import { KaliIcon } from './icons/KaliIcon'
import { UbuntuIcon } from './icons/UbuntuIcon'
import { RedisIcon } from './icons/RedisIcon'

const ProfileSection = () => {
  const techLogos = [
    { Icon: RustIcon, color: 'text-orange-500', position: 'top-0 left-0' },
    { Icon: AxumIcon, color: 'text-blue-500', position: 'top-0 right-0' },
    { Icon: PostgresIcon, color: 'text-blue-600', position: 'bottom-0 left-0' },
    { Icon: KaliIcon, color: 'text-green-500', position: 'bottom-0 right-0' },
    { Icon: UbuntuIcon, color: 'text-orange-400', position: 'top-1/2 left-0 -translate-y-1/2' },
    { Icon: RedisIcon, color: 'text-red-500', position: 'top-1/2 right-0 -translate-y-1/2' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Floating Bubbles with Red Edges - More Visible */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 60,
              height: Math.random() * 100 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 120 - 60, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-full h-full">
              {/* Main bubble - transparent center */}
              <div className="absolute inset-3 rounded-full bg-white/8 backdrop-blur-sm"></div>

              {/* Bubble edge with red gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-pink-200/40 to-red-400/50 border-3 border-red-300/60"></div>

              {/* Inner light reflection */}
              <div className="absolute top-3 left-3 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/60 to-transparent"></div>

              {/* Bottom red accent */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-red-500/40 to-transparent"></div>
            </div>
          </motion.div>
        ))}

        {/* Small Bubbles - More Visible */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`small-bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/10 via-pink-200/30 to-red-300/40 border-2 border-red-200/50"
            style={{
              width: Math.random() * 40 + 15,
              height: Math.random() * 40 + 15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Medium Bubble Clusters */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cluster-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            <div className="relative flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 via-transparent to-red-300/25 border border-red-200/40"></div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/8 via-transparent to-pink-300/20 border border-red-100/30 mt-2"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/12 via-transparent to-red-400/15 border border-red-150/35"></div>
            </div>
          </motion.div>
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
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo with Rotating Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="relative w-80 h-80">
              {/* Rotating Logos Container */}
              <div className="absolute inset-0 animate-spin-slow">
                {techLogos.map(({ Icon, color, position }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${position} w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center ${color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring"
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon size={32} />
                  </motion.div>
                ))}
              </div>

              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full overflow-hidden shadow-2xl border-4 border-white"
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for actual photo */}
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm text-gray-600">Aril's Photo</p>
                  </div>
                </div>
              </motion.div>

              {/* Glowing Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(59, 130, 246, 0.3)',
                    '0 0 60px rgba(6, 182, 212, 0.4)',
                    '0 0 30px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{
                x: 10,
                transition: { duration: 0.2 }
              }}
              className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Backend Developer & Cybersecurity Enthusiast
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A junior backend developer focused on building skills through various personal projects,
                especially with Rust and Axum. On the cybersecurity side, I am actively learning pentesting techniques
                by completing various machines on the Hack The Box platform as real-world scenario training.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am used to working fast, with attention to detail, and analytically. Additionally, I am proficient in using Linux systems
                (Ubuntu & Kali Linux) for backend development, deployment, workflow automation, and pentesting activities
                such as enumeration, exploitation, and network analysis.
              </p>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { name: 'Rust', Icon: RustIcon },
                  { name: 'Axum', Icon: AxumIcon },
                  { name: 'PostgreSQL', Icon: PostgresIcon },
                  { name: 'Kali Linux', Icon: KaliIcon },
                  { name: 'Ubuntu', Icon: UbuntuIcon },
                  { name: 'Redis', Icon: RedisIcon },
                ].map(({ name, Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 text-center border border-blue-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
            >
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Personal Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Full Name:</span>
                  <span className="ml-2 text-gray-800">Syahdinata Dwi Fachril</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Nickname:</span>
                  <span className="ml-2 text-gray-800">Aril</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Date of Birth:</span>
                  <span className="ml-2 text-gray-800">May 20, 2003</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Age:</span>
                  <span className="ml-2 text-gray-800">22 years old</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Location:</span>
                  <span className="ml-2 text-gray-800">Kab. Bekasi, Jawa Barat</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email:</span>
                  <a href="mailto:arilsyah25@gmail.com" className="ml-2 text-blue-600 hover:text-blue-800">arilsyah25@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
            >
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-800">Universitas Esa Unggul</div>
                  <div className="text-sm text-gray-600">Informatics Engineering - Faculty of Computer Science</div>
                  <div className="text-sm text-gray-500">Semester 5 (Bachelor's) • 2023 - Present</div>
                  <div className="text-sm font-medium text-purple-600 mt-1">GPA: 3.82</div>
                </div>
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
            >
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Work Experience
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-800">PT INDOMASUMOTO</div>
                  <div className="text-sm text-gray-600">Stamping Production Operator</div>
                  <div className="text-sm text-gray-500">2023 - 2025</div>
                  <div className="text-xs text-gray-600 mt-2 space-y-1">
                    <div>• Operating stamping machines according to SOP</div>
                    <div>• Quality control (QC) for production results</div>
                    <div>• Maintaining workspace stability and cleanliness</div>
                    <div>• Fast yet precise work with technical problem-solving</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ProfileSection