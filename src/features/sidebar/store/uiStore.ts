import { makeAutoObservable } from 'mobx';

class UIStore {
    activeMenu = 'dashboard';

    constructor() {
        makeAutoObservable(this);
    }

    setActiveMenu(menu: string) {
        this.activeMenu = menu;
    }
}

export const uiStore = new UIStore();
