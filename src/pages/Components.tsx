import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Check, Copy, Eye, Code, Heart, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Buttons", "Cards", "Forms", "Loaders", "Navigation", "Modals", "Badges"];
const techStacks = ["All", "HTML/CSS", "Tailwind", "JavaScript", "React"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const allComponents = [
  {
    id: 1,
    name: "Gradient Button",
    author: "Alex Chen",
    category: "Buttons",
    techStack: "Tailwind",
    difficulty: "Beginner",
    likes: 234,
    preview: (
      <button className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-0.5">
        Click Me
      </button>
    ),
    code: `<button class="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500">
  Click Me
</button>`,
  },
  {
    id: 2,
    name: "Glass Card",
    author: "Maria Rodriguez",
    category: "Cards",
    techStack: "Tailwind",
    difficulty: "Beginner",
    likes: 189,
    preview: (
      <div className="w-full max-w-xs p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 mb-3" />
        <h4 className="font-semibold text-sm mb-1">Glass Card</h4>
        <p className="text-xs text-gray-400">Beautiful glassmorphism effect.</p>
      </div>
    ),
    code: `<div class="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
  <h4>Glass Card</h4>
  <p>Beautiful glassmorphism effect.</p>
</div>`,
  },
  {
    id: 3,
    name: "Spinner Loader",
    author: "James Wilson",
    category: "Loaders",
    techStack: "HTML/CSS",
    difficulty: "Beginner",
    likes: 156,
    preview: (
      <div className="w-10 h-10 relative">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 animate-spin" />
      </div>
    ),
    code: `.spinner {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(6, 182, 212, 0.2);
  border-top-color: rgb(6, 182, 212);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`,
  },
  {
    id: 4,
    name: "Neon Input",
    author: "Sophie Taylor",
    category: "Forms",
    techStack: "Tailwind",
    difficulty: "Beginner",
    likes: 128,
    preview: (
      <input
        type="text"
        placeholder="Type something..."
        className="w-full max-w-xs px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
      />
    ),
    code: `<input type="text" class="px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 focus:border-cyan-500" />`,
  },
  {
    id: 5,
    name: "Animated Badge",
    author: "Ryan Park",
    category: "Badges",
    techStack: "Tailwind",
    difficulty: "Beginner",
    likes: 145,
    preview: (
      <div className="flex gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-pulse">
          New
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
          Popular
        </span>
      </div>
    ),
    code: `<span class="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 animate-pulse">New</span>`,
  },
  {
    id: 6,
    name: "Wave Loader",
    author: "Emma Liu",
    category: "Loaders",
    techStack: "HTML/CSS",
    difficulty: "Intermediate",
    likes: 201,
    preview: (
      <div className="flex gap-1 items-center h-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1.5 h-full bg-cyan-500 rounded-full loader-wave origin-bottom"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    ),
    code: `.wave-loader {
  display: flex;
  gap: 4px;
}
.bar {
  width: 6px;
  background: #06b6d4;
  animation: wave 1.2s ease-in-out infinite;
}`,
  },
  {
    id: 7,
    name: "Glow Card",
    author: "David Kim",
    category: "Cards",
    techStack: "Tailwind",
    difficulty: "Intermediate",
    likes: 178,
    preview: (
      <div className="relative group w-full max-w-xs">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative p-5 bg-slate-900 rounded-xl">
          <h4 className="font-semibold text-sm mb-1">Glow Effect</h4>
          <p className="text-xs text-gray-400">Hover to see the magic!</p>
        </div>
      </div>
    ),
    code: `<div class="relative group">
  <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60"></div>
  <div class="relative p-5 bg-slate-900 rounded-xl">Content</div>
</div>`,
  },
  {
    id: 8,
    name: "Toggle Switch",
    author: "Lisa Chen",
    category: "Forms",
    techStack: "Tailwind",
    difficulty: "Intermediate",
    likes: 165,
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500 transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-7 after:shadow-lg"></div>
      </label>
    ),
    code: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-cyan-500"></div>
</label>`,
  },
];

function ComponentCard({ component }: { component: typeof allComponents[0] }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card-glow group overflow-hidden">
      <div className={cn(
        "h-48 flex items-center justify-center p-6 transition-all duration-300",
        showCode ? "hidden" : "block"
      )}>
        {component.preview}
      </div>

      <div className={cn(
        "h-48 overflow-auto transition-all duration-300",
        showCode ? "block" : "hidden"
      )}>
        <pre className="p-4 text-xs text-muted-foreground font-mono whitespace-pre-wrap break-words">
          <code>{component.code}</code>
        </pre>
      </div>

      <div className="p-4 border-t border-border/50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-sm">{component.name}</h3>
            <p className="text-xs text-muted-foreground">by {component.author}</p>
          </div>
          <div className="flex gap-1">
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary">
              {component.category}
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-secondary/10 text-secondary">
              {component.difficulty}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setLiked(!liked)}
            className={cn(
              "flex items-center gap-1.5 text-sm transition-colors",
              liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
            )}
          >
            <Heart className={cn("w-4 h-4", liked && "fill-current")} />
            {component.likes + (liked ? 1 : 0)}
          </button>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="gap-1.5"
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
              {showCode ? "Preview" : "Code"}
            </Button>
            <Button
              variant="glass"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Components() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredComponents = allComponents.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(search.toLowerCase()) ||
      component.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    const matchesTech = selectedTech === "All" || component.techStack === selectedTech;
    const matchesDifficulty = selectedDifficulty === "All" || component.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesTech && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              UI <span className="gradient-text">Components</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse, preview, and copy beautiful UI components. Built by students, for students.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search components..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="glass"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="glass-card p-4 space-y-4 animate-fade-in">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Tech Stack</label>
                  <div className="flex flex-wrap gap-2">
                    {techStacks.map((tech) => (
                      <Button
                        key={tech}
                        variant={selectedTech === tech ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setSelectedTech(tech)}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Difficulty</label>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((diff) => (
                      <Button
                        key={diff}
                        variant={selectedDifficulty === diff ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setSelectedDifficulty(diff)}
                      >
                        {diff}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
          </p>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredComponents.map((component, index) => (
              <div
                key={component.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ComponentCard component={component} />
              </div>
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No components found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
