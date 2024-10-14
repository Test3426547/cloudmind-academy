import React from 'react'
import { cn } from '@/lib/utils'

interface ThemedTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}

export const ThemedText: React.FC<ThemedTextProps> = ({ 
  variant = 'default', 
  children, 
  className,
  ...props 
}) => {
  const baseStyles = 'text-white'

  const variantStyles = {
    default: 'text-base',
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold'
  }

  const Element = variant === 'default' ? 'p' : variant

  return (
    <Element 
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Element>
  )
}