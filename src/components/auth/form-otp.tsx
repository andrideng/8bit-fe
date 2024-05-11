'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { Form, FormField } from '@/components/ui/form';
import { BASE_API_URL, COOKIES_ACCESS_TOKEN } from '@/lib/constants';
import { useUserState } from '@/state/user-state';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { TokenUser } from '@/lib/interfaces';

interface FormLoginProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  expired?: number;
  challangeId?: string;
}

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: 'Your one-time password must be 4 characters.',
  }),
});

export function FormOtp({ open = false, onOpenChange, expired, challangeId }: FormLoginProps) {
  const router = useRouter();
  const { setUser } = useUserState();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await fetch(BASE_API_URL + '/auth/verify', {
        method: 'POST',
        body: JSON.stringify({
          challengeId: challangeId,
          otp: data.pin,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const parsedRes = await res.json();
      const { token } = parsedRes;
      // decode the token
      const user = jwtDecode<TokenUser>(token);

      if (res.ok) {
        Cookies.set(COOKIES_ACCESS_TOKEN, token);
        setUser({
          id: String(user.user_id),
          email: user.email as string,
          first_name: '',
          last_name: '',
        });
        toast.success('OTP Verified Successfully', {
          duration: 3000,
        });
        router.replace('/onboard');
        onOpenChange(false);
      } else {
        toast.error(parsedRes.message, {
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', {
        duration: 3000,
      });
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[300px] bg-[#2F105E] border-none rounded-xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="font-bold text-3xl uppercase text-white uppercase text-center">
            Verify Your <span className="text-[#EF569F]">Number</span>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} {...field}>
                    <InputOTPGroup className="gap-2">
                      <InputOTPSlot className="bg-white text-black rounded-md" index={0} />
                      <InputOTPSlot className="bg-white text-black rounded-md" index={1} />
                      <InputOTPSlot className="bg-white text-black rounded-md" index={2} />
                      <InputOTPSlot className="bg-white text-black rounded-md" index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
            </form>
          </Form>
          <div className="text-center text-white text-sm">
            Didn’t Receive the OTP?
            <br />
            <span className="text-[#EF569F]">Resend OTP in {expired} seconds</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
