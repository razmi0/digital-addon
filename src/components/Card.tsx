import { cn } from "@/lib/utils";
import { DatabaseIcon, ServerIcon, TrophyIcon } from "lucide-react";

type CardType = {
  content: {
    id: number;
    title: string;
    type: string;
    cost: {
      server: number;
      octet: number;
    };
    score: number;
  };
};
export default function Card({ content }: CardType) {
  const { cost, score, title, type } = content;

  const imgsrc = `/assets/${type.toLowerCase()}/${title.replace(/\s/g, "-").toLowerCase()}.png`;

  return (
    <div
      className={cn(
        "aspect-[3/4] rounded-lg pb-3 flex flex-col items-center justify-center",
        "border transition-colors cursor-pointer group",
        "dark:bg-gradient-to-br dark:from-slate-700/50 dark:to-slate-800/50 dark:border-cyan-500/20 dark:hover:border-cyan-500/40"
      )}>
      <figure className="w-full h-full flex items-center justify-center">
        <img src={imgsrc} alt={title} className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg opacity-95" />
      </figure>
      <div className="flex justify-around w-full mt-4">
        <div className="flex gap-2 items-center">
          <ServerIcon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
          <span className="mt-1 font-medium text-slate-700 dark:text-slate-300">{cost.server}</span>
        </div>
        <div className="flex gap-2 items-center">
          <DatabaseIcon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
          <span className="mt-1 font-medium text-slate-700 dark:text-slate-300">{cost.octet}</span>
        </div>
        <div className="flex gap-2 items-center">
          <TrophyIcon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
          <span className="mt-1 font-medium text-slate-700 dark:text-slate-300">{score}</span>
        </div>
      </div>
    </div>
  );
}
