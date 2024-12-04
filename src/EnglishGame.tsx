import { Fragment } from "react/jsx-runtime";
import data from "./data.json" assert { type: "json" };

const devEnv = import.meta.env.DEV;

const EnglishGame = () => {
  return (
    <>
      {devEnv}
      <DevInfo />
    </>
  );
};

const DevInfo = () => {
  const { dev_cards } = data;
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
      {dev_cards.map((item, index) => (
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
