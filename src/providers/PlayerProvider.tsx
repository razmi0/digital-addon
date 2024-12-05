import { PlayerContext } from "@/hooks/contexts/PlayerContext";
import useStorage from "@/hooks/useStorage";
import React, { useCallback, useState } from "react";

export type Player = {
  id: string;
  name: string;
  score: number;
  infras: number;
  resources: number;
  actions: number;
  isActive: boolean;
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { load, save } = useStorage();
  const [players, setPlayers] = useState<Player[]>(load() || []);

  const resetActive = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.isActive ? { ...player, isActive: false } : player))
    );
  };

  const addPlayer = useCallback((player: Pick<Player, "name">) => {
    resetActive();
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: Date.now().toString(),
        ...player,
        score: 0,
        infras: 0,
        resources: 0,
        actions: 0,
        isActive: true,
      },
    ]);
  }, []);

  const updatePlayer = useCallback((id: string, updatedPlayer: Partial<Player>) => {
    console.log("updatePlayer", id, updatedPlayer);
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.id === id ? { ...player, ...updatedPlayer } : player))
    );
  }, []);

  const deletePlayer = useCallback((id: string) => {
    resetActive();
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  }, []);

  save(players);

  return (
    <PlayerContext.Provider value={{ players, addPlayer, updatePlayer, deletePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
