// game/main.d.ts

export interface WorldState {
  hasRope: boolean;
  ropeTimer: number;
  arrows: number;
  isGameOver: boolean;
  isPaused: boolean;
  isMuted: boolean;
}

export interface GameActionsType {
  getWorldState?: () => WorldState;
  jump?: () => void;
  shoot?: () => void;
  rope?: () => void;
  pause?: () => void;
  mute?: () => void;
}

export const GameActions: GameActionsType;

export function startGame(canvas: HTMLCanvasElement | null): void;
