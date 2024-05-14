'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';
import { toast } from 'sonner';

import { FormOtp } from '@/components/auth/form-otp';
import GoogleButton from '@/components/auth/google-button';
import { useCallback, useState } from 'react';
import { BASE_API_URL, DEFAULT_PASSWORD } from '@/lib/constants';

export function FormLogin() {
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpExpired, setOtpExpired] = useState(0); // [seconds]
  const [otpChallengeId, setOtpChallengeId] = useState('');
  const [identity, setIdentity] = useState('');

  const onSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      identity: yup.string().required(),
    });

    // Check if it's email or phone number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identity);
    const isPhoneNumber = /^\+?[1-9]\d{1,14}$/.test(identity);

    try {
      await schema.validate({ identity });
      const identityType = isEmail ? 'email' : isPhoneNumber ? 'phone_number' : '';

      let body: { [key: string]: string } = {};
      body[identityType] = identity;

      const response = await fetch(BASE_API_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();
      const { challengeId } = parsedResponse;
      if (response.ok) {
        setOtpChallengeId(challengeId);
        setOtpOpen(true);
      } else {
        console.error(parsedResponse);
      }

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }, [identity]);

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
          <Input placeholder="Email / Phone Number" onChange={(e) => setIdentity(e.target.value)} />
        </div>
        <div className="space-y-2 flex flex-col w-full px-4">
          <Button onClick={onSubmit} className="uppercase w-full">
            Log In
          </Button>
          <GoogleButton>Sign in With Google</GoogleButton>
        </div>
      </div>
    </>
  );
}
