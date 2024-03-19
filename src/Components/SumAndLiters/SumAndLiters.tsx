import { FC } from 'react'
import { useLocation } from 'react-router-dom';
import { PageNumber } from '../PageNumber/PageNumber';
import { Title } from '../Title/Title';
import { GridButtons } from '../GridButtons/GridButtons';
import { PriceDisplay } from '../PriceDisplay/PriceDisplay';
import { Range } from '../Range/Range';
import s from './sumAndLiters.module.css'

export const SumAndLiters:FC = () => {
    let location = useLocation();
    let lastChar = location.pathname[location.pathname.length - 1];
    
    return (
        <div className={s.sumAndLitersWrap}>
            <PageNumber number={`${lastChar}/3`}/>
            <Title title={'Сумма и литры'} />
            <PriceDisplay />
            <Range />
            <GridButtons />
        </div>
    )
}
