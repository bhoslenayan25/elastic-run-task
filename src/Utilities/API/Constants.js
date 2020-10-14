export const BASE_URL = 'https://developers.zomato.com/'

export const USER_KEY = 'ebce07efec80d0017e1a3ee7173cdbd6'

export const endPoints = {
    SEARCH: 'api/v2.1/',
}

export const requestMethod = {
    GET: 'GET',
    DELETE: 'DELETE',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    LINK: 'LINK',
    UNLINK: 'UNLINK'
}

export const errorCodes = {
    REQUEST_TIMEOUT: 1001,
    UNEXPECTED_ERROR: 1002,
    INTERNAL_SERVER_ERROR: 1003,
    NO_INTERNET: 1004,
    NO_DATA_FOUND: 1005,
    ACCESS_TOKEN_FAILURE: 1006,
    REFRESH_TOKEN_FAILURE: 1007,
}

export const TIME_OUT = 15000;