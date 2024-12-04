import { cn } from "@/lib/utils";

export default function Card({ n }: { n: number }) {
  return (
    <div
      className={cn(
        "aspect-[3/4] rounded-lg p-4 flex items-center justify-center",
        "border transition-colors cursor-pointer group",
        "dark:bg-gradient-to-br dark:from-slate-700/50 dark:to-slate-800/50 dark:border-cyan-500/20 dark:hover:border-cyan-500/40"
      )}>
      <span className={"dark:text-cyan-400 dark:group-hover:text-cyan-300 text-cyan-600 group-hover:text-cyan-500"}>
        Card {n + 1}
      </span>
    </div>
  );
}
