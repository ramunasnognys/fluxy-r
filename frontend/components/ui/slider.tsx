"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

// New QualitySlider component
const QualitySlider = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="quality" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Quality
        </label>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      <Slider
        id="quality"
        min={1}
        max={100}
        step={1}
        value={[value]}
        onValueChange={(newValue) => onChange(newValue[0])}
        className="w-full"
      />
    </div>
  )
}

// New PromptStrengthSlider component
const PromptStrengthSlider = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="prompt-strength" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Prompt Strength
        </label>
        <span className="text-sm text-muted-foreground">{value.toFixed(2)}</span>
      </div>
      <Slider
        id="prompt-strength"
        min={0}
        max={1}
        step={0.01}
        value={[value]}
        onValueChange={(newValue) => onChange(newValue[0])}
        className="w-full"
      />
    </div>
  )
}

export { Slider, QualitySlider, PromptStrengthSlider }
