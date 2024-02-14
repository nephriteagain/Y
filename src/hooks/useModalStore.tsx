import { create } from "zustand";

type State = {
    isAccountsModalShow: boolean;
}

type Actions = {
    toggleAccountsModal : () => void;
}

export const useModalStore = create<State & Actions>((set) => ({
    isAccountsModalShow: false,
    toggleAccountsModal: () => set(state => ({isAccountsModalShow: !state.isAccountsModalShow}))
}))