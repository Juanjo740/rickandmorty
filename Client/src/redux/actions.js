import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actionstypes";

export const addFav = (personaje) => {
    return {type: ADD_FAV, payload: personaje}
};

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}

export const filterCards = (gender) => {
    return {type: FILTER_CARDS, payload: gender}
}

export const orderCards = (orden) => {
    return {type: ORDER_CARDS, payload: orden}
}