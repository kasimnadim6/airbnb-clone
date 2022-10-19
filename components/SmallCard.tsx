import Image from 'next/image';
import React from 'react';
import { CardProps } from '../interface/CardProps';

export const SmallCard = ({ data }: CardProps) => {
  return (
    <div className="flex m-2 mt-5 rounded-xl space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image src={data?.img || ''} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{data?.location}</h2>
        <h3 className="text-gray-500">{data?.distance}</h3>
      </div>
    </div>
  );
};
