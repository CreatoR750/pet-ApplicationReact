import { Dispatch } from "react";
import { IAnimal } from "../../animal/animalClass";
import { AnimalAction, AnimalsActionTypes } from "../types/animals";

export const fetchAnimals = () => {
    return async (dispatch: Dispatch<AnimalAction>) => {
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMALS });
        const response = await fetch("http://localhost:3000/animals");
        const data = await response.json();
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMALS_SUCCESS, payload: data });
    };
};

export const fetchFilteredAnimals = () => {
    return async (dispatch: Dispatch<AnimalAction>) => {
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMALS });
        const response = await fetch("http://localhost:3000/animals");
        const data = await response.json();
        const filteredData = data.filter((animal: IAnimal) => animal.type !== "Кошка" && animal.type !== "Кот");
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMALS_SUCCESS, payload: filteredData });
    };
};
