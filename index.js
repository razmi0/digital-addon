// | médieval        | internet            | catégorie  | description                                        | qty |
// | --------------- | ------------------- | ---------- | -------------------------------------------------- | --- |
// | route           | bande-passante      | infra      | donne des octest                                   | 8   |
// | entrepot        | base de donnée      | infra      | stocke des informations                            | 6   |
// | porte muraille  | pare-feu            | infra      | protège de 1/2/3 hacker                            | 4   |
// | hopital         | sys de maintenance  | infra      | previent de 1/2/3 bug                              | 5   |
// | marché          | API                 | infra      | permet echange avec d'autres joueurs               | 5   |
// | batisseur       | baie de serveur     | infra      | genere des serveur/ par tour                       | 4   |
// | bibliothèque    | moteur de recherche | infra      | permet de piocher plus d'action                    | 6   |
// | postoffice      | serveur smtp        | infra      | upgrade les APIs                                   | 5   |
// | voleur          | hacker              | action     | pique des octets                                   | 6   |
// | brigant         | bug                 | action     | bloque un batiment un tour                         | 6   |
// | garde           | HTTPS               | action     | upgrade une route en HTTPS                         | 6   |
// | embuscade       | downgrade attack    | action     | downgrade une route en HTTP                        | 6   |
// | charette de blé | optimisation        | action     | donne des octets                                   | 8   |
// | blé             | octet               | ressources | ressource principal                                | 20  |
// | maison          | serveur             | ressources | ressource principal                                | 20  |
// | --------------- | ------------------- | ---------- | -------------------------------------------------- | --- |
// | TOTAL           | ------------------- | ---------- | -------------------------------------------------- | 115 |

const qtCards = [8, 6, 4, 5, 5, 4, 6, 5, 6, 6, 6, 6, 8, 20, 20];
const qtCardsByType = {
  infra: [8, 6, 4, 5, 5, 4, 6, 5],
  action: [6, 6, 6, 6, 8],
  ressources: [20, 20],
};
console.log("[TOTAL CARDS] : " + qtCards.reduce((acc, curr) => acc + curr, 0));
console.log("[TOTAL CARDS / PAGE] : " + Math.ceil(115 / 16));
console.log("[TOTAL RESSOURCES] : " + qtCardsByType.ressources.reduce((acc, curr) => acc + curr, 0));
console.log("[TOTAL ACTIONS] : " + qtCardsByType.action.reduce((acc, curr) => acc + curr, 0));
console.log("[TOTAL INFRA] : " + qtCardsByType.infra.reduce((acc, curr) => acc + curr, 0));
console.log("[RESSOURCE TYPES] : " + qtCardsByType.ressources.length);
console.log("[ACTION TYPES] : " + qtCardsByType.action.length);
console.log("[INFRA TYPES] : " + qtCardsByType.infra.length);
