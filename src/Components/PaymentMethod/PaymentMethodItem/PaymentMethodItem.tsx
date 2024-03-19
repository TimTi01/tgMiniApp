import { FC } from 'react'
import s from './paymentMethodItem.module.css';

export interface PaymentMethodItemProps {
    title: string,
    cardLogoIsVisible: boolean,
    cardLogoPath?: string,
    number: string, // здесь может быть tg
}

export const PaymentMethodItem: FC<PaymentMethodItemProps> = (props) => {
    const {title, cardLogoIsVisible, number, cardLogoPath} = props

    return (
        <div className={s.paymentMethodItemWrap}>
            <div className={s.title}>{title}</div>
            {
                cardLogoIsVisible && (
                    <div className={s.cardLogo}>
                        <img 
                            height={13}
                            width={43}
                            src={cardLogoPath}
                            alt="cardLogo" 
                        />
                    </div>
                )
            }
            <div className={s.numbers}>
                {number}
            </div>
        </div>
    )
}
