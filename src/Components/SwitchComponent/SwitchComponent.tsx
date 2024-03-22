import { FC, useEffect, useState } from 'react'
import { SwitchItem } from '../SwitchItem/SwitchItem'
import { PageNumber } from '../PageNumber/PageNumber'
import { Title } from '../Title/Title'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'
// import s from './switchComponent.module.css'
import { Wrap } from '../Wrap/Wrap'
import { useTelegram } from '../../hooks/hooks'

const items = [
  {id: 1, type: 'oil', oilType: '95+', price: 50},
  {id: 2, type: 'oil', oilType: '92+', price: 47},
  {id: 3, type: 'oil', oilType: '95', price: 46},
  {id: 4, type: 'oil', oilType: '92', price: 45},
  {id: 5, type: 'oil', oilType: 'ДТ', price: 39}
]

interface SwitchItemProps {
  link: string,
}

export const SwitchComponent: FC<SwitchItemProps> = () => {
  let location = useLocation();
  let lastChar = location.pathname[location.pathname.length - 1];
  const navigate = useNavigate();
  
  const {showMainButton} = useTelegram({
    text: 'Дальше',
    onClick: () => navigate("/tgMiniApp/2")
  })

  const [activeItem, setActiveItem] = useState(1)
  const handleItemClick = (id: number) => {
    setActiveItem(id);
  };

  useEffect(() => {
    showMainButton();
  }, []);

  // Telegram.WebApp.MainButton.show();
  // Telegram.WebApp.MainButton.setParams({
  //   text: 'Дальше',
  // });
  // Telegram.WebApp.MainButton.onClick(function() {
  //   navigate("/tgMiniApp/2")
  // });

  return (
    <Wrap>
        <PageNumber number={`${lastChar}/3`}/>
        <Title title={'Топливо'} />
        {
          items.map((item, idx) => (
              <SwitchItem 
                  id={idx}
                  key={idx}
                  type={item.type}
                  oilType={item.oilType}
                  price={item.price}
                  // @ts-ignore
                  active={item.id === activeItem}
                  onClick={handleItemClick}
              />
          ))
        }
        
        <BackButton onClick={() => navigate(-1)}/>
    </Wrap>

  )
}
