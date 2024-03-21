import { FC } from 'react'
import s from './switchColumnItem.module.css'
import { useStore } from '../../store/store'

interface SwitchColumnItemProps {
    id: number,
    type: string,
    oilType: string,
    price?: number,
    active?: boolean,
    onClick?: (type: number) => void, 
}

// Нужно зарефакторить после MPV
const activeStyles = {
    'border': '3px solid #0a7ffe',
    'background': '#d7e3f5'
}
export const SwitchColumnItem: FC<SwitchColumnItemProps> = (props) => {
    const {id, type, oilType, price, active, onClick} = props
    const { setOilType, setRub, setPrice } = useStore(state => state)

    const handleClick = () => {
        if (onClick) {
          onClick(id + 1);

          console.log(id);
          console.log(oilType, price);
          setOilType(oilType)
          setRub(price)
          setPrice(price)
        }
    };

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
            onClick={handleClick}
        >
            <div className={s.typeOil}>{oilType}</div>
            {/* @ts-ignore */}
            {type === 'oil' && <div className={s.price}>{ priceInRub }</div>}
        </div>
    )
}
