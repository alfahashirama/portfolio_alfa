import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  title: string
  desc: string
  tags: string[]
  github?: string
  demo: undefined
  image: string
  metrics?: string
}

export default function ProjectCard({ title, desc, tags, github, demo, image, metrics }: Project) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl border bg-card shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{desc}</p>
        {metrics && <p className="font-semibold text-primary mb-4">{metrics}</p>}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <div className="flex gap-3">
          {github && (
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
          )}
          {demo && (
            <Button size="sm" asChild>
              <a href={demo} target="_blank"><ExternalLink className="mr-2 h-4 w-4" /> Démo</a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}