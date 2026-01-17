import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Github, Code2, Wrench, Trophy, Upload } from "lucide-react";

const navLinks = [
  { name: "Components", href: "/components", icon: Code2 },
  { name: "Tools", href: "/tools", icon: Wrench },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Submit", href: "/submit", icon: Upload },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(186_100%_50%/0.4)] transition-shadow duration-300">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">
              Student<span className="gradient-text">Verse</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link key={link.name} to={link.href}>
                  <Button
                    variant="ghost"
                    className={`gap-2 ${isActive ? "bg-muted text-primary" : ""}`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="glass" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start gap-3 ${isActive ? "bg-muted text-primary" : ""}`}
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                <Button variant="glass" size="sm" className="flex-1 gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="gradient" size="sm" className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
