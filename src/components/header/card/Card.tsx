import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ICardProps {
  image: string,
  description: string,
  title: string,
}

const Card = ({description, image, title}: ICardProps) => {
  return (
    <article className='px-2 my-2'>
      <Link href='/cursos/' className='flex flex-col gap-2 hover:no-underline'> 
        <Image
            src={image}
            alt='Imagem'
            className='aspect-video object-cover'
            width={480}
            height={360}
            draggable={false}
        />
        <h4 className='font-extrabold text-lg'>{title}</h4>

        <p className='line-clamp-3'>{description}</p>
      </Link>
    </article>
  );
};

export default Card;