"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger  } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText, useGSAP);

export default function Home() {

  useGSAP(() => {
  // gsap code here...
  gsap.to(".box", {
    scrollTrigger: {
      trigger: ".box",
      scrub: 1,
      markers: true

    },
    x: 200
  }); 

  let split = SplitText.create(".text", {
    type: "chars"
  });
  gsap.from(split.chars, {
    y: "50%",
    opacity: 0,
    stagger: {
      amount: .3
    },
    duration: 1,
    delay: .5
  });

}, []); 
  

  return (
    <>
      <section className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Portafolio</h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text">
            Ismael Resendis
        </h2>
      </section>
      
      <section className="flex flex-col gap-[32px] row-start-2 items-center justify-center  h-screen ">
        <Image
          className="dark:invert box"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

      </section>
      <section className="flex flex-col gap-[32px] row-start-3 items-center justify-center h-screen">
        <h2 className="text-2xl sm:text-4xl font-semibold text">
            Ismael Resendis
        </h2>
        <h1 className="text-4xl sm:text-6xl font-bold">Portafolio</h1>
      </section>
    </>
  );
}
