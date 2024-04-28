import { CardUser } from '@/components/card/card-user';
import { Card, CardContent } from '@/components/ui/card';
import { BitTitle } from '@/components/bit/bit-title';
import { SwipeStart } from '@/components/card/swipe-start';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function CardPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="p-8 w-full mt-8">
        <BitTitle />
      </div>
      <div className="p-8 pt-0 w-full h-full">
        <CardUser />
      </div>
    </div>
  );
}
