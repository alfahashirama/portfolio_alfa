import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-md bg-muted text-sm font-medium hover:bg-primary/20 transition"
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </button>
  )
}