export type Listener = () => void;

export type SetState<T> = (
    partial: Partial<T> | ((state: T) => Partial<T>),
    action: string
) => void;

export type DevtoolsEvent<T> = {
    previousState: T;
    nextState: T;
    action: string;
    timestamp: number;
};

export type Store<T> = {
    getState: () => T;
    setState: SetState<T>;
    subscribe: (listener: Listener) => () => void;
    subscribeDevtools: (listener: (event: DevtoolsEvent<T>) => void) => () => void;
};