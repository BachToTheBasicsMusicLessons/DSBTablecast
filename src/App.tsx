import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { StreamingInterface } from './StreamingInterface';

const ViewerWrapper = () => {
  const { matchId } = useParams();
  return <StreamingInterface role="viewer" />;
};

const BroadcasterWrapper = () => {
  const { matchId } = useParams();
  return <StreamingInterface role="broadcaster" />;
};

const ControllerWrapper = () => {
  const { matchId } = useParams();
  return <StreamingInterface role="controller" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/match/:matchId" element={<ViewerWrapper />} />
        <Route path="/match/:matchId/stream" element={<BroadcasterWrapper />} />
        <Route path="/controller/:matchId" element={<ControllerWrapper />} />
        <Route path="*" element={<Navigate to="/match/sample" />} />
      </Routes>
    </Router>
  );
};

export default App;