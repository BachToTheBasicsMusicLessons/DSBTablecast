import React, { useState, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CameraFeed } from './CameraFeed';
import { ScoreboardOverlay } from './ScoreboardOverlay';

interface Player {
  id: string;
  name: string;
  team: string;
  skill: string;
  score: number;
}

export const StreamingInterface: React.FC = () => {
  const { matchId } = useParams();
  const location = useLocation();

  const pathname = location.pathname;
  const search = location.search;

  const isController = pathname.startsWith('/controller');
  const isStreamOnly = pathname.startsWith('/match') && search.includes('stream=true');
  const isPublicViewer = pathname.startsWith('/match') && !search.includes('stream=true');

  const [matchType, setMatchType] = useState('APA 8-Ball');

  const [playerA, setPlayerA] = useState<Player>({
    id: 'playerA',
    name: 'Player A',
    team: 'Team A',
    skill: 'SL6 (50)',
    score: 0
  });

  const [playerB, setPlayerB] = useState<Player>({
    id: 'playerB',
    name: 'Player B',
    team: 'Team B',
    skill: 'SL6 (50)',
    score: 0
  });

  const [matchScoreA, setMatchScoreA] = useState(0);
  const [matchScoreB, setMatchScoreB] = useState(0);

  const handleMatchTypeUpdate = useCallback((newType: string) => {
    setMatchType(newType);
  }, []);

  const handleScoreChange = useCallback((playerId: string, delta: number) => {
    if (playerId === 'playerA') {
      const newScore = Math.max(0, playerA.score + delta);
      setPlayerA(prev => ({ ...prev, score: newScore }));
    } else if (playerId === 'playerB') {
      const newScore = Math.max(0, playerB.score + delta);
      setPlayerB(prev => ({ ...prev, score: newScore }));
    }
  }, [playerA.score, playerB.score]);

  const handlePlayerUpdate = useCallback((playerId: string, updates: Partial<Player>) => {
    if (playerId === 'playerA') {
      setPlayerA(prev => ({ ...prev, ...updates }));
    } else if (playerId === 'playerB') {
      setPlayerB(prev => ({ ...prev, ...updates }));
    }
  }, []);

  const handleMatchScoreUpdate = useCallback((scoreA: number, scoreB: number) => {
    setMatchScoreA(scoreA);
    setMatchScoreB(scoreB);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Show camera feed ONLY to stream-only view */}
      {isStreamOnly && <CameraFeed active />}

      {/* Scoreboard always visible */}
      <ScoreboardOverlay
        matchType={matchType}
        playerA={playerA}
        playerB={playerB}
        matchScoreA={matchScoreA}
        matchScoreB={matchScoreB}
        onScoreChange={isController ? handleScoreChange : undefined}
        onPlayerUpdate={isController ? handlePlayerUpdate : undefined}
        onMatchScoreUpdate={isController ? handleMatchScoreUpdate : undefined}
        onMatchTypeUpdate={isController ? handleMatchTypeUpdate : undefined}
      />
    </div>
  );
};