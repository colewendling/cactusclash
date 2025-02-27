// components/GameController.tsx

"use client";

import { useState } from "react";
import { GameActions } from "../game/main";
import { Play, Pause, VolumeOff, Volume2 } from "lucide-react";
import Image from "next/image.js";

// Define the props type
interface GameControllerProps {
  ropeDisabled: boolean;
  ropeTimer: number;
  arrowCount: number;
  isGameOver: boolean;
}

export default function GameController({
  ropeDisabled,
  ropeTimer,
  arrowCount,
  isGameOver,
}: GameControllerProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  const handlePausePlay = () => {
    GameActions.pause?.(); // Trigger the pause/play action
    setIsPaused(!isPaused); // Toggle button text
  };

  const handleToggleMusic = () => {
    GameActions.mute?.(); // Trigger the music toggle action
    setIsMusicMuted(!isMusicMuted); // Toggle button state
  };

  const disabledShoot = isPaused || arrowCount < 1;

  // Disable pause, jump, and rope when the game is over
  const disabledAll = isGameOver;

  return (
    <div className="flex gap-4 mt-10 justify-center">
      {/* Pause/Play Button */}
      <button
        className={`flex gap-2 justify-center items-center h-[40px] text-md font-semibold border-4 p-2 rounded-lg ${
          disabledAll
            ? "text-gray-400 bg-gray-200 border-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-500 border-blue-800"
        }`}
        onClick={handlePausePlay}
        disabled={disabledAll}
      >
        {isPaused ? (
          <>
            <Play className="size-4" />
          </>
        ) : (
          <>
            <Pause className="size-4" />
          </>
        )}
      </button>

      {/* Jump */}
      <button
        className={`text-md font-semibold border-4 p-4 rounded-full h-[40px] flex items-center justify-center font-optician uppercase ${
          isPaused || isGameOver
            ? "text-gray-400 bg-gray-200 border-gray-400 cursor-not-allowed"
            : "text-red-500 bg-red-100 hover:text-white hover:bg-red-500 border-red-800"
        }`}
        onClick={() => GameActions.jump?.()}
        disabled={isPaused || isGameOver}
      >
        Jump
      </button>

      {/* Rope */}
      <div
        className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-4 ${
          ropeDisabled || isPaused || isGameOver
            ? "bg-gray-200 border-gray-400 cursor-not-allowed"
            : "bg-red-500 border-green-800"
        }`}
        onClick={() => {
          if (!ropeDisabled && !isPaused && !isGameOver) {
            GameActions.rope?.();
          }
        }}
        style={{
          cursor:
            ropeDisabled || isPaused || isGameOver ? "not-allowed" : "pointer",
        }}
      >
        {/* Green overlay for the timer */}
        <div
          // className="absolute left-0 bottom-0 w-full bg-green-500"
          className={`absolute left-0 bottom-0 w-full ${
            isPaused || isGameOver ? "bg-gray-200" : "bg-green-500"
          }`}
          style={{
            height: `${Math.max(0, (ropeTimer / 3) * 40)}px`, // Dynamically set height based on ropeTimer
            transition: "height 0.1s ease",
          }}
        />
        {/* Rope Icon */}
        <Image
          src="/sprites/ui/rope-icon.png"
          alt="Rope Icon"
          width={20}
          height={20}
          className={`absolute inset-0 m-auto z-10 ${
            ropeDisabled || isPaused || isGameOver ? "opacity-50" : ""
          }`}
        />
      </div>

      {/* Shoot Button */}
      <button
        className={`text-xl font-semibold border-4 p-4 rounded-full h-[40px] flex items-center justify-center ${
          disabledShoot
            ? "text-gray-400 bg-gray-200 border-gray-400 cursor-not-allowed"
            : "text-orange-500 bg-orange-100 hover:text-white hover:bg-orange-500 border-orange-800"
        }`}
        onClick={() => GameActions.shoot?.()}
        disabled={disabledShoot}
      >
        <Image
          src="/sprites/ui/arrow-icon.png"
          alt="Shoot Icon"
          width={15}
          height={15}
          className={`${disabledShoot ? "opacity-50" : ""}`}
        />{" "}
        <span className="text-lg ml-2 opacity-50">{arrowCount}</span>
      </button>

      {/* Toggle Music Button */}
      <button
        className="text-xl font-semibold border-4 p-2 rounded-lg text-gray-500 hover:text-white bg-gray-100 hover:bg-gray-500 border-gray-800 flex gap-2 justify-center items-center h-[40px]"
        onClick={handleToggleMusic}
      >
        {isMusicMuted ? (
          <>
            <VolumeOff className="size-4" />
            {/* Music */}
          </>
        ) : (
          <>
            <Volume2 className="size-4" />
            {/* Music */}
          </>
        )}
      </button>
    </div>
  );
}
