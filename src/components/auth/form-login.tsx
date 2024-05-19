'use client';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';
import { toast } from 'sonner';

import { FormOtp } from '@/components/auth/form-otp';
import GoogleButton from '@/components/auth/google-button';
import { useCallback, useState } from 'react';
import { BASE_API_URL, COOKIES_ACCESS_TOKEN } from '@/lib/constants';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { TokenUser } from '@/lib/interfaces';
import { useRouter } from 'next/navigation';
import { useUserState } from '@/state/user-state';
import Link from 'next/link';

export function FormLogin() {
  const router = useRouter();
  const { setUser } = useUserState();

  const [otpOpen, setOtpOpen] = useState(false);
  const [otpExpired, setOtpExpired] = useState(0); // [seconds]
  const [otpChallengeId, setOtpChallengeId] = useState('');
  const [identity, setIdentity] = useState('');
  const [needPin, setNeedPin] = useState(false);
  const [pin, setPin] = useState('');

  const onSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      identity: yup.string().required(),
    });

    // Check if it's email or phone number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identity);
    const isPhoneNumber = /^\+?[1-9]\d{1,14}$/.test(identity);

    if (!isEmail && !isPhoneNumber) {
      toast.error('Invalid email or phone number', {
        duration: 3000,
      });
      return;
    }

    if (needPin) {
      if (pin.length < 6) {
        toast.error('Invalid pin', {
          duration: 3000,
        });
        return;
      }
    }

    try {
      await schema.validate({ identity });
      const identityType = isEmail ? 'email' : isPhoneNumber ? 'phone_number' : '';

      let body: { [key: string]: string } = {};
      body[identityType] = identity;
      if (needPin) {
        body = {
          ...body,
          password: pin,
        };
      }

      const response = await fetch(BASE_API_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();
      const { challengeId, token } = parsedResponse;
      if (response.ok) {
        if (challengeId) {
          setOtpOpen(true);
          setOtpChallengeId(challengeId);
          setOtpExpired(300);
          return;
        }
        if (token) {
          // decode the token
          const user = jwtDecode<TokenUser>(token);
          Cookies.set(COOKIES_ACCESS_TOKEN, token);
          setUser({
            id: String(user.user_id),
            email: user.email as string,
            membership_id: user.membership_id as string,
            whishlist: [],
          });
          toast.success('Login successfully', {
            duration: 3000,
          });
          router.replace('/card');
          return;
        }
      }
      if (response.status === 400) {
        setNeedPin(true);
        toast.info('Please enter your pin', {
          duration: 3000,
        });
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }, [identity, needPin, pin, router, setUser]);

  return (
    <>
      <FormOtp
        open={otpOpen}
        onOpenChange={setOtpOpen}
        expired={otpExpired}
        challangeId={otpChallengeId}
      />
      {needPin ? (
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="space-y-1 text-center">
            <div className="font-bold text-3xl uppercase text-white">
              Login with <br />
              your pin
            </div>
          </div>
          <div className="px-4 w-full space-y-2">
            <InputOTP maxLength={6} value={pin} onChange={(value) => setPin(value)}>
              <InputOTPGroup className="gap-1">
                <InputOTPSlot className="bg-white text-black rounded-md" index={0} />
                <InputOTPSlot className="bg-white text-black rounded-md" index={1} />
                <InputOTPSlot className="bg-white text-black rounded-md" index={2} />
                <InputOTPSlot className="bg-white text-black rounded-md" index={3} />
                <InputOTPSlot className="bg-white text-black rounded-md" index={4} />
                <InputOTPSlot className="bg-white text-black rounded-md" index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div className="flex items-center justify-between w-full">
              <Link href="/auth/forgot" className="text-white text-sm">
                Forgot my pin
              </Link>
            </div>
          </div>
          <div className="space-y-2 flex flex-col w-full px-4">
            <Button variant="default" onClick={onSubmit}>
              Login
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="px-4 w-full">
            <Input
              placeholder="Email / Phone Number"
              onChange={(e) => setIdentity(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col w-full px-4">
            <Button onClick={onSubmit} className="uppercase w-full">
              Log In
            </Button>
            <GoogleButton>Sign in With Google</GoogleButton>
          </div>
        </div>
      )}
    </>
  );
}
