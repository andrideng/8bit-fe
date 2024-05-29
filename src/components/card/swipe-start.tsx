'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ArrowRightIcon from '../icons/arrows-right';
import ArrowLeftIcon from '../icons/arrows-left';

import { useSwipeable } from 'react-swipeable';

interface SwipeStartProps {
  position: number;
  onChange: (position: number) => void;
}

function findLeft(element: HTMLDivElement | null) {
  if (!element) return 0; // Add null check here
  var rec = element.getBoundingClientRect();
  return rec.left + window.scrollX;
}

export const SwipeStart: React.FC<SwipeStartProps> = ({ position, onChange }) => {
  const [overlayPosition, setOverlayPosition] = useState(0);
  const [swipeComplete, setSwipeComplete] = useState(false);

  useEffect(() => {
    setOverlayPosition(position);
  }, [position]);

  const parent = useRef<HTMLDivElement | null>(null);

  const reset = useCallback(() => {
    setSwipeComplete(false);
    setOverlayPosition(0);
    onChange(0);
  }, [onChange]);

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (swipeComplete) return;
      const buttonWidth = parent.current?.offsetWidth || 0;
      if (data.velocity > 0.5) {
        setOverlayPosition(100); // Set position to 100%
        onChange(100);
        setSwipeComplete(true);
        setTimeout(() => {
          console.log('swipe done');
        }, 100);
      } else {
        const offsetLeft = findLeft(parent.current);
        const startPos = Math.abs(data.initial[0] - offsetLeft);
        if (
          startPos <= 100 &&
          (data.event.type === 'touchend'
            ? // @ts-ignore
              data.event?.changedTouches[0].clientX
            : // @ts-ignore
              data.event?.offsetX) >
            0.5 * buttonWidth
        ) {
          setOverlayPosition(100); // Set position to 100%
          onChange(100);
          setSwipeComplete(true);
          setTimeout(() => {
            console.log('swipe done');
          }, 100);
        } else setOverlayPosition(0);
      }
    },
    onSwiping: (data) => {
      if (swipeComplete) return;
      const buttonWidth = parent.current?.offsetWidth || 0;
      const offsetLeft = findLeft(parent.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);
      if (startPos <= 100) {
        if (data.event.type && data.event.type === 'touchmove') {
          // @ts-ignore
          const newPosition = ((data.event.touches[0].clientX - offsetLeft) / buttonWidth) * 100;
          if (newPosition > 0 && newPosition <= 100) {
            setOverlayPosition(Number(newPosition.toFixed(0)));
            onChange(Number(newPosition.toFixed(0)));
          }
        } else {
          // @ts-ignore
          const newPosition = (data.event.offsetX / buttonWidth) * 100;
          if (newPosition > 0 && newPosition <= 100) {
            setOverlayPosition(Number(newPosition.toFixed(0)));
            onChange(Number(newPosition.toFixed(0)));
          }
        }
      }
    },
    delta: 10,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      ref={(t) => {
        handlers.ref(t);
        parent.current = t;
      }}
      className={cn(
        swipeComplete ? 'bg-[#920A48]' : 'bg-white',
        'shadow-inner',
        'w-full',
        'peer',
        'inline-flex',
        'h-12',
        'shrink-0',
        'items-center',
        'rounded-full',
        'border-2',
        'border-transparent',
        'transition-colors',
        'p-1',
        'relative',
        'overflow-hidden'
      )}
    >
      <div
        style={{
          left: `${overlayPosition}%`, // Add % here
          transition: 'left 0.1s',
          transform: `translateX(-${overlayPosition}%)`,
        }}
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
          'justify-center',
          'absolute'
        )}
      >
        {swipeComplete ? (
          <ArrowLeftIcon color="#B90F5D" onClick={reset} />
        ) : (
          <ArrowRightIcon color="#B90F5D" />
        )}
      </div>

      <div className={cn(
        'w-full',
        'uppercase',
        'font-black',
        'text-md',
        'px-2',
        swipeComplete ? 'text-left text-[#C4266E]' : 'text-[#C9C2C5] text-right',
      )}>
        {swipeComplete ? 'Swipe to reset' : 'Swipe to start'}
      </div>
    </div>
  );
};
