import createStore from './createStore';
import { reviewReducer, movieReducer } from './reducers';
import { addReview, removeReview, addMovie, removeMovie, toggleMovie } from './actions';

const combineReducer = (state = {}, action) => {
    return {
        review: reviewReducer(state.review, action),
        movie: movieReducer(state.movie, action),
    };
};

const store = createStore(combineReducer);

const unSubscribe = store.subscribe(() => console.log('Get the updated state', store.getState()));

// Dispatching the actions
store.dispatch(addMovie({id: 0, name: 'Inception', complete: false}));
store.dispatch(addMovie({id: 1, name: 'Memento', complete: false}));
store.dispatch(toggleMovie({id: 1}));
store.dispatch(removeMovie({id: 0}));
store.dispatch(addReview({id: 0, review: 6}));
store.dispatch(addReview({id: 1, review: 8.5}));

unSubscribe(); // To stop updating the store...
