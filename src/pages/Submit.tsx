import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Code, Eye, Github, CheckCircle, Sparkles } from "lucide-react";

const categories = ["Buttons", "Cards", "Forms", "Loaders", "Navigation", "Modals", "Badges", "Other"];
const techStacks = ["HTML/CSS", "Tailwind CSS", "JavaScript", "React", "Bootstrap"];
const difficulties = ["Beginner", "Intermediate", "Advanced"];

export default function Submit() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    techStack: "",
    difficulty: "",
    code: "",
    contributor: "",
    github: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center glass-card p-12">
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Submission Received! 🎉</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for contributing to StudentVerse! Your component is under review and will be published soon.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="gradient" onClick={() => setSubmitted(false)}>
                  Submit Another
                </Button>
                <Button variant="glass" onClick={() => window.location.href = "/components"}>
                  Browse Components
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Earn points & badges!</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Submit Your <span className="gradient-text">Component</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your UI component with the community. Every contribution helps students learn and build faster.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="glass-card p-8 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Component Name *</label>
                  <Input
                    placeholder="e.g., Gradient Button"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category *</label>
                  <select
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description *</label>
                <Textarea
                  placeholder="Describe your component and how it can be used..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Tech Stack *</label>
                  <select
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                    required
                  >
                    <option value="">Select tech stack</option>
                    {techStacks.map((tech) => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Difficulty *</label>
                  <select
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    required
                  >
                    <option value="">Select difficulty</option>
                    {difficulties.map((diff) => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Code Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Code Snippet *</label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPreview(!showPreview)}
                    className="gap-2"
                  >
                    {showPreview ? <Code className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showPreview ? "Edit Code" : "Preview"}
                  </Button>
                </div>
                {!showPreview ? (
                  <Textarea
                    placeholder="Paste your HTML/CSS/JS code here..."
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    rows={10}
                    className="font-mono text-sm"
                    required
                  />
                ) : (
                  <div className="min-h-[240px] rounded-lg bg-muted/50 border border-border p-6 flex items-center justify-center">
                    {formData.code ? (
                      <div dangerouslySetInnerHTML={{ __html: formData.code }} />
                    ) : (
                      <p className="text-muted-foreground">Enter code to see preview</p>
                    )}
                  </div>
                )}
              </div>

              {/* Contributor Info */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">Contributor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.contributor}
                      onChange={(e) => setFormData({ ...formData, contributor: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">GitHub Username</label>
                    <div className="relative">
                      <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="johndoe"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-4 pt-6">
                <Button type="button" variant="ghost">
                  Save Draft
                </Button>
                <Button type="submit" variant="gradient" size="lg" className="gap-2">
                  <Upload className="w-5 h-5" />
                  Submit Component
                </Button>
              </div>
            </div>
          </form>

          {/* Guidelines */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="font-semibold mb-4">Submission Guidelines</h3>
            <div className="glass-card p-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Component must be original or properly attributed if modified from existing work.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Code should be clean, well-formatted, and follow best practices.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Component should be responsive and work across different screen sizes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Add meaningful descriptions and proper categorization for better discoverability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  All submissions are reviewed before being published.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
