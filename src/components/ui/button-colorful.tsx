import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
}

export function ButtonColorful({ label, className, ...props }: ButtonColorfulProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-primary via-primary/80 to-primary rounded-lg group",
        "hover:from-primary/90 hover:via-primary/70 hover:to-primary/80",
        "focus:ring-2 focus:ring-primary/50 focus:outline-none",
        "active:scale-[0.98]",
        "disabled:opacity-50 disabled:pointer-events-none",
        "text-white shadow-lg",
        className
      )}
      {...props}
    >
      <span className="relative">{label}</span>
    </button>
  )
}