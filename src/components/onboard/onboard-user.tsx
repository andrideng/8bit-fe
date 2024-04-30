'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
interface CardUserProps {
  name: string;
  id: string;
  avatar: string;
  background: string;
}

export function OnboardUser({ chars, name } : { chars:any, name:any }) {
  return (
    <div
      className={cn(
        'relative',
        'w-3/4',
        'h-[25em]',
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
      <div className="flex justify-between items-center px-8 pt-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl text-white">{name}</div>
        </div>
        <div className="flex gap-4 items-start justify-between">
          <Image src="/assets/chip.png" width={40} height={50} alt={''} />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={chars.path} width={240} height={240} alt='' />
      </div>
      <div className="bg-[#F1F1F0] absolute bottom-0 w-full h-[80px]">
        <div className="w-full h-full flex items-center justify-between p-8">
          <Image src="/assets/logo-title-purple.png" width={100} height={100} alt={''} />
        </div>
      </div>
    </div>
  );
}
