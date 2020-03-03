import React from "react";
import FontIcon from "react-md/lib/FontIcons";
// import {FaHome} from 'react-icons';
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Info",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Notes",
      leftIcon: <FontIcon>book</FontIcon>,
      component: Link,
      to: "/notes/"
    },
    // {
    //   primaryText: "About",
    //   leftIcon: <FontIcon>person</FontIcon>,
    //   component: Link,
    //   to: "/about/"
    // }
  ];

  return NavList;
}
export default GetNavList;
