import { FC } from 'react'
import s from './gridButton.module.css'

interface GridButtonProps {
  buttonText: string;
}

export const GridButton: FC<GridButtonProps> = (props) => {
    const { buttonText } = props

    return (
        <button className={s.buttonGrid}>
            {buttonText}
        </button>
    )
}
