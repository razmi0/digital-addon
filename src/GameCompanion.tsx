import { Card as Article, CardContent as ArticleContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { BookIcon, WalletCardsIcon } from "lucide-react";
import Card, { CardType } from "./components/Card";
import Header from "./components/Header";
import Players from "./components/Players";
import Rules from "./components/Rules";
import ThemeButton from "./components/ThemeButton";
import { Toaster } from "./components/ui/sonner";
import { cards } from "./data.json" assert { type: "json" };

export default function GameCompanion() {
  const tabStyles =
    "data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-cyan-500/20 data-[state=active]:bg-cyan-500/40";
  const cardStyles =
    "dark:bg-gradient-to-br dark:from-slate-900/70 dark:via-slate-800/50 dark:to-slate-700/70 dark:border-cyan-500/20 bg-gradient-to-br from-white/50 via-gray-200/70 to-gray-300/50 border-cyan-500/10";
  const h2Styles = "text-2xl font-semibold mb-4 dark:text-cyan-400 text-cyan-600";

  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground bg-gradient-to-b from-slate-100 to-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950"
      )}>
      <Header />
      <ThemeButton />
      {/* Main Content */}
      <main className="container mx-auto p-4 relative">
        <Tabs defaultValue="rules" className="space-y-6 flex justify-center">
          <TabsList
            className={
              "z-50 fixed bottom-3 grid grid-cols-3 w-full max-w-2xl dark:bg-slate-800 border dark:border-cyan-500 bg-white border-cyan-500 mx-auto"
            }>
            <div className="absolute inset-0 bg-noise rounded-md"></div>

            <TabsTrigger value="presentation" className={tabStyles}>
              <WalletCardsIcon className="h-4 w-4 mr-2" />
              Presentation
            </TabsTrigger>
            <TabsTrigger value="rules" className={tabStyles}>
              <BookIcon className="h-4 w-4 mr-2" />
              Rules
            </TabsTrigger>
            <TabsTrigger value="cards" className={tabStyles}>
              <WalletCardsIcon className="h-4 w-4 mr-2" />
              Cards
            </TabsTrigger>
          </TabsList>

          {/* PRESENTATION */}
          {/* PRESENTATION */}
          {/* PRESENTATION */}

          <TabsContent value="presentation" className="space-y-4">
            <Article className={cardStyles}>
              <ArticleContent className="space-y-4 p-6 relative">
                <video className="w-full rounded-md" controls>
                  <source src="/assets/video/presentation.mp4" type="video/mp4" />
                </video>
              </ArticleContent>
            </Article>
          </TabsContent>

          {/* RULES */}
          {/* RULES */}
          {/* RULES */}

          <TabsContent value="rules" className="space-y-4">
            <Article className={cardStyles}>
              <ArticleContent className="space-y-4 p-6 relative">
                <div className="absolute inset-0 bg-noise"></div>
                <Rules />
              </ArticleContent>
            </Article>
          </TabsContent>

          <TabsContent value="cards" className="space-y-4">
            <p className="dark:text-cyan-600 text-cyan-700 my-10">
              Here you will find all the cards available in the game. <br />
              Add all players and cards to their inventory.
              <br />
              You'll be able to directly have access to stats and the score of each player.
            </p>

            {/* PLAYERS */}
            {/* PLAYERS */}
            {/* PLAYERS */}

            <Article className={cardStyles}>
              <ArticleContent className="p-6 relative">
                <div className="absolute inset-0 bg-noise"></div>
                <Players />
              </ArticleContent>
            </Article>

            {/* CARDS */}
            {/* CARDS */}
            {/* CARDS */}

            <Article className={cardStyles}>
              <ArticleContent className="p-6 relative">
                <div className="absolute inset-0 bg-noise"></div>
                <h2 className={h2Styles}>Card Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(cards as CardType["content"][]).map((card, i) => (
                    <Card key={i} content={card} />
                  ))}
                </div>
              </ArticleContent>
            </Article>
          </TabsContent>
        </Tabs>
        <Toaster className="bg-background text-foreground bg-gradient-to-b from-slate-100 to-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950" />
      </main>
    </div>
  );
}
