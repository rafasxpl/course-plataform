import React from 'react';
import Card, {ICardProps} from '../card/Card';
interface ISectionProps {
    items: ICardProps[],
    title: string;
    variant: 'grid' | 'h-list'
}

const Section = ({items, title, variant}: ISectionProps) => {
  return (
    <section className='flex flex-col gap-4 px-4 mt-8'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <ul 
            data-variant={variant}
            className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 gap-4 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
        >
            {
                items.map((element) => (
                    <li data-variant={variant} key={element.title} className='w-full data-[variant=h-list]:sm:w-72'>
                        <Card 
                            title={element.title}
                            description={element.description}
                            image={element.image}
                        />
                    </li>
                ))
            }
        </ul>
    </section>
  );
};

export default  Section;