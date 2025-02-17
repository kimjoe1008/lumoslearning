'use client'

import { Button } from "@heroui/react";
import {NavBar} from "../navbar";

export default function Success(){
    return(
        <main className="flex items-center justify-center min-h-screen flex-col">
            <NavBar/>
            <div className="justify-center items-center flex h-full mb-10">
                <div className="text-4xl">Thank you for reaching out! I'll get back to you soon.</div>
            </div>
            <Button size="lg" href="/" className="text-3xl">Home</Button>
        </main>
    );
}