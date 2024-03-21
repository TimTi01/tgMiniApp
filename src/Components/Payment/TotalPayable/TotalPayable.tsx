import { FC } from 'react'
import s from './totalPayable.module.css'
import { useStore } from '../../../store/store'
import { formater } from '../../../hooks/hooks'

export const TotalPayable: FC = () => {
  const {oilType, litrs, rub} = useStore((state) => state)

  return (
    <div className={s.totalPayableWrap}>

      <div className={s.priceWrap}>
        <div className={s.calculation}>{`${oilType} ${formater(rub)} x ${litrs} л`}</div>
        <div className={s.price}>{formater(rub * litrs)}</div>
        {/* <div className={s.price}>2 000,00 ₽</div> */}
      </div>

      <div className={s.discountWrap}>
        <div className={s.titleDiscount}>Скидка</div>
        <div className={s.percentageDiscount}>- 22,90 ₽</div>
      </div>

      <div className={s.totalWrap}>
        <div className={s.titleTotal}>Итого</div>
        <div className={s.totalPrice}>{formater((rub * litrs) - 22.9)}</div>
        <div className={s.totalPriceWithDicount}>-2 000,00 ₽</div>
      </div>
    </div>
  )
}
