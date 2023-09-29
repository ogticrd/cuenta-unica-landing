import Script from 'next/script';

export default function Index() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/opticrd/official-header/main.js"
        defer
      />
      <official-header />
    </>
  );
}
