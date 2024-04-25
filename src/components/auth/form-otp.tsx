'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';

export function FormOtp() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
    },
    [setOpen]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase w-full">Log In</Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] bg-[#2F105E] border-none rounded-xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="font-bold text-3xl uppercase text-white uppercase text-center">
            Verify Your <span className="text-[#EF569F]">Number</span>
          </div>
          <InputOTP maxLength={4}>
            <InputOTPGroup className="gap-2">
              <InputOTPSlot className="bg-white text-black rounded-md" index={0} />
              <InputOTPSlot className="bg-white text-black rounded-md" index={1} />
              <InputOTPSlot className="bg-white text-black rounded-md" index={2} />
              <InputOTPSlot className="bg-white text-black rounded-md" index={3} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-white text-sm">
            Didn’t Receive the OTP?
            <br />
            <span className="text-[#EF569F]">Resend OTP in 00:54</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
