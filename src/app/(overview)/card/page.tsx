'use client';

import { CardUser } from '@/components/card/card-user';
import { CardDraw } from '@/components/card/card-draw';
import { Card } from '@/components/ui/card';
import { CardSetting } from '@/components/card/card-setting';
import { CardWallet } from '@/components/card/card-wallet';
import { CardTransaction } from '@/components/card/card-transaction';
import { SwipeStart } from '@/components/card/swipe-start';
import useBanner from '@/hooks/banner/use-banner';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useCallback, useState } from 'react';

export default function CardPage() {
  const { banner } = useBanner();
  console.log(banner)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full mt-8">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-full h-16 p-0 flex items-center justify-center rounded-xs">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="p-8 w-full h-full">
        <CardWallet onClickTransaction={setActiveIndex} stateIndex={activeIndex} />
        {activeIndex === 0 && <CardUser action={true} onSetting={setActiveIndex} />}
        {activeIndex === 1 && <CardDraw />}
        {activeIndex === 2 && <CardTransaction />}
        {activeIndex === 3 && <CardSetting onSetting={setActiveIndex} />}
      </div>
      <div className="py-2 px-8 w-full h-full">
        <SwipeStart />
      </div>
    </div>
  );
}
