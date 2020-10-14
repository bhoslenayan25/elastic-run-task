import { serverCall } from "../../Utilities/API"
import { endPoints, requestMethod, USER_KEY } from "../../Utilities/API/Constants"
import { log } from "../../Utilities/Utility"
import { aGetCity, aSetCity, aSetErrorCity, aGetCategories, aSetCategories, aSetErrorCategories, aGetCuisiens, aSetCuisiens, aSetErrorCuisiens, aGetRestaurant,aSetRestaurant,aSetErrorRestaurant } from "./action"


export function getCity(city) {
    return async dispatch => {
        dispatch(aGetCity())
        let result = await serverCall(endPoints.SEARCH + 'cities?q=' + city, requestMethod.GET, {})
        if (result.success) {
            dispatch(aSetCity(result.data.location_suggestions[0]))
            dispatch(getCuisine(result.data.location_suggestions[0]))
        } else {
            dispatch(aSetErrorCity(result.message))
        }

    }
}

export function getCategories() {
    return async dispatch => {
        dispatch(aGetCategories())
        let result = await serverCall(endPoints.SEARCH + 'categories', requestMethod.GET, {})
        if (result.success) {
            let cat = []
            result.data.categories.map((item, index) => {
                cat.push({
                    'label': item.categories.name,
                    'value': item.categories.id
                })
            })
            dispatch(aSetCategories(cat))
        } else {
            dispatch(aSetErrorCategories(result.message))
        }

    }
}

export function getCuisine(city) {
    return async dispatch => {
        dispatch(aGetCuisiens())
        let result = await serverCall(endPoints.SEARCH + 'cuisines?city_id=' + city.id, requestMethod.GET, {})
        if (result.success) {
            let cat = []
            result.data.cuisines.map((item, index) => {
                cat.push({
                    'label': item.cuisine.cuisine_name,
                    'value': item.cuisine.cuisine_id
                })
            })
            dispatch(aSetCuisiens(cat))
        } else {
            dispatch(aSetErrorCuisiens(result.message))
        }

    }
}

export function getRestaurant(city,cuisine,category) {
    return async dispatch => {
        log('=====',category)
        dispatch(aGetRestaurant())
        let result = await serverCall(endPoints.SEARCH + 'search?entity_type=city&entity_id=' + city.id + '&cuisines=' + cuisine.value + '&category=' + category.value, requestMethod.GET, {})
        if (result.success) {
            dispatch(aSetRestaurant(result.data.restaurants))
        } else {
            dispatch(aSetErrorRestaurant(result.message))
        }

    }
}