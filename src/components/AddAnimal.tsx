import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../ThemeContext";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useAnimalActions } from "../hooks/useActions";

const AddAnimal = () => {
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;
    const [animalName, setAnimalName] = useState("");
    const [animalColor, setAnimalColor] = useState("");
    const [animalAge, setAnimalAge] = useState<number>();
    const [animalGender, setAnimalGender] = useState("");
    const [animalType, setAnimalType] = useState("");

    const { addAnimal } = useAnimalActions();

    const handleSubmit = () => {
        const animal = { name: animalName, color: animalColor, age: animalAge, gender: animalGender };
        addAnimal(animal);
    };
    return (
        <div className="details-wrapper" style={{ backgroundColor: container.background }}>
            <div className="details">
                <form onSubmit={handleSubmit}>
                    <h2>Добавить питомца</h2>
                    <p>Имя:</p>
                    <input onChange={(e) => setAnimalName(e.target.value)}></input>
                    <p>Тип:</p>
                    <input onChange={(e) => setAnimalType(e.target.value)}></input>
                    <p>Цвет:</p>
                    <input onChange={(e) => setAnimalColor(e.target.value)}></input>
                    <p>Возраcт:</p>
                    <input onChange={(e) => setAnimalAge(Number(e.target.value))}></input>
                    <p>Пол:</p>
                    <input onChange={(e) => setAnimalGender(e.target.value)}></input>
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <NavLink to={`/`}>
                <button className="back-btn">Назад</button>
            </NavLink>
        </div>
    );
};

export default AddAnimal;
