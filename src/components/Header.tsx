import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/skills", label: "Compétences" },
    { to: "/projects", label: "Projets" },
    { to: "/toolbox", label: "Toolbox" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' 
          : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec effet brillant */}
          <Link to="/" className="group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-lg px-4 py-2">
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AB
                </span>
                <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex gap-1">
            {links.map((l, index) => (
              <Link 
                key={l.to} 
                to={l.to}
                className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{l.label}</span>
                {/* Effet de fond au survol */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                {/* Barre inférieure animée */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </Link>
            ))}
          </nav>

          {/* Actions (Theme, Language, Menu Mobile) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle avec style */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block"
            >
              <ThemeToggle />
            </motion.div>

            {/* Language Toggle avec style */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block"
            >
              <LanguageToggle />
            </motion.div>

            {/* Bouton Menu Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Mobile avec animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-slate-800/50 bg-slate-900/95 backdrop-blur-xl"
          >
            <div className="py-4">
              {links.map((l, index) => (
                <motion.div
                  key={l.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="group relative block px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="relative z-10">{l.label}</span>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>
                    {/* Effet de fond au survol mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}

              {/* Theme & Language dans le menu mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
                className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-800/50 sm:hidden"
              >
                <ThemeToggle />
                <LanguageToggle />
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Barre de progression au scroll (optionnel) */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400"
        style={{
          width: scrolled ? '100%' : '0%',
          transition: 'width 0.3s ease-out'
        }}
      />
    </header>
  )
}