import React, { memo, useMemo } from "react";
import { useData } from "../hooks/useData";
import Logo from "/assets/home/logo.avif";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialIcons = {
  faFacebook,
  faGithub,
  faYoutube,
  faLinkedin
};



const Footer = () => {
  const { content } = useData();

  const quickLinks = useMemo(() => content?.quickLinks || [], [content]);
  const resourcesLinks = useMemo(() => content?.resourcesLinks || [], [content]);
  const helpLinks = useMemo(() => content?.helpLinks || [], [content]);
  const socialLinks = useMemo(() => content?.socialLinks || [], [content]);

  return (
    <div className="pt-8">
      <div className="text-white flex flex-col lg:flex-row gap-8">
        <div>
          <Link to="/">
            <div className="flex items-center gap-1 pb-4">
              <img src={Logo} alt="logo" className="w-5 lg:w-10" loading="lazy" />
              <h1 className="text-lg lg:text-3xl font-bold">aagento</h1>
            </div>
          </Link>

          <p className="pb-6">
            Empower your business with cutting-edge AI technology that transforms raw data into actionable insights.
          </p>

          <div className="pb-20">
            <h2 className="text-lg opacity-70">Contact Us</h2>
            <div className="flex flex-col">
              <NavLink to="tel:01026146442" className="hover:text-orange-500">
                +01026146442
              </NavLink>
              <NavLink to="mailto:bolanabil401@gmail.com" className="hover:text-orange-500">
                bolanabil401@gmail.com
              </NavLink>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Resources" links={resourcesLinks} />
          <FooterLinks title="Help Links" links={helpLinks} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-white pb-4">
        <div className="flex items-center justify-center lg:justify-end gap-2 order-first lg:order-last">
          <p>Follow</p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <div
                className="hover:border border-white rounded-full w-10 h-10 flex items-center justify-center"
                key={link.id}
              >
                <NavLink
                  to={link.path}
                  target="_blank"
                  className="px-2"
                  aria-label={`Open ${link.icon} profile`}
                >
                  <FontAwesomeIcon icon={socialIcons[link.icon]} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="order-last lg:order-first pt-5 lg:pt-0">
          <p className="opacity-70 text-center lg:text-left">
            © 2025 Aiagento Work by Bola Nabil
          </p>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = memo(({ title, links }) => (
  <div>
    <h1 className="opacity-70 text-lg">{title}</h1>
    {links.map((link) => (
      <div key={link.id} className="pt-2">
        <NavLink
          to={`/${link.path}`}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "hover:text-orange-500"
          }
        >
          {link.title}
        </NavLink>
      </div>
    ))}
  </div>
));

export default memo(Footer);
