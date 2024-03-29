// import {createStore } from 'redux';
import {createSlice} from '@reduxjs/toolkit';

const initialStateCounter = {counter: 0,showCounter:true}

const counterSlice=createSlice({
    name: 'counter',
    initialState: initialStateCounter,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }

});



// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }
//     return state;
// }
//counterSlice.actions.increment; 
//action creator function, 
//that is used to create action object 
//it returns an object with a type property and a payload property
//counterSlice.actions.increment({type: 'increment', payload: undefined})
// const store= createStore(counterReducer);
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;