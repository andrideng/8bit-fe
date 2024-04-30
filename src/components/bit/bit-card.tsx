'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BitItem } from './bit-item';
import { BitTab1 } from './bit-tab-1';

export function BitCard() {
	const [tabState, setTabState] = useState("tab1");

  return (
    <div>
			<ul className="grid grid-flow-col text-center text-gray-500 p-1">
				<li>
					<a href="#" 
						onClick={() => setTabState('tab1')}
						className={`flex justify-center rounded-tl-lg rounded-tr-lg border-l border-t border-r py-4 ${tabState === 'tab1' ? 'bg-[#522E91] border-[#522E91] text-white' : 'bg-white'}`}>
						HOW TO GET
						<small>bits</small>
					</a>
				</li>
				<li>
					<a href="#" 
						onClick={() => setTabState('tab2')}
						className={`flex justify-center rounded-tl-lg rounded-tr-lg border-l border-t border-r py-4 ${tabState === 'tab2' ? 'bg-[#522E91] border-[#522E91] text-white' : 'bg-white'}`}>
						REDEEM PRIZE
					</a>
				</li>
			</ul>
			<div className="bg-[#522E91] shadow border border-[#522E91] p-8 text-gray-700 rounded-lg -mt-2">
				{/* tab 1 */}
				<BitTab1 tabState={tabState} />

				{/* tab 2 */}
				<div className={`flex items-start gap-2 p-2 ${tabState === 'tab2' ? 'block' : 'hidden'}`}
					style={{ 
						backgroundImage: `url('/assets/bg-purple-grad.png')`,
						minHeight: '30rem'
					}}
				>
					<BitItem image={'/assets/items/item1.png'} point={400} itemName={'item1'} />
					<BitItem image={'/assets/items/item2.png'} point={450} itemName={'item2'} />
				</div>
			</div>
		</div>
  );
}
