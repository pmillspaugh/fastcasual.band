import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Presenting: Fast Casual</title>
        <meta name="description" content="Where Chipotle meets Childers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center">
        <p className="font-sans text-4xl">Thursday, March 23</p>
        <p className="font-sans text-xl">@ Bowery Electric ⚡</p>
        <div className="py-8 flex justify-between gap-8">
          <button className="px-4 py-2 rounded-lg bg-violet-700 text-white border-solid border-2 border-transparent hover:bg-white hover:text-violet-700 hover:border-violet-700">
            Tickets →
          </button>
          <button className="px-4 py-2 rounded-lg bg-violet-700 text-white border-solid border-2 border-transparent hover:bg-white hover:text-violet-700 hover:border-violet-700">
            Tour →
          </button>
        </div>
      </section>
    </>
  );
}
