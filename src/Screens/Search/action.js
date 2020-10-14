export const GET_CITY = 'GET_CITY'
export const SET_CITY = 'SET_CITY'
export const SET_ERROR_CITY = 'SET_ERROR_CITY'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_ERROR_CATEGORIES = 'SET_ERROR_CATEGORIES'

export const GET_CUISINES = 'GET_CUISINES'
export const SET_CUISINES = 'SET_CUISINES'
export const SET_ERROR_CUISINES = 'SET_ERROR_CUISINES'

export const GET_RESTAURANT = 'GET_RESTAURANT'
export const SET_RESTAURANT = 'SET_RESTAURANT'
export const SET_ERROR_RESTAURANT = 'SET_ERROR_RESTAURANT'

export function aGetCity() {
    return { type: GET_CITY }
}

export function aSetCity(data) {
    return { type: SET_CITY, data }
}

export function aSetErrorCity(data) {
    return { type: SET_ERROR_CITY, data }
}

export function aGetCategories() {
    return { type: GET_CATEGORIES }
}

export function aSetCategories(data) {
    return { type: SET_CATEGORIES, data }
}

export function aSetErrorCategories(data) {
    return { type: SET_ERROR_CATEGORIES, data }
}

export function aGetCuisiens() {
    return { type: GET_CUISINES }
}

export function aSetCuisiens(data) {
    return { type: SET_CUISINES, data }
}

export function aSetErrorCuisiens(data) {
    return { type: SET_ERROR_CUISINES, data }
}

export function aGetRestaurant() {
    return { type: GET_RESTAURANT }
}

export function aSetRestaurant(data) {
    return { type: SET_RESTAURANT, data }
}

export function aSetErrorRestaurant(data) {
    return { type: SET_ERROR_RESTAURANT, data }
}
