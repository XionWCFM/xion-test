'use client';
import Image from 'next/image';
import Lottie from 'lottie-react';
import animationData from '../src/shared/lottie/lottie-test.json';

export default function Home() {
  return (
    <div>
      <Lottie animationData={animationData} className=" w-[300px] h-[300px]" />
      <div className=" relative w-[200px]">
        <Image
          className=" absolute animate-landing-letter "
          src={'/landing-letter.png'}
          alt=""
          width={160}
          height={92}
        />
        <div style={{ transform: '' }} className=" ">
          <Image
            className=" absolute z-10 animate-landing-dod top-0 right-0  "
            src={'/landing-dod.png'}
            alt=""
            width={101}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
