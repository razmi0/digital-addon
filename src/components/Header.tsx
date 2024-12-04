import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="relative h-48 md:h-64 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center opacity-30",
          theme === "dark"
            ? 'bg-[url("/placeholder.svg?height=400&width=800")]'
            : 'bg-[url("/placeholder.svg?height=400&width=800&text=Light%20Mode")]'
        )}
      />
      <div className={cn("absolute inset-0", theme === "dark" ? "bg-cyan-500/40" : "bg-cyan-500/5")} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            theme === "dark"
              ? "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative flex items-center justify-center h-full">
        <h1
          className={cn(
            "text-4xl md:text-5xl font-bold text-center px-4",
            theme === "dark" ? "drop-shadow-glow text-white" : "text-slate-800"
          )}>
          My DigiTown
          <span
            className={cn(
              "block text-lg md:text-xl mt-2 font-normal",
              theme === "dark" ? "text-cyan-400" : "text-cyan-600"
            )}>
            Digital Game Companion
          </span>
        </h1>
      </div>
    </div>
  );
}
