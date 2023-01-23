

export const todoReducer = (initalState = [], action ) => {

    switch(action.type) {
        case 'ADD TODO':
            return [...initalState, action.payload];
        
        case 'REMOVE TODO':
            return initalState.filter( todo => todo.id !== action.payload);

        case 'TOGGLE TODO':
            return initalState.map(todo => {

                if( todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            });

            default:
                return initalState;
                
    }
}