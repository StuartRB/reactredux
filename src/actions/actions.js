export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    };
};