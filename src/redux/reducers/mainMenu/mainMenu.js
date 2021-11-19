const initialState = []

export const mainMenu = (state = initialState, action) => {

    switch(action.type) {
        case 'MENU':
            return action.payload
        default:
            return state
    }
}