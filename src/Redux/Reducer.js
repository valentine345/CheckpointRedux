import { ADDTASK, DELETETASK, EDITDONE } from "./ActionTypes"

const initialState={
    tasks : [
        {title : "Go play sports", isDone : false, id : Math.random()},
        {title : "To go to work", isDone : false, id : Math.random()},
        {title : "Going out at night", isDone : false, id : Math.random()},
    ]
}
const Reducer =(state= initialState, action)=>{
    switch (action.type) {
        case ADDTASK : return {...state, tasks : [...state.tasks, action.payload]}
        case DELETETASK : return {...state, tasks : state.tasks.filter((el,i,t)=> el.id !== action.payload)}
        case EDITDONE : return {...state, tasks : state.tasks.map((el,i,t)=> el.id === action.payload? {...el, isDone : !el.isDone}:el)}
        default: return state
    }
}
export default Reducer