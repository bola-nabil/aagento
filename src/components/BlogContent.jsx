import React from "react";
import { useData } from "../hooks/useData";
import BlogCard from "./cards/BlogCard";

const BlogContent = ({numberOfSlices}) => {
    const {content} = useData();
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-[180px]">
            {
                content?.blogs.map((card) => (
                    <div key={card.id}>
                        <BlogCard profileImg={`/src/assets/teams/${card.profileImg}`} name={card.name} date={card.date} blogImg={`/src/assets/blogs/${card.blogImg}`} blogTitle={card.blogTitle} blogPath={`/blog/${card.id}`}/>
                    </div>
                )).slice(0,numberOfSlices)
            }
        </div>
    );
}

export default BlogContent;