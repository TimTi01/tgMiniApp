import { FC } from 'react'
import s from './pageNumber.module.css'

interface PageNumberProps {
    number: string,
}

export const PageNumber: FC<PageNumberProps> = (props) => {
    const {number} = props

    return (
        <div className={s.pageNumber}>
            {number}
        </div>
    )
}
