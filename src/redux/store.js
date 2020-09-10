import {createStore,applyMiddleware,compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from "./reducers/rootReducer";
import { createCycleMiddleware } from 'redux-cycles';


export default function configureStore() {
    const cycleMiddleware = createCycleMiddleware();
    const { makeActionDriver, makeStateDriver } = cycleMiddleware;
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(),cycleMiddleware))
    );


    return store;
}


