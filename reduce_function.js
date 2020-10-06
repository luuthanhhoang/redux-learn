// const actions = [
//   { type: 'CHANGE_SPEED', payload: 3 }, //speed: 3, lastSpeed: 1
//   { type: 'TURN_OFF' }, //speed: 0, lastSpeed: 3
//   { type: 'TURN_ON' }, //speed: 3, lastSpeed: 3
// ];

// const initState = {
//   speed: 0,
//   lastSpeed: 1
// };

// const reduce = (arr, cd, initState) => {
//   if (initState === undefined) {
//     initState = arr[0];
//     arr = arr.slice(1);
//   }
//   for (let num of arr) {
//     initState = cd(initState, num);
//   }
//   return initState;
// };

// reduce(actions, (state, action) => {
//   if (action.type === 'CHANGE_SPEED') {
//     return {
//       ...state,
//       speed: action.payload,
//     };
//   } else if (action.type === 'TURN_OFF') {
//     return {
//       ...state,
//       speed: 0,
//       lastSpeed: state.speed
//     };
//   } else if (action.type === 'TURN_ON') {
//     return {
//       ...state,
//       speed: state.lastSpeed,
//     }
//   }
// }, initState);

const { createStore } = require('redux');

const initState = {
  speed: 0,
  lastSpeed: 1
};

const CHANGE_SPEED = 'CHANGE_SPEED';
const TURN_OFF = 'TURN_OFF';
const TURN_ON = 'TURN_ON';

const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  payload: speed
})

const turnOn = () => ({
  type: TURN_ON
})

const turnOff = () => ({
  type: TURN_OFF
})

const reduce = (state = initState, action) => {
  if (action.type === CHANGE_SPEED) {
    return {
      ...state,
      speed: action.payload,
    };
  }
  if (action.type === TURN_OFF) {
    return {
      ...state,
      speed: 0,
      lastSpeed: state.speed
    };
  }
  if (action.type === TURN_ON) {
    return {
      ...state,
      speed: state.lastSpeed,
    }
  }
  return state;
}

const store = createStore(reduce);
console.log(store.getState())
store.dispatch(changeSpeed(5))
console.log(store.getState())
store.dispatch(turnOff())
console.log(store.getState())
store.dispatch(turnOn())
console.log(store.getState())
