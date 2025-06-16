"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger  } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Timeline } from "gsap/gsap-core";
export default function Name() {
    useGSAP(() => {
    
    let tl = gsap.timeline();

      let split = SplitText.create(".text", {
        type: "chars"
      });
      tl.to(".writer", {
         duration: 1,
        scale: 0.1, 
        opacity: 0, 
        y: 60, 
        ease: "power1.inOut",
        stagger: {
            from: "center",
            amount: 1.5, }
        })
      .from(split.chars, {
        y: "50%",
        opacity: 0,
        stagger: {
          amount: .3
        },
        duration: 1,
      });

    })



  return (
    <>
    <h1 className="text text-4xl sm:text-6xl font-bold">Portafolio</h1>
    <p className="text-2xl sm:text-4xl font-bold">

      <span className=" text text-primary-500 "> sexo</span>
    </p>
    <div className="flex absolute w-full z-50">
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>
    <div className="writer h-96 bg-red-800 grow-1  "></div>


    
    </div>
        

    
    </>
  );
}
