import { StrictMode } from "react";
import { ThemeProvider } from "./components/theme-provider";
import GameCompanion from "./GameCompanion";

export default function DigitalAddon() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <GameCompanion />
      </ThemeProvider>
    </StrictMode>
  );
}
