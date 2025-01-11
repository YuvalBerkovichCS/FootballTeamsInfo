import GlobalStyles from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import TeamDetailsPage from "./pages/teamDetailsPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/team/:teamId" element={<TeamDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
