import { create } from 'zustand'

type State = {
    drawerIsOpen: boolean;
}

type Actions = {
    openDrawer() : void;
    closeDrawer() : void;
}

export const useGlobalStore = create<State & Actions>((set) => ({
    drawerIsOpen: false,
    openDrawer: () => set(() => ({ drawerIsOpen: false })),
    closeDrawer: () => set(() => ({ drawerIsOpen: true })),
}))