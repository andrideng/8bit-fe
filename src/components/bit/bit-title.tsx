'use client';

import Image from 'next/image';

export function BitTitle() {
  return (
    <div className="flex flex-col w-full items-center justify-center p-2">
			<div className='text-5xl text-white font-bold'>
				YOU HAVE
			</div>
      <div className="text-5xl font-bold text-royalBlue">
        270
        <span className="text-sm font-normal ml-1 text-white">BITS</span>
			</div>
    </div>
  );
}
