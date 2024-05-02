'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import { MenuBar } from './menubar';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [backgroundImage, setBackgroundImage] = useState<string>('/assets/bg-pink.png');

  useEffect(() => {
    if (pathname.includes('auth')) {
      setBackgroundImage("/assets/bg-login.png");
    } else if (pathname.includes('onboard')) {
      setBackgroundImage("/assets/bg-onboard.png");
    } else if (pathname.includes('bit')) {
      setBackgroundImage('/assets/bg-purple.png');
    } else {
      setBackgroundImage('/assets/bg-pink.png');
    }
  }, [pathname]);

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
          'h-full',
          'overflow-y-auto'
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#47176E] h-[100px] overflow-hidden">
        <MenuBar />
      </div>
    </div>
  );
}
