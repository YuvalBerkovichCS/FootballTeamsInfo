import { useEffect, useState } from "react";
import axios from "axios";

const useFetchTeams = () => {
  const [offset, setOffset] = useState(1);
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTeams(offset);
  }, [offset]);

  async function fetchTeams(offset) {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://proxy-server-api-ubut.onrender.com/api/teams`,
        {
          headers: { "X-Auth-Token": "1a26fca56b2245c086502edbbe3ff425" },
          params: { limit: 50, offset },
        }
      );
      console.log("Fetched Data:", response.data);
      const teamsData = response.data.teams;
      const newTeams = teamsData.map((teamData) => {
        const teamName = teamData.name;
        const teamId = teamData.id;
        const teamIconLink = teamData.crest;

        return { teamName, teamId, teamIconLink };
      });

      setTeams((prevTeams) => [...prevTeams, ...newTeams]);
      setHasMore(response.data.count > 0);
    } catch (error) {
      setError(true);
      console.error("Error fetching teams:", error.message);
    }

    setIsLoading(false);
  }

  return { isLoading, error, teams, hasMore, offset, setOffset };
};

export default useFetchTeams;
