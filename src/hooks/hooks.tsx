import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

interface Coordinates {
  lat: number | string;
  lng: number | string;
}

export interface Location {
  loaded: boolean;
  coordinates?: Coordinates;
  error?: GeolocationPositionError;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<Location>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Геолокация не поддерживается браузером",
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      } as GeolocationPositionError);
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export const useDistance = (ymaps: any, myCoords: (string | number | undefined)[], pointCoords: number[] | string[]) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (ymaps) {
      const myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: myCoords,
        },
      });

      const placemarkGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: pointCoords,
        },
      });

      const distance = myGeoObject.geometry.getDistance(placemarkGeoObject.geometry);
      setDistance(distance.text);
    }
  }, [ymaps, myCoords, pointCoords]);

  return distance;
};


export const formater = (num: number) => {
  const form = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  });
  
  let formattedNumber = form.format(num);

  return formattedNumber
}

type ButtonParams = {
  text: string;
  onClick: () => void;
};

export const useTelegram = (buttonParams: ButtonParams) => {
  // const navigate = useNavigate();

  const onClose = () => {
    Telegram.WebApp.close();
  }

  const showMainButton = () => {
    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setParams({
      text: buttonParams.text,
    });
    Telegram.WebApp.MainButton.onClick(buttonParams.onClick);
  }

  return {
    onClose,
    showMainButton
  }
}