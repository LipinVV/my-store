import { useRef } from "react";
import { useSyncExternalStore } from "react";
import { createSelectorSnapshot } from "./createSelectorSnapshot";

export const createUseStore = <T>(store: {
    getState: () => T;
    subscribe: (listener: () => void) => () => void;
}) => {
    const useStore = <R>(
        selector: (state: T) => R,
        isEqual: (last: R, next: R) => boolean = Object.is
    ) => {
        const snapshotRef = useRef<() => R>(null);

        if (!snapshotRef.current) {
            snapshotRef.current = createSelectorSnapshot(
                store,
                selector,
                isEqual
            );
        }

        return useSyncExternalStore(
            store.subscribe,
            snapshotRef.current,
            snapshotRef.current
        );
    };

    return useStore;
}