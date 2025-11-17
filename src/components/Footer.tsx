import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { 
      href: "https://github.com/alfahashirama", 
      icon: Github, 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      href: "https://www.linkedin.com/in/alfa-niavo-314624337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      href: "mailto:contact@exemple.com", 
      icon: Mail, 
      label: "Email",
      color: "hover:text-cyan-400"
    }
  ]

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Ligne décorative supérieure */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <motion.div
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1: Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Alfa
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analyste SOC & Développeur passionné par la cybersécurité et les technologies cloud-native.
            </p>
          </motion.div>

          {/* Colonne 2: Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-bold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3: Contact & Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold text-white mb-4">Me Suivre</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              alfahashirama@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Section copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025 <span className="text-cyan-400 font-semibold">RAMANATENANIAVO Nasandratra Alfa</span>. Tous droits réservés.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Conçu avec</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>et React</span>
          </div>
        </motion.div>
      </div>

      {/* Bouton retour en haut */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
      </motion.button>

      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '100%' 
            }}
            animate={{
              y: '-20%',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </footer>
  )
}