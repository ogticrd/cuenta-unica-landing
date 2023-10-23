import { Content } from './types';

import Hero from './components/hero';
import Description from './components/description';
import Benefits from './components/benefits';
import StepsToRegister from './components/steps-to-register';
import OnlineServices from './components/online-services';

export default async function Home() {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl, {
    cache: 'no-store',
  });
  const content: Content = await response.json();

  return (
    <div>
      <Hero data={content.hero} />
      <Description data={content.description} />
      <Benefits data={content.benefits} />
      <StepsToRegister data={content.stepsToRegister} />
      <OnlineServices data={content.onlineServices} />
    </div>
  );
}
