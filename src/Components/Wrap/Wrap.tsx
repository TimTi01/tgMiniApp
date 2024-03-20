import { FC } from 'react'
import s from './wrap.module.css'


export interface WrapProps {
    children: React.ReactNode;
}

export const Wrap: FC<WrapProps> = (props) => {

    return (
        <div className={s.wrap}>
            {props.children}
        </div>
    )
}