"use client"

import { OnboardTitle } from "@/components/onboard/onboard-title";
import { OnboardUser } from "@/components/onboard/onboard-user";

import Image from 'next/image';
import { useState } from "react";

export default function OnboardPage() {
  const [stepObj, setStepObj] = useState({
    step: '',
    color: {
      value: '',
      code: ''
    },
    chars: {
      value: '',
      path: "/assets/chars/hana.png"
    },
    icon: '/assets/onboard/icon-card.png',
    name: 'Bom Bom'
  });

  // function

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="p-8 w-full mt-8">
        <OnboardTitle />
      </div>
      <div className="flex flex-col justify-center p-8 pt-0 w-full h-full items-center">
        <OnboardUser chars={stepObj.chars} name={stepObj.name} />

        <div className="flex pt-8 gap-2">
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-md"></div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-md"></div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-md"></div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-md"></div>
          <div className="w-[40px] h-[40px] bg-[#fff] rounded-md"></div>
        </div>
        
      </div>

      {/* stepper */}
      <div className="flex relative">
        {/* next */}
        <Image src="/assets/onboard/line-right.png" width={220} height={220} alt='' style={{ 
          'cursor': 'pointer'
         }}/>

        {/* current icon */}
        <div className="rounded-full bg-[#8533ED] absolute h-[50px] w-[50px]" style={{ 
          'top': '-8px',
          'left': '50%',
          'transform': 'translate(-50%)'
         }}>
          <Image src={stepObj.icon} fill alt='' />
        </div>

        {/* pref */}
        <Image src="/assets/onboard/line-left.png" width={220} height={220} alt='' style={{ 
          'cursor': 'pointer'
         }} />
      </div>
    </div>
  );
}
