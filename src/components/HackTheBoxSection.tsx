'use client'

import { motion } from 'framer-motion'
import { Shield, Terminal, Lock, Zap, Trophy, Skull, Cpu, Network } from 'lucide-react'

const HackTheBoxSection = () => {
  const achievements = [
    {
      id: 658,
      name: 'EUREKA',
      difficulty: 'Medium',
      platform: 'Linux / Spring Boot / Netflix OSS',
      achievementLink: 'https://labs.hackthebox.com/achievement/machine/2053057/658',
      attackChain: [
        'Web / Spring Boot / SSRF',
        'Service Impersonation',
        'Log Injection → Root'
      ],
      synopsis: 'Eureka is a machine focused on Spring Boot framework exploitation, specifically Actuator features, heapdump exposure, and Netflix Eureka Service Registry.',
      techniques: [
        'Spring Boot Actuator exploitation',
        'Heapdump analysis for credential extraction',
        'Eureka Server access via port forwarding',
        'Service impersonation attack',
        'Log injection for remote shell',
        'Full system compromise'
      ],
      commands: [
        { cmd: 'ffuf -w spring-boot.txt -u http://furni.htb/FUZZ', desc: 'Spring Boot fuzzing' },
        { cmd: '/actuator/heapdump', desc: 'Heapdump download' },
        { cmd: 'ssh -L 8761:localhost:8761 user@target', desc: 'Port forwarding to Eureka' },
        { cmd: 'echo "payload" > /var/log/app.log', desc: 'Log injection' }
      ],
      lessons: [
        'Spring Boot misconfiguration dangers',
        'Heapdump analysis techniques',
        'Service Registry exploitation',
        'Log injection vulnerabilities'
      ]
    },
    {
      id: 623,
      name: 'INFILTRATOR',
      difficulty: 'Hard-Insane (Active Directory Heavy)',
      platform: 'Windows Domain Controller / Active Directory',
      achievementLink: 'https://labs.hackthebox.com/achievement/machine/2053057/623',
      attackChain: [
        'Passive Recon → Username',
        'Kerberos ASREPROAST',
        'AD ACL Abuse → Domain Compromise'
      ],
      synopsis: 'Infiltrator is a Windows Active Directory based machine that simulates a complete enterprise environment with Domain Controller, Kerberos Authentication, and AD exploitation.',
      techniques: [
        'Passive reconnaissance via web scraping',
        'Kerberos User Enumeration',
        'ASREPRoast exploitation',
        'Password reuse discovery',
        'AD ACL Abuse techniques',
        'Privilege escalation via force change password',
        'Internal application exploitation',
        'SQL Server tunneling via Chisel',
        'Remote command execution',
        'Domain-level compromise'
      ],
      commands: [
        { cmd: 'kerbrute userenum', desc: 'Kerberos user enumeration' },
        { cmd: 'impacket-GetNPUsers', desc: 'ASREPRoast attack' },
        { cmd: 'hashcat -m 18200', desc: 'Kerberos TGT cracking' },
        { cmd: 'crackmapexec', desc: 'SMB/LDAP enumeration' },
        { cmd: 'chisel', desc: 'Database tunneling' },
        { cmd: 'evil-winrm', desc: 'Windows shell access' }
      ],
      lessons: [
        'Kerberos misconfiguration exploitation',
        'Active Directory enumeration techniques',
        'Password reuse and spraying strategies',
        'ACL abuse techniques',
        'Internal application pivoting',
        'SQL Server tunneling and RCE',
        'Windows post-exploitation'
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Hard')) return 'from-red-500 to-red-700'
    if (difficulty.includes('Medium')) return 'from-yellow-500 to-yellow-700'
    if (difficulty.includes('Easy')) return 'from-green-500 to-green-700'
    return 'from-gray-500 to-gray-700'
  }

  const getDifficultyIcon = (difficulty: string) => {
    if (difficulty.includes('Hard')) return Skull
    if (difficulty.includes('Medium')) return Shield
    return Lock
  }

  return (
    <section id="hackthebox" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="text-red-500" size={32} />
            <h2 className="text-4xl font-bold text-white">
              Hack The <span className="text-red-500">Box</span> Achievements
            </h2>
            <Trophy className="text-yellow-500" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Real-world penetration testing experience through Hack The Box platform.
            Demonstrating advanced exploitation techniques, privilege escalation, and system compromise methodologies.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-12 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-lg"></div>
                        <div className={`relative bg-gradient-to-r ${getDifficultyColor(achievement.difficulty)} px-4 py-2 rounded-lg`}>
                          <div className="flex items-center gap-2">
                            {(() => {
                              const Icon = getDifficultyIcon(achievement.difficulty)
                              return <Icon size={20} />
                            })()}
                            <span className="text-sm font-bold">MACHINE #{achievement.id}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{achievement.name}</h3>
                        <p className="text-gray-400 text-sm">{achievement.platform}</p>
                      </div>
                    </div>
                    <motion.a
                      href={achievement.achievementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg border border-red-500/50 hover:border-red-500/70 transition-all"
                    >
                      View Achievement
                    </motion.a>
                  </div>

                  {/* Attack Chain */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.attackChain.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-1">
                        <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/50">
                          {step}
                        </div>
                        {stepIndex < achievement.attackChain.length - 1 && (
                          <Zap className="text-gray-500" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-6">
                  {/* Synopsis */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Terminal size={18} className="text-green-400" />
                      Technical Synopsis
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{achievement.synopsis}</p>
                  </motion.div>

                  {/* Techniques Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Exploitation Techniques */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg p-4 border border-red-700/50"
                    >
                      <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                        <Cpu size={18} />
                        Exploitation Techniques
                      </h4>
                      <ul className="space-y-2">
                        {achievement.techniques.map((technique, techIndex) => (
                          <li key={techIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Key Commands */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-700/50"
                    >
                      <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <Network size={18} />
                        Key Commands
                      </h4>
                      <div className="space-y-3">
                        {achievement.commands.map((command, cmdIndex) => (
                          <div key={cmdIndex} className="space-y-1">
                            <code className="text-green-400 text-xs font-mono bg-black/30 px-2 py-1 rounded block">
                              {command.cmd}
                            </code>
                            <p className="text-gray-400 text-xs ml-2">{command.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Lessons Learned */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-700/50"
                  >
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Lessons Mastered</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {achievement.lessons.map((lesson, lessonIndex) => (
                        <motion.div
                          key={lessonIndex}
                          whileHover={{ scale: 1.05 }}
                          className="bg-purple-800/20 border border-purple-700/50 rounded-lg p-3 text-center"
                        >
                          <span className="text-purple-300 text-sm">{lesson}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-6 py-3 border border-red-500/50">
            <Shield className="text-red-400" size={20} />
            <span className="text-red-400 font-medium">2 Machines Compromised</span>
            <Trophy className="text-yellow-400" size={20} />
          </div>
          <p className="text-gray-400 mt-4">
            Continuously expanding penetration testing skills through real-world scenarios
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HackTheBoxSection