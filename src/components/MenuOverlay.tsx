import * as React from "react";
import NavLink from "./NavLink";
import { UrlObject } from "url";

interface LinksI {
  path: string | UrlObject;
  title: string;
}

const MenuOverlay = ({ links }: { links: Array<LinksI> }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((item, index) => (
        <li key={index}>
          <NavLink href={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
