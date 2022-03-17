const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT": {
            localStorage.setItem("MODE","LIGHT");
            return {
                darkMode: false,
            };
        }
        case "DARK": {
            localStorage.setItem("MODE","DARK");
            return {
                darkMode: true,
            };
        }
        case "TOGGLE": {
            localStorage.setItem("MODE",!state.darkMode ? "DARK" : "LIGHT");
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
};

export default DarkModeReducer;
