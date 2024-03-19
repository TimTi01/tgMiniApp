import { FC } from 'react'
import s from './SwitchItem.module.css'

interface SwitchItemProps {
    type: string,
    oilType: string,
    price?: number,
    active?: boolean 
}

// Нужно зарефакторить после MPV
const activeStyles = {
    'border': '3px solid #0a7ffe',
    'background': '#d7e3f5'
}
export const SwitchItem: FC<SwitchItemProps> = (props) => {
    const {type, oilType, price, active} = props
    let priceInRub: string

    if (type === 'oil') {
        const formatInRub = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // @ts-ignore
        priceInRub = formatInRub.format(price);
    }

    return (
        <div className={s.switchItemWrap} 
            style={active ? activeStyles : {} }
        >
            <div className={s.typeOil}>{oilType}</div>
            {/* @ts-ignore */}
            {type === 'oil' && <div className={s.price}>{ priceInRub }</div>}
        </div>
    )
}
