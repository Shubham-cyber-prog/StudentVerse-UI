import { Button } from "@/components/ui/button";
import { Github, Rocket, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(186_100%_50%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card-glow p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Contribute</span>?
            </h2>
            
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join hundreds of students building and sharing UI components. 
              Every contribution helps someone learn and build faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/submit">
                <Button variant="gradient" size="xl" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Submit Your Component
                </Button>
              </Link>
              <Button variant="glass" size="xl" className="gap-2">
                <Github className="w-5 h-5" />
                Star on GitHub
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              GSSoC & Hacktoberfest ready • Open source under MIT License
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
