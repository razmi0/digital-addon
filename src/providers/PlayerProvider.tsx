import { PlayerContext } from "@/hooks/contexts/PlayerContext";
import React, { useState, useCallback } from "react";

export type Player = {
  id: string;
  name: string;
  score: number;
  infras: number;
  resources: number;
  actions: number;
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = useCallback((player: Omit<Player, "id">) => {
    setPlayers((prevPlayers) => [...prevPlayers, { ...player, id: Date.now().toString() }]);
  }, []);

  const updatePlayer = useCallback((id: string, updatedPlayer: Partial<Player>) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.id === id ? { ...player, ...updatedPlayer } : player))
    );
  }, []);

  const deletePlayer = useCallback((id: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  }, []);

  return (
    <PlayerContext.Provider value={{ players, addPlayer, updatePlayer, deletePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};