export default function useStorage() {
  const save = (value: unknown) => {
    localStorage.setItem("_mydigitown_players_data", JSON.stringify(value));
  };

  const load = () => {
    const value = localStorage.getItem("_mydigitown_players_data");
    return value ? JSON.parse(value) : null;
  };

  return { save, load };
}
