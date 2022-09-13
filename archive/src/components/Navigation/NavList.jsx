import React from "react";
import {FaHome, FaReadme} from 'react-icons/fa';
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Info",
      leftIcon: <FaHome />,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Articles",
      leftIcon: <FaReadme />,
      component: Link,
      to: "/articles/"
    },
  ];
  return NavList;
}
export default GetNavList;
