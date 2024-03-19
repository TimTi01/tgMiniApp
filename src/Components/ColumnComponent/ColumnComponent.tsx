import { FC } from 'react'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom';
import s from './columnComponent.module.css';
import { SwitchItem } from '../SwitchItem/SwitchItem';
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app';

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

            <BackButton onClick={() => navigate(-1)}/>
            <MainButton 
                text="Дальше" 
                onClick={() => navigate("/tgMiniApp/3")}
            />
        </div>
    )
}
