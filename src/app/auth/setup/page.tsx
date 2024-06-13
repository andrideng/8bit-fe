'use client';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { BASE_API_URL } from '@/lib/constants';
import { useRouter } from 'next/router';

export default function ForgotPassword() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const onSubmit = useCallback(async () => {
    if (pin.length < 6) {
      toast.error('Invalid pin', {
        duration: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(BASE_API_URL + '/user/password', {
        password: pin,
        new_password: pin,
      });

      if (response.status === 200) {
        const { data } = response;
        const {message} = data;
        toast.success(message || 'Password updated', {
          duration: 3000,
        });
        router.push('/card');
      } else {
        const { data } = response;
        const {message} = data;
        toast.error(message || 'Something went wrong', {
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }, [pin, router]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="space-y-1 text-center">
        <div className="font-bold text-3xl uppercase text-white">
          Setup Your <br />
          New pin
        </div>
      </div>
      <div className="px-4 w-full space-y-2">
        <InputOTP maxLength={6}>
          <InputOTPGroup className="gap-1">
            <InputOTPSlot className="bg-white text-black rounded-md" index={0} />
            <InputOTPSlot className="bg-white text-black rounded-md" index={1} />
            <InputOTPSlot className="bg-white text-black rounded-md" index={2} />
            <InputOTPSlot className="bg-white text-black rounded-md" index={3} />
            <InputOTPSlot className="bg-white text-black rounded-md" index={4} />
            <InputOTPSlot className="bg-white text-black rounded-md" index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="space-y-2 flex flex-col w-full px-4">
        <Button variant="default">Next</Button>
      </div>
    </div>
  );
}
