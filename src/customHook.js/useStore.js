// src/useStore.js

import { useEffect, useState } from 'react';
import Store from '../store/store';
import { initialState, reducer } from '../reducer/reducer';

// Initialize the store
const store = new Store(reducer, initialState);

export const useStore = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });
        console.log("SUBSCRIBE", unsubscribe)
        return () => {
            unsubscribe();
        };
    }, []);

    return [state, store.dispatch.bind(store)];
};
