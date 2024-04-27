"use client";

import React, { useState } from 'react';

export const SwipeStart: React.FC = () => {
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Adjust this factor to control the sensitivity of the sliding movement
  const sensitivityFactor = 0.5;

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsFinished(false); // Reset finish state when dragging starts
  };

  const handleMove = (clientX: number) => {
    if (!isFinished) {
      setEndX(clientX);
    }
  };

  const handleEnd = () => {
    if (startX !== null && endX !== null) {
      const deltaX = endX - startX;
      const sensitivityAdjustedDeltaX = deltaX * sensitivityFactor;
      if (sensitivityAdjustedDeltaX > 50) {
        // Swipe from left to right
        setIsFinished(true); // Set finish state when dragging ends at the end position
      }
    }
    // Reset swipe values
    setStartX(null);
    setEndX(null);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleStart(e.clientX);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="bg-white w-full peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <div
        className="bg-black pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        style={{
          transform: `translateX(${isFinished ? 'calc(100% - 12px)' : endX ? Math.max(endX - startX!, 0) : 0}px)`,
        }}
      ></div>
    </div>
  );
};
