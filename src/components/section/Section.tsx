import React, { Children } from 'react';

export interface LayoutProps  { 
    children: React.ReactNode
}

const Section = ({children}: LayoutProps) => {
    const countArray = Children.toArray(children);

  return (
    <section className='flex flex-col gap-4 px-2.5'>
        <h2 className='font-bold text-xl'>Todos os cursos</h2>
        <ul>
            {
                countArray.map((element, index) => (
                    <li key={index}>
                        {element}
                    </li>
                ))
            }
        </ul>
    </section>
  );
};

export default  Section;