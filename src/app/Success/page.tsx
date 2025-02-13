'use client'

import { Button } from "@heroui/react";
import Navbar from "../navbar";

export default function Success(){
    return(
        <main className="flex items-center justify-center min-h-screen flex-col">
            <Navbar/>
            <div className="justify-center items-center flex h-full mb-10">
                <div className="text-4xl">Thank you for contacting me, I will contact you shortly</div>
            </div>
            <Button size="lg" href="/" className="text-3xl">Home</Button>
        </main>
    );
}