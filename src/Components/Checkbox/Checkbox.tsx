import { FC } from 'react'
import s from './checkbox.module.css';

export const Checkbox: FC = () => {

    return (
        <>
            <input 
                id="cbx" 
                className={s.inpCbx} 
                type="checkbox"
            />
            <label 
                className={s.cbx} 
                htmlFor="cbx"
            >
                <span >
                    <svg width="25" height="25" viewBox="0 -4 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 6L4.75 9.5L10.25 1.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span className={s.checkTitle}>
                    Отправить чек в чат Telegram
                </span>
            </label>
        </>
    )
}
