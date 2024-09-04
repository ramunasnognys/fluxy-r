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
const QualitySlider = () => {
  const [value, setValue] = React.useState(50)

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
        defaultValue={[50]}
        max={100}
        step={1}
        className="w-full"
        onValueChange={(newValue) => setValue(newValue[0])}
      />
    </div>
  )
}

// New PromptStrengthSlider component
const PromptStrengthSlider = () => {
  const [value, setValue] = React.useState(0.5)

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
        defaultValue={[0.5]}
        max={1}
        step={0.01}
        className="w-full"
        onValueChange={(newValue) => setValue(newValue[0])}
      />
    </div>
  )
}

export { Slider, QualitySlider, PromptStrengthSlider }
