import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StreamingInterface } from './components/StreamingInterface';
import { MatchViewer } from './components/MatchViewer';
import { StreamOnlyView } from './components/StreamOnlyView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Controller: Edit scoreboard, view live stream (no camera access) */}
        <Route path="/controller/:matchId" element={<StreamingInterface />} />

        {/* Viewer: Public match page with scoreboard and live stream (no camera access) */}
        <Route path="/match/:matchId" element={<MatchViewer />} />

        {/* Broadcaster: Opens camera and overlays scoreboard, used by the person streaming */}
        <Route path="/match/:matchId/stream" element={<StreamOnlyView />} />
      </Routes>
    </Router>
  );
}

export default App;