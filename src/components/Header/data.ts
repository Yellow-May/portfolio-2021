import { CurrentPageTypes } from "../../app/store";

import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiMail } from "react-icons/ti";

export const links: CurrentPageTypes[] = ["Home", "Profile", "Projects"];
export const socials = [
	{ Fc: TiSocialLinkedin, link: "https://www.linkedin.com/in/precious-onyekwere-7a87001b5/" },
	{ Fc: TiSocialGithub, link: "https://github.com/Yellow-May" },
	{ Fc: TiSocialTwitter, link: "https://twitter.com/_Yellow_May" },
	{ Fc: TiMail, link: "" },
];
