import { FC } from 'react'
import s from './switchOilType.module.css'

export const SwitchOilType: FC = () => {

    return (
        <div className={s.wrap}>
            <div className={s.pageNumber}>
                1/3
            </div>
            <div className={s.title}>
                Топливо
            </div>
        </div>
    )
}
