'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Terminal, Shield, Zap } from 'lucide-react'
import { RustIcon } from './icons/RustIcon'
import { AxumIcon } from './icons/AxumIcon'
import { PostgresIcon } from './icons/PostgresIcon'
import { RedisIcon } from './icons/RedisIcon'
import { NatsIcon } from './icons/NatsIcon'
import { TokioIcon } from './icons/TokioIcon'
import { SQLxIcon } from './icons/SQLxIcon'
import { DockerIcon } from './icons/DockerIcon'
import { KaliIcon } from './icons/KaliIcon'
import { UbuntuIcon } from './icons/UbuntuIcon'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code,
      description: 'Async backend development',
      skills: [
        { name: 'Rust', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', icon: RustIcon },
        { name: 'Axum', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: AxumIcon },
        { name: 'Tokio', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: TokioIcon },
        { name: 'SQLx', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200', icon: SQLxIcon }
      ]
    },
    {
      title: 'Database & Caching',
      icon: Database,
      description: 'Relational databases',
      skills: [
        { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: PostgresIcon },
        { name: 'Redis', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', icon: RedisIcon },
        { name: 'MySQL', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', icon: Database }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security assessment penetration testing',
      skills: [
        { name: 'Pentesting', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', icon: Shield },
        { name: 'Network Analysis', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: Zap },
        { name: 'Enumeration', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: Code },
        { name: 'Exploitation', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', icon: Terminal }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Server,
      description: 'Containerized deployment',
      skills: [
        { name: 'Docker', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: DockerIcon },
        { name: 'Linux', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', icon: Terminal },
        { name: 'Railway', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: Zap },
        { name: 'Zeabur', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: Zap }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      description: 'Development tools authentication systems',
      skills: [
        { name: 'Git', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', icon: Code },
        { name: 'Kali Linux', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200', icon: KaliIcon },
        { name: 'NATS.io', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: NatsIcon },
        { name: 'JWT', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: Shield }
      ]
    },
    {
      title: 'Security Concepts',
      icon: Shield,
      description: 'Security principles implementation',
      skills: [
        { name: 'Authentication', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: Shield },
        { name: 'Cryptography', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200', icon: Zap },
        { name: 'Authorization', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: Shield },
        { name: 'RLS', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', icon: Code }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements - Red-Tinted Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Floating Bubbles with Red Edges */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 70 + 35,
              height: Math.random() * 70 + 35,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 80 - 40, 0],
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: Math.random() * 7 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-full h-full">
              {/* Main bubble - transparent center */}
              <div className="absolute inset-2 rounded-full bg-white/4 backdrop-blur-sm"></div>

              {/* Bubble edge with red/pink gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/7 to-pink-300/35 border-2 border-red-200/50"></div>

              {/* Inner light reflection */}
              <div className="absolute top-2 left-2 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>

              {/* Bottom red accent */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-red-500/30 to-transparent"></div>
            </div>
          </motion.div>
        ))}

        {/* Small Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`small-bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-transparent via-white/6 to-pink-200/25 border border-red-100/40"
            style={{
              width: Math.random() * 25 + 10,
              height: Math.random() * 25 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, Math.random() * 35 - 17, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 7,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Medium Bubble Clusters */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`cluster-${i}`}
            className="absolute"
            style={{
              left: `${12 + i * 18}%`,
              top: `${25 + (i % 2) * 25}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
              opacity: [0.18, 0.4, 0.18],
            }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          >
            <div className="relative flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/7 via-transparent to-red-300/30 border border-red-200/45"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/5 via-transparent to-pink-300/20 border border-red-100/35 mt-1"></div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white/9 via-transparent to-red-400/15 border border-red-150/40"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 relative overflow-hidden group"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full mt-1"></div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: skillIndex * 0.08,
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      className={`${skill.color} flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
                    >
                      {skill.icon && (
                        <skill.icon className="w-3 h-3" />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection