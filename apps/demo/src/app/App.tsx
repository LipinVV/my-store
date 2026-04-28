import React, { useState } from "react";
import { useStore, actions, devtools } from "../store";
import { DevtoolsPanel } from "@legend/store-devtools";

export const App = () => {
    const count = useStore((state) => state.count);
    const todos = useStore((state) => state.todos);

    const [text, setText] = useState("");

    return (
        <div style={{ padding: 20 }}>
            <h1>Demo</h1>

            <h2>Counter: {count}</h2>
            <button onClick={actions.increment}>+</button>

            <h2>Todos</h2>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button
                onClick={() => {
                    actions.addTodo(text);
                    setText("");
                }}
            >
                add
            </button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <DevtoolsPanel devtools={devtools} />
        </div>
    );
}