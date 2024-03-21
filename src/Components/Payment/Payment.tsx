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
    let rub = useStore((state) => state.rub)

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: `Оплатить ${formater(rub)}`  ,
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

            {/* {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
            {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`} */}
        </div>
    )
}
