import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { PageNumber } from '../PageNumber/PageNumber';
import { Title } from '../Title/Title';
import { GridButtons } from '../GridButtons/GridButtons';
import { PriceDisplay } from '../PriceDisplay/PriceDisplay';
import { Range } from '../Range/Range';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Wrap } from '../Wrap/Wrap';

export const SumAndLiters:FC = () => {
    let location = useLocation();
    let lastChar = location.pathname[location.pathname.length - 1];
    const navigate = useNavigate();
    
    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: 'К оплате',
    });
    Telegram.WebApp.MainButton.onClick(function() {
        navigate("/tgMiniApp/payment")
    });

    return (
        <Wrap>
            {/* <div className={s.sumAndLitersWrap}> */}
            <PageNumber number={`${lastChar}/3`}/>
            <Title title={'Сумма и литры'} />
            <PriceDisplay />
            <Range />
            <GridButtons />

            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            {/* <NextRouteButton navigateLink="/tgMiniApp/payment"/>
            { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}

            <BackButton onClick={() => navigate(-1)}/>
            {/* <MainButton 
                text="К оплате" 
                onClick={() => navigate("/tgMiniApp/waitingForPayment")}
            /> */}

            {/* {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
            {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`} */}
        {/* </div> */}
        </Wrap>
    )
}
