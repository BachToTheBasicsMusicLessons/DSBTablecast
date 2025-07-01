import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StreamingInterface } from './StreamingInterface';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/controller/:matchId" element={<StreamingInterface />} />
        <Route path="/match/:matchId/stream" element={<StreamingInterface />} />
        <Route path="/match/:matchId" element={<StreamingInterface />} />
        <Route path="*" element={<Navigate to="/match/sample" />} />
      </Routes>
    </Router>
  );
};

export default App;