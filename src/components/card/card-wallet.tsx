'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import useWallet from '@/hooks/user/use-wallet';

interface CardWalletProps {
  stateIndex: number;
  onClickTransaction: (index: number) => void;
}

export function CardWallet({ stateIndex, onClickTransaction }: CardWalletProps) {
  const { wallet } = useWallet();

  const handleClickTransaction = useCallback(() => {
    if (stateIndex === 2) {
      onClickTransaction(0);
    }
    if (stateIndex === 0) {
      onClickTransaction(2);
    }
  }, [onClickTransaction, stateIndex]);

  return (
    <div className="flex w-full items-center justify-between gap-2 bg-white rounded-xl shadow-xl p-2">
      <div className="rounded-xl shadow-inner pr-2 h-full">
        <div className="flex items-center pr-2 gap-2 h-full">
          <div className="bg-fuchsia-500 rounded-xl px-4 py-2 h-full">
            <Image src="/assets/8bit-icon.png" width={15} height={15} alt="8bit coin" />
          </div>
          <div className="text-xl font-semibold">
            {wallet?.coin}
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
            {wallet?.point}
            <span className="text-sm font-normal ml-1">bits</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl shadow-inner p-2 bg-indigoBlue h-full cursor-pointer"
        onClick={handleClickTransaction}
      >
        <Image src="/assets/history-icon.png" width={28} height={28} alt="8bit coin" />
      </div>
    </div>
  );
}
