import { useEffect, useState } from "react";
import axios from "axios";

const useGetTeamDetails = (teamId) => {
  const [teamName, setTeamName] = useState("");
  const [country, setCountry] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [players, setPlayers] = useState([]);
  const [yearFounded, setYearFounded] = useState(1921);
  const [sadiumName, setSadiumName] = useState("");
  const [teamIcon, setTeamIcon] = useState("");
  useEffect(() => {
    const getTeamDetails = async () => {
      try {
        const response = await axios.get(`/api/v4/teams/${teamId}`, {
          headers: { "X-Auth-Token": "1a26fca56b2245c086502edbbe3ff425" },
        });
        const data = response.data;
        setTeamName(data.shortName);
        setCountry(data.area.name);
        setCountryFlag(data.area.flag);
        setPlayers(data.squad);
        setYearFounded(data.founded);
        setSadiumName(data.venue);
        setTeamIcon(data.crest);
      } catch (error) {
        console.error("Error fetching team details:", error.message);
      }
    };
    getTeamDetails();
  }, []);

  return {
    teamName,
    teamIcon,
    country,
    countryFlag,
    players,
    yearFounded,
    sadiumName,
  };
};

export default useGetTeamDetails;
