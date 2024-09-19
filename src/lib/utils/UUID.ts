export const UUID = (): string => {
    if (crypto.randomUUID) {
        return crypto.randomUUID();
    }

    // Polyfill for browsers that do not support crypto.randomUUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 0x0f) | (c === 'x' ? 0 : 0x8);
        return r.toString(16);
    });
}