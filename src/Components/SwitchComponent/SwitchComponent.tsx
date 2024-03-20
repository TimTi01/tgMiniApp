import { FC } from 'react'
import { SwitchItem } from '../SwitchItem/SwitchItem'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'
import s from './switchComponent.module.css'

const items = [
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50},
  {type: 'oil', oilType: '95+', price: 50}
]

interface SwitchItemProps {
  link: string,
}

export const SwitchComponent: FC<SwitchItemProps> = () => {
  let location = useLocation();
  let lastChar = location.pathname[location.pathname.length - 1];
  const navigate = useNavigate();

  Telegram.WebApp.MainButton.show();
  Telegram.WebApp.MainButton.setParams({
    text: 'Дальше',
  });
  Telegram.WebApp.MainButton.onClick(function() {
    navigate("/tgMiniApp/2")
  });

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

        {/*NextRouteButton и BackRouteButton - тестовые кнопки */}
        {/* <NextRouteButton navigateLink="/tgMiniApp/2"/>
        { location.pathname !== "/tgMiniApp/" && <BackRouteButton/> } */}
        
        <BackButton onClick={() => navigate(-1)}/>

        {`viewportHeight: ${Telegram.WebApp.viewportHeight}`}
        {`viewportStableHeight: ${Telegram.WebApp.viewportStableHeight}`}
    </div>
  )
}
