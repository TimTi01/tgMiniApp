import { FC, useState } from 'react'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom';
// import { SwitchItem } from '../SwitchItem/SwitchItem';
import { SwitchColumnItem } from '../SwitchColumnItem/SwitchColumnItem';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
// import s from './columnComponent.module.css';
import { Wrap } from '../Wrap/Wrap';
// import { useStore } from '../../store/store';
// import { formater } from '../../hooks/hooks';

// Нужно подправить название типов
const items = [
    {id: 1, type: 'notOil', oilType: '1'},
    {id: 2, type: 'notOil', oilType: '2'},
    {id: 3, type: 'notOil', oilType: '3'},
    {id: 4, type: 'notOil', oilType: '5'},
    {id: 5, type: 'notOil', oilType: '6'}
]

export const ColumnComponent: FC = ({}) => {
    let location = useLocation();
    let lastChar = location.pathname[location.pathname.length - 1];
    const navigate = useNavigate();


    
    // let {litrs, price} = useStore((state) => state)
    // let test = formater(price)
    // const isFormatter = () => {
    //     let fromPrice = formater(price)

    //     return fromPrice
    // }

    const [activeItem, setActiveItem] = useState(1)
    const handleItemClick = (id: number) => {
      setActiveItem(id);
    };

    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
        text: 'Дальше',
    });
    Telegram.WebApp.MainButton.onClick(function() {
        navigate("/tgMiniApp/3")
    });

    return (
        // <div className={s.columnWrap}>
        <Wrap>
            <PageNumber number={`${lastChar}/3`}/>
            <Title title={'Колонка'} />
            {
                items.map((item, idx) => (
                    <SwitchColumnItem 
                        id={idx}
                        key={idx}
                        type={item.type}
                        oilType={item.oilType}
                        active={item.id === activeItem}
                        onClick={handleItemClick}
                    />
                ))
            }

            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
            {/* <NextRouteButton navigateLink="/tgMiniApp/3"/>
            { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
            {/*NextRouteButton и BackRouteButton - тестовые кнопки */}

            <BackButton onClick={() => navigate(-1)}/>

            {/* {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
            {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`} */}
        </Wrap>
        // </div>
    )
}
