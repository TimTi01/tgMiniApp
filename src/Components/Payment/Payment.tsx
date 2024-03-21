import { FC } from "react"
import s from './payment.module.css'
import { TotalPayable } from "./TotalPayable/TotalPayable"
import { PaymentMethod } from "../PaymentMethod/PaymentMethod"
import { Alert } from "../Alert/Alert"
import { BackButton } from "@vkruglikov/react-telegram-web-app"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store/store"
import { formater } from "../../hooks/hooks"

export const Payment: FC = () => {
    const navigate = useNavigate();
    let {rub, litrs} = useStore((state) => state)

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: `Оплатить ${formater((rub * litrs) - 22.9)}`,
    });
    Telegram.WebApp.MainButton.onClick(function() {
        navigate("/tgMiniApp/waitingForPayment")
    });

    return (
        <div className={s.paymentWrap}>
            <div className={s.paymentTitle}>ПОДТВЕРЖДЕНИЕ ЗАКАЗА</div>
            <TotalPayable />
            <PaymentMethod />
            <Alert />

            <BackButton onClick={() => navigate(-1)}/>
        </div>
    )
}
