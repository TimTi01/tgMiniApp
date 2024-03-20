import { FC } from "react"
import s from './payment.module.css'
import { TotalPayable } from "./TotalPayable/TotalPayable"
import { PaymentMethod } from "../PaymentMethod/PaymentMethod"
import { Alert } from "../Alert/Alert"
import { BackButton } from "@vkruglikov/react-telegram-web-app"
import { useNavigate } from "react-router-dom"

export const Payment: FC = () => {
    const navigate = useNavigate();

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: 'Оплатить  1 977,10 ₽',
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

            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            {/* <NextRouteButton navigateLink="/tgMiniApp/waitingForPayment"/>
            { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}

            <BackButton onClick={() => navigate(-1)}/>
        </div>
    )
}
