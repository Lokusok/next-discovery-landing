import React from 'react';

import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import Invite from '@/components/sections/Invite';
import Gallery from '@/components/sections/Gallery';
import Places from '@/components/sections/Places';

export default function RootPage() {
  return (
    <>
      <Header />
      <Hero />
      <Invite />
      <Gallery />
      <Places />
    </>
  );
}
