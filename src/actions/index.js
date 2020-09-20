export const increment = amount => {
    return {
        type: 'INCREMENT',
        amount
    }
}
export const decrement = amount => {
    return {
        type: 'DECREMENT',
        amount
    }
}
export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}
