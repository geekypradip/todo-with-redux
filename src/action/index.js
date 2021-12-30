export const increment = (val) => {
    return {
        type: "INCREMENT",
        payload: val
    }
};
export const decrement = (val) => {
    return {
        type: "DECREMENT",
        payload: val
    }
};
export const multiply = (val) => {
    return {
        type: "MULTIPLY",
        payload: val
    }
};
export const division = (val) => {
    return {
        type: "DIVISION",
        payload: val
    }
};
