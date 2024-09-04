"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { QualitySlider, PromptStrengthSlider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import WaveBackground from "@/components/WaveBackground";
import * as FileSaver from 'file-saver';

export default function Home() {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [imageFormat, setImageFormat] = useState("png");
  const [disableSafetyCheck, setDisableSafetyCheck] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [quality, setQuality] = useState(80);
  const [promptStrength, setPromptStrength] = useState(0.8);
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          aspectRatio,
          imageFormat,
          disableSafetyCheck,
          quality,
          promptStrength,
          imageUrl, // Add this line to include the image URL
        }),
      });
      const data = await response.json();
      setGeneratedImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (generatedImageUrl) {
      fetch(generatedImageUrl)
        .then(response => response.blob())
        .then(blob => {
          FileSaver.saveAs(blob, `generated-image.${imageFormat}`);
        })
        .catch(error => console.error('Error downloading image:', error));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-black text-white relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Flux Uncensored Image Generator</h1>
      
      <div className="w-full max-w-2xl space-y-6">
        <Textarea
          placeholder="Enter Your Prompt"
          className="mb-4 text-green-500"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <Input
          type="url"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="text-black"
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
        
        <QualitySlider value={quality} onChange={setQuality} />
        
        <PromptStrengthSlider value={promptStrength} onChange={setPromptStrength} />
        
        <Button 
          onClick={handleGenerate} 
          disabled={isLoading} 
          className="w-full bg-white text-black hover:bg-gray-200"
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </Button>
        
        {generatedImageUrl && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Generated Image:</h2>
            <img src={generatedImageUrl} alt="Generated" className="w-full mb-4" />
            <Button 
              onClick={handleDownload} 
              className="w-full bg-white text-black hover:bg-gray-200"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
