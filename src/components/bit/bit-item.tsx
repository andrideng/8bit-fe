'use client';

import Image from 'next/image';

export function BitItem({ image, point, itemName } : {image:any, point:any, itemName:any}) {
  return (
    <div className="rounded-xl shadow-inner w-1/2">
			<div className="rounded-xl shadow-inner bg-[#856BC6]">
				<div className="flex items-center justify-center gap-2 h-full p-5 min-h-44">
					<Image src={image} width={80} height={50} alt={''} />
				</div>
			</div>

			<div className="rounded-xl shadow-inner pr-2 mt-2 h-full bg-indigoBlue">
				<div className="flex justify-center items-center gap-2 p-2 h-full">
					<div className="text-xl font-semibold text-white">
						{point}
					</div>
					<Image src="/assets/bitscoin.png" width={32} height={32} alt="8bit coin" />
				</div>
			</div>
			<div className="rounded-xl shadow-inner pr-2 h-full bg-[#6C22A8]">
				<div className="flex justify-center items-center gap-2 p-2 h-full">
					<div className="text-sm font-normal text-white">
						{itemName}
					</div>
				</div>
			</div>
		</div>
  );
}
