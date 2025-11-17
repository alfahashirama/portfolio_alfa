import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Shield, Code, Cloud, Zap, Award, TrendingUp } from 'lucide-react'

export default function About() {

  const skills = [
    { name: 'Splunk', icon: Shield, color: 'from-green-400 to-emerald-500', category: 'SOC' },
    { name: 'Node.js', icon: Code, color: 'from-green-500 to-lime-500', category: 'Backend' },
    { name: 'Java', icon: Code, color: 'from-orange-400 to-red-500', category: 'Backend' },
    { name: 'Python', icon: Code, color: 'from-blue-400 to-cyan-500', category: 'Backend' },
    { name: 'Docker', icon: Cloud, color: 'from-blue-500 to-indigo-500', category: 'DevOps' },
    { name: 'Kubernetes', icon: Cloud, color: 'from-blue-600 to-purple-500', category: 'DevOps' },
    { name: 'GCP', icon: Cloud, color: 'from-red-400 to-orange-500', category: 'Cloud' },
    { name: 'GitHub Actions', icon: Zap, color: 'from-gray-600 to-gray-800', category: 'CI/CD' }
  ]

  const stats = [
    { icon: Shield, label: 'Analyste SOC', value: 'Expert', color: 'text-cyan-400' },
    { icon: Code, label: 'Développement', value: 'Full Stack', color: 'text-teal-400' },
    { icon: Cloud, label: 'DevOps', value: 'Junior', color: 'text-blue-400' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              À Propos
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Description avec design moderne */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed flex-1">
                Analyste SOC spécialisé en <span className="text-cyan-400 font-semibold">SIEM Splunk</span>, je conçois des dashboards, playbooks et alertes pour détecter les menaces en temps réel.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed flex-1">
                En parallèle, je développe des <span className="text-teal-400 font-semibold">API REST robustes</span> (Node.js/Express, Spring Boot, Flask) et déploie des infrastructures <span className="text-blue-400 font-semibold">cloud-native</span> (Docker, Kubernetes, GCP).
              </p>
            </div>
          </motion.div>

          {/* Stack technique moderne */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Stack Technique
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-400/50"
                >
                  {/* Effet de brillance au survol */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <skill.icon className="w-10 h-10 text-gray-400 group-hover:text-cyan-400 mx-auto mb-3 transition-colors duration-300" />
                    <h3 className="text-base font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {skill.category}
                    </p>
                  </div>

                  {/* Badge de progression */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Badge de certification/expertise (optionnel) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 font-medium">En constante évolution technique</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}