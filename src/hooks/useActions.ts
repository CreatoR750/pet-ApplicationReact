import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AnimalActionCreators from "../store/action-creators/animal";
import * as OneAnimalActionCreators from "../store/action-creators/currentAnimal";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AnimalActionCreators, dispatch);
};

export const useAnimalActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(OneAnimalActionCreators, dispatch);
};
