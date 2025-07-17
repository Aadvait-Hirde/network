"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ShinyText from "@/reactbits/TextAnimations/ShinyText/ShinyText";
import Orb from "@/reactbits/Backgrounds/Orb/Orb";
import Image from "next/image";
import { Send } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [textareaValue, setTextareaValue] = useState("");

  const handleButtonClick = (text: string) => {
    setTextareaValue(text);
  };
  return (
    <section className="relative flex flex-col items-center justify-start pt-64 pb-16 px-4 text-center min-h-screen overflow-hidden -mt-16">
      {/* Background Orb */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Orb hue={270} hoverIntensity={0.3} scale={2.5} quality="low"/>
      </div>
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Orb hue={270} hoverIntensity={0.3} scale={2} quality="low"/>
      </div>
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Orb hue={270} hoverIntensity={0.3} scale={0.75} quality="low"/>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <Button 
            variant="outline" 
            className="relative rounded-full border-[1px] px-6 py-2 text-sm font-medium tracking-tight"
          >
            <GlowingEffect disabled={false} />
            <ShinyText text="Used by Founders at YC, Sequoia" speed={5} />
          </Button>
        </div>
        
        <div className="mb-2">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground"
               style={{ fontFamily: "'Season Serif', serif", fontWeight: "300" }}>
            <span>Your AI Powered </span>
            <span 
              className="text-primary"
              style={{ fontFamily: "'Season Serif', serif", fontStyle: "italic", fontWeight: "600" }}
            >
              Growth
            </span>
            <span> Engine</span>
          </div>
        </div>
        
        <div className="mb-16 max-w-2xl">
          <ShinyText text="Unlock partnerships, customers, revenue at scale with Network AI." className="text-md md:text-lg tracking-normal font-[400]" speed={5} />
        </div>

        {/* Try it Now textarea */}
        <div className="mb-16 w-full max-w-2xl px-4">
          <label htmlFor="company-input" className="block text-sm font-medium text-foreground mb-3 text-left">
            Try it Now!
          </label>
          <div className="relative w-full">
            <Textarea
              id="company-input"
              placeholder="Enter your company link or describe what it does"
              className="h-32 resize-none w-full pr-14 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-input"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
                          <button
                type="submit"
                className="absolute right-2 top-2 p-2 text-muted-foreground hover:text-foreground transition-colors border rounded-[5px] flex items-center justify-center bg-transparent hover:bg-transparent"
              >
             <Send className="w-5 h-5" />
            </button>
          </div>
          
          {/* Company buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleButtonClick("elevenlabs")}
              className="text-sm"
            >
              ElevenLabs
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleButtonClick("fireworks.ai")}
              className="text-sm"
            >
              Fireworks
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleButtonClick("arize.com")}
              className="text-sm"
            >
              Arize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleButtonClick("decagon.ai")}
              className="text-sm"
            >
              Decagon
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <ShinyText text="TRUSTED BY TOP COMPANIES" className="text-sm tracking-normal font-medium" speed={5} />
          <div className="flex items-center justify-center gap-10 opacity-60">
            <Image
              src="/hubspot-logo.png"
              alt="HubSpot"
              width={120}
              height={40}
              className="object-contain saturate-0 hover:scale-115 transition-all duration-300"
            />
            <Image
              src="/vapi-logo.png"
              alt="Vapi"
              width={120}
              height={40}
              className="object-contain saturate-0 hover:scale-115 transition-all duration-300"
            />
            <Image
              src="/google-logo.png"
              alt="Google"
              width={120}
              height={40}
              className="object-contain saturate-0 hover:scale-115 transition-all duration-300"
            />
            <Image
              src="/fireworks-logo.png"
              alt="Fireworks"
              width={160}
              height={40}
              className="object-contain saturate-0 hover:scale-115 transition-all duration-300"
            />
            <Image
              src="/parallel-logo.png"
              alt="Parallel"
              width={120}
              height={40}
              className="object-contain saturate-0 hover:scale-115 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}