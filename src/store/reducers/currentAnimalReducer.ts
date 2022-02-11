import { OneAnimalAction, AnimalsActionTypes, AnimalState } from "../types/animal";
import { IAnimal } from "../../animal/animalClass";

const initialState: AnimalState = {
    animal: {},
    loadingAnimal: false,
};

export const currentAnimalReducer = (state = initialState, action: OneAnimalAction): AnimalState => {
    switch (action.type) {
        case AnimalsActionTypes.FETCH_ANIMAL:
            return { loadingAnimal: true, animal: {} };
        case AnimalsActionTypes.FETCH_ANIMAL_SUCCESS:
            return { loadingAnimal: false, animal: action.payload };
        case AnimalsActionTypes.ADD_ANIMAL:
            return { loadingAnimal: true, animal: {} };
        case AnimalsActionTypes.UPDATE_ANIMAL:
            return { loadingAnimal: true, animal: {} };
        default:
            return state;
    }
};
