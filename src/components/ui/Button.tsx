import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react' // ← Ajoutez 'type'
import { forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean // ← Ajoutez cette prop
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    if (asChild && props.children) {
      return <>{props.children}</>
    }
    
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          {
            'bg-primary text-white': variant === 'default',
            'border border-primary': variant === 'outline',
            'px-4 py-2': size === 'default',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-6 py-3': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export { Button }