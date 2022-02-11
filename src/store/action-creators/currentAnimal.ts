import { Dispatch } from "react";
import { IAnimal } from "../../animal/animalClass";
import { OneAnimalAction, AnimalsActionTypes } from "../types/animal";

export const fetchAnimal = (id: string) => {
    return async (dispatch: Dispatch<OneAnimalAction>) => {
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMAL });
        const response = await fetch(`http://localhost:3000/animals/${id}`);
        const data = await response.json();
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMAL_SUCCESS, payload: data });
    };
};

export const addAnimal = (animal: IAnimal) => {
    return async (dispatch: Dispatch<OneAnimalAction>) => {
        dispatch({ type: AnimalsActionTypes.ADD_ANIMAL });
        const response = await fetch("http://localhost:3000/animals/", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(animal),
        });
        const content = await response.json();
        console.log(content);
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMAL });
    };
};

export const updateAnimal = (animal: IAnimal, id: number | undefined) => {
    return async (dispatch: Dispatch<OneAnimalAction>) => {
        dispatch({ type: AnimalsActionTypes.UPDATE_ANIMAL });
        const response = await fetch(`http://localhost:3000/animals/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(animal),
        });
        const content = await response.json();
        console.log(content);
        dispatch({ type: AnimalsActionTypes.FETCH_ANIMAL });
    };
};
