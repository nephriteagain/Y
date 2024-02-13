import { create } from 'zustand'

type State = {
    drawerIsOpen: boolean;
}

type Actions = {
    toggleDrawer() : void
}

export const useGlobalStore = create<State & Actions>((set) => ({
    drawerIsOpen: false,
    toggleDrawer: () => set(state => ({drawerIsOpen: !state.drawerIsOpen}))
}))