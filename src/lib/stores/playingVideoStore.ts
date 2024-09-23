import { writable } from 'svelte/store';

const usePlayingVideo = () => {
    const store = writable<number | null>(null);

    const stopAllVideos = () => {
        store.set(null);
    };

    return {
        subscribe: store.subscribe,
        set: store.set,
        stopAllVideos
    };
}; 

export const playingVideoStore = usePlayingVideo();