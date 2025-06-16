"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Spin( {posx, posy, name}) {
    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${name}`,
                start: "top 50%",
                end: "bottom 20%",
                
                scrub: 2
            }

    });
        tl.fromTo(`.${name}`, {
            x: -posx,
            y: -posy,
            rotate: 360,
            duration:1
        },{
            x: posx,
            y: posy,
            rotate: 0,
            duration:1
        })


    })
    return (
        <div className="flex items-center justify-center h-screen">
            <div className={`${name} bg-white w-16 h-16 absolute`}></div>

            <div className="bg-white w-4 h-[400px] rounded-2xl "></div>
        </div>
    );
}