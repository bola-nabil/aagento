import React, {lazy} from "react";
import { useData } from "../hooks/useData";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const ContactCard = lazy(() => import("../components/cards/ContactCard"));
const ContactForm = lazy(() => import("../components/forms/ContactForm"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

import { faLocationDot, faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useAOS } from "../hooks/useAOS";

const Contact = () => {
    const {content} = useData();
    const contactIcon = {
        faLocationDot: faLocationDot,
        faEnvelope: faEnvelope,
        faPhoneVolume: faPhoneVolume
    };
    useAOS();
    return(
        <>
            <Container>
                <SectionHeader section="CONTACT" title="Get in Touch with Us" description="We’re here to assist you—reach out with your questions, feedback, or inquiries" />
                <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-8 pb-[140px] pt-20" data-aos="fade-up">
                    <div>
                        <h1 className="text-2xl font-bold pb-8">Success is a team play, right? Let’s work together!</h1>
                        <div>
                            {
                                content?.contact.map((card) => (
                                    <div key={card.id}>
                                        <ContactCard icon={contactIcon[card.icon]} title={card.title} details={card.details} contactLink={card.contactLink}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
                <Cta />
                <Footer />
            </Container>
        </>
    );
}

export default Contact;