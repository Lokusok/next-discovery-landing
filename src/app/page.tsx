import React from 'react';

import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import Invite from '@/components/sections/Invite';
import Gallery from '@/components/sections/Gallery';
import Places from '@/components/sections/Places';
import Videos from '@/components/sections/Videos';
import Recommendations from '@/components/sections/Recommendations';
import Photographers from '@/components/sections/Photographers';
import Teaser from '@/components/sections/Teaser';
import Blazonries from '@/components/sections/Blazonries';
import Map from '@/components/sections/Map';
import Footer from '@/components/common/Footer';

export default function RootPage() {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <Invite />
        <Gallery />
        <Places />
        <Videos />
        <Recommendations />
        <Photographers />
        <Teaser />
        <Blazonries />
        <Map />
      </main>

      <Footer />
    </>
  );
}
