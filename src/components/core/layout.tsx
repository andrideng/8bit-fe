'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import { MenuBar } from './menubar';
import { useUserState } from '@/state/user-state';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { user } = useUserState();
  const pathname = usePathname();
  const [backgroundImage, setBackgroundImage] = useState<string>('/assets/bg-pink.png');

  useEffect(() => {
    if (pathname.includes('auth')) {
      setBackgroundImage('/assets/bg-login.png');
    } else if (pathname.includes('onboard')) {
      setBackgroundImage('/assets/bg-onboard.png');
    } else if (pathname.includes('bit')) {
      setBackgroundImage('/assets/bg-purple.png');
    } else if (pathname.includes('setting')) {
      setBackgroundImage('/assets/bg-setting.png');
    } else {
      setBackgroundImage('/assets/bg-pink.png');
    }
  }, [pathname]);

  // menu bar show if its not on auth page or onboard page
  const hasMenuBar =
    !pathname.includes('auth') && !pathname.includes('onboard') && !pathname.includes('setting');

  return (
    <div
      className={cn(
        'bg-cover',
        'bg-no-repeat',
        'bg-center',
        'mx-auto',
        'justify-between',
        'min-h-screen',
        'max-w-[430px]',
        'relative'
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={cn(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'w-full',
          hasMenuBar ? 'h-[calc(100vh-100px)]' : 'h-full',
          'overflow-y-auto'
        )}
      >
        {children}
      </div>
      {hasMenuBar && (
        <div className="absolute inset-x-0 bottom-0 bg-[#47176E] h-[100px] overflow-hidden">
          <MenuBar />
        </div>
      )}
    </div>
  );
}
