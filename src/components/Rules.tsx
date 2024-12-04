import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function Rules() {
  const { theme } = useTheme();
  return (
    <>
      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Introduction
      </h2>
      <div className="space-y-4 prose prose-invert max-w-none">
        <p>Welcome to My DigiTown, the strategy game where medieval meets digital !</p>
        <p>
          Prepare to dive into a world where the Internet meets the medieval era—a unique universe where the old
          collides with the modern. Your goal? Become an Internet Lord, building and expanding your connected village!
          Whether you’re a noble strategist or a visionary builder, you’ll need to combine medieval resources with
          virtual technologies to make your digital empire thrive.
        </p>
        <p>
          Gather resources, construct buildings, attack rival lords, or trade with them. But beware—every choice
          matters: your allies and enemies might be closer than they seem... Are you ready to embrace this challenge
          where past and future intertwine? Your quest begins now!
        </p>
        <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
          Your goals
        </h3>
        <p>
          Your mission is to build the largest and most prosperous internet network possible. Make wise strategic
          decisions to develop your digital empire and triumph over your rivals. Only the best strategies will lead you
          to victory!
        </p>
      </div>
      {/* RULES */}
      {/* RULES */}
      {/* RULES */}
      {/* RULES */}

      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>Game rules</h2>
      <ul>
        <li>This game can be played by a minimum of 2 and a maximum of 4 players</li>
        <li>The maximum amount of octet per player is 3. Build more databases to store more octets</li>
        <li>There is no maximum amount of servers, the internet is infinite.</li>
        <li> Each card have a cost, a type,an effect and a score.</li>
        <li> You can find the cost of a card at the bottom of the card.</li>
        <li> The effect and the description of a card is written on the card.</li>
        <li> The score of a card is at the top right corner.</li>
        <li> The type of a card is his color :</li>
        <ul>
          <li>Red for action cards</li>
          <li>Grey for insfrastructure cards</li>
          <li>Green for ressources cards</li>
        </ul>
        <li> When you buy a card, you have to consume the corresponding ressources.</li>
      </ul>

      <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
        The game setup
      </h3>
      <ul>
        <li>First, separate cards into dedicated decks (infrastructure, actions)</li>
        <li>Each player start with 1 server, 3 octets, 2 infrastructure cards and 3 action cards.</li>
        <li>SMTP card, API card are not upgradable</li>
        <li>Database can only be upgraded 2 times</li>
      </ul>
      <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
        Start of the Turn
      </h3>
      <p>
        The players put down all of their ressources (server and octets) on the table. The player harvest all effects
        from actives cards on the table if any, and use his API infrastructure if he has one. The player have the
        posibility to discard one card from his hand to draw 1 octet.
      </p>
      <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
        During the Turn
      </h3>
      <p>
        The player uses his resources to place his cards in hand on the table. Once the resources are used, they go into
        the game box. During this step, the player can also upgrade or downgrade his infrastructure, or use action
        cards.
      </p>
      <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
        End of the Turn
      </h3>
      <p>Draw enough cards to have 5 cards in hand. The next player can now start his turn.</p>
      <h3 className={cn("text-lg font-semibold", theme === "dark" ? "text-cyan-300" : "text-cyan-500")}>
        End of the Game
      </h3>
      <p>
        The game ends when the deck is depleted or after a determined amount of turns. The player with the highest score
        wins.
      </p>
      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Some common situation you might encounter :
      </h2>
      <p id="buy-an-infra">
        <strong>Buy an infrastructure card</strong>
        <br />
        You need to buy an infrastructure card to build your internet. You can buy a card by consuming the corresponding
        ressources.
        <br />
        for exemple : You want to buy a firewall. You consume 2 octets and 1 server to buy the firewall card. You place
        the card on the table in front of you. You can now protect yourself from 1 hacker.
      </p>
      <p id="upgrade-an-infra">
        <strong>Upgrade an infrastructure</strong>
        <br />
        Buy the card that is in your hand and put it on the previous infrastructure card.
        <br />
        for exemple : You want to upgrade your firewall. Consume the corresponding ressources and put the firewall card
        on the previous infrastructure card. You have now a firewall that can protect you from 2 hackers instead of 1.
      </p>
      <p id="sell-exchange">
        <strong>Sell or exchange a card with another player</strong>
        <br />
        If you have you API infrastructure on the table, you might want to exchange ressources or cards with another
        player. You are free to fix a price with the other player.
        <br />
        for exemple : You want to exchange 2 server cards with another player. You can ask for 1 hospital in exchange.
      </p>
      <p id="use-action">
        <strong>Use an action card</strong>
        <br />
        You can use an action card to attack or give your more ressources. You can play an unlimited amount of action
        cards per turn.
        <br />
        for exemple : You want to attack another player with an hacker cards. If the opponent have 2 firewalls, you'll
        need 3 hackers ( one more ) to steal 2 octets ( the hacker card effect).
      </p>
      <p id="desperately-octets">
        <strong>Desperately in need of octets</strong>
        <br />
        If you are in need of octets, you can discard one card from your hand to draw 1 octet.
        <br />
        for exemple : You need 1 octet to buy a card. You discard a card from your hand to draw 1 octet. You can now buy
        the card you wanted.
      </p>
      <h2 className={cn("text-3xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Description of the cards :
      </h2>
      <ul>
        <li>
          <strong>Infrastructure cards :</strong>
          <p>
            Permanent cards that you can buy with resources. They will help you generate more resources, or give you the
            ability to attack or defend against other players. They can be upgraded or downgraded by action cards.
          </p>
        </li>
        <li>
          <strong>Action cards :</strong>
          <p>
            Temporary cards that can be used to attack or defend against other players. They can be used to upgrade or
            downgrade infrastructure cards or for example to steal resources from other players.
          </p>
        </li>
        <li>
          <strong>Resource cards :</strong>
          <p>
            Resources come in two types, octet and server. Use them to buy infrastructure cards or to use action cards.
          </p>
        </li>
      </ul>
      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Infrastructures Cards
      </h2>
      <ul>
        <li>
          <strong>Firewall :</strong> A digital barrier that filters traffic, blocking intrusions while allowing safe
          communications.
        </li>
        <li>
          <strong>Bandwith :</strong> Refers to the maximum amount of data that can be transmitted over a network in a
          given time, typically measured in bits per second (bps). It represents the capacity of a communication channel
          to handle information flow, affecting the speed and performance of a connection.
        </li>
        <li>
          <strong>API (Application Programming Interface) :</strong> A set of functions and tools that allow software
          applications to communicate. It defines the methods and data formats for requesting and exchanging information
          between systems.
        </li>
        <li>
          <strong>Search Engine :</strong> A software system or online tool designed to search, retrieve, and organize
          information from the internet or a database based on user queries.
        </li>
        <li>
          <strong>SMTP Server :</strong> A cornerstone of the internet, making fast, reliable, and scalable email
          communication possible while bridging individuals and organizations worldwide. Without SMTP, much of the
          digital communication we take for granted would not exist.
        </li>
        <li>
          <strong>Maintenance System :</strong>A maintenance service ensures the proper functioning of software,
          hardware, or systems by fixing bugs, resolving performance issues, and enhancing security. It includes updates
          to ensure their reliability.
        </li>
        <li>
          <strong>Database :</strong> A device that manages and delivers data, resources, or services to other computers
          (clients) in a network, enabling communication and functionality across systems.
        </li>
        <li>
          <strong>Server bay :</strong> A physical compartment or designated space within a server rack or cabinet
          designed to house a single server or other hardware components. It provides an organized and secure
          environment for installing and managing multiple servers in a data center or server room.
        </li>
      </ul>
      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Action Cards
      </h2>
      <ul>
        <li>
          <strong>Hacker :</strong> A person who uses their knowledge of computers to bypass the security of systems,
          networks, or software, often with the aim of accessing information without authorization. Their motivations
          can vary, ranging from improving security to engaging in malicious activities, such as data theft.
        </li>
        <li>
          <strong>Downgrade attack :</strong> An attack where the attacker forces a system to switch from a secure HTTPS
          connection to an unsecured HTTP connection. This allows the attacker to exploit vulnerabilities in the HTTP
          protocol to intercept or manipulate transmitted data, thereby compromising the security of the communication.
        </li>
        <li>
          <strong>Bug :</strong> An error or malfunction in a computer program that can cause incorrect results,
          unexpected behavior, or even make the program crash. It can be caused by coding errors or design flaws.
        </li>
        <li>
          <strong>HTTPS :</strong>
          Hypertext Transfer Protocol Secure is a secure version of HTTP that uses encryption to protect data exchanged
          between a user and a website. It ensures the confidentiality and integrity of information, preventing
          interception.
        </li>
      </ul>
      <h2 className={cn("text-2xl font-semibold", theme === "dark" ? "text-cyan-400" : "text-cyan-600")}>
        Resources Cards
      </h2>
      <ul>
        <li>
          <strong>Octet :</strong> A unit of digital information that consists of exactly 8 bits. It is commonly used to
          represent a single byte in computing and telecommunications.
        </li>
        <li>
          <strong>Server :</strong> It is a cornerstone of the internet, making fast, reliable, and scalable email
          communication possible while bridging individuals and organizations worldwide. Without SMTP, much of the
          digital communication we take for granted would not exist.
        </li>
      </ul>
    </>
  );
}
