import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Eye, Code, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  name: string;
  author: string;
  category: string;
  likes: number;
  preview: React.ReactNode;
  code: string;
}

function ComponentCard({ name, author, category, likes, preview, code }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card-glow group overflow-hidden">
      {/* Preview Area */}
      <div className={cn(
        "h-48 flex items-center justify-center p-6 transition-all duration-300",
        showCode ? "hidden" : "block"
      )}>
        {preview}
      </div>

      {/* Code Area */}
      <div className={cn(
        "h-48 overflow-auto transition-all duration-300",
        showCode ? "block" : "hidden"
      )}>
        <pre className="p-4 text-xs text-muted-foreground font-mono whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>

      {/* Info & Actions */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-sm">{name}</h3>
            <p className="text-xs text-muted-foreground">by {author}</p>
          </div>
          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            {category}
          </span>
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
            {likes + (liked ? 1 : 0)}
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

const sampleComponents: ComponentCardProps[] = [
  {
    name: "Gradient Button",
    author: "Alex Chen",
    category: "Button",
    likes: 234,
    preview: (
      <button className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-0.5">
        Click Me
      </button>
    ),
    code: `<button class="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-0.5">
  Click Me
</button>`,
  },
  {
    name: "Glass Card",
    author: "Maria Rodriguez",
    category: "Card",
    likes: 189,
    preview: (
      <div className="w-full max-w-xs p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 mb-3" />
        <h4 className="font-semibold text-sm mb-1">Glass Card</h4>
        <p className="text-xs text-gray-400">Beautiful glassmorphism effect with blur and border.</p>
      </div>
    ),
    code: `<div class="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
  <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 mb-3"></div>
  <h4 class="font-semibold text-sm mb-1">Glass Card</h4>
  <p class="text-xs text-gray-400">Beautiful glassmorphism effect.</p>
</div>`,
  },
  {
    name: "Neon Input",
    author: "James Wilson",
    category: "Form",
    likes: 156,
    preview: (
      <input
        type="text"
        placeholder="Type something..."
        className="w-full max-w-xs px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
      />
    ),
    code: `<input
  type="text"
  placeholder="Type something..."
  class="px-4 py-3 rounded-lg bg-transparent border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
/>`,
  },
  {
    name: "Animated Badge",
    author: "Sophie Taylor",
    category: "Badge",
    likes: 128,
    preview: (
      <div className="flex gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-pulse">
          New
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
          Popular
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          Verified
        </span>
      </div>
    ),
    code: `<span class="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-pulse">
  New
</span>
<span class="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
  Popular
</span>`,
  },
  {
    name: "Toggle Switch",
    author: "Ryan Park",
    category: "Form",
    likes: 145,
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500 transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-7 after:shadow-lg"></div>
      </label>
    ),
    code: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" checked />
  <div class="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500 transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-7 after:shadow-lg"></div>
</label>`,
  },
  {
    name: "Glow Card",
    author: "Emma Liu",
    category: "Card",
    likes: 201,
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
  <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
  <div class="relative p-5 bg-slate-900 rounded-xl">
    <h4 class="font-semibold">Glow Effect</h4>
    <p class="text-xs text-gray-400">Hover to see the magic!</p>
  </div>
</div>`,
  },
];

export function FeaturedComponents() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Components</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked UI components from our community. Copy the code and use it in your projects!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleComponents.map((component, index) => (
            <div 
              key={component.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ComponentCard {...component} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="gap-2">
            View All Components
            <span className="text-xs opacity-70">500+</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
