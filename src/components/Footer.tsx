import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import GithubIcon from "../../public/images/github.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353f] text-white">
      <div className="container flex flex-row items-center justify-between p-6 md:px-12 md:py-8">
        <span className="font-semibold text-lg md:text-xl font-serif">VM</span>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/vishal6969">
            <Image src={GithubIcon} alt="Github Icon"></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/vishal-kumar-mishra-/">
          <Image src={LinkedInIcon} alt="LinkedIn Icon"></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
