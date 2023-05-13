import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {

    return (

        <div className={style.navCont}>

            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to="/about">ABOUT</NavLink>
            </button>

            <button>
                <NavLink to="/home">HOME</NavLink>
            </button>

            <button>
                <NavLink to="/favorites">FAVORITES</NavLink>
            </button>
            
        </div>

    );
}

export default Nav