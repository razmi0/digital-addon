import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="relative h-48 md:h-64 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center opacity-30",
          'bg-[url("/placeholder.svg?height=400&width=800&text=Light%20Mode")] dark:bg-[url("/placeholder.svg?height=400&width=800")]'
        )}
      />
      <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/40" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            theme === "dark"
              ? "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative flex flex-wrap items-center justify-center h-full">
        <img src="/assets/logo.png" alt="My DigiTown logo" className="h-64 md:h-72" />
        <h1 className="text-4xl md:text-5xl font-bold text-center px-4 text-slate-800 dark:drop-shadow-glow dark:text-white">
          My DigiTown
          <span className="block text-lg md:text-xl mt-2 font-normal text-cyan-600 dark:text-cyan-400">
            Digital Game Companion
          </span>
        </h1>
        <audio src="/assets/audio/ambient.mp3" controls autoPlay loop />
      </div>
    </div>
  );
}
