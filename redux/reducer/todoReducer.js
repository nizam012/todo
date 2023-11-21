const initialState = {
    list: null  
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                list: action.payload
            }
        }
        default:{
            return{
                state
            }
        }
    }
}

export default  todoReducer