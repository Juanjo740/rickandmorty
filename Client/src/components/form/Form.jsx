import { useState } from "react";
import validacion from "../validacion/validacion";
import style from "./Form.module.css"

const Form = ( { login } ) => {
    
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
    
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {

        setUserData({

            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(validacion({
            ...userData,
            [event.target.name]: event.target.value
    
        }))
    }
    
    const handleSubmit = (event) => {

        event.preventDefault();
        login(userData);
    }


    return (
    
        
        <form className={style.loginBox} onSubmit={handleSubmit}>

            <div className={style.userBox}>
                <input type="text" value={userData.email} name="email" onChange={handleChange}></input>
                <label htmlFor="email">Email: </label>
                <div className={style.messageError}>{errors.email !== "" ? <p>{errors.email}</p> : ""}</div>
            </div>

            <div className={style.userBox}>
                <input type="text" value={userData.password} name="password" onChange={handleChange}></input>
                <label htmlFor="password">Password: </label>
                <div className={style.messageError}>{errors.password !== "" ? <p>{errors.password}</p> : ""} </div>
            </div>

            <button className={style.botonStyle}>Log In</button>

        </form>

    )

}

export default Form;