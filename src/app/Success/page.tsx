'use client'

import { Button } from "@heroui/react";
import {NavBar} from "../navbar";

export default function Success() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-4xl text-center mb-6">
                    Thank you for reaching out! I&apos;ll get back to you soon.
                </div>
                <Button size="lg" href="/" className="text-2xl bg-white font-semibold">Home</Button>
            </div>
        </div>
    );
}
