'use client';

import Image from 'next/image';

export function BitTab1({tabState} : {tabState:any}) {
  return (
		<div className={`flex flex-col items-center gap-2 ${tabState === 'tab1' ? 'block' : 'hidden'}`}
			style={{ 
				backgroundImage: `url('/assets/bg-how-to-get.png')`,
				minHeight: '30rem'
			}}
		>
			<div className="rounded-xl shadow-inner m-2 mt-2 bg-indigoBlue">
				<div className="flex items-center gap-2 h-full p-5">
					<div className='text-white font-bold'>
						Every 10 Coin Widthdraw
					</div>
					<Image src="/assets/bit-arrow-right.png" width={20} height={30} alt={''} />
					<div className="text-white">
						You Got 1 Bits
					</div>
				</div>
			</div>

			<p className='text-white'>OR</p>

			<div className="rounded-xl shadow-inner m-2 mt-2 bg-[#5D24C5]">
				<div className="flex items-center gap-2 h-full p-5">
					<div className='text-white font-bold'>
						Collect Bits by Joining Our Future Events Follow @8bit.superstore
					</div>
				</div>
			</div>
		</div>
  );
}
