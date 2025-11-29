import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../hooks/useData";

const Navlinks = ({ isMobile, closeMenu }) => {
  const {content} = useData();
  const activeClass = "text-orange-500"; 
  const defaultClass = "text-white hover:text-orange-500";

  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col gap-4 items-center text-white"
          : "flex items-center gap-6"
      }`}
    >
      {isMobile &&
        content?.allPagesLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          >
            {link.title}
          </NavLink>
        ))}

      {!isMobile && (
        <>
          <div className="relative group cursor-pointer">
            <li className="list-none text-white">All Pages</li>

            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {content?.allPagesLinks.map((link) => (
                <li key={link.id} className="list-none mb-2 last:mb-0">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-black hover:text-orange-500"
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>

          {content?.mainLinks.map((link) => (
            <li key={link.id} className="list-none">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : "text-white hover:text-orange-500"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </>
      )}
    </div>
  );
};

export default Navlinks;
