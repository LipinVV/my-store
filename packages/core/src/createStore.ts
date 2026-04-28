import { Store, Listener, SetState, DevtoolsEvent } from "./types";

export const createStore = <T>(initialState: T): Store<T> => {
    let state = initialState;

    const listeners = new Set<Listener>();
    const devtoolsListeners = new Set<(event: DevtoolsEvent<T>) => void>();

    const getState = () => state;

    const setState: SetState<T> = (partial, action) => {
        const patch = typeof partial === "function" ? partial(state) : partial;

        const nextState = { ...state, ...patch };

        if (Object.is(nextState, state)) return;

        const previousState = state;
        state = nextState;

        const event: DevtoolsEvent<T> = {
            previousState,
            nextState,
            action,
            timestamp: Date.now(),
        };

        devtoolsListeners.forEach((listener) => listener(event));
        listeners.forEach((listener) => listener());
    };

    const subscribe = (listener: Listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    };

    const subscribeDevtools = (listener: (event: DevtoolsEvent<T>) => void) => {
        devtoolsListeners.add(listener);
        return () => devtoolsListeners.delete(listener);
    };

    return {
        getState,
        setState,
        subscribe,
        subscribeDevtools,
    };
}