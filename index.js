import todoReducer from './todoReducer';

//  @ Small implemantaion of redux's createStore method
function createStore(reducer) {
    /***
     * The store should have 4 core parts
     * 1) The state
     * 2) Get the state
     * 3} Listen to chnages on the state
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

const store = createStore(todoReducer);

const unSubscribe = store.subscribe(() => console.log('Get the updated state', store.getState()));

/***
 * Example dispatches to update the store
 * store.dispatch({type: 'ADD_TODO', payload: {id: 0, task: 'Watching movies', complete: false}})
 * store.dispatch({type: 'ADD_TODO', payload: {id: 1, task: 'Washing clothes', complete: false}})
 * store.dispatch({type: 'REMOVE_TODO', payload: {id: 1}})
 * store.dispatch({type: 'TOGGLE_TODO', payload: {id: 1}})
 */

unSubscribe(); // To stop updating the store...
