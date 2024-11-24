import { createStore} from 'redux';

const initialState = {
    inputText: 'batman'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return{inputText: action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store