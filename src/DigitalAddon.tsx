import { StrictMode } from "react";
import GameCompanion from "./GameCompanion";
import { PlayerProvider } from "./providers/PlayerProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function DigitalAddon() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PlayerProvider>
          <GameCompanion />
        </PlayerProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
