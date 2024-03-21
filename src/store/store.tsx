import { create } from 'zustand'

interface State {
  oilType: string;
  rub: number;
  litrs: number;
  price: number;
}
  
interface Actions {
  setOilType: (oilType: string) => void;
  setRub: (rub: number |  undefined) => void;
  setLitrs: (rub: number | undefined) => void;
  setPrice: (price: number | undefined) => void;
}

export const useStore = create<State & Actions>((set) => ({
  oilType: '',
  rub: 0,
  litrs: 0,
  price: 0,

  setOilType: (oilType: string) => set({ oilType }),
  setRub: (rub: number | undefined) => set({ rub }),
  setLitrs: (litrs: number | undefined) => set({ litrs }),
  setPrice: (price: number | undefined) => set({ price }),
}))