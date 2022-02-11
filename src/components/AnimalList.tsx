import { useCallback, useContext, useEffect, useState, FC } from "react";
import { IAnimal } from "../animal/animalClass";
import Animal from "./Animal";
import "../App.css";
import { themes } from "../ThemeContext";
import { ThemeContext } from "../ThemeContext";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const AnimalList: FC = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;

    const { animals, loading } = useTypedSelector((state) => state.animals);
    const { fetchAnimals, fetchFilteredAnimals } = useActions();

    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = async () => {
        setIsHidden(false);
        fetchAnimals();
    };

    const displayAnimals = useCallback(() => {
        return animals.map((animal) => <Animal key={animal.id} animal={animal} />);
    }, [animals]);

    const getFilteredAnimals = async () => {
        fetchFilteredAnimals();
        setIsHidden(true);
    };

    const clickHandler = () => (isHidden ? getAnimals() : getFilteredAnimals());

    return (
        <div className="animals" style={{ backgroundColor: container.background }}>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    <ul className="animals" style={{ backgroundColor: container.background }}>
                        {displayAnimals()}
                    </ul>
                    <NavLink to={`/animal/add`}>
                        <button className="toggle-btn">Добавить</button>
                    </NavLink>
                </div>
            )}

            {isHidden ? (
                <button className="toggle-btn" onClick={() => clickHandler()}>
                    Показать котиков
                </button>
            ) : (
                <button className="toggle-btn" onClick={() => clickHandler()}>
                    Спрятать котиков
                </button>
            )}
        </div>
    );
};

export default AnimalList;
