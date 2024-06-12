'use client';

import { MerchandiseItem } from '@/hooks/merchandise/use-merchandise';
import Image from 'next/image';

interface BitItemDetailProps {
  item: MerchandiseItem;
}

export function BitItemDetail({ item }: BitItemDetailProps) {
  return (
    <div className="rounded-xl shadow-inner w-full space-y-4">
      <div className="rounded-xl shadow-inner bg-[#6C22A8] flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 h-full p-5 min-h-44 w-full">
          <Image src={item.image} width={80} height={50} alt={''} />
        </div>
        <div className="flex justify-center items-center gap-2 p-2 h-full w-full">
          <div className="text-xl font-semibold text-white">{item.points}</div>
          <Image src="/assets/bitscoin.png" width={32} height={32} alt="8bit coin" />
        </div>
      </div>
      <div className="rounded-xl shadow-inner px-4 py-2 h-full bg-indigoBlue font-black uppercase text-xl text-[#ED2681]">
        Mark as whishlist
      </div>
      <div className="rounded-xl shadow-inner p-4 h-full bg-[#6C22A8] text-white space-y-2">
        <div className="text-lg font-normal">{item.name}</div>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
}
