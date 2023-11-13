import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage/FrontPage';
import Leaderboard from './Leaderboard/leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/PetHunt" element={<FrontPage />} /> {/* Adjust this line */}
          <Route path="/PetHunt/leaderboard" element={<Leaderboard />} />
          <Route path="/PetHunt/:random" element={<FrontPage />} /> {/* This line will match /anySubPath */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
