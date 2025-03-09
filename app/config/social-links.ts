import { FaGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa';
import { FaBluesky } from "react-icons/fa6";
import { IconType } from 'react-icons';

export interface SocialLink {
    friendlyName: string;
    link: string;
    Icon: IconType;
    isWebmention?: boolean;
}

export const socialLinks: SocialLink[] = [
    {
        friendlyName: "LinkedIn",
        link: `https://www.linkedin.com/in/jamestewartjr`,
        Icon: FaLinkedin,
        isWebmention: true,
    },
    {
        friendlyName: "Github",
        link: `https://github.com/jamestewartjr`,
        Icon: FaGithub,
        isWebmention: true,
    },
    {
        friendlyName: "Blog",
        link: "https://www.jamestewartjr.com/blog",
        Icon: FaNewspaper,
        isWebmention: true,
    },
    {
        friendlyName: "Bluesky",
        link: "https://bsky.app/profile/jamestewartjr.bsky.social",
        Icon: FaBluesky,
        isWebmention: true,
    }
]; 