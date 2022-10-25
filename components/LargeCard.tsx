import Image from 'next/image';
import React from 'react';
import { CardProps } from '../interface/CardProps';

const LargeCard = ({ data }: CardProps) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={data?.img || ''}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-10">
        <h3 className="text-5xl font-semibold mb-3 w-64">{data.title}</h3>
        <p className="text-lg">{data.description}</p>
        <button className="text-lg text-white bg-gray-900 px-8 py-3 rounded-lg mt-2">
          {data.btnText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
