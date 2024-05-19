'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
interface OnBoardUserProps {
  name?: string;
  avatar?: string;
  background: string;
}

export function OnboardUser({ name, avatar, background }: OnBoardUserProps) {
  return (
    <div
      className={cn(
        'relative',
        'w-3/4',
        'h-[25em]',
        'rounded-xl',
        'bg-gradient-to-b',
        // 'from-[#ed2681]',
        // 'to-[#841396]',
        'border',
        'border-black',
        'shadow-lg',
        'overflow-hidden'
      )}
      style={{
        backgroundColor: background,
      }}
    >
      <div className="flex flex-wrap justify-between items-center px-8 pt-8 pb-4">
        <div className="text-xl text-white flex-1 overflow-hidden">
          <div className="break-words">{name}</div>
        </div>
        <Image src="/assets/chip.png" width={40} height={50} alt="" className="self-end" />
      </div>
      {avatar && (
        <div className="flex justify-center">
          <Image src={avatar} width={240} height={240} alt="" />
        </div>
      )}
      <div className="bg-[#F1F1F0] absolute bottom-0 w-full h-[80px]">
        <div className="w-full h-full flex items-center justify-between p-8">
          <Image src="/assets/logo-title-purple.png" width={100} height={100} alt={''} />
        </div>
      </div>
    </div>
  );
}
