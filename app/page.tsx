import { Content } from './types';

import StepsToRegister from './components/steps-to-register';
import OnlineServices from './components/online-services';
import Description from './components/description';
import Benefits from './components/benefits';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Hero from './components/hero';

export default async function Home() {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl, {
    cache: 'no-store',
  });
  const content: Content = await response.json();

  return (
    <div>
      <Navbar />
      <Hero data={content.hero} />
      <Description data={content.description} />
      <Benefits data={content.benefits} />
      <StepsToRegister data={content.stepsToRegister} />
      <OnlineServices data={content.onlineServices} />
      <Footer data={content.footer} />
    </div>
  );
}
