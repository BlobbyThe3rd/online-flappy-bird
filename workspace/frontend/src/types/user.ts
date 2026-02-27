// TODO: Update these types based on Backend /api/users response shape
// Backend: please add to imports_backend when /api/users is ready

export interface User {
  id: string;
  username: string;
  email: string;
  highScore: number;
  createdAt: string;
  isOnline?: boolean;
  avatar?: string;
}

export interface UserStats {
  gamesPlayed: number;
  wins: number;
  totalScore: number;
}