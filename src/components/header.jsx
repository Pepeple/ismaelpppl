"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import  Home from "@/assets/home.svg";
import Menu from "@/assets/menu.svg";


export default function header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Cierra todos los menús al hacer clic fuera
            
        }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  


    return (
        <header ref={dropdownRef} className="header flex justify-between w-full fixed p-16">
            
            <Link href="/" className="text-2xl">
            <Home className="dark:invert animate-fadein"/>
            </Link>
            <button type="button" onClick={() => { setIsOpen(!isOpen)}} className="text-2xl cursor-pointer"  >
            <Menu className="dark:invert animate-fadein"/>
            </button>
            {isOpen && (
                <div className="absolute top-0 right-0 w-1/4 h-screen bg-red-950/50 flex flex-col justify-center items-center max-md:w-1/2">
                    
                </div>
            )}
        </header>
    );
}