const initialState = {
    totalCorrect: 0,
    selectedCategory: ''
}

export default reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY': {
            return {
            ...state,
            selectedCategory: action.title,
            };
        }
        case 'UPDATE_CORRECT': {
            return {
            ...state,
            totalCorrect: state.totalCorrect +1
            }
        }
        default: 
            return state;
    };
}