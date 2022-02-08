import { createContext } from "react";

export const themes = {
    light: {
        color: "rgb(24, 23, 23)",
        background: "rgb(255, 255, 255)",
        liColor: "#eee",
    },
    dark: {
        color: "rgb(255, 255, 255)",
        background: "rgb(24, 23, 23)",
        liColor: "#6b57e0",
    },
};

export const ThemeContext = createContext({
    darkTheme: false,
    changeTheme: () => {},
});
