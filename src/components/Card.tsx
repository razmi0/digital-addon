import { usePlayer } from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";
import { Player } from "@/providers/PlayerProvider";
import { DatabaseIcon, ServerIcon, TrophyIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { ChoosePlayer } from "./ChoosePlayer";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type CardType = {
  content: {
    id: number;
    title: string;
    type: "action" | "infra" | "ressource";
    cost: {
      server: number;
      octet: number;
    };
    score: number;
  };
};
export default function Card({ content }: CardType) {
  const { cost, score, title, type } = content;
  const openCb = useState(false);
  const { updatePlayer } = usePlayer();

  const imgsrc = `/assets/${type.toLowerCase()}/${title.replace(/\s/g, "-").toLowerCase()}.png`;

  const update = useCallback(
    (player: Player) => {
      console.log("update", title, type, cost, score);
      updatePlayer(player.id, {
        score: player.score + score,
        resources: player.resources + cost.server + cost.octet,
        actions: type === "action" ? player.actions + 1 : player.actions,
        infras: type === "infra" ? player.infras + 1 : player.infras,
      });
      toast.success(`Card ${title} has been succesfully added to ${player.name}`);
    },
    [cost, score, title, type, updatePlayer]
  );

  return (
    <div
      className={cn(
        "aspect-[3/4] rounded-lg pb-3 flex flex-col items-center justify-center",
        "border transition-all cursor-pointer group hover:scale-95",
        "dark:bg-gradient-to-br dark:from-slate-700/50 dark:to-slate-800/50 dark:border-cyan-500/20 dark:hover:border-cyan-500/40"
      )}>
      {/* <button onMouseDown={togglePopover}> */}
      <figure className="w-full h-full flex items-center justify-center relative">
        <Popover>
          <PopoverTrigger asChild>
            <img
              src={imgsrc}
              alt={title}
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg opacity-95"
            />
          </PopoverTrigger>
          <PopoverContent
            className="w-80 text-center bg-background text-foreground bg-gradient-to-b from-slate-100 to-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border-cyan-500/20 dark:border-cyan-500/40"
            onInteractOutside={() => openCb[1](false)}>
            <ChoosePlayer content={content} update={update} />
          </PopoverContent>
        </Popover>
      </figure>
      {/* </button> */}
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
