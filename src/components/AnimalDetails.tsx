import { IAnimal } from "../animal/animalClass";
import { FC, useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../ThemeContext";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useAnimalActions } from "../hooks/useActions";

const AnimalDetails: FC = () => {
    const passedData = useParams();
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;
    const [animalForm, setAnimalForm] = useState<IAnimal>({});

    const { animal, loadingAnimal } = useTypedSelector((state) => state.animal);

    const { fetchAnimal, updateAnimal } = useAnimalActions();

    useEffect(() => {
        getAnimal();
        setAnimal();
    }, []);

    const getAnimal = async () => {
        console.log(passedData.id!);
        fetchAnimal(passedData.id!);
        console.log(animal);
    };

    const setAnimal = () => {
        const newAnimal = {
            name: animal?.name,
            type: animal?.type,
            color: animal?.color,
            age: animal?.age,
            gender: animal?.gender,
            id: animal?.id,
        };
        setAnimalForm(newAnimal);
    };

    const handleSubmit = () => {
        const newAnimal = {
            name: animalForm.name,
            type: animalForm.type,
            color: animalForm.color,
            age: animalForm.age,
            gender: animalForm.gender,
            id: animalForm.id,
        };
        updateAnimal(newAnimal, newAnimal.id);
    };

    return (
        <div className="details-wrapper" style={{ backgroundColor: container.background }}>
            {animal ? (
                <div className="details">
                    <form onSubmit={handleSubmit}>
                        <h2>
                            {animal.type} {animal.name}
                        </h2>
                        <p>Имя:</p>
                        <input value={animalForm.name}></input>
                        <p>Тип:</p>
                        <input value={animalForm.type}></input>
                        <p>Цвет:</p>
                        <input value={animalForm.color}></input>
                        <p>Возраcт:</p>
                        <input value={animalForm.age}></input>
                        <p>Пол:</p>
                        <input value={animalForm.gender}></input>
                        <NavLink to={`/`}>
                            <button>Изменить</button>
                        </NavLink>
                    </form>
                </div>
            ) : null}
            <NavLink to={`/`}>
                <button className="back-btn">Назад</button>
            </NavLink>
        </div>
    );
};

export default AnimalDetails;
