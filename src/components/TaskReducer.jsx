export const initialState ={
    tasks:[]
};

export const taskReducer =(state, action) =>{
    switch(action.type){
        case "ADD_TASK":
            return {
                ...state,
                tasks:[...state.tasks, {...action.payload, completed: false}]
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task, index) => 
                    index === action.payload ? {...task, completed: !task.completed} : task
                )
            };
        case "DELETE_TASK":            
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload)
            };
        default:            
            return state;
    }
}