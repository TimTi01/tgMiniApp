import { FC } from 'react'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation } from 'react-router-dom';
import s from './columnComponent.module.css';
import { SwitchItem } from '../SwitchItem/SwitchItem';

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
        </div>
    )
}
