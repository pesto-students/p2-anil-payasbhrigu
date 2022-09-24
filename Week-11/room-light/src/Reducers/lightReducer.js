const light = (state=1,action)=>{
    switch(action.type){
        case "OFF":
            return 0
        case "ON":
            return 1
        default:
            return state
    }
};

export default light;