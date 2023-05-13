import style from "./Card.module.css";
import { NavLink } from "react-router-dom"
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux"
import { useState, useEffect } from "react";


function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () => {
      
      if(isFav) {
         
         setIsFav(false)
         removeFav(id)
         // TODO hacer el extra aqui
      
      } else {

         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }


   }

   return (
      <div className={style.contenedorCard}>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
         <button onClick={() => onClose(id)}>X</button>
         
         <NavLink to={`/detail/${id}`}>
            <div className={style.name}><p>{name}</p></div>
         </NavLink>

         <img className={style.img} src={image} alt='' />
         
         <div className={style.info}>
            <p>Estatus: {status}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
            <p>Origen: {origin}</p>
         </div>

      </div>
   );

   
}

const mapStateToProps = (state) => {

   return {

      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {

return {

      addFav: (personaje) => { dispatch(addFav(personaje))},
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}


export default connect(

   mapStateToProps,
   mapDispatchToProps
)(Card)