import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StreamingInterface } from './StreamingInterface';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public viewer */}
        <Route path="/match/:matchId" element={<StreamingInterface />} />

        {/* Broadcaster */}
        <Route path="/match/:matchId/" element={<StreamingInterface />} />

        {/* Stream-only viewer (broadcaster with ?stream=true) */}
        <Route path="/match/:matchId/stream" element={<StreamingInterface />} />

        {/* Controller */}
        <Route path="/controller/:matchId" element={<StreamingInterface />} />

        {/* Redirect unknown routes to a default or 404 */}
        <Route path="*" element={<Navigate to="/match/sample" />} />
      </Routes>
    </Router>
  );
};

export default App;