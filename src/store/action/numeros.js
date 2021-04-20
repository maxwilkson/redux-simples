import { NUMERO_MIN_ALTERADO, NUMERO_MAX_ALTERADO } from './actionTypes'

export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUMERO_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUMERO_MAX_ALTERADO,
        payload: novoNumero
    }
}