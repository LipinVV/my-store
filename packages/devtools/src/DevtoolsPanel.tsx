import React from "react";
import { useDevtools } from "./useDevtools";
import { DevtoolsPanelProperties, HistoryItem } from "./types";


export const DevtoolsPanel = <T, >({ devtools }: DevtoolsPanelProperties<T>) => {
    const history = useDevtools(devtools);

    return (
        <div
            style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                width: 320,
                height: 400,
                overflow: "auto",
                background: "#111",
                color: "#00ff00",
                fontFamily: "monospace",
                padding: 10,
            }}
        >
            <h3>DevTools</h3>

            {history.map((item: HistoryItem<T>) => {
                const { id, action, timestamp, state } = item;

                return <div key={id}>
                    <div>#{id}</div>
                    <div>{action}</div>
                    <div>{new Date(timestamp).toLocaleTimeString()}</div>
                    <pre>{JSON.stringify(state, null, 2)}</pre>
                </div>
            })}
        </div>
    );
}