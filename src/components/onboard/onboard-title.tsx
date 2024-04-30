'use client';

import Image from 'next/image';

export function OnboardTitle() {
  return (
    <div className="flex justify-center w-full items-center justify-center p-2 uppercase text-center">
			<div className='text-5xl text-white font-bold'>
				ok, now custom you bit
				<span className="text-5xl font-normal ml-1 text-white">wallet</span>
			</div>
    </div>
  );
}
