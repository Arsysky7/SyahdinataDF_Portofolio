'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Terminal, Cpu, Zap, Shield, Layers, Globe } from 'lucide-react'
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
      icon: Server,
      color: 'from-blue-500 to-blue-700',
      skills: [
        {
          name: 'Rust',
          description: 'Proficient in systems programming, memory safety, and performance optimization. Experienced with ownership patterns, concurrency, and async programming through self-study and personal projects.',
          experience: 'Actively learning',
          projects: 'Multiple personal projects in production',
          Icon: RustIcon,
          iconColor: 'text-orange-500'
        },
        {
          name: 'Axum Framework',
          description: 'Strong understanding of web framework architecture, middleware, routing, and state management. Building scalable RESTful APIs for personal and enterprise applications.',
          experience: 'Hands-on development',
          projects: 'Building enterprise-grade web services',
          Icon: AxumIcon,
          iconColor: 'text-blue-500'
        },
        {
          name: 'Tokio Runtime',
          description: 'Skilled in asynchronous programming, task scheduling, and concurrent systems. Proficient with async/await patterns and runtime optimization for high-performance applications.',
          experience: 'Practical implementation',
          projects: 'Concurrent and real-time applications',
          Icon: TokioIcon,
          iconColor: 'text-blue-600'
        },
        {
          name: 'RESTful APIs',
          description: 'Solid knowledge of API design principles, HTTP protocols, authentication, and scalable architecture patterns from academic projects and self-learning.',
          experience: 'Academic and personal projects',
          projects: 'Multiple API implementations',
          Icon: Code,
          iconColor: 'text-green-500'
        }
      ]
    },
    {
      title: 'Database & Data Layer',
      icon: Database,
      color: 'from-green-500 to-green-700',
      skills: [
        {
          name: 'PostgreSQL 17.7',
          description: 'Solid understanding of database design, indexing strategies, query optimization, and transaction management through academic projects and self-learning. Experienced with basic joins and SQL operations.',
          experience: 'Academic and personal projects',
          projects: 'Database design for academic applications',
          Icon: PostgresIcon,
          iconColor: 'text-blue-600'
        },
        {
          name: 'Redis 7',
          description: 'Developing understanding of caching strategies, basic data structures, pub/sub patterns, and session management through personal projects and self-study.',
          experience: 'Learning through projects',
          projects: 'Basic session and caching implementations',
          Icon: RedisIcon,
          iconColor: 'text-red-500'
        },
        {
          name: 'SQLx',
          description: 'Learning query building, type-safe database operations, and basic transaction management in the Rust ecosystem through personal projects.',
          experience: 'Currently learning',
          projects: 'Basic type-safe database operations',
          Icon: SQLxIcon,
          iconColor: 'text-teal-500'
        },
        {
          name: 'Database Design',
          description: 'Understanding fundamental schema design, normalization concepts, and basic indexing strategies through academic coursework and self-study.',
          experience: 'Academic foundation',
          projects: 'Basic database schemas for learning projects',
          Icon: Database,
          iconColor: 'text-green-600'
        }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      icon: Layers,
      color: 'from-purple-500 to-purple-700',
      skills: [
        {
          name: 'Docker & Containerization',
          description: 'Learning container concepts, basic Docker commands, and simple containerization strategies for personal projects through self-study.',
          experience: 'Currently learning',
          projects: 'Basic containerized personal applications',
          Icon: DockerIcon,
          iconColor: 'text-blue-400'
        },
        {
          name: 'NATS.io',
          description: 'Basic understanding of message queuing concepts and pub/sub patterns through self-study and small personal projects.',
          experience: 'Currently exploring',
          projects: 'Basic message pattern experiments',
          Icon: NatsIcon,
          iconColor: 'text-purple-500'
        },
        {
          name: 'Microservices Architecture',
          description: 'Learning fundamental concepts of distributed systems and microservices patterns through academic study and research.',
          experience: 'Academic learning',
          projects: 'Basic microservice concepts in projects',
          Icon: Globe,
          iconColor: 'text-blue-500'
        }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      skills: [
        {
          name: 'Kali Linux',
          description: 'Beginning to learn penetration testing tools, basic vulnerability assessment, and ethical hacking concepts through self-study and online platforms.',
          experience: 'Currently learning',
          projects: 'Basic HTB machines and tutorials',
          Icon: KaliIcon,
          iconColor: 'text-green-600'
        },
        {
          name: 'Ubuntu Server',
          description: 'Developing basic server administration skills, security hardening concepts, and network configuration through self-learning and practice.',
          experience: 'Learning through practice',
          projects: 'Personal server setup and experiments',
          Icon: UbuntuIcon,
          iconColor: 'text-orange-500'
        },
        {
          name: 'Penetration Testing',
          description: 'Starting to explore vulnerability scanning, security concepts, and defensive security through online platforms and ethical hacking tutorials.',
          experience: 'Beginner level',
          projects: 'Basic HTB challenges and learning labs',
          Icon: Zap,
          iconColor: 'text-yellow-500'
        }
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/8 to-pink-300/35 border-2 border-red-200/45"></div>

              {/* Inner light reflection */}
              <div className="absolute top-2 left-2 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/35 to-transparent"></div>

              {/* Bottom red accent */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-red-400/25 to-transparent"></div>
            </div>
          </motion.div>
        ))}

        {/* Small Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`small-bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-transparent via-white/6 to-pink-200/25 border border-red-100/35"
            style={{
              width: Math.random() * 25 + 8,
              height: Math.random() * 25 + 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, Math.random() * 35 - 17, 0],
              opacity: [0.25, 0.5, 0.25],
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
              left: `${15 + i * 18}%`,
              top: `${25 + (i % 2) * 25}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          >
            <div className="relative flex gap-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/8 via-transparent to-red-300/30 border border-red-200/45"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/6 via-transparent to-pink-300/25 border border-red-100/35 mt-1"></div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white/10 via-transparent to-red-400/20 border border-red-150/40"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
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

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} px-8 py-6`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      {/* Skill Header */}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <skill.Icon className="text-white" size={20} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Terminal size={14} />
                              {skill.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <Layers size={14} />
                              {skill.projects}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Skill Description */}
                      <p className="text-gray-600 leading-relaxed mb-4 pl-14">
                        {skill.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 pl-14">
                        {skill.name.includes('Rust') && (
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            Systems Programming
                          </span>
                        )}
                        {skill.name.includes('PostgreSQL') && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            SQL Expert
                          </span>
                        )}
                        {skill.name.includes('Docker') && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            Containerization
                          </span>
                        )}
                        {skill.name.includes('Kali') && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            Security Testing
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Cpu className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Technical Expertise Summary
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Specialized in building scalable backend systems using Rust and modern web technologies.
                Passionate about cybersecurity, systems programming, and creating efficient, secure applications
                that solve real-world problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200">
                  <Zap className="text-blue-500" size={18} />
                  <span className="font-medium text-gray-700">Performance Focused</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200">
                  <Shield className="text-green-500" size={18} />
                  <span className="font-medium text-gray-700">Security Conscious</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200">
                  <Globe className="text-purple-500" size={18} />
                  <span className="font-medium text-gray-700">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection