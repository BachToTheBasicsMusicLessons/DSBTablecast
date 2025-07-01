import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StreamingInterface } from './StreamingInterface';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Viewer route (no camera, sees scoreboard and stream) */}
        <Route path="/match/:matchId" element={<StreamingInterface role="viewer" />} />

        {/* Broadcaster route (camera feed active, no stream viewing) */}
        <Route path="/match/:matchId/stream" element={<StreamingInterface role="broadcaster" />} />

        {/* Controller route (scoreboard control, no camera or stream view) */}
        <Route path="/controller/:matchId" element={<StreamingInterface role="controller" />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/match/sample" />} />
      </Routes>
    </Router>
  );
};

export default App;