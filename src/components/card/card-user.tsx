'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useUser from '@/hooks/user/use-user';
import useSignOut from '@/hooks/auth/use-logout';

export function CardUser() {
  const { user } = useUser();

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
      <div className="flex justify-between items-center px-8 py-12">
        <div className="flex flex-col gap-1">
          <div className="text-xl text-white">Erando Putra</div>
          <div className="text-lg text-white">1234567890</div>
        </div>
        <div className="flex gap-4 items-start justify-between">
          <Image src="/assets/logo-card.png" width={20} height={50} alt={''} />
          <Image src="/assets/chip.png" width={40} height={50} alt={''} />
        </div>
      </div>
      <div
        className={cn(
          "bg-[url('/assets/char-image.png')]",
          'w-full',
          'h-[500px]',
          'bg-cover',
          'bg-no-repeat',
          'bg-center',
          'absolute',
          'top-1/4'
        )}
      ></div>
      <div className="absolute bottom-0 w-full h-[130px] flex flex-col items-start justify-between">
        <div className="flex items-center gap-2 px-4 mb-2">
          <div className="rounded-lg bg-[#ED2681] p-3 cursor-pointer">
            <Image src="/assets/pencil.png" width={20} height={20} alt={''} />
          </div>
          <div className="rounded-lg bg-[#ED2681] p-3 cursor-pointer" onClick={useSignOut()}>
            <Image src="/assets/logout.png" width={25} height={25} alt={''} />
          </div>
        </div>
        <div className="bg-[#F1F1F0] w-full h-full flex items-center justify-between p-4">
          <Image src="/assets/logo-title-purple.png" width={150} height={150} alt={''} />
          <Image src="/assets/card-japan.png" width={100} height={100} alt={''} />
        </div>
      </div>
    </div>
  );
}
