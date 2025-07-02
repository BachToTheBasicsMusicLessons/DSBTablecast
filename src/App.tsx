import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StreamingInterface } from './components/StreamingInterface';
import { MatchView } from './components/MatchView'; // 👈 make sure this path matches your file location

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Admin controller interface */}
        <Route path="/controller/:matchId" element={<StreamingInterface />} />

        {/* Viewer match pages */}
        <Route path="/match/:matchId/stream" element={<MatchView />} />
        <Route path="/match/:matchId" element={<MatchView />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/match/sample" />} />
      </Routes>
    </Router>
  );
};

export default App;