import React, { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../ThemeContext";
import "../App.css";
const Header: FC = () => {
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;

    return (
        <div className="header" style={{ backgroundColor: container.background }}>
            <h1 style={{ color: container.color }}>Pet Application</h1>
            <button className="toggle-btn" onClick={() => context.changeTheme()}>
                {context.darkTheme ? "Светлая" : "Тёмная"} тема
            </button>
        </div>
    );
};

export default React.memo(Header);
