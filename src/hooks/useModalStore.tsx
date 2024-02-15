import { create } from "zustand";

type State = {
    isAccountsModalShow: boolean;
    isCommunitiesModalShow: boolean;
}

type Actions = {
    toggleAccountsModal : () => void;
    toggleCommunitiesModal : () => void;
}

export const useModalStore = create<State & Actions>((set) => ({
    isAccountsModalShow: false,
    isCommunitiesModalShow: false,
    toggleAccountsModal: () => set(state => ({isAccountsModalShow: !state.isAccountsModalShow})),
    toggleCommunitiesModal: () => set(state => ({isCommunitiesModalShow: !state.isCommunitiesModalShow}))
}))