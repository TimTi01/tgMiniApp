import { FC } from 'react'
import s from './priceDisplay.module.css'

export const PriceDisplay: FC = () => {

    return (
        <div className={s.priceDisplayWrap}>
            <div className={s.liters}>40 л</div>
            <div className={s.slash}>/</div>
            <div className={s.rubles}>2000 р</div>
        </div>
    )
}
