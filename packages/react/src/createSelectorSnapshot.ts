export const createSelectorSnapshot = <T, R>(
    store: { getState: () => T },
    selector: (selector: T) => R,
    isEqual: (last: R, next: R) => boolean = Object.is
) => {
    let lastState = store.getState();
    let lastSelected = selector(lastState);

    return () => {
        const nextState = store.getState();

        if (nextState === lastState) return lastSelected;

        const nextSelected = selector(nextState);

        if (isEqual(nextSelected, lastSelected)) {
            lastState = nextState;
            return lastSelected;
        }

        lastState = nextState;
        lastSelected = nextSelected;
        return nextSelected;
    };
}