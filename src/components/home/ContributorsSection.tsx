import { Button } from "@/components/ui/button";
import { Trophy, Star, Flame, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topContributors = [
  {
    rank: 1,
    name: "Alex Chen",
    username: "alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    points: 2450,
    contributions: 45,
    badge: "🏆",
  },
  {
    rank: 2,
    name: "Maria Rodriguez",
    username: "mariarodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    points: 2180,
    contributions: 38,
    badge: "🥈",
  },
  {
    rank: 3,
    name: "James Wilson",
    username: "jameswilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    points: 1920,
    contributions: 32,
    badge: "🥉",
  },
  {
    rank: 4,
    name: "Sophie Taylor",
    username: "sophietaylor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie",
    points: 1680,
    contributions: 28,
    badge: "⭐",
  },
  {
    rank: 5,
    name: "Ryan Park",
    username: "ryanpark",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan",
    points: 1520,
    contributions: 25,
    badge: "⭐",
  },
];

const badges = [
  { name: "First Contribution", icon: "🎉", description: "Made your first contribution" },
  { name: "Rising Star", icon: "⭐", description: "10+ contributions" },
  { name: "Component Master", icon: "🔧", description: "25+ components shared" },
  { name: "Community Hero", icon: "🦸", description: "Helped 50+ students" },
  { name: "Open Source Champion", icon: "🏆", description: "Top 10 contributor" },
];

export function ContributorsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
            <Flame className="w-4 h-4 text-warning" />
            <span className="text-sm text-warning font-medium">Community Leaderboard</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top <span className="gradient-text">Contributors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the amazing students powering our community. Contribute and earn your spot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-border/50 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-warning" />
                <h3 className="font-semibold">This Month's Leaders</h3>
              </div>
              <div className="divide-y divide-border/50">
                {topContributors.map((contributor, index) => (
                  <div
                    key={contributor.username}
                    className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 text-center font-bold text-lg">
                      {contributor.badge}
                    </div>
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold">{contributor.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        @{contributor.username}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{contributor.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{contributor.contributions} contributions</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border/50">
                <Link to="/leaderboard">
                  <Button variant="ghost" className="w-full gap-2">
                    View Full Leaderboard
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <div className="glass-card overflow-hidden h-full">
              <div className="p-4 border-b border-border/50 flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                <h3 className="font-semibold">Earn Badges</h3>
              </div>
              <div className="p-4 space-y-4">
                {badges.map((badge, index) => (
                  <div
                    key={badge.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{badge.name}</div>
                      <div className="text-xs text-muted-foreground">{badge.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border/50">
                <Link to="/submit">
                  <Button variant="gradient" className="w-full gap-2">
                    Start Contributing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
