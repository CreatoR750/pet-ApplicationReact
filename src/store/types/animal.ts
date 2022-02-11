import { IAnimal } from "../../animal/animalClass";

export interface AnimalState {
    animal?: IAnimal;
    loadingAnimal: boolean;
}

export enum AnimalsActionTypes {
    FETCH_ANIMAL = "FETCH_ANIMAL",
    FETCH_ANIMAL_SUCCESS = "FETCH_ANIMAL_SUCCESS",
    ADD_ANIMAL = "ADD_ANIMAL",
    UPDATE_ANIMAL = "UPDATE_ANIMAL",
}

export interface FetchAnimalAction {
    type: AnimalsActionTypes.FETCH_ANIMAL;
}

export interface FetchAnimalActionSuccess {
    type: AnimalsActionTypes.FETCH_ANIMAL_SUCCESS;
    payload: IAnimal;
}

export interface AddAnimalAction {
    type: AnimalsActionTypes.ADD_ANIMAL;
}

export interface UpdateAnimalAction {
    type: AnimalsActionTypes.UPDATE_ANIMAL;
}

export interface AnimalsAction {
    type: string;
    payload?: any;
}

export type OneAnimalAction = FetchAnimalAction | FetchAnimalActionSuccess | AddAnimalAction | UpdateAnimalAction;
