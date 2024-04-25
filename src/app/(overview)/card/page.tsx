import { CardUser } from '@/components/card/card-user';
import { Card, CardContent } from '@/components/ui/card';

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
        <CardUser />
      </div>
    </div>
  );
}
