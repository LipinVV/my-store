import { Devtools, HistoryEvent, HistoryItem } from "./types";


export const createDevtoolsStore = <T>(): Devtools<T> => {
    let history: HistoryItem<T>[] = [];

    return {
        push(event: HistoryEvent<T>) {
            const { next, action, timestamp } = event;

            history.push({
                id: history.length,
                state: next,
                action: action,
                timestamp: timestamp,
            });
        },

        getHistory: () => history,
    };
}