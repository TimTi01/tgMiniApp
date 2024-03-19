import { FC } from "react"
import s from './payment.module.css'
import { TotalPayable } from "./TotalPayable/TotalPayable"
import { PaymentMethod } from "../PaymentMethod/PaymentMethod"
import { Alert } from "../Alert/Alert"

export const Payment: FC = () => {

    return (
        <div className={s.paymentWrap}>
            <div className={s.paymentTitle}>ПОДТВЕРЖДЕНИЕ ЗАКАЗА</div>
            <TotalPayable />
            <PaymentMethod />
            <Alert />
        </div>
    )
}
