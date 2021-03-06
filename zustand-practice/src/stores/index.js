import create from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears < 12 ? state.bears + 1 : state.bears,
    })),
  decreasePopulation: () =>
    set((state) => ({
      bears: state.bears > 0 ? state.bears - 1 : state.bears,
    })),
  removeAllBears: () => set({ bears: 0 }),
}));
