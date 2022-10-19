import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { getImageUrl } from '../utils/db';

interface Location {
  location: string;
}
interface Props {
  exploreData: Location[];
  logoUrl: string;
  bannerUrl: string;
}

const Home: NextPage<Props> = ({ exploreData, logoUrl, bannerUrl }: Props) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logoUrl={logoUrl} />
      <Banner bannerUrl={bannerUrl} />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {exploreData?.map((item: Location) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const logoUrl = await getImageUrl('Airbnb_Logo.png');
  const bannerUrl = await getImageUrl('banner.png');
  const exploreData = await fetch(
    'https://kasim-airbnb-clone-default-rtdb.firebaseio.com/explore.json'
  ).then((res) => res.json());
  return {
    props: {
      logoUrl,
      bannerUrl,
      exploreData: exploreData,
    },
  };
}
export default Home;
