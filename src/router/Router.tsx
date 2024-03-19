import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import { HomePage } from "../Pages/HomePage/HomePage";
import { FillingStationData } from "../Components/FillingStationData/FillingStationData";
import { SwitchComponent } from "../Components/SwitchComponent/SwitchComponent";
import { ColumnComponent } from "../Components/ColumnComponent/ColumnComponent";
import { SumAndLiters } from "../Components/SumAndLiters/SumAndLiters";
import { Payment } from "../Components/Payment/Payment";
import { LastPage } from "../Components/WaitingForPayment/LastPage";
import flyMoney from "../static/flyMoney.gif"
import finger from "../static/finger.gif"
import star from "../static/star.gif"
import car from "../static/car.gif"

export const router = createBrowserRouter([
    {
        path: "/tg-bot-pj-test/",
        element: <HomePage/>,
        children: [
            {
                path: "/tg-bot-pj-test/",
                element: <FillingStationData />
            },
            {
                path: "1",
                element: <SwitchComponent />
            },
            {
                path: "2",
                element: <ColumnComponent />
            },
            {
                path: "3",
                element: <SumAndLiters />
            }
        ]
    },
    {
        path: "/tg-bot-pj-test/payment",
        element: <Payment />,
    },
    {
        path: "/tg-bot-pj-test/waitingForPayment",
        element: <LastPage 
                    gifPath={flyMoney}
                    title={'Секунду, происходит оплата...'}
                    subTitle={'Это займет не более 10 секунд'}
                 />,
    },
    {
        path: "/tg-bot-pj-test/waitingForPayment-2",
        element: <LastPage 
                    gifPath={finger}
                    title={'Вставьте пистолет \n\n в бак и начните заправку'}
                 />,
    },
    {
        path: "/tg-bot-pj-test/waitingForPayment-3",
        element: <LastPage 
                    gifPath={star}
                    title={'Заливаем топливо…'}
                 />,
    },
    {
        path: "/tg-bot-pj-test/waitingForPayment-4",
        element: <LastPage 
                    gifPath={car}
                    title={'Всё готово! \n\n Счастливого пути!'}
                    subTitle={"Заправлено 95+ 50,00 ₽ x 40 л \n\n на сумму 1 977,10 ₽"}
                    check={true}
                 />,
    }
], {
    // basename: "/tg-bot-pj-test/"
});