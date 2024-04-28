'use client';

import Image from 'next/image';

export function BitCard() {
  return (
    <div>
			<ul className="grid grid-flow-col text-center text-gray-500  p-1">
				<li>
					<a href="#page1" className="flex justify-center bg-[#522E91] rounded-tl-lg rounded-tr-lg border-l border-t border-r border-[#522E91] py-4 text-white">
						HOW TO GET
						<small>bits</small>
					</a>
				</li>
				<li>
					<a href="#page2" className="flex justify-center py-4">
						REDEEM PRIZE
					</a>
				</li>
			</ul>
			<div className="bg-[#522E91] shadow border border-[#522E91] p-8 text-gray-700 rounded-lg -mt-2">
				<div className="flex flex-col items-center gap-2"
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
			</div>
		</div>
  );
}
