// components/Hero.jsx
import { Button } from './ui/Button'
import { Download, Mail, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animé avec dégradé moderne */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/15 via-transparent to-transparent"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container px-6 text-center relative z-10">
        {/* PHOTO avec meilleure résolution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100 
          }}
          className="mb-12 relative"
        >
          <div className="relative inline-block">
            {/* Cercle lumineux animé derrière la photo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-2xl"
            />
            
            {/* Photo avec meilleure qualité - SOLUTION AU FLOU */}
            <img
              src="/images/alfa.jpg"
              srcSet="/images/alfa.jpg 1x, /images/alfa@2x.jpg 2x"
              alt="RAMANATENANIAVO Nasandratra Alfa"
              className="relative w-52 h-52 md:w-64 md:h-64 mx-auto rounded-full border-4 border-cyan-400/50 shadow-2xl object-cover"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              loading="eager"
              decoding="sync"
            />
            
            {/* Badge de statut */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Disponible
            </motion.div>
          </div>
        </motion.div>

        {/* NOM avec effet brillant */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 relative"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            RAMANATENANIAVO
          </span>
          <br />
          <span className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Nasandratra Alfa
          </span>
        </motion.h1>

        {/* TAGLINE avec icônes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 flex-wrap justify-center">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 font-bold">
              Analyste SOC — Expert Splunk
            </p>
            <Sparkles className="w-5 h-5 text-teal-400" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Développeur Back-end | DevOps Junior
          </p>
        </motion.div>

        {/* CTA avec effets modernes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            size="lg" 
            asChild 
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <a href="/cv-alfa.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Télécharger CV
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" /> Me Contacter
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 bg-cyan-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}