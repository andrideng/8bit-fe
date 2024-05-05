'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';

import { FormOtp } from '@/components/auth/form-otp';
import GoogleButton from '@/components/auth/google-button';
import { useState } from 'react';

const signInSchema = yup.object().shape({
  email: yup.string().email().optional(),
  phone: yup.string().optional(),
  password: yup.string().required(),
});

export function FormLogin() {
  const [identity, setIdentity] = useState('');

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="px-4 w-full">
        <Input placeholder="Email / Phone Number" onChange={(e) => setIdentity(e.target.value)} />
      </div>
      <div className="space-y-2 flex flex-col w-full px-4">
        <FormOtp />
        <GoogleButton>Sign in With Google</GoogleButton>
      </div>
    </div>
  );
}
