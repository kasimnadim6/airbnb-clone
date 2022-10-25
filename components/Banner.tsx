import Image from 'next/image';
import { BannerProps } from '../interface/BannerProps';

const Banner = ({ bannerUrl }: BannerProps) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={bannerUrl} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="md:text-3xl font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-16 py-5 my-3 rounded-full font-semibold tracking-wider md:text-xl shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
