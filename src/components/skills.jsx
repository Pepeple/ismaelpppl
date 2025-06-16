"use client"
import Javascript from "@/assets/skills/javascript.svg";
import Css from "@/assets/skills/css.svg";
import Html from "@/assets/skills/html5.svg";
import Arduino from "@/assets/skills/arduino.svg";
import Cplusplus from "@/assets/skills/c-plus-plus.svg";
import Git from "@/assets/skills/git.svg";
import Github from "@/assets/skills/github.svg";
import Lenguajec from "@/assets/skills/lenguajec.svg";
import Nextjs from "@/assets/skills/nextjs.svg";
import Nodejs from "@/assets/skills/nodejs.svg";
import Python from "@/assets/skills/python.svg";
import React from "@/assets/skills/react.svg";
import Tailwind from "@/assets/skills/tailwind.svg";
import Typescript from "@/assets/skills/typescript.svg";
import Unity from "@/assets/skills/unity.svg";
import Vscode from "@/assets/skills/vscode.svg";
import Windows from "@/assets/skills/windows.svg";
export default function skills(){
    return(
        <div className="grid grid-cols-5 gap-[32px] max-w-1/2 group max-md:grid-cols-4 max-md:gap-0 max-md:max-w-full">
            
            <Javascript className="blurskills "/>
            <Css className="blurskills "/>
            <Html className="blurskills "/>
            <Tailwind className="blurskills "/>
            <React className="blurskills "/>
            <Typescript className="blurskills "/>
            <Nextjs className="blurskills "/>
            <Nodejs className="blurskills "/>
            <Git className="blurskills "/>
            <Github className="blurskills  bg-amber-50 rounded-full"/>
            <Lenguajec className="blurskills "/>
            <Cplusplus className="blurskills "/>
            <Python className="blurskills "/>
            <Unity className="blurskills  fill-white"/>
            <Arduino className="blurskills "/>
            <Vscode className="blurskills  md:col-start-2 "/>
            <Windows className="blurskills  md:col-start-4"/>
            

        </div>
    )
}