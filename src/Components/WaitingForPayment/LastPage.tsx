import { FC } from 'react'
import s from './lastPage.module.css'
import { Checkbox } from '../Checkbox/Checkbox'
// import flyMoney from '../../static/flyMoney.gif'

interface LastPage {
    gifPath: string,
    title: string,
    subTitle?: string,
    check?: boolean,
}
export const LastPage: FC<LastPage> = (props) => {
    const {gifPath, title, subTitle, check} = props

    return (
        <div className={s.waitingForPaymentWrap}>
            <div className={s.container}>
                <div className={s.gif}>
                    <img 
                        height={128}
                        width={128}
                        src={gifPath} 
                        alt="fly money gif" 
                    />
                </div>
                <div className={s.title}>
                    {title}
                </div>
                {subTitle && <div className={s.subTitle}>{subTitle}</div>}
            </div>
            {check && <Checkbox />}
        </div>
    )
}
