import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-primary text-white': variant === 'default',
          'bg-muted text-muted-foreground': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  )
}