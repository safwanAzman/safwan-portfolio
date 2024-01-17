import React from 'react';

import PortfolioCard from '../PortfolioCard';

import azzahra from '../../assets/work/azzahra.png';
import kasihgold from '../../assets/work/kasihgold.png';
import csccovid from '../../assets/work/csccovid.png';
import efms from '../../assets/work/efms.png';
import emandate from '../../assets/work/emandate.png';
import arrahnu from '../../assets/work/arrahnu.png';
import csctestkit from '../../assets/work/csctestkit.png';
import crems from '../../assets/work/crems.png';
import cces from '../../assets/work/cces.png';

const Work = () => {
    return (
        <>
            <PortfolioCard
                href="https://cscabs.net.my/kasihgold/login"
                src={kasihgold}
                title="Kasih Gold"
                subTitle="Tall Stack"
            />
            <PortfolioCard
                href="https://cscabs.net.my/covid/"
                src={csccovid}
                title="Covid Report"
                subTitle="Laravel & Tailwindcss"
            />
            <PortfolioCard
                href="https://www.koputraonline.com.my/fms/"
                src={efms}
                title="FMS"
                subTitle="Tall Stack"
            />
            <PortfolioCard
                href="https://www.koputraonline.com.my/arrahnu/login"
                src={arrahnu}
                title="Arrahnu"
                subTitle="Tall Stack"
            />
            <PortfolioCard
                href="https://crems.cscabs.net.my/login"
                src={cces}
                title="Cces"
                subTitle="Tall Stack"
            />
        </>
    )
}

export default Work;