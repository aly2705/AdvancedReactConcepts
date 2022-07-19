# Advanced React Concepts

## useEffect Hook

This React Hook is used when dealing with side effects (such as API calls, timers or simply whenever something in the app changes depending on some other variables)  
Syntax: `useEffect(()=> {action that we want to trigger when the dependencies change}, [...dependencies])`

### Dependencies

You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!
Keep in mind:

- You DON'T need to add state updating functions (React guarantees that those functions never change)
- You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage (These browser APIs / global functions are not related to the React component render cycle and they also never change)
- You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (components won't be re-evaluated if such variables or functions change and vice-versa)

### Empty Array instead of Dependencies

e.g: `useEffect(()=> {localstorage.getItem('storedData')}, []`  
This will run just in the beginning of the execution when the component is created

### Cleanup function

Returned in the useEffect callback function, runs before every new effect and before a component unmounts. Doesn't run when the component mounts.

## Reducers and the useReducer hook

Sometimes when we have different pieces of state that are somehow related and might require updates based on each other (situation that can introduce bugs by unproper update schedule behind the scenes) we can opt out for a reducer  
Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words,  
`(state, action) => newState`

useReducer hook has the reducer function, the initial state (+ an initialization function if needed) as parameters, and returns an array which can be destructured for the state and the dispatch function (called when we want to make an update, has an action parameter which will be passed into the reducer).  
`const [stateVariable, dispatchFunction] = useReducer(reducerFunction, initState, initFunction)` (look for examples in the Login component)
