// game/main.d.ts

export interface WorldState {
  hasRope: boolean;
  ropeTimer: number;
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
