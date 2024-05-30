// src/App.js

import React from 'react';
import { useStore } from './customHook.js/useStore';

const Component = () => {
    const [state] = useStore();

    return (
        <div>
            <h1>Count in component with no attachment: {state.count}</h1>
        </div>
    );
};

export default Component;
