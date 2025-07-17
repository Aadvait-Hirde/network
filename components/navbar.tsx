"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/10 backdrop-blur-md supports-[backdrop-filter]:bg-background/10">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/network-logo.png"
              alt="Network AI"
              width={48}
              height={48}
            />
          </div>

          {/* Navigation - Desktop - Absolutely positioned for true centering */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Sign In Button */}
          <div className="flex items-center">
            <SignInButton>
              <Button size="default" className="rounded-sm px-4" variant="outline">
                <span className="pb-0.5 px-1">Sign In</span>
              </Button>
            </SignInButton>
          </div>
        </div>
      </div>
    </header>
  );
}