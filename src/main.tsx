import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Ressources de traduction
const resources = {
  fr: {
    translation: {
      downloadCV: "Télécharger CV",
      contact: "Contact",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      certifications: "Certifications",
      blog: "Blog",
      toolbox: "Toolbox"
    }
  },
  en: {
    translation: {
      downloadCV: "Download CV",
      contact: "Contact",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      blog: "Blog",
      toolbox: "Toolbox"
    }
  }
}

// Initialisation i18next
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

// Rendu React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)