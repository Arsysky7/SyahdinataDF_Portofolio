'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Cpu, Shield, Lock, Upload, Settings, Layers, Cloud } from 'lucide-react'
import { RustIcon } from './icons/RustIcon'
import { AxumIcon } from './icons/AxumIcon'
import { PostgresIcon } from './icons/PostgresIcon'
import { RedisIcon } from './icons/RedisIcon'
import { NatsIcon } from './icons/NatsIcon'
import { TokioIcon } from './icons/TokioIcon'
import { SQLxIcon } from './icons/SQLxIcon'
import { DockerIcon } from './icons/DockerIcon'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'BIGAUTO',
      subtitle: 'Microservices Automotive Booking Platform',
      description: 'Enterprise automotive booking platform with 8 microservices built in Rust. Advanced security system with JWT authentication, 2FA protection, and event-driven architecture for real-time communication.',
      features: [
        {
          icon: Layers,
          title: '8 Microservices Architecture',
          description: 'Gateway, Auth, Booking, Payment, Notifications, Analytics, Inventory, User Services'
        },
        {
          icon: Shield,
          title: 'Advanced Security System',
          description: 'JWT access + refresh token rotation, 2FA (Time-based OTP), Argon2 password hashing'
        },
        {
          icon: Lock,
          title: 'Row Level Security',
          description: 'Per-user resource isolation with PostgreSQL RLS policies for multi-tenant architecture'
        },
        {
          icon: Settings,
          title: 'Enterprise Authentication',
          description: 'Role-based access control with fine-grained permissions and comprehensive audit logging system'
        },
        {
          icon: Cloud,
          title: 'Event-Driven Architecture',
          description: 'NATS.io messaging for real-time communication between microservices'
        },
        {
          icon: Database,
          title: 'Production Deployment',
          description: 'Docker containerization with Zeabur optimization and monitoring integration'
        }
      ],
      techStack: [
        { name: 'Rust', Icon: RustIcon, color: 'bg-orange-500' },
        { name: 'Axum', Icon: AxumIcon, color: 'bg-blue-500' },
        { name: 'PostgreSQL', Icon: PostgresIcon, color: 'bg-blue-600' },
        { name: 'Redis', Icon: RedisIcon, color: 'bg-red-500' },
        { name: 'NATS.io', Icon: NatsIcon, color: 'bg-purple-500' },
        { name: 'Tokio', Icon: TokioIcon, color: 'bg-blue-700' },
        { name: 'SQLx', Icon: SQLxIcon, color: 'bg-teal-500' },
        { name: 'Docker', Icon: DockerIcon, color: 'bg-blue-400' },
        { name: 'Zeabur', Icon: Cloud, color: 'bg-purple-400' }
      ],
      github: 'https://github.com/Arsysky7/BIGAUTO',
      demo: '#'
    },
    {
      title: 'BookStrore',
      subtitle: 'Enterprise Digital Bookstore Platform',
      description: 'Complete digital bookstore with 4 microservices architecture. Features secure authentication, Midtrans payment integration, and enterprise file management. Built with clean modular architecture and production security.',
      features: [
        {
          icon: Layers,
          title: 'Modular Architecture',
          description: 'Rust stable + Axum Framework + Tokio Runtime for scalable microservices'
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'JWT authentication with token refresh mechanism, RBAC system, Argon2 password hashing, and PostgreSQL Row Level Security'
        },
        {
          icon: Upload,
          title: 'Secure File Management',
          description: 'File upload security with type validation, size limits, and malware scanning'
        },
        {
          icon: Settings,
          title: 'Role-Based Access Control',
          description: 'Granular permissions system for admin, staff, and customer roles'
        },
        {
          icon: Database,
          title: 'Production Database',
          description: 'PostgreSQL with Redis caching, connection pooling, and query optimization'
        },
        {
          icon: Cloud,
          title: 'Containerized Deployment',
          description: 'Docker + Nginx with SSL termination, load balancing, and health checks'
        }
      ],
      techStack: [
        { name: 'Rust', Icon: RustIcon, color: 'bg-orange-500' },
        { name: 'Axum', Icon: AxumIcon, color: 'bg-blue-500' },
        { name: 'Tokio', Icon: TokioIcon, color: 'bg-blue-700' },
        { name: 'SQLx', Icon: SQLxIcon, color: 'bg-teal-500' },
        { name: 'PostgreSQL', Icon: PostgresIcon, color: 'bg-blue-600' },
        { name: 'Redis', Icon: RedisIcon, color: 'bg-red-500' },
        { name: 'Docker', Icon: DockerIcon, color: 'bg-blue-400' },
        { name: 'Nginx', Icon: Cloud, color: 'bg-green-500' }
      ],
      github: 'https://github.com/Arsysky7/BookStrore',
      demo: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.8,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Elements - Red-Tinted Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Floating Bubbles with Red Edges */}
        {[...Array(11)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 75 + 40,
              height: Math.random() * 75 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -130, 0],
              x: [0, Math.random() * 90 - 45, 0],
              scale: [1, 1.2, 1],
              opacity: [0.12, 0.32, 0.12],
            }}
            transition={{
              duration: Math.random() * 8 + 11,
              repeat: Infinity,
              delay: Math.random() * 5.5,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-full h-full">
              {/* Main bubble - transparent center */}
              <div className="absolute inset-2 rounded-full bg-white/3 backdrop-blur-sm"></div>

              {/* Bubble edge with red/pink gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/7 to-rose-300/40 border-2 border-red-200/50"></div>

              {/* Inner light reflection */}
              <div className="absolute top-2 left-2 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>

              {/* Bottom red accent */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-red-500/30 to-transparent"></div>
            </div>
          </motion.div>
        ))}

        {/* Small Bubbles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={`small-bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-transparent via-white/5 to-rose-200/30 border border-red-100/40"
            style={{
              width: Math.random() * 28 + 10,
              height: Math.random() * 28 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -75, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              delay: Math.random() * 3.5,
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
              left: `${12 + i * 16}%`,
              top: `${22 + (i % 2) * 28}%`,
            }}
            animate={{
              y: [0, -55, 0],
              scale: [1, 1.35, 1],
              opacity: [0.18, 0.4, 0.18],
            }}
            transition={{
              duration: 9.5 + i * 1.8,
              repeat: Infinity,
              delay: i * 1.4,
              ease: "easeInOut"
            }}
          >
            <div className="relative flex gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white/7 via-transparent to-red-300/35 border border-red-200/50"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/5 via-transparent to-rose-300/28 border border-red-100/40 mt-2"></div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white/9 via-transparent to-red-400/22 border border-red-150/45"></div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                        {project.subtitle}
                      </p>
                    </div>

                    </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                    <Cpu className="text-blue-500" size={24} />
                    Enterprise Features
                  </h4>
                  <div className="space-y-4">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.title}
                        variants={featureVariants}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + featureIndex * 0.1 }}
                        className="flex gap-4 p-4 bg-white rounded-xl border border-gray-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group shadow-md"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                          <feature.icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                    <Database className="text-blue-500" size={24} />
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        variants={techVariants}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + techIndex * 0.08 }}
                        whileHover={{
                          scale: 1.1,
                          y: -4,
                          transition: { duration: 0.2 }
                        }}
                        className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group cursor-default"
                      >
                        <div className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2`}>
                          <tech.Icon size={20} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800 text-center">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-4 px-6 rounded-xl hover:from-gray-900 hover:to-black transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10 border border-blue-200 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-700 mb-6">
              Interested in Collaboration?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out if you have any questions or just want to connect!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-lg"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection