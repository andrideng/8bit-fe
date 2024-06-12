'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useWithdraw from '@/hooks/withdraw/use-withdraw';
interface CardUserProps {
  name: string;
  id: string;
  avatar: string;
  background: string;
}

export function CardDraw() {
  const { data, isLoading, isFetched } = useWithdraw();
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
      <div className="flex flex-col gap-2 w-full py-12 px-8 h-full items-center justify-center">
        {[1, 10, 50, 100].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 justify-between items-center py-2 px-8 rounded-xl text-[#522E91] cursor-pointer"
            style={{
              backgroundImage: 'linear-gradient(180deg, #00ffc2 0%, #00e0ff 45.41%)',
            }}
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
