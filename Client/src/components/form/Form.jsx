import { useState } from "react";
import validacion from "../validacion/validacion";

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

        <form onSubmit={handleSubmit}>

            <input type="text" value={userData.email} name="email" onChange={handleChange}></input>
            <label htmlFor="email">email: </label>
            {errors.email !== "" ? <p>{errors.email}</p> : ""}

            <input type="text" value={userData.password} name="password" onChange={handleChange}></input>
            <label htmlFor="password">password: </label>
            {errors.password !== "" ? <p>{errors.password}</p> : ""}

            <button>submit</button>

        </form>

    )

}

export default Form;