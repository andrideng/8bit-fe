'use client';

import { CardUser } from '@/components/card/card-user';
import { CardDraw } from '@/components/card/card-draw';
import { Card } from '@/components/ui/card';
import { CardSetting } from '@/components/card/card-setting';
import { CardWallet } from '@/components/card/card-wallet';
import { CardTransaction } from '@/components/card/card-transaction';
import { SwipeStart } from '@/components/card/swipe-start';
import useBanner from '@/hooks/banner/use-banner';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCallback, useState } from 'react';

export default function CardPage() {
  const { banners } = useBanner();
  const [activeIndex, setActiveIndex] = useState(0);

  const [flipPosition, setFlipPosition] = useState(0);

  const onChangeFlip = useCallback((position: number) => {
    // position is range from 0 to 100
    // convert position to degree
    if (position === 0) {
      setActiveIndex(0);
    }
    const degree = (position * 180) / 100;
    setFlipPosition(degree);
    if (position === 100) {
      setActiveIndex(1);
    }
  }, []);

  const convertDefreeToPosition = useCallback((degree: number) => {
    return (degree * 100) / 180;
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      {banners && banners?.length > 0 && (
        <div className="w-full mt-4 px-2">
          <Carousel className="w-full">
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/3">
                  <Card className="w-full max-h-96 p-0 flex items-center justify-center rounded-xs">
                    <Image
                      src={banner?.image}
                      width="235"
                      height="80"
                      alt={banner?.description || 'Banner Image'}
                      loader={({ src }) => src}
                      layout="contain"
                      unoptimized
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}

      <div className="p-8 w-full">
        <CardWallet onClickTransaction={setActiveIndex} stateIndex={activeIndex} />
        <div
          className="w-full relative transition-opacity"
          style={{ opacity: activeIndex === 0 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          {activeIndex === 0 && (
            <div className="relative w-full" style={{ perspective: '1000px' }}>
              <div
                className="w-full h-full"
                style={{
                  transform: `rotateY(${flipPosition}deg)`,
                  transition: 'transform 0.5s',
                }}
              >
                <CardUser action={true} onSetting={setActiveIndex} />
              </div>
            </div>
          )}
        </div>
        <div
          className="w-full relative transition-opacity"
          style={{ opacity: activeIndex === 1 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          {activeIndex === 1 && <CardDraw />}
        </div>
        <div
          className="w-full relative transition-opacity"
          style={{ opacity: activeIndex === 2 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          {activeIndex === 2 && <CardTransaction />}
        </div>
        <div
          className="w-full relative transition-opacity"
          style={{ opacity: activeIndex === 3 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          {activeIndex === 3 && <CardSetting onSetting={setActiveIndex} />}
        </div>
      </div>

      <div className="p-8 w-full">
        <SwipeStart onChange={onChangeFlip} position={convertDefreeToPosition(flipPosition)} />
      </div>
    </div>
  );
}
