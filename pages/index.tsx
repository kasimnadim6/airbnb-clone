import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import { MediumCard } from '../components/MediumCard';
import { SmallCard } from '../components/SmallCard';
import { Card } from '../interface/CardProps';
import { HomeProps } from '../interface/HomeProps';
import { getImageUrl } from '../utils/db';

const Home: NextPage<HomeProps> = ({
  exploreData,
  cardsData,
  logoUrl,
  bannerUrl,
  cardUrl,
}: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logoUrl={logoUrl} />
      <Banner bannerUrl={bannerUrl} />
      <main className="max-w-6xl mx-auto px-8 sm:px-16 m-2">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: Card) => (
              <SmallCard key={item.img} data={item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map((item: Card) => (
              <MediumCard key={item.img} data={item} />
            ))}
          </div>
        </section>
        <LargeCard
          data={{
            img: cardUrl,
            title: 'The Greatest Outdoors',
            description: 'Wishlist created by Airbnb.',
            btnText: 'Get Inspired',
          }}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const logoUrl = await getImageUrl('Airbnb_Logo.png');
  const bannerUrl = await getImageUrl('banner.png');
  const cardUrl = await getImageUrl('card.png');

  const exploreData = await fetch(
    'https://kasim-airbnb-clone-default-rtdb.firebaseio.com/explore.json'
  ).then((res) => res.json());
  const cardsData = await fetch(
    'https://kasim-airbnb-clone-default-rtdb.firebaseio.com/cards.json'
  ).then((res) => res.json());
  return {
    props: {
      logoUrl,
      bannerUrl,
      cardUrl,
      exploreData,
      cardsData,
    },
  };
}
export default Home;
