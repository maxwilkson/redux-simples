import { NUMERO_MIN_ALTERADO, NUMERO_MAX_ALTERADO } from '../action/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function (state = initialState, action) {

    switch (action.type) {
        case NUMERO_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }

        case NUMERO_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}