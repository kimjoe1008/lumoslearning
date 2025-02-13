'use client'
import { useState } from "react";
import Navbar from "../navbar";

export default function Consulting() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = async () => {
        setLoading(true);
        setMessage("");
    
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "noahktutoring@gmail.com",
                    subject: "Testing Email Function",
                    message: "YURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            setMessage(`✅ ${data.message}`);
        } catch (error) {
            setMessage("❌ Failed to send email. Check console.");
            console.error("Error sending email:", error);
        }
    
        setLoading(false);
    };        
    
    

    return (
        <main className="flex justify-center min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-2xl font-semibold">Send a Test Email</h2>
                <button
                    onClick={sendEmail}
                    disabled={loading}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Send Test Email"}
                </button>
                {message && <p className="mt-4 text-lg">{message}</p>}
            </div>
        </main>
    );
}
