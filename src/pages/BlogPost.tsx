import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()

  return (
    <article className="py-20 container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Article: {slug}</h1>
      <p className="text-muted-foreground">Contenu à venir...</p>
    </article>
  )
}