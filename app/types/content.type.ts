import { type } from 'os';

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
  subTitleOne: string;
  descriptionOne: string;
  subTitleTwo: string;
  descriptionTwo: string;
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
  facebook: {
    url: string;
  };
  youtube: {
    url: string;
  };
  twitter: {
    url: string;
  };
  instagram: {
    url: string;
  };
};

export type Footer = {
  knowUs: KnowUs;
  contact: Contact;
  search: Search;
  info: Info;
  socialNetworks: SocialNetworks;
};

export type Content = {
  hero: Hero;
  description: Description;
  benefits: Benefits;
  stepsToRegister: StepsToRegister;
  onlineServices: OnlineServices;
  footer: Footer;
};
