import React, {lazy} from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const PrivacyAndTerm = lazy(() => import("../components/PrivacyAndTerms"));
import { useAOS } from "../hooks/useAOS";

const Terms = () => {
    useAOS();
    return(
        <>
            <Container>
                <SectionHeader section="TERMS & CONDITION" title="Terms of Service and User Agreement" description="mportant legal information regarding your access to and use of our website and services" />
                <PrivacyAndTerm />
            </Container>
        </>
    );
}

export default Terms;