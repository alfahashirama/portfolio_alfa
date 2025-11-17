import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, Code, Terminal, Shield, Cloud, Database, Zap, Search, Filter } from 'lucide-react'

// Composant ToolboxSnippet stylisé
const ToolboxSnippet = ({ title, code, lang = 'bash', description, category, icon: Icon }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const categoryColors = {
    'siem': 'from-green-400 to-emerald-500',
    'docker': 'from-blue-500 to-indigo-500',
    'kubernetes': 'from-blue-600 to-purple-500',
    'security': 'from-red-400 to-orange-500',
    'database': 'from-cyan-400 to-blue-500',
    'scripting': 'from-yellow-500 to-orange-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3 flex-1">
          {Icon && (
            <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[category] || 'from-cyan-500 to-teal-500'}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
          </div>
        </div>
        
        {/* Badge de langage */}
        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50">
            {lang}
          </span>
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300"
            title="Copier le code"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Code block */}
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
          <code className="text-gray-300 font-mono">
            {code}
          </code>
        </pre>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full"
          >
            Copié !
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Toolbox() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const snippets = [
    {
      title: "Requête Splunk - Trafic refusé par firewall",
      description: "Analyse du trafic bloqué par IP source avec comptage",
      code: `index=firewall sourcetype=pan:traffic action=deny 
| stats count by src_ip 
| sort -count`,
      lang: "SPL",
      category: "siem",
      icon: Shield
    },
    {
      title: "Splunk - Top 10 des erreurs HTTP",
      description: "Détection des codes d'erreur HTTP les plus fréquents",
      code: `index=web_logs status>=400 
| stats count by status, uri 
| sort -count 
| head 10`,
      lang: "SPL",
      category: "siem",
      icon: Shield
    },
    {
      title: "Dockerfile Node.js optimisé",
      description: "Build multi-stage pour réduire la taille de l'image",
      code: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]`,
      lang: "Dockerfile",
      category: "docker",
      icon: Cloud
    },
    {
      title: "Docker Compose - Stack complète",
      description: "App Node.js + MySQL + Redis avec networks",
      code: `version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=mysql
      - REDIS_HOST=redis
    depends_on:
      - mysql
      - redis
  
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: myapp
    volumes:
      - mysql_data:/var/lib/mysql
  
  redis:
    image: redis:7-alpine
    
volumes:
  mysql_data:`,
      lang: "YAML",
      category: "docker",
      icon: Cloud
    },
    {
      title: "kubectl - Port forward service",
      description: "Redirection de port pour accéder à un service K8s",
      code: "kubectl port-forward deployment/my-app 8080:3000",
      lang: "bash",
      category: "kubernetes",
      icon: Cloud
    },
    {
      title: "kubectl - Logs en temps réel",
      description: "Suivi des logs d'un pod avec filtrage",
      code: `kubectl logs -f deployment/my-app --tail=100
kubectl logs -f deployment/my-app | grep ERROR`,
      lang: "bash",
      category: "kubernetes",
      icon: Cloud
    },
    {
      title: "MySQL - Backup automatisé",
      description: "Script de sauvegarde avec rotation et compression",
      code: `#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="mydb"
DB_USER="root"
DB_PASS="secret"

mysqldump -u$DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

# Rotation: garder seulement les 7 derniers
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete`,
      lang: "bash",
      category: "database",
      icon: Database
    },
    {
      title: "Linux - Scan de ports avec nmap",
      description: "Scan complet avec détection de services",
      code: `# Scan rapide
nmap -sV -T4 192.168.1.0/24

# Scan complet avec OS detection
sudo nmap -A -T4 -p- 192.168.1.1`,
      lang: "bash",
      category: "security",
      icon: Shield
    },
    {
      title: "iptables - Règles firewall basiques",
      description: "Configuration d'un firewall Linux simple",
      code: `# Bloquer tout par défaut
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Autoriser loopback
iptables -A INPUT -i lo -j ACCEPT

# Autoriser connexions établies
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Autoriser SSH et HTTP/HTTPS
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT`,
      lang: "bash",
      category: "security",
      icon: Shield
    },
    {
      title: "GitHub Actions - CI/CD Pipeline",
      description: "Pipeline automatisé: build, test, deploy sur GCP",
      code: `name: CI/CD Pipeline
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t myapp:latest .
      
      - name: Run tests
        run: docker run myapp:latest npm test
      
      - name: Deploy to GCP
        uses: google-github-actions/deploy-cloudrun@v1
        with:
          service: myapp
          image: gcr.io/project/myapp:latest`,
      lang: "YAML",
      category: "kubernetes",
      icon: Zap
    }
  ]

  const categories = [
    { id: 'all', label: 'Tous', icon: Code },
    { id: 'siem', label: 'SIEM / Splunk', icon: Shield },
    { id: 'docker', label: 'Docker', icon: Cloud },
    { id: 'kubernetes', label: 'Kubernetes', icon: Cloud },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'security', label: 'Security', icon: Shield }
  ]

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || snippet.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
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
              Toolbox & Snippets
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Collection de commandes, scripts et configurations utiles pour la cybersécurité et le DevOps
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
            <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">{snippets.length}</h3>
            <p className="text-gray-400 text-sm">Snippets disponibles</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <Code className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">6</h3>
            <p className="text-gray-400 text-sm">Catégories</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-white mb-1">100%</h3>
            <p className="text-gray-400 text-sm">Testés & fonctionnels</p>
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
              placeholder="Rechercher un snippet..."
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

        {/* Liste des snippets */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredSnippets.map((snippet, index) => (
            <ToolboxSnippet key={index} {...snippet} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredSnippets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-400">Aucun snippet trouvé</p>
            <p className="text-sm text-gray-500 mt-2">Essayez un autre terme de recherche</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Besoin d'un snippet personnalisé ?
            </h3>
            <p className="text-gray-400 mb-6">
              Je peux créer des scripts et configurations sur-mesure pour vos besoins spécifiques.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span>Demander un snippet</span>
              <Code className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}