import { unstable_setRequestLocale } from 'next-intl/server';

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

import { LanguagesType } from '../../../types';

type Props = {
  params: {
    locale: LanguagesType;
  };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
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
    </>
  );
}
