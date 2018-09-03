//  @ Small implemantaion of redux's createStore method
export default function createStore(reducer) {
    /***
     * The store should have 4 core parts
     * 1) The state
     * 2) Get the state
     * 3} Listen to changes on the state
     * 4) Update the state
    */

    let state;
    const listeners = [];

    const getState = () => state;

    const subscribe = (listenerCallback) => {
        listeners.push(listenerCallback);
        return () => {
            listeners = listeners.filter(listener => listener !== listenerCallback);
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    return {
        getState,
        subscribe,
        dispatch,
    };
}
