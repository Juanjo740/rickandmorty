import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';

let EMAIL = "mbappe@gmail.com"
let PASSWORD = "mbappe123"


function App() {
   const location = useLocation()
   let navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   
   const login = (userData) => {
      
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {

      const charactersFiltered = characters.filter(character => 
      character.id !== Number(id))
      setCharacters(charactersFiltered)

   }

   return (
      <div className='App'>

         {
            location.pathname !== "/" ? <Nav onSearch={onSearch}/> : null
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='favorites' element={<Favorites/>}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
         
         
      </div>
   );
}

export default App;
