const EnglishGame = () => {
  const thematics = [
    "Algorithms",
    "Brand style guide",
    "Conversion funnels",
    "Cybersecurity",
    "Editorial line & calendar",
    "Gameplay",
    "Green IT & Eco-design",
    "HTML / CSS",
    "Relational databases",
    "Soft skills in the workplace",
    "Traffic acquisition",
    "Using the Internet",
    "Wireframes: design & methodology",
  ];

  const explanations = [
    {
      title: "Algorithms",
      metaphor:
        "Algorithms are like quest maps in an RPG. Each step (or node) in the map leads you closer to your goal, with specific instructions on which path to take based on the situation. Sometimes, you find shortcuts (efficient algorithms), but beware of traps (inefficient ones).",
      gamification:
        "Imagine programming as solving a dungeon with treasure at the end. Each algorithm is a tool in your inventory—choose wisely to succeed quickly!",
    },
    {
      title: "Brand Style Guide",
      metaphor:
        "It’s like the rules for creating characters in a role-playing game. Your brand is the protagonist, and the guide ensures your character (brand) consistently dresses, speaks, and acts in ways that resonate with the game’s world (your audience).",
      gamification:
        "Build a 'brand avatar' and collect points for keeping it consistent—mismatched colors or fonts deduct points!",
    },
    {
      title: "Conversion Funnels",
      metaphor:
        "A conversion funnel is like leveling up a character in a game. Players (users) start at level 1 (awareness) and need to be nurtured through each level (consideration, decision) to unlock the ultimate weapon (purchase).",
      gamification:
        "Track progress through a 'sales quest,' with achievements unlocked for guiding users through each stage.",
    },
    {
      title: "Cybersecurity",
      metaphor:
        "It’s your base defense in a tower defense game. Cyberattacks are enemy waves trying to breach your systems, and firewalls, encryption, and protocols are the towers you build to keep them out.",
      gamification:
        "Create a real-time defense scenario where players upgrade security towers (antivirus, monitoring) to withstand increasingly sophisticated threats.",
    },
    {
      title: "Editorial Line & Calendar",
      metaphor:
        "It’s like planning a campaign in a strategy game. Your editorial line is the overarching mission, while the calendar schedules daily battles (posts) to execute the strategy.",
      gamification:
        "Treat each piece of content as a 'troop,' deploying them strategically at the right time to win engagements with your audience.",
    },
    {
      title: "Gameplay",
      metaphor:
        "Gameplay is the *engine* of a game—it’s the physics, the rules, and the experience that makes playing the game fun, just like the laws of physics make the real world interactive.",
      gamification:
        "Experiment with gameplay mechanics like a 'mad scientist' in a lab to see how small changes can drastically affect player satisfaction.",
    },
    {
      title: "Green IT & Eco-design",
      metaphor:
        "Imagine your IT infrastructure as a garden in a simulation game. Green IT ensures you plant eco-friendly trees (efficient systems) that reduce your carbon footprint, avoiding resource-draining weeds (wasteful code).",
      gamification:
        "Players earn 'eco-points' for optimizing energy use in simulated data centers or for designing low-impact systems.",
    },
    {
      title: "HTML / CSS",
      metaphor:
        "HTML is like the skeleton of a game character, and CSS is the armor and costume. The skeleton provides structure, while the armor (CSS) adds visual flair and personality.",
      gamification: "Build a character using 'HTML bones' and style it with 'CSS gear' to earn design points.",
    },
    {
      title: "Relational Databases",
      metaphor:
        "Relational databases are like the loot inventory in an adventure game. Every item (data) is stored in categories (tables) and linked to others—your sword is linked to its stats, crafting materials, and quests.",
      gamification:
        "Create challenges where players 'connect the dots' between different tables to unlock treasures (queries).",
    },
    {
      title: "Soft Skills in the Workplace",
      metaphor:
        "Soft skills are like a character’s charisma or diplomacy stats in a game. High charisma unlocks better dialogue options and collaborations, turning difficult tasks into cooperative wins.",
      gamification:
        "Build a 'workplace RPG' where players earn XP for resolving conflicts, communicating clearly, or leading a team.",
    },
    {
      title: "Traffic Acquisition",
      metaphor:
        "It’s like gathering resources in a strategy game. You build farms (organic SEO), marketplaces (paid ads), and trade routes (social media) to funnel traffic to your castle (website).",
      gamification:
        "Compete to see who can generate the most traffic resources using a balanced strategy of organic and paid methods.",
    },
    {
      title: "Using the Internet",
      metaphor:
        "Browsing the internet is like navigating a massive MMORPG world. You start with a basic map (browser) but need to avoid traps (phishing) and choose safe paths to complete quests (find information).",
      gamification: "Create a scavenger hunt where users must safely navigate the internet to complete tasks.",
    },
    {
      title: "Wireframes: Design & Methodology",
      metaphor:
        "Wireframes are like blueprints for constructing a base in a simulation game. They outline where each structure (buttons, content) will go before you build anything.",
      gamification:
        "Let players 'design a base' by dragging and dropping wireframe elements, scoring points for usability and logical layout.",
    },
  ];

  return (
    <div>
      <h1>English Game</h1>
      <h2>Thematics</h2>
      <ul>
        {thematics.map((theme, index) => (
          <li key={index}>{theme}</li>
        ))}
      </ul>
      <h2>Metaphorical, Gamified Explanations</h2>
      {explanations.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>
            <strong>Metaphor:</strong> {item.metaphor}
          </p>
          <p>
            <strong>Gamification:</strong> {item.gamification}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EnglishGame;
