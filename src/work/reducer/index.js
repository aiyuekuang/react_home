
export const count1 = (state = 1, action={}) => {
    // console.log(77,state,action)
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "JIAN":
            return state - 1;
        default:
            return state;
    }
}

export const count2 = (state = 3, action={}) => {
    // console.log(88,state,action)
    switch (action.type) {
        case "ADD2":
            return state + 2;
        case "JIAN2":
            return state - 2;
        default:
            return state;
    }
}



