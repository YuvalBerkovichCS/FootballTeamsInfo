import { useParams } from "react-router";
import useFetchTeamDetails from "../hooks/useFetchTeamDetails";
import TeamDetails from "../components/TeamDetails";
import GlobalStyles from "../GlobalStyles";

const TeamDetailsPage = () => {
  const { teamId } = useParams();
  const {
    teamName,
    teamIcon,
    country,
    countryFlag,
    players,
    yearFounded,
    sadiumName,
  } = useFetchTeamDetails(teamId);

  return (
    <>
      <GlobalStyles />
      <TeamDetails
        teamName={teamName}
        teamIcon={teamIcon}
        country={country}
        countryFlag={countryFlag}
        yearFounded={yearFounded}
        sadiumName={sadiumName}
        players={players}
      />
    </>
  );
};

export default TeamDetailsPage;
