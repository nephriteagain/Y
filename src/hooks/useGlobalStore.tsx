import { create } from 'zustand'

type State = {
    drawerIsOpen: boolean;
    theme: 'day' | 'night';
};

type Actions = {
    toggleDrawer: () => void;
    toggleTheme: () => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
    drawerIsOpen: false,
    theme: 'day',
    toggleDrawer: () => set((state) => ({ drawerIsOpen: !state.drawerIsOpen })),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'day' ? 'night' : 'day' })),
}));
