import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const productListReducers = (state = { products: [] }, action) => {

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            console.log('came to request')
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            console.log('came to success')
            return { loading: false, products: action.payload }

        case PRODUCT_LIST_FAIL:
            console.log('came to fail')
            return { loading: false, error: action.payload }

        default:
            console.log('came to default')
            return state
}
}

export const productDetailsReducers = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            console.log('came to request')

            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            console.log('came to success')

            return { loading: false, product: action.payload }

        case PRODUCT_DETAILS_FAIL:
            console.log('came to fail')
            return { loading: false, error: action.payload }

        default:
            console.log('came to default in detail')
            return state
    }
}