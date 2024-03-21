import { create } from 'zustand'

interface State {
  oilType: string;
  rub: number;
  litrs: number;
}
  
interface Actions {
  setOilType: (oilType: string) => void;
  setRub: (rub: number |  undefined) => void;
  setLitrs: (rub: number | undefined) => void;
}

export const useStore = create<State & Actions>((set) => ({
  oilType: '',
  rub: 0,
  litrs: 0,

  setOilType: (oilType: string) => set({ oilType }),
  setRub: (rub: number | undefined) => set({ rub }),
  setLitrs: (litrs: number | undefined) => set({ litrs }),
}))