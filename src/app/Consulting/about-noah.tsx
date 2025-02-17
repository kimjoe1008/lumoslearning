import Image from "next/image";
export default function AboutMe(){
    return(
        <div id="aboutnoah" className="w-[90%] flex flex-col h-auto mt-20 lg:flex-row lg:justify-center lg:items-start xl:items-center">
            <div className="flex justify-center items-center w-full mb-6 lg:w-[25%]">
                <div className="w-[90%] lg:w-full mr-2 lg:mr-8">
                    <Image
                        src='/headshot.jpg'
                        alt="Formal Image of Noah"
                        className="rounded-3xl h-auto object-contain"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="lg:w-[70%] lg:mb-4">
                <div className="text-4xl font-semibold mb-2 xl:text-5xl">About Noah</div>
                <p className="mb-4 xl:text-lg 2xl:text-xl">Noah’s tutoring career started five years ago in his town’s public library helping his friends with SAT problems they were having trouble with. Four years later, he’s accumulated experience teaching students of all ages, ranging from subjects such as middle school math and english to AP Calculus and SAT.  Noah’s goal is to help people achieve their academic goals in a timeframe that works for them.
                            <br></br>
                            <br></br>
                            Outside of tutoring, Noah is a current junior at Georgetown pursuing a bachelor’s degree in Economics and Mathematics. He has professional experience interning in multiple unique environments, including Reichman and Associates, P.C., a forensic accounting firm, and LG Electronics. In his free time, he runs a Bubble Tea company on campus, plays electric guitar, and paints (oil).</p>
            </div>
        </div>
    );
}