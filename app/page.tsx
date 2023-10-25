import {
  Benefits,
  Content,
  Description,
  Footer,
  Hero,
  Navbar,
  OnlineServices,
  StepsToRegister,
} from './types';

import StepsToRegisterComponent from './components/steps-to-register';
import OnlineServicesComponent from './components/online-services';
import DescriptionComponent from './components/description';
import BenefitsComponent from './components/benefits';
import FooterComponent from './components/footer';
import NavbarComponent from './components/navbar';
import HeroComponent from './components/hero';
import client from '@/tina/__generated__/client';

export default async function Home() {
  const navBarData = await client.queries.navbar({ relativePath: 'navbar.md' });
  const heroData = await client.queries.hero({ relativePath: 'hero.md' });
  const descriptionData = await client.queries.description({
    relativePath: 'description.md',
  });
  const benefitsData = await client.queries.benefits({
    relativePath: 'benefits.md',
  });
  const stepsToRegisterData = await client.queries.stepsToRegister({
    relativePath: 'stepsToRegister.md',
  });
  const onlineServicesData = await client.queries.onlineServices({
    relativePath: 'onlineServices.md',
  });
  const footerData = await client.queries.footer({ relativePath: 'footer.md' });

  return (
    <div>
      <NavbarComponent data={navBarData.data.navbar as Navbar} />
      <HeroComponent data={heroData.data.hero as Hero} />
      <DescriptionComponent
        data={descriptionData.data.description as Description}
      />
      <BenefitsComponent data={benefitsData.data.benefits as Benefits} />
      <StepsToRegisterComponent
        data={stepsToRegisterData.data.stepsToRegister as StepsToRegister}
      />
      <OnlineServicesComponent
        data={onlineServicesData.data.onlineServices as OnlineServices}
      />
      <FooterComponent data={footerData.data.footer as Footer} />
    </div>
  );
}
