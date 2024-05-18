'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useTransaction from '@/hooks/user/use-transaction';

interface CardUserProps {
  name: string;
  id: string;
  avatar: string;
  background: string;
}

export function CardTransaction() {
  const { transaction } = useTransaction();
  
  return (
    <div
      className={cn(
        'relative',
        'w-full',
        'h-[503px]',
        'rounded-xl',
        'bg-midnightViolet',
        'border',
        'border-black',
        'shadow-lg',
        'overflow-hidden'
      )}
    >
      <div className="flex flex-col gap-2 p-4 h-full">
        <div className="font-black text-4xl text-white uppercase">recent</div>
        <div className="font-black text-4xl text-white uppercase">transaction</div>
        <div className="shadow-inner p-2 bg-indigoBlue rounded-xl flex-1">
          <div className="h-full flex flex-col items-center gap-2 overflow-y-auto">
            {[1, 10, 50, 100].map((item, index) => (
              <div
                key={index}
                className="flex gap-2 justify-between items-end p-2 rounded-xl text-[#522E91] w-full bg-midnightViolet shadow-xl"
              >
                <div className="flex gap-2 items-end">
                  <div className="rounded-lg bg-[#80FF00] px-4 py-2 font-black text-4xl">+</div>
                  <div className="text-white text-5xl font-black">{item}</div>
                  <div className="rounded-full bg-[#8F00FF] w-12 h-12 flex items-center justify-center">
                    <Image src="/assets/8bit-icon.png" width={15} height={15} alt="8bit coin" />
                  </div>
                </div>
                <div className="text-white">08 / 05</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
