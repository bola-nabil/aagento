import React, {lazy} from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const PrivacyAndTerm = lazy(() => import("../components/PrivacyAndTerms"));
import { useAOS } from "../hooks/useAOS";
const Privacy = () => {
    useAOS();
    return(
        <Container>
                <SectionHeader section="PRIVACY POLICY" title="Privacy Statement and Practices" description="By using our services, you consent to the collection and use of your information as outlined below" />
                <PrivacyAndTerm />
        </Container>
    );
}

export default Privacy;