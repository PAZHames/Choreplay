import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ChorePage from './ChorePage';
import PeoplePage from './PeoplePage';
import GameChoicePage from './GameChoicePage';
import HouseChoreList from './HouseChoreList';
import Header from './Header';
import GameDisplay from './GamePageRender';
import GamePage from './GamePage';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ChorePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/gamechoice" element={<GameChoicePage />} />
        <Route path="/chorelist" element={<HouseChoreList /> } />
        <Route path="/gamepage" element={<GamePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
