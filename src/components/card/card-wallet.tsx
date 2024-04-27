'use client';

import Image from 'next/image';

export function CardWallet() {
  return (
    <div className="flex w-full items-center justify-center gap-2 bg-white rounded-xl shadow-xl p-2">
      <div className="rounded-xl shadow-inner pr-2 h-full">
        <div className="flex items-center pr-2 gap-2 h-full">
          <div className="bg-fuchsia-500 rounded-xl px-4 py-2 h-full">
            <Image src="/assets/8bit-icon.png" width={15} height={15} alt="8bit coin" />
          </div>
          <div className="text-xl font-semibold">
            999
            <span className="text-sm font-normal ml-1">coins</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-inner pr-2 h-full bg-indigoBlue">
        <div className="flex items-center pr-2 gap-2 h-full">
          <div className="bg-midnightViolet rounded-xl p-2 h-full">
            <Image src="/assets/star-icon.png" width={32} height={32} alt="8bit coin" />
          </div>
          <div className="text-xl font-semibold text-white">
            270
            <span className="text-sm font-normal ml-1">bits</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-inner p-2 bg-indigoBlue">
        <Image src="/assets/history-icon.png" width={28} height={28} alt="8bit coin" />
      </div>
    </div>
  );
}