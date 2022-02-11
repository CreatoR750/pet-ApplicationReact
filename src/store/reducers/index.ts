import { combineReducers } from "redux";
import { animalReducer } from "./animalReducer";
import { currentAnimalReducer } from "./currentAnimalReducer";

export const rootReducer = combineReducers({
    animals: animalReducer,
    loading: animalReducer,
    animal: currentAnimalReducer,
    loadingAnimal: currentAnimalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
