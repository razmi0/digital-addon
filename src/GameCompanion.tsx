"use client";

import { cn } from "@/lib/utils";
import { Book, Calculator, WalletCardsIcon as Cards, Moon, Scroll, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "./components/theme-provider";

export default function GameCompanion() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground",
        theme === "dark" ? "bg-gradient-to-b from-slate-900 to-slate-950" : "bg-gradient-to-b from-slate-100 to-white"
      )}>
      {/* Medieval Castle Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center opacity-30",
            theme === "dark"
              ? 'bg-[url("/placeholder.svg?height=400&width=800")]'
              : 'bg-[url("/placeholder.svg?height=400&width=800&text=Light%20Mode")]'
          )}
        />
        <div className={cn("absolute inset-0", theme === "dark" ? "bg-cyan-500/40" : "bg-cyan-500/5")} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              theme === "dark"
                ? "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
                : "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891b2' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative flex items-center justify-center h-full">
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold text-center px-4",
              theme === "dark" ? "drop-shadow-glow text-white" : "text-slate-800"
            )}>
            Internet Realm
            <span
              className={cn(
                "block text-lg md:text-xl mt-2 font-normal",
                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
              )}>
              Digital Game Companion
            </span>
          </h1>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className={cn(
            "rounded-full",
            theme === "dark"
              ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
              : "bg-white text-slate-800 hover:bg-slate-100"
          )}>
          {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4 relative">
        <Tabs defaultValue="rules" className="space-y-6">
          <TabsList
            className={cn(
              "grid grid-cols-4 w-full max-w-2xl mx-auto",
              theme === "dark" ? "bg-slate-800/50 border border-cyan-500/20" : "bg-white/50 border border-cyan-500/40"
            )}>
            <TabsTrigger
              value="rules"
              className={cn(
                "data-[state=active]:text-primary-foreground",
                theme === "dark" ? "data-[state=active]:bg-cyan-500/20" : "data-[state=active]:bg-cyan-500/40"
              )}>
              <Book className="h-4 w-4 mr-2" />
              Rules
            </TabsTrigger>
            <TabsTrigger
              value="cards"
              className={cn(
                "data-[state=active]:text-primary-foreground",
                theme === "dark" ? "data-[state=active]:bg-cyan-500/20" : "data-[state=active]:bg-cyan-500/40"
              )}>
              <Cards className="h-4 w-4 mr-2" />
              Cards
            </TabsTrigger>
            <TabsTrigger
              value="score"
              className={cn(
                "data-[state=active]:text-primary-foreground",
                theme === "dark" ? "data-[state=active]:bg-cyan-500/20" : "data-[state=active]:bg-cyan-500/40"
              )}>
              <Calculator className="h-4 w-4 mr-2" />
              Score
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              className={cn(
                "data-[state=active]:text-primary-foreground",
                theme === "dark" ? "data-[state=active]:bg-cyan-500/20" : "data-[state=active]:bg-cyan-500/40"
              )}>
              <Scroll className="h-4 w-4 mr-2" />
              Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="space-y-4">
            <Card
              className={cn(
                theme === "dark" ? "bg-slate-800/50 border-cyan-500/20" : "bg-white/50 border-cyan-500/10"
              )}>
              <CardContent className="space-y-4 p-6">
                <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
                  Game Rules
                </h2>
                <div className="space-y-4 prose prose-invert max-w-none">
                  <p>Welcome to Internet Realm, where medieval meets digital!</p>
                  <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
                    Setup
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Place the castle board in the center</li>
                    <li>Shuffle the protocol cards</li>
                    <li>Each player receives 5 connection tokens</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards" className="space-y-4">
            <Card
              className={cn(
                theme === "dark" ? "bg-slate-800/50 border-cyan-500/20" : "bg-white/50 border-cyan-500/10"
              )}>
              <CardContent className="p-6">
                <h2 className={cn("text-2xl font-semibold mb-4", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
                  Card Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "aspect-[3/4] rounded-lg p-4 flex items-center justify-center",
                        "border transition-colors cursor-pointer group",
                        theme === "dark"
                          ? "bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-cyan-500/20 hover:border-cyan-500/40"
                          : "bg-gradient-to-br from-slate-100 to-white border-cyan-500/10 hover:border-cyan-500/30"
                      )}>
                      <span
                        className={cn(
                          theme === "dark"
                            ? "text-cyan-400 group-hover:text-cyan-300"
                            : "text-cyan-600 group-hover:text-cyan-500"
                        )}>
                        Card {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="score" className="space-y-4">
            <Card
              className={cn(
                theme === "dark" ? "bg-slate-800/50 border-cyan-500/20" : "bg-white/50 border-cyan-500/10"
              )}>
              <CardContent className="p-6">
                <h2 className={cn("text-2xl font-semibold mb-4", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
                  Score Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className={cn("text-sm", theme === "dark" ? "text-slate-300" : "text-slate-600")}>
                        Connection Points
                      </label>
                      <input
                        type="number"
                        className={cn(
                          "w-full rounded-md p-2",
                          theme === "dark"
                            ? "bg-slate-700/50 border border-cyan-500/20"
                            : "bg-white border border-cyan-500/10"
                        )}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={cn("text-sm", theme === "dark" ? "text-slate-300" : "text-slate-600")}>
                        Protocol Bonus
                      </label>
                      <input
                        type="number"
                        className={cn(
                          "w-full rounded-md p-2",
                          theme === "dark"
                            ? "bg-slate-700/50 border border-cyan-500/20"
                            : "bg-white border border-cyan-500/10"
                        )}
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <Button
                    className={cn(
                      "w-full",
                      theme === "dark"
                        ? "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400"
                        : "bg-cyan-500/40 hover:bg-cyan-500/20 text-cyan-600"
                    )}>
                    Calculate Total
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <Card
              className={cn(
                theme === "dark" ? "bg-slate-800/50 border-cyan-500/20" : "bg-white/50 border-cyan-500/10"
              )}>
              <CardContent className="p-6">
                <h2 className={cn("text-2xl font-semibold mb-4", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
                  Game Progress
                </h2>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full w-1/3 rounded-full",
                        theme === "dark" ? "bg-cyan-500/50" : "bg-cyan-500/30"
                      )}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Round 1</span>
                    <span>Round 2</span>
                    <span>Final Round</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
