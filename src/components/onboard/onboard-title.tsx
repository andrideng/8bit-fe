'use client';

import Image from 'next/image';

export function OnboardTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full items-center justify-center p-2 uppercase text-center">
      {children}
    </div>
  );
}
