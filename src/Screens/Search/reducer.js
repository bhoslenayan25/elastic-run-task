import { SET_CITY, GET_CITY, SET_ERROR_CITY, GET_CATEGORIES, SET_CATEGORIES, SET_ERROR_CATEGORIES, GET_CUISINES, SET_CUISINES, SET_ERROR_CUISINES, GET_RESTAURANT, SET_RESTAURANT, SET_ERROR_RESTAURANT } from './action';

const restaurantInitialState = {
    fetchingCity: false,
    fetchingCategories: false,
    fetchingCuisine: false,
    fetchingRestaurant: false,
    errorFetchingCity: false,
    errorFetchingCategories: false,
    errorFetchingCuisine: false,
    errorFetchingRestaurant: false,
    errorMessageCity: false,
    errorMessageCategories: false,
    errorMessageCuisine: false,
    errorMessageRestaurant: false,
    city: {},
    categories: [],
    cuisine: [],
    restaurents: []
}

function restaurantReducer(state = restaurantInitialState, action) {
    switch (action.type) {
        case GET_CITY:
            return { ...state, fetchingCity: true, city: {}, errorFetchingCity: false, errorMessageCity: '' }
        case SET_CITY:
            return { ...state, fetchingCity: false, city: action.data, errorFetchingCity: false, errorMessageCity: '' }
        case SET_ERROR_CITY:
            return { ...state, fetchingCity: false, city: {}, errorFetchingCity: true, errorMessageCity: action.data }
        case GET_CATEGORIES:
            return { ...state, fetchingCategories: true, categories: [], errorFetchingCategories: false, errorMessageCategories: '' }
        case SET_CATEGORIES:
            return { ...state, fetchingCategories: false, categories: action.data, errorFetchingCategories: false, errorMessageCategories: '' }
        case SET_ERROR_CATEGORIES:
            return { ...state, fetchingCategories: false, categories: [], errorFetchingCategories: true, errorMessageCategories: action.data }

        case GET_CUISINES:
            return { ...state, fetchingCuisine: true, cuisine: [], errorFetchingCuisine: false, errorMessageCuisine: '' }
        case SET_CUISINES:
            return { ...state, fetchingCuisine: false, cuisine: action.data, errorFetchingCuisine: false, errorMessageCuisine: '' }
        case SET_ERROR_CUISINES:
            return { ...state, fetchingCuisine: false, cuisine: [], errorFetchingCuisine: true, errorMessageCuisine: action.data }

        case GET_RESTAURANT:
            return { ...state, fetchingRestaurant: true, restaurents: [], errorFetchingRestaurant: false, errorMessageRestaurant: '' }
        case SET_RESTAURANT:
            return { ...state, fetchingRestaurant: false, restaurents: action.data, errorFetchingRestaurant: false, errorMessageRestaurant: '' }
        case SET_ERROR_RESTAURANT:
            return { ...state, fetchingRestaurant: false, restaurents: [], errorFetchingRestaurant: true, errorMessageRestaurant: action.data }

        default:
            return state;
    }
}

export default restaurantReducer;