import React from 'react';
import PortfolioCard from '../PortfolioCard';

import frontendMentor from '../../assets/work/frontendMentor.png';
import digitalcard from '../../assets/work/digitalcard.png';
import mycomponent from '../../assets/work/mycomponent.png';
import todo from '../../assets/work/todo.png';
import jomskate from '../../assets/work/jomskate.png';
import boikotisrael from '../../assets/work/boikotIsrael.png';
import ryukgenerate from '../../assets/work/ryukgenerate.png';
import offrage from '../../assets/work/offrage.png';


const Hobby = () => {
    return (
        <>
            <PortfolioCard
                href="https://www.jomskate.xyz/"
                src={jomskate}
                title="Jom Skate"
                subTitle="Next Js & Tailwindcss"
            />
            <PortfolioCard
                href="https://www.boikotisrael.com/en"
                src={boikotisrael}
                title="Boikot Israel"
                subTitle="Next Js & Tailwindcss"
            />
            <PortfolioCard
                href="https://ryuk-generate.vercel.app/"
                src={ryukgenerate}
                title="Ryuk Generate"
                subTitle="Next Js & Tailwindcss"
            />
            <PortfolioCard
              href="https://www.offrage.store/"
              src={offrage}
              title="Offrage Store"
              subTitle="Nextjs & Tailwindcss"
            />
            <PortfolioCard
              href="https://digital-card-pearl.vercel.app/"
              src={digitalcard}
              title="Digital Card"
              subTitle="Nextjs & Tailwindcss"
            />
            <PortfolioCard
                href="https://www.frontendmentor.io/profile/safwanAzman"
                src={frontendMentor}
                title="My Challenge Solutions"
                subTitle="Frontend Mentor"
            />
            <PortfolioCard
                href="https://tailwindcomponents.com/u/safwanazman"
                src={mycomponent}
                title="My Component"
                subTitle="Tailwindcss"
            />
            <PortfolioCard
                href="https://todo-list-frontend-gyjy2qeqh-safwanazman.vercel.app/"
                src={todo}
                title="Todo List"
                subTitle="React & Tailwindcss"
            />
            
        </>
    )
}

export default Hobby;