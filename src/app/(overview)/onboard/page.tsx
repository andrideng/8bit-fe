'use client';

import { OnboardTitle } from '@/components/onboard/onboard-title';
import { OnboardUser } from '@/components/onboard/onboard-user';
import { CHARACTER_VALUE, COLOR_VALUE } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Image from 'next/image';
import { use, useCallback, useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/user/use-user';

export default function OnboardPage() {
  const router = useRouter();
  const { user, refetch } = useUser();
  const [stepObj, setStepObj] = useState({
    step: 0,
    color: {
      value: '',
      code: 'gray',
    },
    chars: {
      value: '',
      image: '',
    },
    icon: '/assets/onboard/icon-card.png',
    name: '',
  });
  const [message, setMessage] = useState('');

  console.log('user', user);

  useEffect(() => {
    if (user && user?.card !== null) {
      const userColor = COLOR_VALUE.find((x) => x.value === user.card.color);
      const userChar = CHARACTER_VALUE.find((x) => x.value === user.card.avatar);

      setStepObj({
        ...stepObj,
        color: {
          value: userColor?.value || '',
          code: userColor?.color_code || '',
        },
        chars: {
          value: userChar?.value || '',
          image: userChar?.image || '',
        },
        name: user.full_name,
      });
    }
  }, [user]);

  // function
  const changeStep = (direction: string) => {
    let icon = '/assets/onboard/icon-card.png';
    if (direction === 'incr') {
      const lastStep = stepObj.step + 1;

      if (lastStep === 1) {
        icon = '/assets/onboard/icon-cat.png';
      }
      if (lastStep === 2) {
        icon = '/assets/onboard/icon-name.png';
      }
      setStepObj({
        ...stepObj,
        step: lastStep,
        icon,
      });
    } else if (direction === 'decr') {
      const lastStep = stepObj.step - 1;

      setStepObj({
        ...stepObj,
        step: lastStep,
        icon,
      });
    }
  };

  const handleFinish = useCallback(async () => {
    const { color, chars, name } = stepObj;
    if (color.value && chars.value && name) {
      try {
        const response = await axios.post('/user/profile', {
          card: {
            color: color.value,
            avatar: chars.value,
          },
          full_name: name,
        });

        if (response.status === 200) {
          refetch();
          router.push('/card');
        } else {
          setMessage('Failed to create user profile');
        }
      } catch (error) {
        console.error(error);
        setMessage('Failed to create user profile');
      }
    } else {
      setMessage('Please fill color, character, and name');
    }
  }, [router, stepObj]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="p-8 w-full mt-8">
        <OnboardTitle>
          {stepObj.step === 0 && (
            <div className="text-5xl text-white font-bold">
              ok, now custom you bit
              <span className="text-5xl font-normal ml-1 text-white">wallet</span>
            </div>
          )}
          {stepObj.step === 1 && (
            <div className="text-5xl text-white font-bold">
              Pick your
              <span className="text-5xl font-normal ml-1 text-white">cat</span>
            </div>
          )}
          {stepObj.step === 2 && (
            <div className="text-5xl text-white font-bold">Final Touch, How we call you?</div>
          )}
        </OnboardTitle>
      </div>

      <div className="flex flex-col justify-center p-8 pt-0 w-full h-full items-center">
        {/* Onboard User */}
        {stepObj.step !== 1 && (
          <div className="flex flex-col justify-between items-center w-full gap-4">
            <OnboardUser
              name={stepObj.name}
              avatar={stepObj.chars.image}
              background={stepObj.color.code}
            />

            {stepObj.step === 2 && (
              <>
                <Input
                  placeholder="Your name"
                  type="text"
                  onChange={(e) =>
                    setStepObj({
                      ...stepObj,
                      name: e.target.value,
                    })
                  }
                />

                <Button className="uppercase" onClick={handleFinish}>
                  Finish
                </Button>
              </>
            )}
          </div>
        )}

        {/* Onboard Cat */}
        {stepObj.step === 1 && (
          <div className="flex flex-wrap justify-center gap-2">
            {CHARACTER_VALUE.map((x, i) => (
              <div
                className={`flex w-[100px] h-[100px] rounded-md cursor-pointer ${
                  stepObj.chars.value === x.value ? 'border-[#FFF5FF] border-4' : ''
                }`}
                key={i}
                style={{ backgroundColor: stepObj.color.code }}
                data-image={x.image}
                data-value={x.value}
                onClick={(e) => {
                  const v = e.currentTarget.dataset;
                  // set state
                  setStepObj({
                    ...stepObj,
                    chars: {
                      value: v.value || '',
                      image: v.image || '',
                    },
                  });
                }}
              >
                <Image src={x.image} width={100} height={100} alt="" />
                {message !== '' && <div className="text-md">{message}</div>}
              </div>
            ))}
          </div>
        )}
        {/* Onboard Color */}
        {stepObj.step === 0 && (
          <div className="flex pt-8 gap-2">
            {COLOR_VALUE.map((x, i) => (
              <div
                key={i}
                data-color={x.color_code}
                data-value={x.value}
                className={`w-[40px] h-[40px] rounded-md cursor-pointer ${
                  stepObj.color.code === x.color_code ? 'border-[#FFF5FF] border-4' : ''
                }`}
                style={{ backgroundColor: x.color_code }}
                onClick={(e) => {
                  const v = e.currentTarget.dataset;
                  // set state
                  setStepObj({
                    ...stepObj,
                    color: {
                      value: v.value || '',
                      code: v.color || '',
                    },
                  });
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* stepper */}
      <div
        className="flex absolute w-full"
        style={{
          bottom: '15%',
        }}
      >
        {/* next */}
        <Image
          src="/assets/onboard/line-right.png"
          width={220}
          height={220}
          alt=""
          className={`absolute cursor-pointer ${stepObj.step === 0 ? 'hidden' : ''}`}
          style={{ left: '0' }}
          onClick={() => changeStep('decr')}
        />

        {/* current icon */}
        <div
          className="rounded-full bg-[#8533ED] absolute h-[50px] w-[50px] z-50"
          style={{
            top: '-8px',
            left: '50%',
            transform: 'translate(-50%)',
          }}
        >
          <Image src={stepObj.icon} fill alt="" />
        </div>

        {/* pref */}
        <Image
          src="/assets/onboard/line-left.png"
          width={220}
          height={220}
          alt=""
          className={`absolute cursor-pointer ${stepObj.step < 2 ? '' : 'hidden'}`}
          style={{ right: '0' }}
          onClick={() => changeStep('incr')}
        />
      </div>
    </div>
  );
}
