import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="absolute top-4 right-4">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className={cn(
          "rounded-full",
          theme === "dark"
            ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
            : "bg-white text-slate-800 hover:bg-slate-100"
        )}>
        {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
