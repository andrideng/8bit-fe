'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import { MenuBar } from './menubar';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [backgroundImage, setBackgroundImage] = useState<string>("/assets/bg-pink.png");

  useEffect(() => {
    if (pathname.includes('auth')) {
      setBackgroundImage("/assets/bg-login.png");
    } else if (pathname.includes('bit')) {
      setBackgroundImage("/assets/bg-purple.png");
    } else {
      setBackgroundImage("/assets/bg-pink.png");
    }
  }, [pathname]);

  return (
    <main
      className={cn(
        'bg-cover',
        'bg-no-repeat',
        'bg-center',
        'flex flex-col mx-auto flex-grow',
        'min-h-screen',
        'max-w-[430px]',
        'items-start',
        'justify-between',
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
      <MenuBar />
    </main>
  );
}
