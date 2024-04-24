import { COOKIES_ACCESS_TOKEN } from '@/lib/constants';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { FormOtp } from '@/components/auth/form-otp';

export default function Login() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has(COOKIES_ACCESS_TOKEN);

  if (isLoggedIn) {
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="space-y-1">
        <div className="font-bold text-4xl uppercase text-white">This is your</div>
        <Image src="/assets/logo-title.png" alt="logo" width={250} height={250} />
      </div>
      <div className="px-4 w-full">
        <Input placeholder="Email / Phone Number" />
      </div>
      <div className="space-y-2 flex flex-col w-full px-4">
        <FormOtp />
        <Button variant="secondary">Sign in with Google</Button>
      </div>
    </div>
  );
}
