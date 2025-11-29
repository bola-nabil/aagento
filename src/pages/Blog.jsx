import React, {lazy} from "react";
import { useAOS } from "../hooks/useAOS";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const BlogContent = lazy(() => import("../components/BlogContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const Blog = () => {
    useAOS();
    return(
        <>
            <Container>
                <SectionHeader section="BLOGS" title="Why Leading Businesses Choose Our AI Solutions"  />
                <section className="pt-20" data-aos="fade-up">
                    <BlogContent numberOfSlices={5}/>
                </section>
                    <Cta />
                <Footer />
            </Container>
        </>
    );
}

export default Blog;