/** @format */

import { Facebook, Linkedin, Twitter } from "../assets/SvgIcons"; // Ensure Facebook is a valid React component

interface IconsI {
  icon: JSX.Element;
}

export const IconsData: IconsI[] = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Linkedin />,
  },
  {
    icon: <Twitter />,
  },
];
