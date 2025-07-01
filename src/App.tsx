import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StreamingInterface } from './components/StreamingInterface';
import { MatchViewer } from './components/MatchViewer';
import { StreamOnlyView } from './components/StreamOnlyView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Controller page with camera + editing capabilities */}
        <Route path="/controller/:matchId" element={<StreamingInterface />} />

        {/* Viewer with camera feed removed */}
        <Route path="/match/:matchId" element={<MatchViewer />} />

        {/* Pure stream (no scoreboard overlay) */}
        <Route path="/match/:matchId/*" element={<StreamOnlyView />} />
      </Routes>
    </Router>
  );
}

export default App;