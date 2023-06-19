import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Info from '@/components/Info';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Dashboard />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* Satellite Information */}
          <Info />
        </div>
      </main>
    </>
  );
}
