'use client';

import { Suspense } from 'react';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-16 w-full h-full">
      <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
