import { FC } from "react"
import { MyMap } from "../../Components/MyMap"
import { useGeoLocation } from "../../hooks/hooks";
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app";
import { Link, Outlet } from "react-router-dom";

export const HomePage: FC = () => {
    const geo = useGeoLocation(); 
    let myGeo = [geo.coordinates?.lat, geo.coordinates?.lng]
    // const showPopup = useShowPopup();

    // const handleClick = () => {
    //     showPopup({message: 'Hello, I am popup'});
    // }

    return (
        <>
            <Link to="/tgMiniApp/1">==1==</Link>
            <MyMap 
                geo={geo} 
                myGeo={myGeo} 
                pointCoords={[59.940375, 30.313816]}
            />
            <BackButton/>
            <Outlet />

            <MainButton text="test" />
        </>
    )
}
