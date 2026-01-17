import { Button } from "@/components/ui/button";
import { Calculator, Clock, FileText, Calendar, Timer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    name: "CGPA Calculator",
    description: "Calculate your cumulative GPA easily with our smart calculator.",
    icon: Calculator,
    color: "from-cyan-500 to-blue-500",
    available: true,
  },
  {
    name: "Attendance Tracker",
    description: "Track your attendance and know when you can safely skip class.",
    icon: Calendar,
    color: "from-purple-500 to-pink-500",
    available: true,
  },
  {
    name: "Pomodoro Timer",
    description: "Boost productivity with focused study sessions and breaks.",
    icon: Timer,
    color: "from-orange-500 to-red-500",
    available: true,
  },
  {
    name: "Study Planner",
    description: "Plan your study schedule and never miss a deadline.",
    icon: Clock,
    color: "from-emerald-500 to-teal-500",
    available: false,
  },
  {
    name: "Resume Builder",
    description: "Create a professional resume with our easy-to-use builder.",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
    available: false,
  },
];

export function ToolsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_60%_60%/0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Info */}
          <div className="lg:w-1/3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30 mb-4 inline-block">
              Student Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools Built for <span className="gradient-text">Students</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Essential utilities to help you stay organized, productive, and on top of your academic game.
            </p>
            <Link to="/tools">
              <Button variant="gradient" className="gap-2 group">
                Explore All Tools
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right side - Tool Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="glass-card-glow p-5 group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{tool.name}</h3>
                        {!tool.available && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
