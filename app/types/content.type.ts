import { type } from 'os';

export type Navbar = {
  button: {
    label: string;
    href: string;
  };
};

export type Hero = {
  title: string;
  titleRed: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
};

export type Description = {
  title: string;
  titleBlue: string;
  description: string;
};

export type Benefits = {
  title: string;
  benefits: {
    title: string;
    description: string;
    image: string;
  }[];
};

export type Step = {
  title: string;
  items: string[];
};
export type StepsToRegister = {
  title: string;
  titleBlue: string;
  steps: Step[];
};

export type OnlineServices = {
  title: string;
  titleBlue: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
};

export type KnowUs = {
  title: string;
  text: string;
};

export type Contact = {
  title: string;
  items: string[];
};

export type Search = {
  title: string;
  text: string;
};

export type Info = {
  title: string;
  text: string;
  href: string;
};

export type SocialNetworks = {
  facebook: string;
  youtube: string;
  twitter: string;
  instagram: string;
};

export type Footer = {
  knowUs: KnowUs;
  contact: Contact;
  search: Search;
  info: Info;
  socialNetworks: SocialNetworks;
};

export type Content = {
  navbar: Navbar;
  hero: Hero;
  description: Description;
  benefits: Benefits;
  stepsToRegister: StepsToRegister;
  onlineServices: OnlineServices;
  footer: Footer;
};
