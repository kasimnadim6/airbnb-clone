import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { StayProps } from '../interface/StayProps';

const Stay = ({ data }: StayProps) => {
  return (
    <div className="flex px-2 py-7 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition-all duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={data?.img || ''}
          layout="fill"
          objectFit="cover"
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="md:text-lg">{data?.location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-lg md:text-2xl font-semibold">{data?.title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="md:text-lg pt-2 text-base text-gray-500 flex-grow">
          {data.description}
        </p>
        <div className="flex justify-between items-end">
          <p className="flex items-center md:text-lg font-semibold">
            <StarIcon className="h-5 text-red-400" />
            {data.star}
          </p>
          <div>
            <p className="text-2xl lg:text-3xl font-semibold pb-3">
              {data.price}
            </p>
            <p className="text-lg md:text-xl text-right font-light">
              {data.total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
