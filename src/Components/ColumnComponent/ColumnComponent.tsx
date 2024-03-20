import { FC } from 'react'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom';
import { SwitchItem } from '../SwitchItem/SwitchItem';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import s from './columnComponent.module.css';

// Нужно подправить название типов
const items = [
    {type: 'notOil', oilType: '1'},
    {type: 'notOil', oilType: '2'},
    {type: 'notOil', oilType: '3'},
    {type: 'notOil', oilType: '5'},
    {type: 'notOil', oilType: '6'}
]

export const ColumnComponent: FC = ({}) => {
    let location = useLocation();
    let lastChar = location.pathname[location.pathname.length - 1];
    const navigate = useNavigate();

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: 'Дальше',
    });
    Telegram.WebApp.MainButton.onClick(function() {
        navigate("/tgMiniApp/3")
    });

    return (
        <div className={s.columnWrap}>
            <PageNumber number={`${lastChar}/3`}/>
            <Title title={'Колонка'} />
            {
                items.map((item, idx) => (
                    <SwitchItem 
                        key={idx}
                        type={item.type}
                        oilType={item.oilType}
                    />
                ))
            }

            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            {/* <NextRouteButton navigateLink="/tgMiniApp/3"/>
            { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}

            <BackButton onClick={() => navigate(-1)}/>
        </div>
    )
}
