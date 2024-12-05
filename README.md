# English game

## Thematics

- Algorithms
- Brand style guide
- Conversion funnels
- Cybersecurity
- Editorial line & calendar
- Gameplay
- Green IT & Eco-design
- HTML / CSS
- Relational databases
- Soft skills in the workplace
- Traffic acquisition
- Using the Internet
- Wireframes: design & methodology

## Cards

| médieval          | internet            | catégorie  | description                                        | qty |
| ----------------- | ------------------- | ---------- | -------------------------------------------------- | --- |
| route             | bande-passante      | infra      | donne des octest                                   | 8   |
| entrepot          | base de donnée      | infra      | stocke des informations                            | 6   |
| porte muraille    | pare-feu            | infra      | protège de 1/2/3 hacker                            | 4   |
| hopital           | sys de maintenance  | infra      | previent de 1/2/3 bug                              | 5   |
| marché            | API                 | infra      | permet echange avec d'autres joueurs               | 4   |
| architecte office | baie de serveur     | infra      | genere des serveur/ par tour                       | 4   |
| bibliothèque      | moteur de recherche | infra      | permet de piocher plus d'action                    | 6   |
| postoffice        | serveur smtp        | infra      | upgrade les APIs                                   | 2   |
| voleur            | hacker              | action     | pique des octets                                   | 8   |
| brigant           | bug                 | action     | bloque un batiment un tour                         | 8   |
| garde             | HTTPS               | action     | upgrade une route en HTTPS                         | 6   |
| embuscade         | downgrade attack    | action     | downgrade une route en HTTP                        | 6   |
| charette de blé   | optimisation        | action     | donne des octets                                   | 8   |
| blé               | octet               | ressources | ressource principal                                | 20  |
| maison            | serveur             | ressources | ressource principal                                | 20  |
| ---------------   | ------------------- | ---------- | -------------------------------------------------- | --- |
| TOTAL             | ------------------- | ---------- | -------------------------------------------------- | 115 |

3 strat => strat d'attaque, strat de constructeur, strat polyvalente

## Game stats

- [TOTAL CARDS] : 115
- [TOTAL CARDS / PAGE] : 8
- [TOTAL RESSOURCES] : 40
- [TOTAL ACTIONS] : 32
- [TOTAL INFRA] : 43
- [RESSOURCE TYPES] : 2
- [ACTION TYPES] : 5
- [INFRA TYPES] : 8

## Strategy

- attck
- build
- polyvalent

## Prompt

### Infra

```txt

je créer un jeux de société dans un univers digital d'internet mais j'essaye de le relier à un monde mediévale pour une meilleur assimilation du jeu donc je voudrais que tu me genere une image qui pourrait etre le fond d'une de c'est carte de jeux avec un chemin de terre qui rentre dans une ville fortifié
```

```txt
**Un**
[insert object name]
**médiéval majestueux entouré d'une campagne verdoyante**,
[insert description]
**Les murs et tours du château sont ornés de motifs numériques lumineux et futuristes en bleu, tels que des circuits électroniques et des symboles binaires (0 et 1).**
**Des arbres holographiques transparents avec des branches en style numérique sont alignés à côté de la route en terre menant à la **
[insert object name].
**Le ciel est clair avec quelques nuages dorés. L'atmosphère mélange des éléments historiques et futuristes, avec une aura de technologie avancée fusionnée avec un environnement naturel.**
```

### Action

```txt

```

### Game cards description

- [Infra] : Infrastructure are permanent cards that you can buy with ressource. They will help you generate more ressources, or give you the ability to attack or defend against other players. They can be upgraded or downgraded by action cards.
- [Action] : Action cards are temporary cards that can be used to attack or defend against other players. They can be used to upgrade or downgrade infrastructure cards or for exemple to steal resources from other players..
- [Ressources] : Ressources comes in two types, octet and server. Use them to buy infrastructure cards or to use action cards.

- paragraphe d'introduction
- objectif du joueur
- description génrale de tout lles type de carete
- regle ( deja fait)
- strategie
- les objectifs du jeu ( les exemples de choses que les jouerus vont dire sans faire expres et qui ont du sens.)

objectives :

- Construire son internet le plus grand et prospere possible. Faire les bons choix strategique pour croitre et gagner.

Each card have a cost, a type,an effect and a score.
You can find the cost of a card at the bottom of the card.
The effect and the description of a card is written on the card.
The score of a card is at the top right corner.
The type of a card is his color :

- Red for action cards
- Grey for insfrastructure cards
- Green for ressources cards

When you buy a card, you have to consume the corresponding ressources.

Some common situation you might encounter :

- Buy an infrastructure card
  - You need to buy an infrastructure card to build your internet. You can buy a card by consuming the corresponding ressources.
    - for exemple : You want to buy a firewall. You consume 2 octets and 1 server to buy the firewall card. You place the card on the table in front of you. You can now protect yourself from 1 hacker.
- Upgrade an infrastructure
  - Buy the card that is in your hand and put it on the previous infrastructure card.
    - for exemple : You want to upgrade your firewall. Consume the corresponding ressources and put the firewall card on the previous infrastructure card. You have now a firewall that can protect you from 2 hackers instead of 1.
- Sell or exchange a card with another player.
  - If you have you API infrastructure on the table, you might want to exchange ressources or cards with another player. You are free to fix a price with the other player.
    - for exemple : You want to exchange 2 server cards with another player. You can ask for 1 hospital in exchange.
- Use an action card
  - You can use an action card to attack or give your more ressources. You can play an unlimited amount of action cards per turn.
    - for exemple : You want to attack another player with an hacker cards. If the opponent have 2 firewalls, you'll need 3 hackers ( one more ) to steal 2 octets ( the hacker card effect).
- Desperately in need of octets
  - If you are in need of octets, you can discard one card from your hand to draw 1 octet.
    - for exemple : You need 1 octet to buy a card. You discard a card from your hand to draw 1 octet. You can now buy the card you wanted.

### Rules

Before starting the game :

This game can be played by a minimum of 2 and a maximum of 4 players
The maximum amount of octet per player is 3. Build more databases to store more octets.
There is no maximum amount of servers, the internet is infinite.
First, separate cards into dedicated decks (infrastructure, actions)
Each player start with 1 server, 3 octets, 2 infrastructure cards and 3 action cards.

SMTP card, API card are not upgradable. Database can only be upgraded 2 times.

The oldest player starts.

1. Start of the Turn:
   The players put down all his ressources on the table.
   If any cards are active, the player harvest all effects from actives cards on the table, and use his API infrastructure if he has one.
   The player have the posibility to discard one card from his hand to draw 1 octet.

2. During the Turn :
   The player uses his resources to place his cards in hand on the table. Once the resources are used, they go into the game box.
   During this step, the player can also upgrade or downgrade his infrastructure, or use action cards.

3. End of the Turn:
   Draw enough cards to have 5 cards in hand.
   The next player can now start his turn.

   End of the Game:
   The game ends when the deck is depleted or after a determined amount of turns.
   The player with the highest score wins, the score is calculated by adding the score of all cards on the table.

- [x] - cartes
- [x] - livret
- [x] - illustration boite

## missing cards

- [ ] optimisation not on the website
- [ ] draw only infra cards !

## video script
