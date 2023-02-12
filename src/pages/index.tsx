import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Presenting: Fast Casual</title>
        <meta name="description" content="Where Chipotle meets Childers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="font-sans">Presenting: Fast Casual</h1>
        {/* <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        /> */}
      </main>
    </>
  );
}
