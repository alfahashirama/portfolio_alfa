import { Copy } from 'lucide-react'
import { useState } from 'react'

export default function ToolboxSnippet({ title, code, lang = 'bash' }: { title: string; code: string; lang?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8 border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-muted px-4 py-2">
        <span className="font-medium">{title}</span>
        <button onClick={copy} className="text-sm hover:text-primary flex items-center gap-1">
          <Copy className="h-4 w-4" /> {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <pre className="bg-black text-green-400 p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}