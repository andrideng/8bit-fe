'use client';

import { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import axios from '@/lib/axios';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';

import { BASE_API_URL } from '@/lib/constants';

export default function ChangePassword() {
  const router = useRouter();
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');

  const onSubmit = useCallback(async () => {
    if (!oldPin || !newPin) {
      toast.error('Pin is required', {
        duration: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(BASE_API_URL + '/user/password', {
        password: oldPin,
        new_password: newPin,
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
  }, [newPin, oldPin, router]);
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="px-4 w-full space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="text-white text-md uppercase font-black">old pin</div>
        </div>
        <InputOTP maxLength={6} value={oldPin} onChange={(oldpin) => setOldPin(oldpin)}>
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
      <div className="px-4 w-full space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="text-white text-md uppercase font-black">new pin</div>
        </div>
        <InputOTP maxLength={6} value={newPin} onChange={(newpin) => setNewPin(newpin)}>
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
        <Button onClick={onSubmit} className="uppercase w-full">
          UPDATE
        </Button>
      </div>
    </div>
  );
}
