import React, {lazy} from "react";
import { useAOS } from "../hooks/useAOS";
import "aos/dist/aos.css";
import Container from "../components/Container";
import GetStarted from "../components/Buttons/GetStarted";
import SectionHeader from "../components/SectionHeader";

const Features = lazy(() => import("../components/Features"));
const ChooseUs = lazy(() => import("../components/ChooseUS"));
const Integration = lazy(() => import("../components/Integration"));
const PricingContent = lazy(() => import("../components/PricingContent"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const FaqContent = lazy(() => import("../components/FaqContent"));
const BlogContent = lazy(() => import("../components/BlogContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {

  useAOS();
  return (
    <div className="home w-full h-screen bg-cover bg-center">
      <Container>

        <section
          className="flex flex-col justify-center items-center h-[calc(100vh-100px)]"
        >
          <h1 className="text-white text-5xl font-bold text-center">
            Transforming Decisions with Aagent
          </h1>
          <p className="text-white text-2xl py-8 text-center">
            Empower your business with cutting-edge AI technology that transforms raw data into actionable insights.
          </p>
          <GetStarted title="Get Started" path="contact" />
        </section>

        <section className="overflow-hidden whitespace-nowrap py-4" data-aos="fade-up">
          <div className="inline-block animate-scrollX text-white text-3xl font-bold">
          </div>
        </section>

        <section>
          <SectionHeader
            section="FEATURES"
            title="Intelligence That Scales with Your Business"
            description="Empower your business with cutting-edge AI technology that transforms raw data into actionable insights."
          />
          <Features />
        </section>

        <section>
          <SectionHeader
            section="WHY CHOOSE US"
            title="Why Leading Businesses Choose Our AI Solutions"
            description="Empower your business with cutting-edge AI technology that transforms raw data into actionable insights."
          />
          <ChooseUs />
        </section>

        <section>
          <SectionHeader section="ITEGRATIONS" title="Integrate Effortlessly with Your Existing Systems" />
          <Integration />
        </section>

        <section>
          <SectionHeader section="PRICING" title="Flexible Plans for Every Stage of Growth" />
          <PricingContent />
        </section>

        <section>
          <SectionHeader section="TESTIMONIALS" title="What Our Clients Say" />
          <Testimonials />
        </section>

        <section>
          <SectionHeader section="FAQ" title="Frequently Asked Questions" />
          <FaqContent />
        </section>

        <section>
          <SectionHeader section="BLOG" title="Why Leading Businesses Choose Our AI Solutions" />
          <BlogContent numberOfSlices={3}/>
        </section>

        <section className="pb-[180px]" data-aos="fade-up">
          <Cta />
        </section>

        <Footer />

      </Container>
    </div>
  );
};

export default Home;
