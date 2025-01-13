import TeamListItem from "../TeamListItem";
import { Link } from "react-router-dom";
import useFavoriteTeams from "../../hooks/useFavoriteTeams";

import * as S from "./style";

const Favorites = () => {
  const { handleFavoriteClick, favorites } = useFavoriteTeams();

  return (
    <>
      <Link to={"/"}>
        <S.HomeButton>
          <S.HomeIcon fontSize="large" />
        </S.HomeButton>
      </Link>
      <S.Header>Favorite Teams</S.Header>
      <S.FavoritesList>
        {favorites.map((team) => {
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
