import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image src="/logo.svg" alt="logo" width={150} height={100} />
      <h1>Cuenta única</h1>
    </main>
  );
}
