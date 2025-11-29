import React, {lazy} from "react";
import { useData } from "../hooks/useData";
const TestimonialsCard = lazy(() => import("./cards/TestimonialsCard"));

const Testimonials = () => {
    const {content} = useData();
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 pb-[180px]">
            {
                content?.testimonials.map((card) => (
                    <div key={card.id}>
                        <TestimonialsCard content={card.content} name={card.name} jobTitle={card.jobTitle} profileImg={`/src/assets/teams/${card.profileImg}`} animation="fade-up"/>
                    </div>
                ))
            }
        </div>
    );
}

export default Testimonials;