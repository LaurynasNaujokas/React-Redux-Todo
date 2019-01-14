export default function (state=null, action){
    switch(action.type) {
        case "ADD_TODO":
            return action.payload;
    }
    return state;
}