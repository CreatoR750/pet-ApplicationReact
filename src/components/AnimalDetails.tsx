import { IAnimal } from "../animal/animalClass";
import { FC, useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../ThemeContext";

const AnimalDetails: FC = () => {
    const [animal, setAnimal] = useState<IAnimal>();
    const passedData = useParams();
    const context = useContext(ThemeContext);
    const container = context.darkTheme ? themes.dark : themes.light;

    useEffect(() => {
        getAnimal();
    }, []);

    const getAnimal = async () => {
        const response = await fetch(`http://localhost:4000/animals/${passedData.id}`);
        const data = await response.json();
        setAnimal(data);
    };

    return (
        <div className="details-wrapper" style={{ backgroundColor: container.background }}>
            {animal ? (
                <div className="details">
                    <h2>
                        {animal.type} {animal.name}
                    </h2>
                    <p>Id: {animal!.id}</p>
                    <p>Цвет: {animal!.color}</p>
                    <p>Возраcт: {animal!.age}</p>
                    <p>Пол: {animal!.gender}</p>
                </div>
            ) : null}
            <NavLink to={`/`}>
                <button className="back-btn">Назад</button>
            </NavLink>
        </div>
    );
};

export default AnimalDetails;
