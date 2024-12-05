import { usePlayer } from "@/hooks/usePlayer";
import { Player } from "@/providers/PlayerProvider";
import { ClubIcon, DiamondIcon, HammerIcon, TrophyIcon } from "lucide-react";
import { CardType } from "./Card";
import { Button } from "./ui/button";

export function ChoosePlayer({ content, update }: CardType & { update: (player: Player) => void }) {
  const { players } = usePlayer();

  const { cost, score, title, type } = content;

  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">
          Add
          <span className="font-bold"> {title} </span>
          to a player
        </h4>
        <ul className="[&_small]:inline-flex justify-between [&_small]:items-center flex w-full">
          <li>
            <small>
              <TrophyIcon className="h-4" /> : {score}
            </small>
          </li>
          <li>
            <small>
              <HammerIcon className="h-4" />
              Resources: {cost.server + cost.octet}
            </small>
          </li>
          {type === "action" && (
            <li>
              <small>
                <ClubIcon className="h-4" />
                Actions: +1
              </small>
            </li>
          )}
          {type === "infra" && (
            <li>
              <small>
                <DiamondIcon className="h-4" />
                Infras: +1
              </small>
            </li>
          )}
        </ul>
      </div>
      <div className="inline-flex gap-2 flex-wrap">
        {players.map((player) => (
          <Button
            key={player.id}
            onClick={() => update(player)}
            className="w-fit bg-cyan-500/40 hover:bg-cyan-500/20 text-cyan-600 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:text-cyan-400">
            {player.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
