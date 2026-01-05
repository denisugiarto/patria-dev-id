import githubIcon from '../assets/icons/github.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import youtubeIcon from '../assets/icons/youtube.svg';

export const siteConfig = {
  name: "Patria Dev",
  title: "Patria Dev",
  description: "Coding Bareng, Tumbuh Bareng di Blitar.",
  email: "patria.comunity@gmail.com",
  address: "",
  profile: {
    memberCount: "125+",
    eventsPerYear: "12",
    localSpeakers: "10+",
    cost: "100%"
  }
};

export const navLinks = [
  { href: "/", label: "nav.home" },
  { href: "/event", label: "nav.event" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export const socialLinks = [
  {
    platform: "Instagram",
    href: "https://www.instagram.com/patria.developer",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/company/patriadev",
    icon: linkedinIcon,
  },
  {
    platform: "Youtube",
    href: "https://youtube.com/@patriadev",
    icon: youtubeIcon,
  },
  {
    platform: "GitHub",
    href: "https://github.com/patria-developer",
    icon: githubIcon,
  }
];
