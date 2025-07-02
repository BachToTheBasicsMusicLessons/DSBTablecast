import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StreamingInterface } from './StreamingInterface';
import { MatchView } from './components/MatchView'; // <-- Add this line

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Controller view */}
        <Route path="/controller/:matchId" element={<StreamingInterface />} />
        
        {/* Stream-only viewer (still handled by StreamingInterface for now) */}
        <Route path="/match/:matchId/stream" element={<StreamingInterface />} />

        {/* Public match view with camera and scoreboard */}
        <Route path="/match/:matchId" element={<MatchView />} />

        {/* Redirect unknown routes to a default match */}
        <Route path="*" element={<Navigate to="/match/sample" replace />} />
      </Routes>
    </Router>
  );
};

export default App;