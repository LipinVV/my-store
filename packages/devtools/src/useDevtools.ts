import { useEffect, useState } from "react";
import { Devtools, HistoryItem } from "./types";

export const useDevtools = <T>(devtools: Devtools<T>) => {
    const [history, setHistory] = useState<HistoryItem<T>[]>(devtools.getHistory());

    useEffect(() => {
        const basicInterval = 100;
        const id = setInterval(() => {
            setHistory([ ...devtools.getHistory() ]);
        }, basicInterval);

        return () => clearInterval(id);
    }, []);

    return history;
}