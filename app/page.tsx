import Image from 'next/image';

import { Content } from './types';

export default async function Home() {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl, {
    cache: 'no-store',
  });
  const content: Content = await response.json();

  return (
    <main>
      <Image src="/logo.svg" alt="logo" width={150} height={100} />
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </main>
  );
}
