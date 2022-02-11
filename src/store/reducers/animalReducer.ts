import { AnimalAction, AnimalsActionTypes, AnimalState } from "../types/animals";

const initialState: AnimalState = {
    animals: [],
    loading: false,
};

export const animalReducer = (state = initialState, action: AnimalAction): AnimalState => {
    switch (action.type) {
        case AnimalsActionTypes.FETCH_ANIMALS:
            return { loading: true, animals: [] };
        case AnimalsActionTypes.FETCH_ANIMALS_SUCCESS:
            return { loading: false, animals: action.payload };
        default:
            return state;
    }
};
