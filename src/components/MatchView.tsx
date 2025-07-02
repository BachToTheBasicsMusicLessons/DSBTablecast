import React from 'react';
import { useParams } from 'react-router-dom';
import { useMatch } from '../hooks/useMatch';
import { ScoreboardOverlay } from './ScoreboardOverlay';
import CameraFeed from './CameraFeed'; // Assuming default export

export const MatchView: React.FC = () => {
  const { matchId } = useParams();
  const {
    match,
    updatePlayer,
    updateMatchScore,
    updateMatchType,
    updatePlayerScore
  } = useMatch(matchId!); // assumes matchId exists

  if (!match) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        Loading match data...
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
        <CameraFeed matchId={matchId!} />
      </div>

      {/* Scoreboard Overlay */}
      <ScoreboardOverlay
        matchType={match.matchType}
        player1={match.players[0]}
        player2={match.players[1]}
        matchScoreA={match.matchScoreA}
        matchScoreB={match.matchScoreB}
        onScoreChange={updatePlayerScore}
        onPlayerUpdate={updatePlayer}
        onMatchScoreUpdate={updateMatchScore}
        onMatchTypeUpdate={updateMatchType}
      />
    </div>
  );
};