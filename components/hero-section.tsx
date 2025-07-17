"use client";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ShinyText from "@/reactbits/TextAnimations/ShinyText/ShinyText";
import Orb from "@/reactbits/Backgrounds/Orb/Orb";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start pt-20 pb-16 px-4 text-center min-h-screen overflow-hidden">
      {/* Background Orb */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Orb hue={270} hoverIntensity={0.3} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <Button 
            variant="outline" 
            className="relative rounded-full opacity-70 border-[1px] px-6 py-2 text-sm font-medium tracking-tight"
          >
            <GlowingEffect disabled={false} />
            <ShinyText text="Used by Founders at YC, Sequoia" speed={5} />
          </Button>
        </div>
        
        <div className="mb-6">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
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
        
        <div className="mb-8 max-w-2xl">
          <p className="text-lg md:text-xl text-muted-foreground tracking-tight">
            Unlock partnerships, customers, revenue at scale with Network AI. We connect you with high-value opportunities, faster.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium tracking-tight"
          >
            Find Customers Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg font-medium tracking-tight"
          >
            Explore Investment Deals
          </Button>
        </div>
      </div>
    </section>
  );
}