import { Fragment } from "react/jsx-runtime";

const EnglishGame = () => {
  return (
    <>
      <MedievalInternetGrid />
    </>
  );
};

const MedievalInternetGrid = () => {
  const data = [
    {
      name: "route",
      term: "bande-passante",
      category: "infra",
      description: "permet de faire circuler des données entre serveur",
    },
    { name: "entrepot", term: "base de donnée", category: "infra", description: "stocke des informations" },
    { name: "porte muraille", term: "pare-feu", category: "infra", description: "protège de 1/2/3 hacker" },
    { name: "hopital", term: "sys de maintenance", category: "infra", description: "previent de 1/2/3 bug" },
    { name: "brigant", term: "bug", category: "action", description: "bloque un batiment un tour" },
    { name: "marché", term: "API", category: "infra", description: "permet echange avec d'autres joueurs" },
    {
      name: "architecte office",
      term: "baie de serveur",
      category: "infra",
      description: "genere des serveur/ par tour",
    },
    {
      name: "bibliothèque",
      term: "moteur de recherche",
      category: "infra",
      description: "permet de piocher plus d'action",
    },
    { name: "postoffice", term: "serveur smtp", category: "infra", description: "upgrade le marché" },
    { name: "voleur", term: "hacker", category: "action", description: "pique des octets" },
    { name: "garde", term: "HTTPS", category: "action", description: "upgrade une route en HTTPS" },
    { name: "embuscade", term: "downgrade attack", category: "action", description: "downgrade une route en HTTP" },
    { name: "blé", term: "octet", category: "ressources", description: "ressource principal" },
    { name: "maison", term: "serveur", category: "ressources", description: "ressource principal" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}>
      {/* Grid Header */}
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black", padding: "0.5rem" }}>Médieval</div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black", padding: "0.5rem" }}>Internet</div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black", padding: "0.5rem" }}>Catégorie</div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black", padding: "0.5rem" }}>Description</div>

      {/* Grid Rows */}
      {data.map((item, index) => (
        <Fragment key={index}>
          <div style={{ borderBottom: "1px solid black", padding: "0.5rem" }}>{item.name}</div>
          <div style={{ borderBottom: "1px solid black", padding: "0.5rem" }}>{item.term}</div>
          <div style={{ borderBottom: "1px solid black", padding: "0.5rem" }}>{item.category}</div>
          <div style={{ borderBottom: "1px solid black", padding: "0.5rem" }}>{item.description}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default EnglishGame;
