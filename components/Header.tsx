import Image from 'next/image';
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { HeaderProps } from '../interface/HeaderProps';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({ logoUrl, placeHolder }: HeaderProps) => {
  const [searchVal, setSearchVal] = useState('');
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const selectionRange = {
    startDate: dates.startDate,
    endDate: dates.endDate,
    key: 'selection',
  };
  const handleSelect = (ranges: any) => {
    setDates((prev) => {
      return {
        ...prev,
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      };
    });
  };
  const searchHandler = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchVal,
        startDate: dates.startDate.toISOString(),
        endDate: dates.endDate.toISOString(),
        numberOfGuest,
      },
    });
    setSearchVal('');
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-4 md:grid-cols-3 bg-white shadow-md p-3 md:p-5 md:px-10">
      <div
        className="col-span-1 relative h-8 md:h-14 flex items-center cursor-pointer my-auto"
        onClick={() => router.push('/')}
      >
        <Image
          src={logoUrl ? logoUrl : ''}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="col-span-2 md:col-auto flex items-center border-2 rounded-full">
        <input
          type="text"
          placeholder={placeHolder || 'Start your Search'}
          className="truncate bg-transparent outline-none flex-grow pl-5 text-lg md:text-xl font-semibold text-gray-600 placeholder-grey-400"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <MagnifyingGlassIcon className="h-10 md:h-12 bg-red-400 text-white rounded-full p-2 m-2 cursor-pointer" />
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer font-bold md:text-xl">
          Become a Host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6 md:h-8" />
          <UserCircleIcon className="h-6 md:h-8" />
        </div>
      </div>
      {searchVal && (
        <div className="flex flex-col col-span-4 md:col-span-3 md:mx-auto">
          <DateRangePicker
            className="date-picker"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-3">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(+e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 font-semibold"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500 font-bold text-xl"
              onClick={() => setSearchVal('')}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-400 font-bold text-xl"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
