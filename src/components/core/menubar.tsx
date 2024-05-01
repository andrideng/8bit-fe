import React, { useMemo } from 'react';
import ChatIcon from '../icons/chat-icon';
import MyCardIcon from '../icons/mycard-icon';
import MyBitIcon from '../icons/mybit-icon';
import ComingSoonIcon from '../icons/coming-soon-icon';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import Link from 'next/link';

export function MenuBar() {
  const pathname = usePathname();

  const currentPath = useMemo(() => {
    if (pathname.includes('card')) {
      return 'card';
    } else if (pathname.includes('bit')) {
      return 'bit';
    } else if (pathname.includes('chat')) {
      return 'chat';
    } else {
      return 'home';
    }
  }, [pathname]);

  return (
    <div className="relative w-full px-4">
      <div className="grid grid-cols-4 h-[120px]">
        <div
          className="flex items-center justify-center h-full w-full rounded-t-xl p-1"
          style={{
            background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
          }}
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full'
            )}
          >
            <ComingSoonIcon color="#4C1379" />
          </div>
        </div>

        <Link
          href="/card"
          className="flex items-center justify-center h-full w-full rounded-t-xl p-1 cursor-pointer pb-0"
          style={{
            background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
          }}
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full',
              currentPath == 'card' && 'bg-[#EC1F7D]'
            )}
          >
            <MyCardIcon color={currentPath == 'card' ? '#DAD7D4' : '#4C1379'} />
            <p
              className={cn(
                'uppercase font-black text-center text-lg text-[#4c1379]',
                currentPath == 'card' ? 'text-[#DAD7D4]' : 'text-[#4c1379]'
              )}
            >
              My Card
            </p>
          </div>
        </Link>

        <Link
          href="/bit"
          className="flex items-center justify-center h-full w-full rounded-t-xl p-1 cursor-pointer pb-0"
          style={{
            background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
          }}
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full',
              currentPath == 'bit' && 'bg-[#EC1F7D]'
            )}
          >
            <MyBitIcon color={currentPath == 'bit' ? '#DAD7D4' : '#4C1379'} />
            <p
              className={cn(
                'uppercase font-black text-center text-lg text-[#4c1379]',
                currentPath == 'bit' ? 'text-[#DAD7D4]' : 'text-[#4c1379]'
              )}
            >
              My Bits
            </p>
          </div>
        </Link>

        <Link
          href="/chat"
          className="flex items-center justify-center h-full w-full rounded-t-xl p-1 cursor-pointer pb-0"
          style={{
            background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
          }}
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full',
              currentPath == 'chat' && 'bg-[#EC1F7D]'
            )}
          >
            <ChatIcon color={currentPath == 'chat' ? '#DAD7D4' : '#4C1379'} />
            <p
              className={cn(
                'uppercase font-black text-center text-lg text-[#4c1379]',
                currentPath == 'chat' ? 'text-[#DAD7D4]' : 'text-[#4c1379]'
              )}
            >
              CHAT US
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
