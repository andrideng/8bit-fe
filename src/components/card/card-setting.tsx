'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import useUser from '@/hooks/user/use-user';
import useSignOut from '@/hooks/auth/use-logout';
import { CHARACTER_VALUE } from '@/lib/constants';
import { useMemo } from 'react';
import Link from 'next/link';

const SETTING_MENU = [
  { key: 'setting/change-password', label: 'Change PIN', status: true },
  { key: 'setting/link-email', label: 'Link Email', status: true },

  { key: 'setting/link-phone', label: 'Link Phone', status: true },
  {
    key: 'onboard',
    label: 'Change Card Design',
    status: true,
  },
];

interface CardSettingProps {
  onSetting: (index: number) => void;
}

export function CardSetting({ onSetting }: CardSettingProps) {
  const { user } = useUser();
  const signout = useSignOut();

  console.log('user', user)

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
      <div className="px-8 py-12 w-full">
        <div className="uppercase text-sm text-[#FF4B9D] font-black">Your Profile</div>
        <div className="flex flex-col items-center w-full">
          {SETTING_MENU.map((item, index) => (
            <div key={index} className="flex justify-between w-full py-4 border-b">
              <div
                className={cn(
                  'text-white text-lg font-bold uppercase font-bold',
                  item.status ? 'text-opacity-100' : 'text-opacity-50'
                )}
              >
                {item.label}
              </div>
              <Link
                className="cursor-pointer flex items-center justify-center"
                href={`/${item.key}`}
              >
                <Image src="/assets/next.png" width={13} height={13} alt={''} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[130px] flex flex-col items-start justify-between">
        <div className="flex items-center gap-2 px-4 mb-2">
          <div className="rounded-lg bg-[#ED2681] p-3 cursor-pointer" onClick={() => onSetting(0)}>
            <Image src="/assets/pencil.png" width={20} height={20} alt={''} />
          </div>
          <div className="rounded-lg bg-[#ED2681] p-3 cursor-pointer" onClick={signout}>
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
