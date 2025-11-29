import React, {lazy} from "react";
import Container from "../components/Container";
import GetStarted from "../components/Buttons/GetStarted";
import Error404 from "../assets/not-found.avif";
const Footer = lazy(() => import("../components/Footer"));
import { useAOS } from "../hooks/useAOS";

const NotFound = () => {
    const url = window.location.origin;
    useAOS();
    return(
        <>
            <Container>
                <section className="text-white flex items-center justify-center flex-col pb-[140px]">
                    <img src={Error404} alt="not found page" className="w-[150px] sm:w-[250px] lg:w-[400px]"/>
                    <h1 className="text-2xl font-bold text-center pb-10" data-aos="fade-up">Opps Not Found</h1>
                    <GetStarted title="Back to Home" path={url}/>
                </section>
                <Footer />
            </Container>
        </>
    );
}

export default NotFound;