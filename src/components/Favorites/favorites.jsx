import { useState } from "react";
import TeamListItem from "../TeamListItem";
import { Link } from "react-router-dom";
import useFavoriteTeams from "../../hooks/useFavoriteTeams";

import * as S from "./style";

const Favorites = () => {
  const { handleFavoriteClick, favorites, setFavorites } = useFavoriteTeams();
  const [filteredFavorites, setfilteredFavorites] = useState(favorites);
  const handleSearch = (e) => {
    const value = e.target.value;
    const filteredFavorites = favorites.filter((favorite) => {
      return favorite.name.toLowerCase().includes(value.toLowerCase());
    });
    setfilteredFavorites(filteredFavorites);
  };
  return (
    <>
      <Link to={"/"}>
        <S.HomeButton>
          <S.HomeIcon fontSize="large" />
        </S.HomeButton>
      </Link>
      <S.Header>Favorite Teams</S.Header>
      <S.SearchBar>
        <S.SearchInput
          id="filled-basic"
          label="Filter Favorite Teams"
          variant="filled"
          onChange={handleSearch}
        />
      </S.SearchBar>
      <S.FavoritesList>
        {filteredFavorites.map((team) => {
          return (
            <TeamListItem
              key={team.id}
              teamId={team.id}
              teamName={team.name}
              teamIconLink={team.icon}
              isFavorite={true}
              onFavoriteClick={() => handleFavoriteClick(team.id)}
            />
          );
        })}
      </S.FavoritesList>
    </>
  );
};

export default Favorites;
