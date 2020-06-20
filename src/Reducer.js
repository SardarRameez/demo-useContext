
const numReducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+=1;
        case "decrement":
            return state-=1;
        default:
            throw new Error()
    }
}
export default numReducer;