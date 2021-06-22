import { CurrentPageTypes } from "../../app/store";

import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiMail } from "react-icons/ti";

export const links: CurrentPageTypes[] = ["Home", "Profile", "Projects"];
export const socials = [
	{ Fc: TiSocialLinkedin, link: "" },
	{ Fc: TiSocialGithub, link: "" },
	{ Fc: TiSocialTwitter, link: "" },
	{ Fc: TiMail, link: "" },
];
