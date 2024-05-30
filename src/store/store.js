// // src/store.js

// class Store {
//     constructor(reducer, initialState) {
//         this.reducer = reducer;
//         this.state = initialState;
//         this.listeners = [];
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//         this.state = this.reducer(this.state, action);
//         this.listeners.forEach(listener => listener());
//     }

//     subscribe(listener) {
//         this.listeners.push(listener);
//         return () => {
//             this.listeners = this.listeners.filter(l => l !== listener);
//         };
//     }
// }

// export default Store;


// src/store.js
class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this), this.getState.bind(this));
        } else {
            this.state = this.reducer(this.state, action);
            this.listeners.forEach(listener => listener());
        }
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

export default Store;
