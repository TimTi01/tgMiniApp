import { FC, useEffect } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app'
import s from './lastPage.module.css'
// import flyMoney from '../../static/flyMoney.gif'

interface LastPage {
    gifPath: string,
    title: string,
    subTitle?: string,
    check?: boolean,
}
export const LastPage: FC<LastPage> = (props) => {
    const {gifPath, title, subTitle, check} = props
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/tgMiniApp/waitingForPayment') {
            setTimeout(() => {
                navigate('/tgMiniApp/waitingForPayment-2')
            }, 3500)
        } else if (location.pathname === '/tgMiniApp/waitingForPayment-3') {
            setTimeout(() => {
                navigate('/tgMiniApp/waitingForPayment-4')
            }, 3500)
        }
    })

    const onClose = () => {
        Telegram.WebApp.close()
    }

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
            
            { location.pathname !== "/tgMiniApp/" && <BackButton onClick={() => navigate(-1)}/> }

            {location.pathname === '/tgMiniApp/waitingForPayment-2'
                && <MainButton 
                        text="Пистолет в баке" 
                        onClick={() => navigate("/tgMiniApp/waitingForPayment-3")}
                    />
            }

            {location.pathname === '/tgMiniApp/waitingForPayment-4'
                && <MainButton 
                        text="Готово" 
                        onClick={onClose}
                    />
            }
        </div>
    )
}
