'use client';

import { useCallback, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from '@/lib/axios';

import { toast } from 'sonner';
import { FormOtp } from '@/components/auth/form-otp';
import { BASE_API_URL } from '@/lib/constants';

export default function LinkPhone() {
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpExpired, setOtpExpired] = useState(0); // [seconds]
  const [otpChallengeId, setOtpChallengeId] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = useCallback(async () => {
    if (!phone) {
      toast.error('Phone Number is required', {
        duration: 3000,
      });
      return;
    }
    const isPhoneNumber = /^\+?[1-9]\d{1,14}$/.test(phone);
    if (!isPhoneNumber) {
      toast.error('Invalid phone', {
        duration: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(BASE_API_URL + '/auth/link', {
        phone_number: phone,
      });

      if (response.status === 200) {
        const { data } = response;
        const { challengeId } = data;
        setOtpChallengeId(challengeId);
        setOtpOpen(true);
      } else {
        console.error(response);
        toast.error('Something went wrong', {
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }, [phone]);
  return (
    <>
      <FormOtp
        open={otpOpen}
        onOpenChange={setOtpOpen}
        expired={otpExpired}
        challangeId={otpChallengeId}
      />
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="px-4 w-full">
          <Input placeholder="your phone number" onChange={(e) => setPhone(e.target.value)} type="tel" />
        </div>
        <div className="space-y-2 flex flex-col w-full px-4">
          <Button onClick={onSubmit} className="uppercase w-full">
            UPDATE
          </Button>
        </div>
      </div>
    </>
  );
}
