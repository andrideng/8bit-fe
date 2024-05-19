import { COOKIES_ACCESS_TOKEN } from '@/lib/constants';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { FormLogin } from '@/components/auth/form-login';

export default function Login() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.has(COOKIES_ACCESS_TOKEN);

  if (isLoggedIn) {
    redirect('/card');
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="space-y-1">
        <div className="font-bold text-4xl uppercase text-white">This is your</div>
        <Image src="/assets/logo-title.png" alt="logo" width={250} height={250} />
      </div>
      <FormLogin />
    </div>
  );
}
