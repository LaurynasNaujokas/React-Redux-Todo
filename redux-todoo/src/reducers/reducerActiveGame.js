export default function (state=null, action){
    switch(action.type) {
        case "GAME_SELECTED":
            return action.payload;
           break;
    }
    return state;
}