"use client"

import { OnboardTitle } from "@/components/onboard/onboard-title";
import { OnboardUser } from "@/components/onboard/onboard-user";
import { CHARACTER_VALUE, COLOR_VALUE } from "@/lib/constants";

import Image from 'next/image';
import { useState } from "react";

export default function OnboardPage() {
  const [stepObj, setStepObj] = useState({
    step: 0,
    color: {
      value: '',
      code: 'gray'
    },
    chars: {
      value: '',
      image: ''
    },
    icon: '/assets/onboard/icon-card.png',
    name: 'Bom Bom'
  });

  // function
  const changeStep = (direction:any) => {
    // console.log(direction, stepObj.step)
    let icon = '/assets/onboard/icon-card.png';
    if (direction === 'incr') {
      const lastStep = stepObj.step + 1

      if (lastStep === 1) {
        icon = '/assets/onboard/icon-cat.png';
      }
      if (lastStep === 2) {
        icon = '/assets/onboard/icon-name.png';
      }
      setStepObj({
        ...stepObj,
        step: lastStep,
        icon
      })
    }
    else if (direction === 'decr')  {
      const lastStep = stepObj.step - 1;

      setStepObj({
        ...stepObj,
        step: lastStep,
        icon
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="p-8 w-full mt-8">
        <OnboardTitle />
      </div>
      <div className="flex flex-col justify-center p-8 pt-0 w-full h-full items-center">
        <OnboardUser bgColor={stepObj.color.code} chars={stepObj.chars} step={stepObj.step} />

        {/* Onboard Cat */}
        <div className={`flex flex-wrap justify-center gap-2 ${stepObj.step !== 1 ? 'hidden' : ''}`}>
          {
            CHARACTER_VALUE.map((x) => <div 
              className={`flex w-[100px] h-[100px] rounded-md cursor-pointer ${stepObj.chars.value === x.value ? 'border-[#FFF5FF] border-4' : ''}`}
              style={{ backgroundColor: stepObj.color.code }}
              data-image={x.image}
              data-value={x.value}
              onClick={(e) => {
                const v = e.currentTarget.dataset
                // set state
                setStepObj({
                  ...stepObj,
                  chars: {
                    value: v.value || '',
                    image: v.image || ''
                  }
                })
              }}>
              <Image src={x.image} width={100} height={100} alt="" />
            </div>)
          }
        </div>

        {/* Onboard Color */}
        <div className="flex pt-8 gap-2">
          {
            COLOR_VALUE.map((x) => <div 
              data-color={x.color_code}
              data-value={x.value}
              className={`w-[40px] h-[40px] rounded-md cursor-pointer ${stepObj.color.code === x.color_code ? 'border-[#FFF5FF] border-4' : ''}`}
              style={{ 'backgroundColor': x.color_code }}
              onClick={(e) => {
                const v = e.currentTarget.dataset
                // set state
                setStepObj({
                  ...stepObj,
                  color: {
                    value: v.value || '',
                    code: v.color || ''
                  }
                })
              }}
            ></div>)
          }
        </div>
      </div>

      {/* stepper */}
      <div className="flex absolute w-full" style={{ 
        'bottom': '20%'
       }}>
        {/* next */}
        <Image src="/assets/onboard/line-right.png" width={220} height={220} alt='' 
          className={`absolute cursor-pointer ${stepObj.step === 0 ? 'hidden' : ''}`}
          style={{ 'left': '0' }}
          onClick={() => changeStep('decr')} />

        {/* current icon */}
        <div className="rounded-full bg-[#8533ED] absolute h-[50px] w-[50px] z-50" style={{ 
          'top': '-8px',
          'left': '50%',
          'transform': 'translate(-50%)'
         }}>
          <Image src={stepObj.icon} fill alt='' />
        </div>

        {/* pref */}
        <Image src="/assets/onboard/line-left.png" width={220} height={220} alt='' 
          className={`absolute cursor-pointer ${stepObj.step < 2 ? '' : 'hidden'}`}
          style={{ 'right': '0' }}
          onClick={() => changeStep('incr')} />
      </div>
    </div>
  );
}
