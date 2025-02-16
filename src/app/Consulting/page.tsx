'use client'
import { useState } from "react";
import Navbar from "../navbar";

export default function Consulting() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    //fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [relation, setRelation] = useState("");
    const [reference, setReference] = useState("");
    const [applicantName, setApplicantName] = useState("");
    const [graduation, setGraduation] = useState("");
    const [extra, setExtra] = useState("");

    const sendEmail = async () => {
        setLoading(true);
        setMessage("");
    
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "noahktutoring@gmail.com",
                    subject: "Consultation Request",
                    message: `Email: ${email}<br>
                    Name: ${firstName} ${lastName}<br>
                    Phone Number: ${phoneNumber}<br>
                    Location: ${city}, ${state}<br>
                    Relation to applicant: ${relation}<br>
                    Applicant Name: ${applicantName}<br>
                    HS Graduation Year: ${graduation}<br>
                    Referred By: ${reference}<br>
                    ${extra}
                    `,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
    
            window.location.href = '/Success'
        } catch (error) {
            setMessage("❌ Failed to submit, please check you've filled in all required fields and try again");
            console.error("Error sending email:", error);
        }
    
        setLoading(false);
    };        
    
    

    return (
        <main className="flex flex-col items-center min-h-screen w-full overflow-hidden font-poppins">
            <Navbar />
            <div className="flex flex-col items-center w-full max-w-3xl p-8 mt-20">
                <div className="w-4/5 text-4xl font-semibold text-center">
                    Fill in this short form to request a free consultation
                </div>
                <form onSubmit={sendEmail} className="flex flex-col gap-4 mt-4 w-full">
                    <div className="flex">
                        <div className="w-full mr-2">
                            <label htmlFor="text">First Name *</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded"
                            />
                        </div>
                        <div className="w-full ml-2">
                            <label htmlFor="text">Last Name *</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="px-4 py-2 border rounded w-full"
                            />
                        </div>
                        
                    </div>

                    <div className="w-full">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="px-4 py-2 border rounded w-full"
                        />
                    </div>
                    
                    <div className="w-full">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                            type="phonenumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="px-4 py-2 border rounded w-full"
                        />
                    </div>

                    <div className="flex">
                        <div className="w-full mr-2">
                            <label htmlFor="text">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-2 border rounded mr-2"
                            />
                        </div>
                        <div className="w-full ml-2">
                            <label htmlFor="text">State</label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="px-4 py-2 border rounded w-full"
                            >
                                <option value=""></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="relation">Relation to Applicant *</label>
                        <select
                            value={relation}
                            onChange={(e) => setRelation(e.target.value)}
                            required
                            className="px-4 py-2 border rounded w-full"
                        >
                            <option value="Parent">Parent</option>
                            <option value="Self">Self</option>
                            <option value="Relative">Relative</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="name">Applicant Name *</label>
                        <input
                            type="name"
                            value={applicantName}
                            onChange={(e) => setApplicantName(e.target.value)}
                            required
                            className="px-4 py-2 border rounded w-full"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="reference">How did you hear about me?</label>
                        <input
                            type="reference"
                            value={reference}
                            onChange={(e) => setReference(e.target.value)}
                            className="px-4 py-2 border rounded w-full"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="graduation">High School Graduation Year *</label>
                        <input
                            type="graduation"
                            value={graduation}
                            onChange={(e) => setGraduation(e.target.value)}
                            required
                            className="px-4 py-2 border rounded w-full"
                        />
                    </div>

                    <div className="w-full h-40">
                        <label htmlFor="extra">Please feel free to include any other information</label>
                        <textarea
                            value={extra}
                            onChange={(e) => setExtra(e.target.value)}
                            className="px-4 py-2 border rounded w-full h-full"
                        />
                    </div>

                    <button
                        onClick={sendEmail}
                        disabled={loading}
                        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
                {message && <p className="mt-4 text-lg">{message}</p>}
            </div>
        </main>
    );
}
