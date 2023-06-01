import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from "./Detail.module.css"


const Detail = () => {

const { id } = useParams();
const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]);

    return(

        <div className={style.contenedor}>
            <h1 className={style.palabras}>Nombre: {character?.name}</h1>
            <h1 className={style.palabras}>Estado: {character?.status}</h1>
            <h1 className={style.palabras}>Especie: {character?.species}</h1>
            <h1 className={style.palabras}>Genero: {character?.gender}</h1>
            <h1 className={style.palabras}>Origen: {character?.origin?.name}</h1>
            <img className={style.imagenStyle} src={character?.image} alt={character?.name}/>
        </div>

    )

}

export default Detail