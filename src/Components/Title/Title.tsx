import { FC } from 'react'
import s from './title.module.css'

interface TitleProps {
    title: string
}

export const Title: FC<TitleProps> = (props) => {
    const {title} = props

    return (
        <div className={s.title}>{title}</div>
    )
}
