'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useWallet from '@/hooks/user/use-wallet';
interface CardUserProps {
  name: string;
  id: string;
  avatar: string;
  background: string;
}

export function CardDraw() {
  const { wallet } = useWallet();

  if (!wallet) {
    return null;
  }

  return (
    <div
      className={cn(
        'relative',
        'w-full',
        'h-[503px]',
        'rounded-xl',
        'bg-gradient-to-b',
        'from-[#ed2681]',
        'to-[#841396]',
        'border',
        'border-black',
        'shadow-lg',
        'overflow-hidden'
      )}
    >
      <div className="flex flex-col gap-4 w-full py-12 px-8 h-full items-center justify-center">
        {[5, 10, 50, 100].map((item, index) => (
          <div
            key={index}
            className={cn(
              'grid grid-cols-2 justify-between items-center py-2 px-8 rounded-xl cursor-pointer',
              wallet?.coin < item && 'text-[#522E91] bg-[#00FFC2]',
              wallet?.coin > item && item === 100
                ? 'text-[#E2E419] bg-[#EC1F7D]'
                : 'text-[#BDBDBD] bg-[#A3A3A3]'
            )}
          >
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold">DRAW</div>
              <div className="text-sm">私をいてください</div>
            </div>
            <div className="text-5xl font-black text-center">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
