import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  SpinnerLoader, 
  PulseLoader, 
  WaveLoader, 
  RingLoader,
  DotsLoader,
  OrbitLoader,
  GradientSpinner
} from "@/components/loaders/AnimatedLoaders";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(270_60%_60%/0.1),transparent_50%)]" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Open Source • GSSoC Ready • Hacktoberfest</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Build & Share
            <br />
            <span className="gradient-text">Student-Made</span> UI
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Discover beautiful components and tools built by students worldwide. 
            Copy, learn, contribute, and grow together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/components">
              <Button variant="gradient" size="xl" className="gap-2 group">
                Explore Components
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/submit">
              <Button variant="glass" size="xl" className="gap-2">
                <Code2 className="w-5 h-5" />
                Submit Yours
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">1.2K</div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>

          {/* Animated Loaders Showcase */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Featured: Animated Loaders Collection</p>
            <div className="glass-card-glow p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="flex flex-col items-center gap-3">
                  <SpinnerLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Spinner</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <PulseLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Pulse</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <WaveLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Wave</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <RingLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Ring</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <DotsLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Dots</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <OrbitLoader size="lg" />
                  <span className="text-xs text-muted-foreground">Orbit</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <GradientSpinner size="lg" />
                  <span className="text-xs text-muted-foreground">Gradient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
