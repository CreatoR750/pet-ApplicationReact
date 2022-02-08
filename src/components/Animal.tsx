import { IAnimal } from "../animal/animalClass";
import { FC } from "react";
import { useState, useContext } from "react";
import AnimalDetails from "./AnimalDetails";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { themes } from "../ThemeContext";
import { ThemeContext } from "../ThemeContext";

type AnimalProps = {
    animal: IAnimal;
};

const Animal: FC<AnimalProps> = ({ animal }) => {
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;

    return (
        <li style={{ backgroundColor: container.liColor }}>
            <NavLink to={`/animal/${animal.id}`} style={{ color: container.color }}>
                {animal.type} {animal.name}
            </NavLink>
        </li>
    );
};

export default Animal;
