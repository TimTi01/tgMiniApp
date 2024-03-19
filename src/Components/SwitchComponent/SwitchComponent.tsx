import { FC } from 'react'
import { SwitchItem } from '../SwitchItem/SwitchItem'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom'
import s from './switchComponent.module.css'
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app'

const items = [
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50}
]
export const SwitchComponent: FC = () => {
  let location = useLocation();
  let lastChar = location.pathname[location.pathname.length - 1];
  const navigate = useNavigate();

  return (
    <div className={s.switchWrap}>
        <PageNumber number={`${lastChar}/3`}/>
        <Title title={'Топливо'} />
        <SwitchItem 
          type={'oil'}
          oilType={'9000+'}
          price={49}
          active={true}
        />
        {
          items.map((item, idx) => (
              <SwitchItem 
                  key={idx}
                  type={item.type}
                  oilType={item.oilType}
                  price={item.price}
              />
          ))
        }

        <BackButton onClick={() => navigate(-1)}/>
        <MainButton 
            text="Заправиться тут" 
            onClick={() => navigate("/tgMiniApp/2")}
        />
    </div>
  )
}
