import { motion } from 'framer-motion'
import { Github, ExternalLink, Award, TrendingUp, Shield, Code, Cloud, Database } from 'lucide-react'

// Composant ProjectCard stylisé
const ProjectCard = ({ title, desc, tags, image, metrics, github, demo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-cyan-400/20">
              <Code className="w-20 h-20" />
            </div>
          </div>
        )}
        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Badge de catégorie */}
        {tags[0] && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {tags[0]}
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {desc}
        </p>

        {/* Métrique si présente */}
        {metrics && (
          <div className="mb-4 flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-semibold">{metrics}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-slate-700/50 text-cyan-300 rounded-full border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-3">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-lg text-sm text-white font-semibold transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    </motion.div>
  )
}

const projects = [
  {
    title: "SIEM Splunk - Détection d'intrusions",
    desc: "Dashboard + 12 recherches sauvegardées + playbook d'investigation",
    tags: ["Splunk", "SIEM", "Playbooks", "SOC"],
    image: "/images/screenshots/splunk-dashboard.webp",
    metrics: "Réduction de 40% du temps d'investigation",
    icon: Shield
  },
  {
    title: "API REST Incidents Cybersécurité",
    desc: "Node.js/Express + JWT + MySQL + tests Postman + CI",
    tags: ["Node.js", "Express", "JWT", "MySQL"],
    github: "https://github.com/tonpseudo/incident-api",
    image: "/images/screenshots/api-postman.webp",
    icon: Code
  },
  {
    title: "Pipeline CI/CD + Kubernetes GKE",
    desc: "Docker → GitHub Actions → GKE avec manifests complets",
    tags: ["Docker", "Kubernetes", "GCP", "CI/CD"],
    image: "/images/screenshots/k8s-dashboard.webp",
    icon: Cloud
  },
  {
    title: "Backup automatisé MySQL",
    desc: "Script bash + rotation + chiffrement GPG",
    tags: ["MySQL", "Bash", "Backup", "Automation"],
    image: "/images/screenshots/mysql-backup.webp",
    icon: Database
  }
]

const stats = [
  { label: "Projets réalisés", value: "10+", icon: Award, color: "from-cyan-400 to-blue-500" },
  { label: "Technologies", value: "15+", icon: Code, color: "from-teal-400 to-green-500" },
  { label: "Heures de code", value: "500+", icon: TrendingUp, color: "from-purple-400 to-pink-500" }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%' 
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 300],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
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
              Mes Projets
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets démontrant mes compétences en cybersécurité, développement et DevOps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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

        {/* Grille de projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Intéressé par une collaboration ?
            </h3>
            <p className="text-gray-400 mb-6">
              Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span>Discutons ensemble</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}