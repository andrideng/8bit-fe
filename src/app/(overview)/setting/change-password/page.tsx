import Image from 'next/image';
import ChangePassword from '@/components/setting/change-password';

export default function ChangPasswordPage() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-16 w-full h-full">
      <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <ChangePassword />
      </div>
    </div>
  );
}
