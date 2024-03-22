import { FC } from 'react'
import s from './gridButton.module.css'
import { useStore } from '../../../store/store';

interface GridButtonProps {
  count: number;
  buttonText: string;
}

export const GridButton: FC<GridButtonProps> = (props) => {
    const { buttonText, count } = props
    // const setLitrs = useStore((state) => state.setLitrs)
    const {setRub, setLitrs} = useStore((state) => state)

    const handleClick = (count: number) => {
        if (count === 20) {
            setLitrs(20)
            setRub(1000)
            // setPrice(1000)
        } else if (count === 30) {
            setLitrs(30)
            setRub(1500)
        } else if (count === 40) {
            setLitrs(40)
            setRub(2000)
        } else if (count === 1000) {
            setLitrs(20)
            setRub(1000)
        } else if (count === 1500) {
            setLitrs(30)
            setRub(1500)
        } else if (count === 2000) {
            setLitrs(40)
            setRub(2000)
        }
    }

    return (
        <button 
            className={s.buttonGrid}
            // @ts-ignore
            onClick={() => handleClick(count)}
        >
            {buttonText}
        </button>
    )
}
