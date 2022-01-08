import { v4 as uuidv4 } from 'uuid';

export const add = ({ text, desc }) => {
    return {
        type: "ADD",
        payload: {
            title: text,
            description: desc,
            status: false,
            id: uuidv4()
        }
    }
};
export const editTodo = ({ title, desc, id }) => {
    return {
        type: "EDIT",
        payload: {
            title: title,
            desc: desc,
            id: id
        }
    }
};
export const toggle = (id) => {
    return {
        type: "TOGGLE",
        payload: {
            id: id
        }
    }
};
export const delet = (id) => {
    return {
        type: "DELETE",
        payload: {
            id: id
        }
    }
};
