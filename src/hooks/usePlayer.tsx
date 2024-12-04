import { useContext } from "react";
import { PlayerContext } from "./contexts/PlayerContext";

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
};
