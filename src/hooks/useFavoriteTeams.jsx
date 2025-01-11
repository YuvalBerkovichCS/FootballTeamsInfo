import useLocalStorage from "./useLocalStorage";
import { useMemo } from "react";

const useFavoriteTeams = (teams = []) => {
  const [favorites, setFavorites] = useLocalStorage("favorites");
  const favoritesTeamsIds = useMemo(
    () => favorites.map((favorite) => favorite.id),
    [favorites]
  );
  const handleAddFavorite = (teamId) => {
    const team = teams.find((team) => team.teamId === teamId);
    if (team) {
      const newFavorite = {
        id: teamId,
        name: team.teamName,
        icon: team.teamIconLink,
      };

      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    }
  };

  const handleDeleteFavorite = (teamId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== teamId)
    );
  };
  const handleFavoriteClick = (teamId) => {
    if (favoritesTeamsIds.includes(teamId)) {
      handleDeleteFavorite(teamId);
    } else {
      handleAddFavorite(teamId);
    }
  };

  return { favorites, setFavorites, favoritesTeamsIds, handleFavoriteClick };
};

export default useFavoriteTeams;
