import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actionstypes"

export { ADD_FAV, REMOVE_FAV } from "./actionstypes"

const initialState = {

    myFavorites: [],
    allCharacters: []
}

export default (state = initialState, {type, payload}) => {
    
    switch( type ) {

        case 'ADD_FAV':
            return { 
                
                ...state, 
                myFavorites: payload, allCharacters: payload 
            }

        case REMOVE_FAV:
            return {

                ...state,
                myFavorites: payload
            }

        case FILTER_CARDS:

            const allCharactersFilter = state.allCharacters.filter(character => character.gender === payload)
            return {

                ...state,
                myFavorites: 
                payload === "allCharacters"
                ? [...state.allCharacters]
                : allCharactersFilter
            }

        case ORDER_CARDS: 

            const allCharactersCopia = [...state.allCharacters]

            return {

                ...state,
                myFavorites:
                    payload === "A" 
                    ? allCharactersCopia.sort((primero, segundo) => primero.id - segundo.id) 
                    : allCharactersCopia.sort((primero, segundo) => segundo.id - primero.id)
                
            }

        default: 
            return {...state}
    }
}