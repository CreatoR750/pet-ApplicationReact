import "./App.css";
import AnimalList from "./components/AnimalList";
import AnimalDetails from "./components/AnimalDetails";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { useState, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "./ThemeContext";
import Header from "./components/Header";
import AddAnimal from "./components/AddAnimal";
const App = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const context = useMemo(
        () => ({
            darkTheme,
            changeTheme: () => setDarkTheme((prev) => !prev),
        }),
        [darkTheme]
    );
    const color = darkTheme ? themes.dark : themes.light;
    return (
        <div className="wrapper">
            <BrowserRouter>
                <ThemeContext.Provider value={context}>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<AnimalList />} />
                        <Route path="/animal/:id" element={<AnimalDetails />} />
                        <Route path="/animal/add" element={<AddAnimal />} />
                    </Routes>
                </ThemeContext.Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
