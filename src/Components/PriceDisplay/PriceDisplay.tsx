import { FC } from 'react'
import s from './priceDisplay.module.css'
import { useStore } from '../../store/store'
import { formater } from '../../hooks/hooks'

export const PriceDisplay: FC = () => {
    let {litrs, rub} = useStore((state) => state)

    return (
        <div className={s.priceDisplayWrap}>
            <div className={s.liters}>{litrs} л</div>
            <div className={s.slash}>/</div>
            <div className={s.rubles}>{formater(rub)}</div>
        </div>
    )
}
