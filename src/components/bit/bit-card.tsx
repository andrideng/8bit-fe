'use client';

import { useState } from 'react';
import { BitItem } from './bit-item';
import { BitTab1 } from './bit-tab-1';
import { BitItemDetail } from './bit-item-detail';
import useMerchandise, { MerchandiseItem } from '@/hooks/merchandise/use-merchandise';

export function BitCard() {
  const [tabState, setTabState] = useState('tab1');
  const { data } = useMerchandise();

  const [detail, setDetail] = useState<MerchandiseItem | null>(null);

  const handleDetail = (item: MerchandiseItem) => {
    setDetail(item);
    setTabState('tab3');
  };
  return (
    <div>
      <ul className="grid grid-flow-col text-center text-gray-500 p-1">
        <li>
          <a
            href="#"
            onClick={() => setTabState('tab1')}
            className={`flex justify-center rounded-tl-lg rounded-tr-lg border-l border-t border-r py-4 ${
              tabState === 'tab1' ? 'bg-[#522E91] border-[#522E91] text-white' : 'bg-white'
            }`}
          >
            HOW TO GET
            <small>bits</small>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setTabState('tab2')}
            className={`flex justify-center rounded-tl-lg rounded-tr-lg border-l border-t border-r py-4 ${
              tabState === 'tab2' ? 'bg-[#522E91] border-[#522E91] text-white' : 'bg-white'
            }`}
          >
            REDEEM PRIZE
          </a>
        </li>
      </ul>
      <div className="bg-[#522E91] shadow border border-[#522E91] p-8 text-gray-700 rounded-lg -mt-2">
        {/* tab 1 */}
        <BitTab1 tabState={tabState} />

        {/* tab 2 */}
        <div
          className={`grid grid-cols-2 items-start gap-2 p-2 ${
            tabState === 'tab2' ? 'block' : 'hidden'
          }`}
          style={{
            backgroundImage: `url('/assets/bg-purple-grad.png')`,
            minHeight: '30rem',
          }}
        >
          {data?.map((item, index) => (
            <div onClick={() => handleDetail(item)} key={index}>
              <BitItem image={item.image} point={item.points} itemName={item.name} />
            </div>
          ))}
        </div>

        {/* detail items */}
        {detail && tabState === 'tab3' && (
          <div
            className="flex items-start gap-2 p-2"
            style={{
              backgroundImage: `url('/assets/bg-purple-grad.png')`,
              minHeight: '30rem',
            }}
          >
            <BitItemDetail item={detail} />
          </div>
        )}
      </div>
    </div>
  );
}
