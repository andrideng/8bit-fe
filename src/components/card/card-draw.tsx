'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useWallet from '@/hooks/user/use-wallet';
import axios from 'axios';
import { BASE_API_URL } from '@/lib/constants';
import { toast } from 'sonner';
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

  const handleClickDraw = async (value: number) => {
    try {
      const response = await axios.post(BASE_API_URL + '/v1/wallet/withdraw', {
        user_id: 1,
        location_id: 1,
        ref_id: 'unique_ref_id',
        coin: value,
        point: 0,
        nonce: 'ccd3e8d6-3f11-bd8f-1abf-912a5b4fdcbc',
      });

      if (response.status === 200) {
        const { data } = response;
        const { message } = data;
        toast.success(message || 'Withdraw Success', {
          duration: 3000,
        });
      } else {
        const { data } = response;
        const { message } = data;
        toast.error(message || 'Something went wrong', {
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  };

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
            onClick={() => handleClickDraw(item)}
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
