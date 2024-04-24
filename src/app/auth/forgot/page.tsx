import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="space-y-1 text-center">
        <div className="font-bold text-3xl uppercase text-white">Login with <br />your pin</div>
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
        <div className="flex items-center justify-between w-full">
          <div className="text-white text-sm">Forgot my pin</div>
        </div>
      </div>
      <div className="space-y-2 flex flex-col w-full px-4">
        <Button variant="default">Next</Button>
      </div>
    </div>
  );
}
