import { StrictMode } from "react";
import GameCompanion from "./GameCompanion";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function DigitalAddon() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <GameCompanion />
      </ThemeProvider>
    </StrictMode>
  );
}
