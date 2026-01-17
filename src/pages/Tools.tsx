import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Clock, Calendar, Timer, FileText, Plus, Minus, Play, Pause, RotateCcw } from "lucide-react";

// CGPA Calculator Component
function CGPACalculator() {
  const [courses, setCourses] = useState([
    { name: "", credits: "", grade: "" },
    { name: "", credits: "", grade: "" },
    { name: "", credits: "", grade: "" },
  ]);
  const [cgpa, setCgpa] = useState<number | null>(null);

  const gradePoints: { [key: string]: number } = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "D-": 0.7,
    "F": 0.0,
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", credits: "", grade: "" }]);
  };

  const removeCourse = (index: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const updateCourse = (index: number, field: string, value: string) => {
    const updated = [...courses];
    updated[index] = { ...updated[index], [field]: value };
    setCourses(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const gradePoint = gradePoints[course.grade.toUpperCase()];
      if (!isNaN(credits) && gradePoint !== undefined) {
        totalPoints += credits * gradePoint;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      setCgpa(Math.round((totalPoints / totalCredits) * 100) / 100);
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">CGPA Calculator</h3>
          <p className="text-sm text-muted-foreground">Calculate your cumulative GPA</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {courses.map((course, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="Course name"
              value={course.name}
              onChange={(e) => updateCourse(index, "name", e.target.value)}
              className="flex-1"
            />
            <Input
              placeholder="Credits"
              type="number"
              value={course.credits}
              onChange={(e) => updateCourse(index, "credits", e.target.value)}
              className="w-20"
            />
            <Input
              placeholder="Grade"
              value={course.grade}
              onChange={(e) => updateCourse(index, "grade", e.target.value)}
              className="w-20"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeCourse(index)}
              disabled={courses.length === 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-6">
        <Button variant="glass" size="sm" onClick={addCourse} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Course
        </Button>
        <Button variant="gradient" size="sm" onClick={calculateCGPA}>
          Calculate CGPA
        </Button>
      </div>

      {cgpa !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
          <p className="text-sm text-muted-foreground mb-1">Your CGPA</p>
          <p className="text-4xl font-bold gradient-text">{cgpa.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

// Attendance Tracker Component
function AttendanceTracker() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [requiredPercentage, setRequiredPercentage] = useState("75");

  const attendance = totalClasses && attendedClasses
    ? (parseInt(attendedClasses) / parseInt(totalClasses)) * 100
    : 0;

  const classesToAttend = () => {
    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);
    const required = parseInt(requiredPercentage);
    if (isNaN(total) || isNaN(attended) || isNaN(required)) return null;

    if (attendance >= required) {
      // How many can skip
      const canSkip = Math.floor((attended * 100 - required * total) / required);
      return { type: "skip", count: canSkip };
    } else {
      // How many need to attend
      const needToAttend = Math.ceil((required * total - attended * 100) / (100 - required));
      return { type: "attend", count: needToAttend };
    }
  };

  const result = classesToAttend();

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Attendance Tracker</h3>
          <p className="text-sm text-muted-foreground">Know when you can skip</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Total Classes</label>
          <Input
            type="number"
            placeholder="Enter total classes"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Classes Attended</label>
          <Input
            type="number"
            placeholder="Enter attended classes"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Required Percentage</label>
          <Input
            type="number"
            placeholder="75"
            value={requiredPercentage}
            onChange={(e) => setRequiredPercentage(e.target.value)}
          />
        </div>
      </div>

      {totalClasses && attendedClasses && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50 text-center">
            <p className="text-sm text-muted-foreground mb-1">Current Attendance</p>
            <p className={`text-4xl font-bold ${attendance >= parseInt(requiredPercentage) ? "text-success" : "text-destructive"}`}>
              {attendance.toFixed(1)}%
            </p>
          </div>

          {result && (
            <div className={`p-4 rounded-lg text-center ${result.type === "skip" ? "bg-success/10 border border-success/20" : "bg-warning/10 border border-warning/20"}`}>
              {result.type === "skip" ? (
                <p className="text-success">🎉 You can skip <strong>{result.count}</strong> more classes!</p>
              ) : (
                <p className="text-warning">⚠️ You need to attend <strong>{result.count}</strong> more classes!</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Pomodoro Timer Component
function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useState(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      if (mode === "work") {
        setMode("break");
        setTime(5 * 60);
      } else {
        setMode("work");
        setTime(25 * 60);
      }
    }
    return () => clearInterval(interval);
  });

  const reset = () => {
    setIsRunning(false);
    setMode("work");
    setTime(25 * 60);
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
          <Timer className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Pomodoro Timer</h3>
          <p className="text-sm text-muted-foreground">Stay focused and productive</p>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${mode === "work" ? "bg-primary/20 text-primary" : "bg-success/20 text-success"}`}>
          {mode === "work" ? "Work Time" : "Break Time"}
        </div>
        <div className="text-6xl font-bold font-mono gradient-text mb-6">
          {formatTime(time)}
        </div>
        <div className="flex justify-center gap-3">
          <Button
            variant={isRunning ? "glass" : "gradient"}
            size="lg"
            onClick={() => setIsRunning(!isRunning)}
            className="gap-2"
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button variant="ghost" size="lg" onClick={reset} className="gap-2">
            <RotateCcw className="w-5 h-5" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Student <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential utilities to help you stay organized and productive throughout your academic journey.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <CGPACalculator />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <AttendanceTracker />
            </div>
            <div className="animate-fade-in-up lg:col-span-2 max-w-md mx-auto w-full" style={{ animationDelay: "0.2s" }}>
              <PomodoroTimer />
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-4 flex items-center gap-3 opacity-60">
                <Clock className="w-5 h-5" />
                Study Planner
              </div>
              <div className="glass-card px-6 py-4 flex items-center gap-3 opacity-60">
                <FileText className="w-5 h-5" />
                Resume Builder
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
