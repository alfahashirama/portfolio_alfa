import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Code, Cloud, Database, Terminal, Lock, Zap, Award, CheckCircle } from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillsData = [
    // Cybersécurité / SOC
    { name: 'Splunk', level: 95, category: 'security', icon: Shield, color: 'from-green-400 to-emerald-500' },
    { name: 'SIEM', level: 90, category: 'security', icon: Shield, color: 'from-cyan-400 to-blue-500' },
    { name: 'Suricata', level: 75, category: 'security', icon: Lock, color: 'from-red-400 to-orange-500' },
    { name: 'iptables', level: 50, category: 'security', icon: Lock, color: 'from-purple-400 to-pink-500' },
    
    // Backend
    { name: 'Node.js', level: 90, category: 'backend', icon: Code, color: 'from-green-500 to-lime-500' },
    { name: 'Express', level: 88, category: 'backend', icon: Code, color: 'from-gray-500 to-gray-700' },
    { name: 'Java Spring Boot', level: 70, category: 'backend', icon: Code, color: 'from-orange-500 to-red-500' },
    { name: 'Python Flask', level: 75, category: 'backend', icon: Code, color: 'from-blue-400 to-cyan-500' },
    
    // DevOps & Cloud
    { name: 'Docker', level: 75, category: 'devops', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { name: 'Kubernetes', level: 70, category: 'devops', icon: Cloud, color: 'from-blue-600 to-purple-500' },
    { name: 'GCP', level: 60, category: 'devops', icon: Cloud, color: 'from-red-400 to-orange-500' },
    { name: 'GitHub Actions', level: 70, category: 'devops', icon: Zap, color: 'from-gray-600 to-gray-800' },
    
    // Base de données & Système
    { name: 'MySQL', level: 80, category: 'database', icon: Database, color: 'from-blue-500 to-cyan-500' },
    { name: 'Postgres', level: 80, category: 'database', icon: Database, color: 'from-blue-500 to-cyan-500' },
    { name: 'Linux', level: 70, category: 'system', icon: Terminal, color: 'from-yellow-500 to-orange-500' },
    { name: 'Windows', level: 70, category: 'system', icon: Terminal, color: 'from-yellow-500 to-orange-500' }
  ]

  const categories = [
    { id: 'all', label: 'Toutes', icon: Award },
    { id: 'security', label: 'Cybersécurité', icon: Shield },
    { id: 'backend', label: 'Backend', icon: Code },
    { id: 'devops', label: 'DevOps', icon: Cloud },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'system', label: 'Système', icon: Terminal }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  const stats = [
    { label: 'Compétences', value: skillsData.length, icon: Award, color: 'from-cyan-400 to-blue-500' },
    { label: 'Expertise', value: '3+ ans', icon: CheckCircle, color: 'from-teal-400 to-green-500' },
    { label: 'Certifications', value: 'En cours', icon: Shield, color: 'from-purple-400 to-pink-500' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%' 
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 200],
              x: [null, (Math.random() - 0.5) * 200],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un arsenal technique couvrant la cybersécurité, le développement et le cloud
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de compétences */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Header avec icône */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
              </div>

              {/* Barre de progression */}
              <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  {/* Effet de brillance */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Badge de niveau */}
              <div className="mt-3 text-right">
                <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
                  skill.level >= 90 ? 'bg-green-500/20 text-green-400' :
                  skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Avancé' : 'Intermédiaire'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section d'encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                En apprentissage continu
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              La technologie évolue constamment, et je m'engage à rester à jour avec les dernières tendances en cybersécurité, développement et DevOps.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-gray-300">
                🎯 Certifications en cours
              </span>
              <span className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-gray-300">
                📚 Formation continue
              </span>
              <span className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-gray-300">
                🚀 Veille technologique
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}