'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useUser from '@/hooks/user/use-user';
import useSignOut from '@/hooks/auth/use-logout';
import { CHARACTER_VALUE, COLOR_VALUE } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface CardUserProps {
  action: boolean;
  onSetting: (index: number) => void;
}

export function CardUser({ action, onSetting }: CardUserProps) {
  const router = useRouter();
  const { user } = useUser();

  const [background, setBackground] = useState<string | null>(null);

  if (user?.card === null) {
    router.push('/onboard');
  }

  const signout = useSignOut();

  const avatar = useMemo(() => {
    const card = user?.card;
    if (card?.avatar) {
      const char = CHARACTER_VALUE.find((char) => char.value === card.avatar);
      if (char) {
        return char.image;
      }
    }

    return `/assets/char-image.png`;
  }, [user]);

  useEffect(() => {
    const card = user?.card;
    if (card?.color) {
      const background = COLOR_VALUE.find((color) => color.value === card.color);
      if (background) {
        setBackground(`${background.color_code}`);
      }
    }
  }, [user]);

  return (
    <div
      className={cn(
        'relative',
        'w-full',
        'h-[503px]',
        'rounded-xl',
        'border',
        'border-black',
        'shadow-lg',
        'overflow-hidden'
      )}
      style={{
        background: background ? background : '',
        backgroundImage: background ? '' : 'linear-gradient(to bottom, #ed2681, #841396)',
      }}
    >
      <div className="flex justify-between items-center px-8 py-12">
        <div className="flex flex-col gap-1">
          <div className="text-xl text-white">{user?.full_name}</div>
          {/* <div className="text-lg text-white">1234567890</div> */}
        </div>
        <div className="flex gap-4 items-start justify-between">
          <Image src="/assets/logo-card.png" width={20} height={50} alt={''} />
          <Image src="/assets/chip.png" width={40} height={50} alt={''} />
        </div>
      </div>
      <div
        className={cn(
          'w-full',
          'h-[500px]',
          'bg-cover',
          'bg-no-repeat',
          'bg-center',
          'absolute',
          'top-1/4'
        )}
      >
        <Image src={avatar} layout="fill" objectFit="contain" alt={''} />
      </div>
      <div className="absolute bottom-0 w-full h-[130px] flex flex-col items-start justify-between">
        {action && (
          <div className="flex items-center gap-2 px-4 mb-2">
            <div
              className="rounded-lg bg-[#ED2681] p-3 cursor-pointer"
              onClick={() => onSetting(3)}
            >
              <Image src="/assets/pencil.png" width={20} height={20} alt={''} />
            </div>
            <div className="rounded-lg bg-[#ED2681] p-3 cursor-pointer" onClick={signout}>
              <Image src="/assets/logout.png" width={25} height={25} alt={''} />
            </div>
          </div>
        )}
        <div className="bg-[#F1F1F0] w-full h-full flex items-center justify-between p-4">
          <Image src="/assets/logo-title-purple.png" width={150} height={150} alt={''} />
          <Image src="/assets/card-japan.png" width={100} height={100} alt={''} />
        </div>
      </div>
    </div>
  );
}
