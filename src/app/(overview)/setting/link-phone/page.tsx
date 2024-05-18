import Image from 'next/image';
import LinkPhone from '@/components/setting/link-phone';

export default function LinkPhonePage() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-16 w-full h-full">
      <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="space-y-1 text-center">
          <div className="font-bold text-4xl uppercase text-white">Link Your Phone</div>
        </div>
        <LinkPhone />
      </div>
    </div>
  );
}
