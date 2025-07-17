"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md"></div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:block">
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
              <Button size="sm" className="rounded-sm px-6">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </div>
    </header>
  );
}