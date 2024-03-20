import { create } from 'zustand'

interface State {
    oilType: string;
    rub?: number;
}
  
interface Actions {
    setOilType: (oilType: string) => void;
    setRub: (rub: number |  undefined) => void;
}

export const useStore = create<State & Actions>((set) => ({
  oilType: '',
  rub: 0,

  setOilType: (oilType: string) => set({ oilType }),
  setRub: (rub: number | undefined) => set({ rub }),
}))