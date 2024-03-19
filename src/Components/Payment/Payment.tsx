import { FC } from "react"
import s from './payment.module.css'
import { TotalPayable } from "./TotalPayable/TotalPayable"
import { PaymentMethod } from "../PaymentMethod/PaymentMethod"
import { Alert } from "../Alert/Alert"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import { useNavigate } from "react-router-dom"

export const Payment: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={s.paymentWrap}>
            <div className={s.paymentTitle}>ПОДТВЕРЖДЕНИЕ ЗАКАЗА</div>
            <TotalPayable />
            <PaymentMethod />
            <Alert />

            <BackButton onClick={() => navigate(-1)}/>
            <MainButton 
                text="Оплатить 1977 руб." 
                onClick={() => navigate("/tgMiniApp/waitingForPayment")}
            />
        </div>
    )
}
