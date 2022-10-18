import Image from 'next/image';
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:p-5 md:px-10">
      <div className="relative h-7 md:h-10 flex items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center border-2 rounded-full py-2 col-span-2 md:col-auto">
        <input
          type="text"
          placeholder="Start your Search"
          className="bg-transparent outline-none flex-grow pl-5 text-sm text-gray-600 placeholder-grey-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>
      <div className="hidden md:flex justify-end items-center space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
