import {NavBar} from "../navbar";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar/>
            <div className="flex flex-col lg:flex-row items-center justify-center flex-1 w-full">
                <div className="flex xl:w-[80%] w-full">
                    <Image
                        src='/NoahFormal.jpg'
                        alt="Formal Image of Noah"
                        className="object-center xl:w-[40%] w-[80%] rounded-xl mr-2 h-auto object-contain"
                        width={800}
                        height={800}
                    />
                    <div className="xl:w-[60%] ml-2">
                        <div className="xl:text-7xl font-medium p-1 mb-4">Noah Kim</div>
                        <p className="xl:text-xl p-1 leading-[1.5]">Noah’s tutoring career started five years ago in his town’s public library helping his friends with SAT problems they were having trouble with. Four years later, he’s accumulated experience teaching students of all ages, ranging from subjects such as middle school math and english to AP Calculus and SAT.  Noah’s goal is to help people achieve their academic goals in a timeframe that works for them.
                        <br></br>
                        <br></br>
                        Outside of tutoring, Noah is a rising junior at Georgetown pursuing a bachelor’s degree in Economics and Mathematics. He has professional experience interning in multiple unique environments, including Reichman and Associates, P.C., a forensic accounting firm, and LG Electronics. In his free time, he runs a Bubble Tea company on campus, plays electric guitar, and paints (oil).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}