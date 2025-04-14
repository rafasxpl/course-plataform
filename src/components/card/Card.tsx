import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ICardProps {
  image: string,
  description: string,
  title: string,
}

const Card = ({description, image, title}: ICardProps) => {
  return (
    <article>
      <Link href='/cursos/' className='flex flex-col gap-2 hover:no-underline'> 
        <Image
            src={image}
            alt='Imagem'
            className='aspect-video object-cover'
            width={640}
            height={680}
            draggable={false}
        />
        <h4 className='font-extrabold text-lg'>{title}</h4>

        <p className='line-clamp-2 sm:line-clamp-3 md:line-clamp-4'>{description}</p>
      </Link>
    </article>
  );
};

export default Card;