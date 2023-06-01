import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {

    return (

        <div className={style.navCont}>

            <SearchBar onSearch={onSearch}/>
            
            <NavLink className={style.botonStyle} to="/about">ABOUT</NavLink>
            
            <NavLink className={style.botonStyle} to="/home">HOME</NavLink>

            <NavLink className={style.botonStyle} to="/favorites">FAVORITES</NavLink>
            
        </div>

    );
}

export default Nav