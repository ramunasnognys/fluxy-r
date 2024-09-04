"use client";

import { Textarea } from "@/components/ui/textarea";
import { QualitySlider, PromptStrengthSlider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [imageFormat, setImageFormat] = useState("png");
  const [disableSafetyCheck, setDisableSafetyCheck] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Flux Uncensored Image Generator</h1>
      
      <div className="w-full max-w-2xl space-y-6">
        <Textarea
          placeholder="Enter Your Prompt"
          className="mb-4 text-green-500"
        />
        
        <div className="flex justify-between items-center">
          <span>Aspect Ratio:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-black">
                {aspectRatio}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setAspectRatio("16:9")}>
                16:9
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("9:16")}>
                9:16
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAspectRatio("1:1")}>
                1:1
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex justify-between items-center">
          <span>Select Image Format:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-black">
                {imageFormat}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setImageFormat("png")}>
                png
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("jpg")}>
                jpg
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setImageFormat("webp")}>
                webp
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="disableSafetyCheck"
            checked={disableSafetyCheck}
            onCheckedChange={(checked) => setDisableSafetyCheck(checked as boolean)}
          />
          <label
            htmlFor="disableSafetyCheck"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disable Safety Check
          </label>
        </div>
        
        <QualitySlider />
        
        <PromptStrengthSlider />
        
        {/* Placeholder for future content */}
        <p className="text-center text-gray-400 mt-4">
          Content for the image generator will be added here.
        </p>
      </div>
    </main>
  );
}
