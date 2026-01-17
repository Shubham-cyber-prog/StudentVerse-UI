import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Flame, Github, Medal, TrendingUp, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const contributors = [
  {
    rank: 1,
    name: "Alex Chen",
    username: "alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    points: 2450,
    contributions: 45,
    badges: ["🏆", "🔧", "🦸"],
    streak: 12,
  },
  {
    rank: 2,
    name: "Maria Rodriguez",
    username: "mariarodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    points: 2180,
    contributions: 38,
    badges: ["⭐", "🔧"],
    streak: 8,
  },
  {
    rank: 3,
    name: "James Wilson",
    username: "jameswilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    points: 1920,
    contributions: 32,
    badges: ["⭐", "🎉"],
    streak: 15,
  },
  {
    rank: 4,
    name: "Sophie Taylor",
    username: "sophietaylor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie",
    points: 1680,
    contributions: 28,
    badges: ["⭐"],
    streak: 5,
  },
  {
    rank: 5,
    name: "Ryan Park",
    username: "ryanpark",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan",
    points: 1520,
    contributions: 25,
    badges: ["⭐"],
    streak: 7,
  },
  {
    rank: 6,
    name: "Emma Liu",
    username: "emmaliu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    points: 1340,
    contributions: 22,
    badges: ["🎉"],
    streak: 3,
  },
  {
    rank: 7,
    name: "David Kim",
    username: "davidkim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    points: 1180,
    contributions: 19,
    badges: ["🎉"],
    streak: 6,
  },
  {
    rank: 8,
    name: "Lisa Chen",
    username: "lisachen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    points: 980,
    contributions: 16,
    badges: ["🎉"],
    streak: 4,
  },
  {
    rank: 9,
    name: "Michael Brown",
    username: "michaelbrown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    points: 820,
    contributions: 14,
    badges: ["🎉"],
    streak: 2,
  },
  {
    rank: 10,
    name: "Sarah Johnson",
    username: "sarahjohnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    points: 720,
    contributions: 12,
    badges: ["🎉"],
    streak: 9,
  },
];

const badges = [
  { name: "First Contribution", icon: "🎉", description: "Made your first contribution", points: 50 },
  { name: "Rising Star", icon: "⭐", description: "10+ contributions", points: 200 },
  { name: "Component Master", icon: "🔧", description: "25+ components shared", points: 500 },
  { name: "Community Hero", icon: "🦸", description: "Helped 50+ students", points: 750 },
  { name: "Open Source Champion", icon: "🏆", description: "Top 3 contributor", points: 1000 },
];

function getRankBadge(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return rank.toString();
}

function getRankColor(rank: number) {
  if (rank === 1) return "from-yellow-400 to-orange-500";
  if (rank === 2) return "from-gray-300 to-gray-400";
  if (rank === 3) return "from-amber-600 to-amber-700";
  return "";
}

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-sm text-warning font-medium">January 2024 Rankings</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Community <span className="gradient-text">Leaderboard</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating our top contributors who make StudentVerse awesome!
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-4 mb-12">
            {/* 2nd Place */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <img
                src={contributors[1].avatar}
                alt={contributors[1].name}
                className="w-20 h-20 rounded-full mx-auto mb-2 ring-4 ring-gray-400/30"
              />
              <p className="font-semibold text-sm">{contributors[1].name}</p>
              <div className="w-24 h-24 bg-gradient-to-t from-gray-500/20 to-gray-400/30 rounded-t-lg mt-2 flex items-center justify-center">
                <span className="text-3xl">🥈</span>
              </div>
            </div>

            {/* 1st Place */}
            <div className="text-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="text-2xl">👑</span>
                </div>
                <img
                  src={contributors[0].avatar}
                  alt={contributors[0].name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 ring-4 ring-yellow-400/50 animate-pulse-glow"
                />
              </div>
              <p className="font-bold">{contributors[0].name}</p>
              <div className="w-28 h-32 bg-gradient-to-t from-yellow-500/20 to-yellow-400/30 rounded-t-lg mt-2 flex items-center justify-center">
                <span className="text-4xl">🥇</span>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={contributors[2].avatar}
                alt={contributors[2].name}
                className="w-20 h-20 rounded-full mx-auto mb-2 ring-4 ring-amber-600/30"
              />
              <p className="font-semibold text-sm">{contributors[2].name}</p>
              <div className="w-24 h-20 bg-gradient-to-t from-amber-700/20 to-amber-600/30 rounded-t-lg mt-2 flex items-center justify-center">
                <span className="text-3xl">🥉</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Full Leaderboard */}
            <div className="lg:col-span-2">
              <div className="glass-card overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-warning" />
                    <h3 className="font-semibold">Full Rankings</h3>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">This Month</Button>
                    <Button variant="ghost" size="sm">All Time</Button>
                  </div>
                </div>
                <div className="divide-y divide-border/50">
                  {contributors.map((contributor, index) => (
                    <div
                      key={contributor.username}
                      className={cn(
                        "p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors animate-fade-in",
                        contributor.rank <= 3 && "bg-gradient-to-r from-muted/50 to-transparent"
                      )}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg",
                        contributor.rank <= 3 ? `bg-gradient-to-br ${getRankColor(contributor.rank)} text-white` : "bg-muted"
                      )}>
                        {getRankBadge(contributor.rank)}
                      </div>
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-12 h-12 rounded-full bg-muted"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{contributor.name}</span>
                          <div className="flex gap-0.5">
                            {contributor.badges.map((badge, i) => (
                              <span key={i} className="text-sm">{badge}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            @{contributor.username}
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-500" />
                            {contributor.streak} day streak
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary text-lg">{contributor.points.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{contributor.contributions} contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Badges Info */}
              <div className="glass-card overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center gap-2">
                  <Medal className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Available Badges</h3>
                </div>
                <div className="p-4 space-y-3">
                  {badges.map((badge) => (
                    <div
                      key={badge.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-2xl">{badge.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{badge.name}</div>
                        <div className="text-xs text-muted-foreground">{badge.description}</div>
                      </div>
                      <span className="text-xs font-medium text-primary">+{badge.points} pts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Points Work */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  How to Earn Points
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Submit a component</span>
                    <span className="text-primary font-medium">+50 pts</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Component gets featured</span>
                    <span className="text-primary font-medium">+100 pts</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Each like received</span>
                    <span className="text-primary font-medium">+5 pts</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Daily login streak</span>
                    <span className="text-primary font-medium">+10 pts</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Help in discussions</span>
                    <span className="text-primary font-medium">+25 pts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
