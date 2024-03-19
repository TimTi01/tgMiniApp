import { FC } from 'react'
import s from './paymentMethod.module.css'
import { PaymentMethodItem } from './PaymentMethodItem/PaymentMethodItem'
import mir from '../../static/mir.png';

export const PaymentMethod: FC = () => {

    return (
        <div className={s.paymentMethodWrap}>
            <PaymentMethodItem 
                title={'Способ оплаты'}
                cardLogoIsVisible={true}
                cardLogoPath={mir}
                number={'*1234'}
            />
            <PaymentMethodItem 
                title={'Бонусная карта'}
                cardLogoIsVisible={false}
                cardLogoPath={'../assets/mir.png'}
                number={'*3213'}
            />
            <PaymentMethodItem 
                title={'Получение чека'}
                cardLogoIsVisible={false}
                cardLogoPath={'../assets/mir.png'}
                number={'Telegram'}
            />
        </div>
    )
}
