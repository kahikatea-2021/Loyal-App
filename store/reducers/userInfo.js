
const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER':
            return action.user ? action.user : state
        default:
            return state
    }
}

export default userInfoReducer
