import Link from "next/link";
import { UrlObject } from "url";

const NavLink = ({href, title}:{href: string | UrlObject, title: string}) => {
  return (
    <Link
      href={href}
      className="block py-3 pl-3 pr-4 text-[#adb7be] sm:text-xl md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
