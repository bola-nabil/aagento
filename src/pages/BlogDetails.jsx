import React, {lazy} from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cta = lazy(() => import("../components/Cta"));
const Footer = lazy(() => import("../components/Footer"));

const BlogDetails = ({blogs}) => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === Number(id));

    return(
        <div className="text-white">
            <Container>
                <div className="flex flex-col justify-center items-center pt-20 px-0 lg:px-40">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold pb-4">{blog.blogTitle}</h1>
                        <p className="opacity-70 pb-6">{blog.blogDescription}</p>
                        <div className="flex items-center gap-4 font-bold text-lg">
                            <img src={`/src/assets/teams/${blog.profileImg}`} alt={blog.name} className="w-12 h-12 rounded-full"/>
                            <h1>{blog.name}</h1>
                            <span>|</span>
                            <p>{blog.date}</p>
                        </div>
                        <div className="py-10">
                            <img src={`/src/assets/blogs/${blog.blogImg}`} alt={blog.blogTitle} className="h-[350px] w-[1200px]"/>
                        </div>
                        <div className="text-lg">
                            <div>
                            <p className="pb-4 opacity-70">Imagine a world where AI doesn’t just respond to commands – it takes initiative, makes decisions, and gets things done on its own. That world is already here.</p>
                            <p className="pb-4 opacity-70">Autonomous AI agents are revolutionizing the way we think about automation. These sophisticated systems can now understand context, plan sequences of actions, and execute complex tasks with minimal human oversight. </p>
                            <p className="pb-4 opacity-70">Key Capabilities of Modern AI Agents:</p>

                            </div>
                            <div className="pb-4">
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Self-directed task completion</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Adaptive decision making</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Complex problem solving</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Continuous learning</p>
                                </div>
                            </div>
                            <p className="opacity-70 pb-4">But here’s the fascinating part: unlike traditional automation tools, these AI agents can actually improvise and adjust their strategies when faced with unexpected situations.</p>
                            <p className="opacity-70 pb-4">According to Gartner, “By 2025, autonomous AI agents will participate in 75% of enterprise-generated workflows.” This isn’t just an evolution – it’s a technological revolution.</p>
                            <p className="opacity-70 pb-4">Pro Tip: Start exploring autonomous AI agents by identifying repetitive tasks in your workflow that require decision-making capabilities.</p>
                            <p className="opacity-70 pb-4">Ready to discover how these powerful AI systems are transforming industries? Let’s dive deeper into their current capabilities… </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[18px] sm:text-[25px] lg:text-5xl text-left lg:text-center font-bold pb-8">Current Capabilities of Autonomous AI</h1>
                        <p className="opacity-70 text-lg pb-4">Think autonomous AI is still science fiction? Think again. Today’s AI agents are already performing tasks that seemed impossible just a few years ago.</p>
                        <p className="opacity-70 text-lg">Let’s dive into what these digital powerhouses can actually do.</p>
                    </div>
                    <div>
                        <h1 className="text-[18px] sm:text-[25px] lg:text-5xl font-bold pt-8">Language and Communication</h1>
                            <div className="pt-4 text-lg">
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Natural conversations across 100+ languages</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Real-time document analysis and summarization</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Complex content creation, from code to creative writing</p>
                                </div>
                            </div>
                            <p className="text-lg opacity-70 pt-4">The most impressive part? These systems can now chain multiple capabilities together, creating sophisticated workflows autonomously.</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="text-[18px] sm:text-[25px] lg:text-5xl font-bold">Decision Making and Problem Solving</h1>
                            <div className="pt-4 text-lg">
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Multi-step task planning and execution</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Dynamic resource allocation</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Real-time error detection and correction</p>
                                </div>
                            </div>
                            <p className="text-lg opacity-70 pt-4">According to Gartner, “By 2025, autonomous AI agents will handle 50% of enterprise customer service interactions.” </p>
                    </div>
                    <div className="pt-8">
                        <h1 className="text-[18px] sm:text-[25px] lg:text-5xl font-bold">Advanced Perception Capabilities</h1>
                        <p className="text-lg opacity-70 py-4">Modern autonomous AI can:</p>
                            <div className="pt-4 text-lg">
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Process and analyze visual data in real-time</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Understand context and nuance in communication</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FontAwesomeIcon icon={faCircle} className="bg-white w-[6px] h-[6px] rounded-full"/>
                                    <p className="opacity-70">Learn and adapt from new experiences without explicit programming</p>
                                </div>
                            </div>
                            <p className="opacity-70 text-lg py-4">
                                But here’s the game-changer: these systems are now capable of self-improvement.
                            </p>
                            <div className="text-md opacity-70 italic relative pl-4 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[2px] before:h-full before:bg-white">
                                “We’re seeing AI agents that can not only complete tasks but optimize their own processes and identify new efficiency opportunities.” - Dr. Sarah Chen, AI Research Lead at MIT
                            </div>
                            <p className="text-lg opacity-70 pt-4">The most exciting part? These capabilities are just the tip of the iceberg. As we move into exploring practical applications, you’ll see how these fundamental abilities translate into revolutionary business solutions.</p>
                            <p className="opacity-70 font-bold pt-4 pb-[140px] text-lg">Pro Tip: Focus on AI capabilities that align with your specific business challenges rather than implementing everything at once. </p>
                    </div>
                </div>
                <Cta />
                <Footer />
            </Container>
        </div>
    );
}

export default BlogDetails;