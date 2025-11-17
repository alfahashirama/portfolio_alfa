import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, Tag, ArrowRight, Search, BookOpen, TrendingUp, Shield, Code, Cloud } from 'lucide-react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: "Guide complet : Déployer Splunk Enterprise sur Kubernetes",
      excerpt: "Apprenez à déployer et configurer Splunk Enterprise dans un cluster Kubernetes avec haute disponibilité et scalabilité automatique.",
      date: "2025-01-15",
      readTime: "12 min",
      category: "SOC",
      tags: ["Splunk", "Kubernetes", "DevOps"],
      image: "/images/blog/splunk-k8s.jpg",
      icon: Shield,
      color: "from-green-400 to-emerald-500",
      status: "published"
    },
    {
      id: 2,
      title: "Top 10 des règles de détection SIEM pour 2025",
      excerpt: "Découvrez les règles de corrélation essentielles pour détecter les menaces APT, ransomwares et attaques par force brute.",
      date: "2025-01-10",
      readTime: "8 min",
      category: "Cybersécurité",
      tags: ["SIEM", "Detection", "Security"],
      image: "/images/blog/siem-rules.jpg",
      icon: Shield,
      color: "from-cyan-400 to-blue-500",
      status: "published"
    },
    {
      id: 3,
      title: "API REST sécurisée avec Node.js et JWT",
      excerpt: "Tutorial complet pour créer une API REST avec authentification JWT, rate limiting et bonnes pratiques de sécurité.",
      date: "2025-01-05",
      readTime: "15 min",
      category: "Développement",
      tags: ["Node.js", "JWT", "Security"],
      image: "/images/blog/nodejs-jwt.jpg",
      icon: Code,
      color: "from-green-500 to-lime-500",
      status: "published"
    },
    {
      id: 4,
      title: "CI/CD avec GitHub Actions et GCP",
      excerpt: "Automatisez vos déploiements sur Google Cloud Platform avec GitHub Actions, Docker et Kubernetes.",
      date: "2024-12-28",
      readTime: "10 min",
      category: "DevOps",
      tags: ["CI/CD", "GCP", "GitHub Actions"],
      image: "/images/blog/cicd-gcp.jpg",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      status: "published"
    },
    {
      id: 5,
      title: "Analyse forensique avec Suricata et Splunk",
      excerpt: "Intégration de Suricata IDS avec Splunk pour la détection d'intrusions et l'analyse de trafic réseau en temps réel.",
      date: "Coming soon",
      readTime: "TBD",
      category: "SOC",
      tags: ["Suricata", "Splunk", "Forensics"],
      image: "/images/blog/suricata-forensics.jpg",
      icon: Shield,
      color: "from-red-400 to-orange-500",
      status: "draft"
    },
    {
      id: 6,
      title: "Microservices avec Spring Boot et Docker",
      excerpt: "Architecture microservices complète avec Spring Boot, Docker Compose et service discovery.",
      date: "Coming soon",
      readTime: "TBD",
      category: "Développement",
      tags: ["Java", "Spring Boot", "Docker"],
      image: "/images/blog/spring-microservices.jpg",
      icon: Code,
      color: "from-orange-500 to-red-500",
      status: "draft"
    }
  ]

  const categories = [
    { id: 'all', label: 'Tous les articles', icon: BookOpen },
    { id: 'SOC', label: 'SOC & SIEM', icon: Shield },
    { id: 'Cybersécurité', label: 'Cybersécurité', icon: Shield },
    { id: 'Développement', label: 'Développement', icon: Code },
    { id: 'DevOps', label: 'DevOps', icon: Cloud }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeFilter === 'all' || post.category === activeFilter
    return matchesSearch && matchesCategory
  })

  const publishedCount = blogPosts.filter(p => p.status === 'published').length
  const draftCount = blogPosts.filter(p => p.status === 'draft').length

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
    hidden: { opacity: 0, y: 30 },
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
              y: [null, (Math.random() - 0.5) * 200],
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
              Blog Technique
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Articles, tutoriels et retours d'expérience sur la cybersécurité, le développement et le DevOps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">{blogPosts.length}</h3>
            <p className="text-gray-400 text-sm">Articles Total</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">{publishedCount}</h3>
            <p className="text-gray-400 text-sm">Publiés</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">{draftCount}</h3>
            <p className="text-gray-400 text-sm">À venir</p>
          </div>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille d'articles */}
        <motion.div
          key={activeFilter + searchTerm}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <post.icon className="w-20 h-20 text-cyan-400/20" />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Badge de statut */}
                {post.status === 'draft' && (
                  <div className="absolute top-4 right-4 bg-yellow-500/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    Bientôt
                  </div>
                )}

                {/* Badge de catégorie */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {post.category}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-700/50 text-cyan-300 rounded border border-slate-600/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Lien de lecture */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                    post.status === 'published' 
                      ? 'text-cyan-400 hover:text-cyan-300' 
                      : 'text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={post.status === 'draft'}
                >
                  <span>{post.status === 'published' ? ' Lire l\'article' : 'Bientôt disponible'}</span>
                  {post.status === 'published' && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* Message si aucun résultat */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-400">Aucun article trouvé</p>
            <p className="text-sm text-gray-500 mt-2">Essayez un autre terme de recherche ou filtre</p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Restez informé des nouveaux articles
            </h3>
            <p className="text-gray-400 mb-6">
              Recevez une notification pour chaque nouvel article publié sur la cybersécurité et le développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}