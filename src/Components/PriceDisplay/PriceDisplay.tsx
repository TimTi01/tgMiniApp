import { FC } from 'react'
import s from './priceDisplay.module.css'
import { useStore } from '../../store/store'
import { formater } from '../../hooks/hooks'

export const PriceDisplay: FC = () => {
    let {litrs, price} = useStore((state) => state)

    // let fromPrice = formater(price)


    // const isFormatter = () => {
    //     let fromPrice = formater(price)

    //     return fromPrice
    // }

    return (
        <div className={s.priceDisplayWrap}>
            <div className={s.liters}>{litrs} л</div>
            <div className={s.slash}>/</div>

            {/* <div className={s.rubles}>{test}</div> */}
            <div className={s.rubles}>{formater(price)}</div>
            {/* <div className={s.rubles}>{price}</div> */}
        </div>
    )
}
