import { combineReducers } from 'redux'

const pics = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PIC':
            const newPics = [ ...state ]
            newPics.push(action.value)
            return newPics
        default:
            return [ ...state ]
    }
}

const gallery = (state = '', action) => {
    return state
}

const people = (state = [], action) => {
    switch (action.type) {
        case 'GET_PEOPLE':
            return action.value
        default:
            return [ ...state ]
    }
}

export default combineReducers({
    pics,
    gallery,
    people
})