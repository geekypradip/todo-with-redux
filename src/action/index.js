import { v4 as uuidv4 } from 'uuid';
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
export const add = ({ text, desc }) => {
    return {
        type: "ADD",
        payload: {
            title: text,
            description: desc,
            status: false,
            complete: false,
            id: uuidv4()
        }
    }
};