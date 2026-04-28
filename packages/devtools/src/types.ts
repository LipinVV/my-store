type HistoryItem<T> = {
    id: number;
    state: T;
    action: string;
    timestamp: number;
};

type HistoryEvent<T> = {
    next: T,
    action: string,
    timestamp: number
}

type Devtools<T> = {
    push: (event: HistoryEvent<T>) => void;
    getHistory: () => HistoryItem<T>[];
};

type DevtoolsPanelProperties<T> = {
    devtools: Devtools<T>
}

export {
    HistoryItem,
    HistoryEvent,
    Devtools,
    DevtoolsPanelProperties
}