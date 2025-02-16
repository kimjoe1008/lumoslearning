import { NavBar } from "../navbar";
import AboutMe from "./about-noah";
import Services from "./services";
import WhyNoah from "./whynoah";

export default function Consulting() {
    return(
        <div className="flex flex-col min-h-screen items-center w-screen">
            <NavBar/>
            <WhyNoah/>
            <Services/>
            <AboutMe/>
        </div>
    );
}