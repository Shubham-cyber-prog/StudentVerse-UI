import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
};

export function SpinnerLoader({ className, size = "md" }: LoaderProps) {
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary loader-spin" />
    </div>
  );
}

export function PulseLoader({ className, size = "md" }: LoaderProps) {
  const dotSize = size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4";
  return (
    <div className={cn("flex gap-1.5", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            dotSize,
            "rounded-full bg-primary loader-bounce"
          )}
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  );
}

export function WaveLoader({ className, size = "md" }: LoaderProps) {
  const barHeight = size === "sm" ? "h-6" : size === "md" ? "h-10" : "h-16";
  const barWidth = size === "sm" ? "w-1" : size === "md" ? "w-1.5" : "w-2";
  return (
    <div className={cn("flex gap-1 items-center", barHeight, className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            barWidth,
            "h-full bg-primary rounded-full loader-wave origin-bottom"
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export function RingLoader({ className, size = "md" }: LoaderProps) {
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
      <div 
        className="absolute inset-0 rounded-full border-4 border-transparent loader-spin"
        style={{
          borderTopColor: "hsl(var(--primary))",
          borderRightColor: "hsl(var(--secondary))",
        }}
      />
    </div>
  );
}

export function DotsLoader({ className, size = "md" }: LoaderProps) {
  const dotSize = size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4";
  return (
    <div className={cn("flex gap-2", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            dotSize,
            "rounded-full bg-gradient-primary loader-pulse"
          )}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

export function OrbitLoader({ className, size = "md" }: LoaderProps) {
  const orbitSize = size === "sm" ? 24 : size === "md" ? 40 : 64;
  const dotSize = size === "sm" ? 6 : size === "md" ? 8 : 12;
  
  return (
    <div 
      className={cn("relative loader-spin", className)}
      style={{ width: orbitSize, height: orbitSize }}
    >
      <div 
        className="absolute rounded-full bg-primary"
        style={{ 
          width: dotSize, 
          height: dotSize,
          top: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
      <div 
        className="absolute rounded-full bg-secondary"
        style={{ 
          width: dotSize * 0.7, 
          height: dotSize * 0.7,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
    </div>
  );
}

export function GradientSpinner({ className, size = "md" }: LoaderProps) {
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div 
        className="absolute inset-0 rounded-full loader-spin"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
        }}
      />
    </div>
  );
}
