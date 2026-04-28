export const connectDevtools = <T>(
    store: {
        subscribeDevtools: (listener: (event: any) => void) => () => void;
    },
    devtools: {
        push: (event: any) => void;
    }
) => {
    store.subscribeDevtools((event) => {
        devtools.push(event);
    });
}