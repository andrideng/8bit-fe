'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ArrowRightIcon from '../icons/arrows-right';
import ArrowLeftIcon from '../icons/arrows-left';

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
      className={cn(
        isFinished ? 'bg-[#920A48]' : 'bg-white',
        'shadow-inner',
        'w-full',
        'peer',
        'inline-flex',
        'h-12',
        'w-full',
        'shrink-0',
        'items-center',
        'rounded-full',
        'border-2',
        'border-transparent',
        'transition-colors',
        'p-1'
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <div
        className={cn(
          'bg-[#ED2681]',
          'cursor-pointer',
          'block',
          'h-10',
          'rounded-full',
          'shadow-lg',
          'p-4',
          'flex',
          'items-center',
          'justify-center'
        )}
        style={{
          transform: `translateX(${
            isFinished ? 'calc(100% - 12px)' : endX ? Math.max(endX - startX!, 0) : 0
          }px)`,
        }}
      >
        {isFinished ? <ArrowLeftIcon color="#B90F5D" /> : <ArrowRightIcon color="#B90F5D" />}
      </div>
    </div>
  );
};
