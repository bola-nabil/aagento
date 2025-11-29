import React, {lazy} from "react";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";

const FaqContent = lazy(() => import("../components/FaqContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));
import { useAOS } from "../hooks/useAOS";

const Faq = () => {
    useAOS();
    return(
        <>
            <Container>
                <section>
                    <SectionHeader section="FAQ" title="Frequently Asked Questions" description="Get detailed answers to common questions and gain valuable insights to guide your understanding." />
                    <div className="pt-20">
                        <FaqContent />
                    </div>
                </section>
                <Cta />
                <Footer />
            </Container>
        </>
    );
}

export default Faq;