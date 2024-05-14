'use client';

import { CardUser } from '@/components/card/card-user';
import { CardDraw } from '@/components/card/card-draw';
import { Card, CardContent } from '@/components/ui/card';
import { CardWallet } from '@/components/card/card-wallet';
import { CardTransaction } from '@/components/card/card-transaction';
import { SwipeStart } from '@/components/card/swipe-start';
import useUser from '@/hooks/user/use-user';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useCallback, useState } from 'react';

export default function CardPage() {
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
        {activeIndex === 0 && <CardUser action={true} />}
        {activeIndex === 1 && <CardDraw />}
        {activeIndex === 2 && <CardTransaction />}
      </div>
      <div className="py-2 px-8 w-full h-full">
        <SwipeStart />
      </div>
    </div>
  );
}
