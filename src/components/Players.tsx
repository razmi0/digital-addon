import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { usePlayer } from "../hooks/usePlayer";

export default function Players() {
  const { players, deletePlayer, addPlayer } = usePlayer();
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleCreatePlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim()) {
      addPlayer({ name: newPlayerName });
      setNewPlayerName("");
    }
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
        <Button type="submit">Add Player</Button>
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
              <TableCell>{player.score}</TableCell>
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
