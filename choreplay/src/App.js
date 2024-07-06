import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ChorePage from './ChorePage';
import PeoplePage from './PeoplePage';
import GameChoicePage from './GameChoicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChorePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/gamechoice" element={<GameChoicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
