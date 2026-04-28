import { createStore } from "@legend/store-core";
import { createUseStore } from "@legend/store-react";
import {
    createDevtoolsStore,
    connectDevtools,
} from "@legend/store-devtools";

const store = createStore({
    count: 0,
    todos: [] as string[],
});

export const useStore = createUseStore(store);

export const devtools = createDevtoolsStore();

connectDevtools(store, devtools);

export const actions = {
    increment: () => store.setState((prevState) => ({ count: prevState.count + 1 }), "increment"),

    addTodo: (text: string) => store.setState((prevState) => ({ todos: [ ...prevState.todos, text ] }), "addTodo"),
};