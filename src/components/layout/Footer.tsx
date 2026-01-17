import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">
                Student<span className="gradient-text">Verse</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Build, share, and explore UI components. Made by students, for students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/components" className="hover:text-primary transition-colors">Components</Link></li>
              <li><Link to="/tools" className="hover:text-primary transition-colors">Student Tools</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
              <li><Link to="/submit" className="hover:text-primary transition-colors">Contribute</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub Discussions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Hacktoberfest</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GSSoC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CONTRIBUTING.md</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 StudentVerse UI. Open source under MIT License.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
