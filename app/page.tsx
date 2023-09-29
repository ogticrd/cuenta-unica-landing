import Image from 'next/image';
import { ThemeProvider } from '@ogticrd/ui-kit';

import { Content } from './types';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Description from './components/description';
import Benefits from './components/benefits';
import StepsToRegister from './components/steps-to-register';
import OnlineServices from './components/online-services';
import Footer from './components/footer';

export default async function Home() {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl);
  const content: Content = await response.json();

  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Benefits />
      <StepsToRegister />
      <OnlineServices />
      <Footer />

      {/* <h1>{content.title}</h1>
      <p>{content.description}</p> */}
    </div>
  );
}
