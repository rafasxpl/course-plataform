import React, { Children } from 'react';
interface ISectionProps {
    children: React.ReactNode
    title: string;
    variant: 'grid' | 'h-list'
}

const Section = ({children, title, variant}: ISectionProps) => {
    const countArray = Children.toArray(children);

  return (
    <section className='flex flex-col gap-4 px-2.5'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <ul 
            data-variant={variant}
            className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 gap-4 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
        >
            {
                countArray.map((element, index) => (
                    <li data-variant={variant} key={index} className='w-full data-[variant=h-list]:sm:w-72'>
                        {element}
                    </li>
                ))
            }
        </ul>
    </section>
  );
};

export default  Section;