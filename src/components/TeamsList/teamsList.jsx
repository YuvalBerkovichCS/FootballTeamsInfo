import { React, useRef, useCallback } from "react";
import TeamListItem from "../TeamListItem";
import useFetchTeams from "../../hooks/useFetchTeams";
import useFavoriteTeams from "../../hooks/useFavoriteTeams";
import { Link } from "react-router-dom";

import * as S from "./style";

const TeamsList = () => {
  const { teams, hasMore, isLoading, error, setOffset } = useFetchTeams();
  const { favorites, setFavorites, favoritesTeamsIds, handleFavoriteClick } =
    useFavoriteTeams(teams);
  const observer = useRef();
  const numberOfTeams = teams.length;

  const lastTeamsElementRef = useCallback(
    (node) => {
      if (isLoading || error) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + 50);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <>
      <Link to={"/favorites"}>
        <S.FavoritesButton>
          <S.FavoritesIcon fontSize="large" />
        </S.FavoritesButton>
      </Link>
      <S.Header>Football Teams</S.Header>
      <S.TeamsBox>
        <S.TeamsList>
          {teams.map(({ teamId, teamName, teamIconLink }, index) => {
            return (
              <TeamListItem
                ref={numberOfTeams === index + 1 ? lastTeamsElementRef : null}
                key={`team${teamId}`}
                teamId={teamId}
                teamName={teamName}
                teamIconLink={teamIconLink}
                isFavorite={favoritesTeamsIds.includes(teamId)}
                onFavoriteClick={() => handleFavoriteClick(teamId)}
              />
            );
          })}
          <S.LoadderContainer>{isLoading && <S.Loading />}</S.LoadderContainer>
          <div>
            {error && "Error - You hit the limit, try again in a minute"}
          </div>
        </S.TeamsList>
      </S.TeamsBox>
    </>
  );
};

export default TeamsList;
