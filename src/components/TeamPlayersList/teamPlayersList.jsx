import * as S from "./style";
import PlayerIcon from "../../assets/icons/playerAvatar.png";

const teamPlayersList = ({ playersList }) => {
  return (
    <>
      <S.PlayersList>
        <h1>Players</h1>
        {playersList.map((player) => {
          return (
            <S.PlayerItem key={player.id}>
              <S.PlayerAvatarListItem>
                <S.PlayerAvatar src={PlayerIcon} />
              </S.PlayerAvatarListItem>
              <S.PlayerName
                primary={player.name}
                secondary={player.position}
              ></S.PlayerName>
            </S.PlayerItem>
          );
        })}
      </S.PlayersList>
    </>
  );
};
export default teamPlayersList;
