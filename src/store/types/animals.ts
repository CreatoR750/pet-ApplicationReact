import { IAnimal } from "../../animal/animalClass";

export interface AnimalState {
    animals: IAnimal[];
    loading: boolean;
}
export enum AnimalsActionTypes {
    FETCH_ANIMALS = "FETCH_ANIMALS",
    FETCH_ANIMALS_SUCCESS = "FETCH_ANIMALS_SUCCESS",
    FETCH_ANIMALS_ERROR = "FETCH_ANIMALS_ERROR",
    FETCH_ANIMAL = "FETCH_ANIMAL",
    FETCH_ANIMAL_SUCCESS = "FETCH_ANIMAL_SUCCESS",
}
export interface FetchAnimalsAction {
    type: AnimalsActionTypes.FETCH_ANIMALS;
}

export interface FetchAnimalsActionSuccess {
    type: AnimalsActionTypes.FETCH_ANIMALS_SUCCESS;
    payload: IAnimal[];
}

export interface AnimalsAction {
    type: string;
    payload?: any;
}

export type AnimalAction = FetchAnimalsAction | FetchAnimalsActionSuccess;
