import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "neon"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_var(--color-primary-glow)] hover:shadow-[0_0_25px_var(--color-primary-glow)]": variant === "default",
            "border border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_var(--color-primary-glow)_inset]": variant === "outline",
            "hover:bg-accent/20 hover:text-accent": variant === "ghost",
            "glass text-foreground hover:bg-white/10": variant === "glass",
            "bg-transparent border border-accent text-accent shadow-[0_0_10px_var(--color-accent-glow),0_0_10px_var(--color-accent-glow)_inset] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_var(--color-accent-glow),0_0_20px_var(--color-accent-glow)_inset]": variant === "neon",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
