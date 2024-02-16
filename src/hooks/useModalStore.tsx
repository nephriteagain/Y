import { create } from "zustand";

type State = {
    isAccountsModalShow: boolean;
    isCommunitiesModalShow: boolean;
    isSubscribeModalShow: boolean;
};

type Actions = {
    toggleAccountsModal: () => void;
    toggleCommunitiesModal: () => void;
    toggleSubscribeModal: () => void;
};

export const useModalStore = create<State & Actions>((set) => ({
    isAccountsModalShow: false,
    isCommunitiesModalShow: false,
    isSubscribeModalShow: false,
    toggleAccountsModal: () =>
        set((state) => ({ isAccountsModalShow: !state.isAccountsModalShow })),
    toggleCommunitiesModal: () =>
        set((state) => ({
            isCommunitiesModalShow: !state.isCommunitiesModalShow,
        })),
    toggleSubscribeModal: () =>
        set((state) => ({ isSubscribeModalShow: !state.isSubscribeModalShow })),
}));
