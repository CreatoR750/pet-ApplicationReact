import { useCallback, useContext, useEffect, useState, FC } from "react";
import { IAnimal } from "../animal/animalClass";
import Animal from "./Animal";
import "../App.css";
import { themes } from "../ThemeContext";
import { ThemeContext } from "../ThemeContext";

const AnimalList: FC = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;

    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = async () => {
        const response = await fetch("http://localhost:4000/animals");
        const data = await response.json();
        setAnimals(data);
        setLoading(false);
        setIsHidden(false);
    };

    const displayAnimals = useCallback(() => {
        return animals.map((animal) => <Animal key={animal.id} animal={animal} />);
    }, [animals]);

    const getFilteredAnimals = async () => {
        const filteredAnimals = animals.filter((animal: IAnimal) => animal.type !== "Кошка" && animal.type !== "Кот");
        setAnimals(filteredAnimals);
        setIsHidden(true);
    };

    const clickHandler = () => (isHidden ? getAnimals() : getFilteredAnimals());

    return (
        <div className="animals" style={{ backgroundColor: container.background }}>
            {loading ? (
                <div>loading...</div>
            ) : (
                <ul className="animals" style={{ backgroundColor: container.background }}>
                    {displayAnimals()}
                </ul>
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
