import React, {lazy} from "react";
import { useAOS } from "../hooks/useAOS";
import { faCheck, faGear, faShield, faChartPie} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Story_1 from "../assets/our-story/story-1.jpg";
import Story_2 from "../assets/our-story/story-2.jpg";
import { useData } from "../hooks/useData";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

const Counter = lazy(() => import("../components/Counter"));
const TeamsCard = lazy(() => import("../components/cards/TeamsCard"));
const BlogContent = lazy(() => import("../components/BlogContent"));
const FaqContent = lazy(() => import("../components/FaqContent"));
const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const OurStory = () => {
    const {content} = useData();
    useAOS();
    return(
        <>
            <Container>
                <SectionHeader section="OUR STORY" title="Scalable Intelligence for Your Business Growth" description="Discover our transparent and competitive pricing options designed to fit projects of all sizes. Choose the perfect plan to bring your vision to life" />

               <section className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center gap-8 py-20">
                    <div>
                        <h1 className="font-bold text-2xl lg:text-4xl pb-6 center">Dedicated to Building a Legacy of Excellence and Integrity</h1>
                        <p className="opacity-70">At Aavo we are passionate about transforming the way businesses operate through advanced AI technology. We believe that artificial intelligence has the power to drive smarter decisions, automate complex tasks.</p>
                    </div>
                    <div>
                        <img src={Story_1} alt="Dedicated to Building a Legacy of Excellence and Integrity" className="w-[1200px] h-[250px]"/>
                    </div>
               </section>

               <section className="text-white grid grid-cols-3 gap-8">
                <div>
                    <Counter end={15} sign="+"/>
                    <p className="opacity-70 pt-4">Years Of Experiens</p>
                </div>
                <div>
                    <Counter end={100} sign="+"/>
                    <p className="opacity-70 pt-4">Blobal Partners</p>
                </div>
                <div>
                    <Counter end={95} sign="%"/>
                    <p className="opacity-70 pt-4">Client Satisfaction Rate</p>
                </div>

               </section>

               <section className="text-white pt-20 pb-[140px]">
                    <SectionHeader section="WHY CHOOSE US" title="Why Leading Businesses Choose Our AI Solutions"  description="Empower your business with cutting-edge AI technology that transforms raw data into actionable insights."/>
                    <div className="grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 pt-10">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                            <div>
                                <div className="bg-orange-700 w-12 h-12 flex items-center justify-center rounded-lg">
                                    <FontAwesomeIcon icon={faChartPie} className="text-2xl"/>
                                </div>
                                <h1 className="font-bold text-lg lg:text-3xl py-4">Easy Access</h1>
                                <p className="opacity-70">A user-friendly interface makes AI functions simple for all skill levels.</p>
                            </div>
                            <div>
                                <div className="bg-orange-700 w-12 h-12 flex items-center justify-center rounded-lg">
                                    <FontAwesomeIcon icon={faCheck} className="text-2xl"/>
                                </div>
                                <h1 className="font-bold text-lg lg:text-3xl py-4">Easy Access</h1>
                                <p className="opacity-70">A user-friendly interface makes AI functions simple for all skill levels.</p>
                            </div>
                        </div>
                        <div>
                            <img src={Story_2} alt="Leading Businesses" className="h-[250px] lg:h-[400px] py-2" data-aos="fade-up"/>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                            <div>
                                <div className="bg-orange-700 w-12 h-12 flex items-center justify-center rounded-lg">
                                    <FontAwesomeIcon icon={faGear} className="text-2xl"/>
                                </div>
                                <h1 className="font-bold text-lg lg:text-3xl py-4">Easy Access</h1>
                                <p className="opacity-70">A user-friendly interface makes AI functions simple for all skill levels.</p>
                            </div>
                            <div className="">
                                <div className="bg-orange-700 w-12 h-12 flex items-center justify-center rounded-lg">
                                    <FontAwesomeIcon icon={faShield} className="text-2xl"/>
                                </div>
                                <h1 className="font-bold text-lg lg:text-3xl py-4">Easy Access</h1>
                                <p className="opacity-70">A user-friendly interface makes AI functions simple for all skill levels.</p>
                            </div>
                        </div>
                    </div>
               </section>

               <section className="pb-[140px]">
                    <SectionHeader section="OUR TEAM" title="Introducing Our Experts" description="Meet the Skilled Professionals Dedicated to Driving Innovation and Your Success" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
                        {
                            content?.teams.map((card) => (
                                <div key={card.id}>
                                    <TeamsCard personImg={`/src/assets/teams/${card.personImg}`} name={card.name} jobTitle={card.jobTitle}/>
                                </div>
                            ))
                        }
                    </div>
               </section>

               <BlogContent numberOfSlices={3}/>
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

export default OurStory;