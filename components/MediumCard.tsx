import Image from 'next/image';
import React from 'react';
import { CardProps } from '../interface/CardProps';

export const MediumCard = ({ data }: CardProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-in-out">
      <div className="relative h-80 w-80">
        <Image src={data?.img || ''} layout="fill" className="rounded-md" />
      </div>
      <h3 className="text-2xl text-gray-700">{data?.title}</h3>
    </div>
  );
};
