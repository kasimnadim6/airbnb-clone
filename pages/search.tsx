import { GetServerSideProps, NextPage } from 'next';
import { getImageUrl } from '../utils/db';
import { format } from 'date-fns';
import Header from '../components/Header';
import Stay from '../components/Stay';

const Search: NextPage = ({
  logoUrl,
  location,
  startDate,
  endDate,
  numberOfGuest,
  searchData,
}: any) => {
  const formattedStartDate =
    startDate && format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <>
      <Header
        logoUrl={logoUrl}
        placeHolder={`${location} | ${range} | ${numberOfGuest} guests`}
      />
      <section className="flex flex-col mt-14 px-6">
        <p className="text-lg md:text-xl">
          300+ Stays - {range} - for {numberOfGuest} guests
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 mt-2">
          Stays in {location}
        </h1>
        <div className="hidden lg:inline-flex space-x-3 text-gray-800 mb-5 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Places</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>
        <div className="flex flex-col">
          {searchData &&
            searchData.map((item: any) => (
              <Stay key={item.title} data={item} />
            ))}
        </div>
      </section>
    </>
  );
};

// export async function getStaticProps() {
//   const logoUrl = await getImageUrl('Airbnb_Logo.png');
//   const searchData = await fetch(
//     'https://kasim-airbnb-clone-default-rtdb.firebaseio.com/stays.json'
//   ).then((res) => res.json());
//   return {
//     props: {
//       logoUrl,
//       showHeader: false,
//       searchData,
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { location, startDate, endDate, numberOfGuest } = context.query;
  const logoUrl = await getImageUrl('Airbnb_Logo.png');
  const searchData = await fetch(
    'https://kasim-airbnb-clone-default-rtdb.firebaseio.com/stays.json'
  ).then((res) => res.json());
  return {
    props: {
      logoUrl,
      showHeader: false,
      location,
      startDate,
      endDate,
      numberOfGuest,
      searchData,
    },
  };
};
export default Search;
