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

## React Context

React Context is used as an alternative to managing the state through long prop chains across components (Passing data and handlers deep inside the component tree). React Context allows us to forward the data directly where we need it through the Provider and Consumer components.

### How to create a Context?

`const Context = React.createContext(defaultValue)`  
This snippet creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree. The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.

### Context.Provider

`<Context.Provider value={/* some value */}>...</Context.Provider>`  
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.

### Context.Consumer

`<Context.Consumer>{value => /* render something based on the context value */}</Context.Consumer>`  
A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.Requires a function as a child.

### useContext Hook

`const value = useContext(Context);`  
Another way to subscribe to context changes in a component: value gets the data stored in the special prop on the Provider

### Keep in mind!

React Context is useful for state management, not for configuration (in reusable components) and should not always replace forwarding through props (especially when we have short prop chains). You can create Custom Context Provider Components (as in this app where we no longer manage the state in App.js, but in the AuthContextProvider component that wraps it up), but the Context API is not optimised for situations when updates are very frequent (matter of seconds and milliseconds)

## useImperativeHandle and ForwardRefs

We sometimes may want to add a native functionality to a reusable and configurable component (like the InputGroup in this project that needs to focus a field if the form in submitted invalid - the focus method cannot be called from the outside that simple). This new hook allows us to make available a function on our component to the custom refs from outside.  
Component gets (props, ref) as arguments, is wrapped in React.forwardRefs() and the hook has (ref, {pointers for functions to be available}) as arguments. Check the example in the connection between InputGroup.js and Login.js

## Rules of Hooks

![Rules of Hooks Slide](/src/rules-of-hooks.jpg "Rules of hooks")

## Demo project

https://login-simulation.netlify.app
