export interface MenuState {
    isCollapsed: boolean;
}

const state = (): MenuState => {
    return {
        isCollapsed: false,
    };
};

export default state;
