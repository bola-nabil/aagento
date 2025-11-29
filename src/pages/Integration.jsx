import React, {lazy} from "react";
import { useData } from "../hooks/useData";
import { useAOS } from "../hooks/useAOS";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const IntegrationCard = lazy(() => import("../components/cards/IntegrationCard"));
const FaqContent = lazy(() => import("../components/FaqContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const Integration = () => {
    useAOS();
    const {content} = useData();
    return(
        <>
           <Container>
                <SectionHeader section="INTEGRATION" title="Scalable Intelligence for Your Business Growth" description="Discover our transparent and competitive pricing options designed to fit projects of all sizes. Choose the perfect plan to bring your vision to life"/>

                <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 pb-[140px] pt-20">
                    {
                        content?.integrations.map((card) => (
                            <div key={card.id}>
                                <IntegrationCard cardImg={`/src/assets/integration/${card.cardImg}`} title={card.title} description={card.description}/>
                            </div>
                        ))
                    }
                </section>
                <section>
                    <SectionHeader section="FAQ" title="Frequently Asked Questions" />
                    <FaqContent />
                </section>
                <Cta />
                <Footer />
           </Container>
        </>
    );
}

export default Integration;