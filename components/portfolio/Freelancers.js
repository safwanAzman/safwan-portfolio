import React from 'react';

import PortfolioCard from '../PortfolioCard';
import dkita from '../../assets/work/dkita.png';

const Freelancers = () => {
    return (
        <>
            <PortfolioCard
                href="https://apps.apple.com/my/app/dkita-services-app/id1614068909"
                src={dkita}
                title="Dkita service"
                subTitle="Expo React Native"
            />
        </>
    )
}

export default Freelancers;