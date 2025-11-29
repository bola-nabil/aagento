import React, { lazy } from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import PricingContent from "../components/PricingContent";

const FaqContent = lazy(() => import("../components/FaqContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const Pricing = () => {
  
  return (
    <Container>
      <div>
        
        <SectionHeader
          section="PRICING"
          title="Flexible Plans to Suit Your Needs"
          description="Discover our transparent and competitive pricing options designed to fit projects of all sizes."
        />

        <section className="pt-20">
          <PricingContent />
        </section>

        <section>
          <FaqContent />
        </section>

          <Cta />

        <Footer />
      </div>
    </Container>
  );
};

export default Pricing;
