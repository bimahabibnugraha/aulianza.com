import {
  BsWhatsapp as WhatsappIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsRssFill as BlogIcon,
} from "react-icons/bs";
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri";

import { SocialItemProps } from "../types/socials";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/bimahabibnugraha/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "text-[#0b66c2] hover:bg-[#0b66c2]",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/bimahabib98",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "text-pink-600 hover:bg-pink-600",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/6289530324308",
    icon: <WhatsappIcon size={19} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: WhatsApp",
    className: "text-[#25d366] hover:bg-[#25d366]",
  },
  {
    title: "Blog",
    href: "https://bima.qzz.io",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Blog",
    className: "text-orange-500 hover:bg-orange-500",
  },
];
