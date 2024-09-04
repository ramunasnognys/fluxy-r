import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Flux Uncensored Image Generator</h1>
      
      <div className="w-full max-w-2xl">
        <Textarea
          placeholder="Enter Your Prompt"
          className="mb-4 text-green-500" // Changed from text-black to text-green-500
        />
        
        {/* Placeholder for future content */}
        <p className="text-center text-gray-400">
          Content for the image generator will be added here.
        </p>
      </div>
    </main>
  );
}
