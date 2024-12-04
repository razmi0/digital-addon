import { Player } from "@/providers/PlayerProvider";
import { createContext } from "react";

type PlayerContextType = {
  players: Player[];
  addPlayer: (player: Pick<Player, "name">) => void;
  updatePlayer: (id: string, player: Partial<Player>) => void;
  deletePlayer: (id: string) => void;
};

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);
