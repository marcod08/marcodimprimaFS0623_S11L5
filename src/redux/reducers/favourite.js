import { ADD_TO_FAVOURITE } from "../action"

const initialState = {

    content: []

}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {

                ...state,
                content: [...state.content, action.payload]

            }

        default:
            return state
    }

}

export default favReducer