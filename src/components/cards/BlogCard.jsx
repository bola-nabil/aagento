import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({profileImg, name, date, blogImg, blogTitle, blogPath}) => {
    return(
        <Link to={blogPath}>
            <div>
                <div className="flex items-center gap-4 pb-4">
                    <div>
                        <img src={profileImg} alt={name} className="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-white">{name}</h1>
                        <p className="text-white opacity-80">{date}</p>
                    </div>
                </div>
                <div>
                    <img src={blogImg} alt={blogTitle} className="w-80 h-[200px]"/>
                </div>
                <h1 className="text-white opacity-80 pt-4 text-lg hover:text-orange-700">{blogTitle}</h1>
            </div>
        </Link>
    );
}

export default BlogCard;