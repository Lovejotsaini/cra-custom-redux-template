
import React from 'react';
import { useStore } from './customHook.js/useStore';
import Component from './Component';

const Header = () => {
    const [state, dispatch] = useStore();

    return (
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default Header;
