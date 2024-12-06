import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Player } from "@/providers/PlayerProvider";
import { useState } from "react";
import { usePlayer } from "../hooks/usePlayer";

export default function Players() {
  const { players, deletePlayer, addPlayer, updatePlayer } = usePlayer();
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleCreatePlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim()) {
      addPlayer({ name: newPlayerName });
      setNewPlayerName("");
    }
  };

  const incrementScore = (player: Player) => {
    updatePlayer(player.id, { score: player.score + 1 });
  };

  const decrementScore = (player: Player) => {
    updatePlayer(player.id, { score: player.score - 1 });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-cyan-400 dark:text-cyan-300">Players ({players.length})</h2>

      <form onSubmit={handleCreatePlayer} className="flex gap-2">
        <Input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player name"
          className="flex-grow"
        />
        <Button
          type="submit"
          variant="outline"
          className="bg-white focus-visible:ring-2 focus-visible:ring-cyan-950 dark:border-cyan-800 dark:bg-slate-900/80 dark:ring-offset-cyan-950 dark:focus-visible:ring-cyan-300">
          Add Player
        </Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Infras</TableHead>
            <TableHead>Resources</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.name}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button
                  className="bg-white text-black focus-visible:ring-2 focus-visible:ring-cyan-950 dark:border-cyan-800 dark:bg-slate-900/80 dark:ring-offset-cyan-950 dark:focus-visible:ring-cyan-300 dark:text-white"
                  size="sm"
                  onClick={() => decrementScore(player)}>
                  -
                </Button>
                {player.score}
                <Button
                  className="bg-white text-black focus-visible:ring-2 focus-visible:ring-cyan-950 dark:border-cyan-800 dark:bg-slate-900/80 dark:ring-offset-cyan-950 dark:focus-visible:ring-cyan-300 dark:text-white"
                  size="sm"
                  onClick={() => incrementScore(player)}>
                  +
                </Button>
              </TableCell>
              <TableCell>{player.infras}</TableCell>
              <TableCell>{player.resources}</TableCell>
              <TableCell>{player.actions}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm" onClick={() => deletePlayer(player.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
