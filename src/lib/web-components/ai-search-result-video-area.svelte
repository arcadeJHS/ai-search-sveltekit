<script lang="ts">
import { type Selection } from '$lib/types/Selection.ts';
import Fa from 'svelte-fa';
import { faCirclePlay, faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { createEventDispatcher } from 'svelte';
import button from '$lib/styles/button.module.css';
import { playingVideoStore } from '$lib/stores/playingVideoStore.ts';

export let result: Selection;
let videoIframe: HTMLIFrameElement;
let videoVisible = false;

const dispatch = createEventDispatcher();

const toggleVideo = () => {
    videoVisible = !videoVisible;
}

const getTitle = (result: Selection) => {
    const subtypesString = result.subtypes ? result.subtypes?.join(', ') : null;
    return [result.artistType, subtypesString, result.location]
        .filter(Boolean)
        .join(' - ');
}

const loadVideo = (result: Selection) => {
    videoIframe.src = `https://www.youtube-nocookie.com/embed/${result.videoYtId}?enablejsapi=1&disablekb=1&rel=0&showinfo=0&color=white&autoplay=1`;
    videoIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    toggleVideo();

    playingVideoStore.set(result.id);
    dispatch('toggleVideo', videoVisible);
};

const playVideo = () => {
    videoIframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

const pauseVideo =() => {
    videoIframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");
}

const stopVideo = () => {
    videoIframe.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}',"*");
}

const muteVideo = () => {
    videoIframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*");
}

const unmuteVideo = () => {
    videoIframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*");
}

$: if (videoIframe?.contentWindow && $playingVideoStore !== result.id) {
    stopVideo();
}
</script>

<div class="ai-search-result-video-area">
    {#if !videoVisible}
        <button class={button.glyphButton} on:click={() => loadVideo(result)}>
            <img
                class="card-img-top"
                id="thumbnail-{result.id}"
                itemprop="image"
                src="{result.imageUrl}"
                alt="{result.displayName}"
                title="{getTitle(result)}" />
        </button>
    {/if}

    {#if result.whois === 'youtube' && result.videoYtId}
        {#if !videoVisible}
            <button on:click={() => loadVideo(result)} class={`${button.glyphButton} wc-ai-search-result__play-icon`}>
                <span  id="play-icon-{result.id}">
                    <Fa icon={faCirclePlay} color="#e66f00" size="3x" />
                </span>
            </button>
        {/if}
        
        <iframe 
            bind:this={videoIframe}
            class="wc-ai-search-result__video-player-iframe" 
            class:wc-ai-search-result__video-player-iframe--visible={videoVisible}
            id="video-player-{result.id}" 
            width="100%" 
            height="315" 
            src="" 
            frameborder="0" 
            allow="autoplay" 
            title="video player">
        </iframe>
        
        <div 
            id="video-controls-{result.id}" 
            class="wc-ai-search-result__video-controls"
            class:wc-ai-search-result__video-controls--visible={videoVisible}>
            <button on:click={playVideo} class={button.linkButton}><Fa icon={faPlay} color="#000000" /></button>
            <button on:click={pauseVideo} class={button.linkButton}><Fa icon={faPause} color="#000000" /></button>
            <button on:click={muteVideo} class={button.linkButton}><Fa icon={faVolumeMute} color="#000000" /></button>
            <button on:click={unmuteVideo} class={button.linkButton}><Fa icon={faVolumeUp} color="#000000" /></button>
        </div>
    {/if}
</div>

<style>
.wc-ai-search-result__play-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    opacity: 0.8;
}
.wc-ai-search-result__video-player-iframe {
    display: none;
    border-radius: 6px;
}
.wc-ai-search-result__video-player-iframe--visible {
    display: block;
}
.wc-ai-search-result__video-controls {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 2rem;
    background-color: #000000;
    padding: 0.5rem;
    border-radius: 0 0 6px 6px;
}
.wc-ai-search-result__video-controls--visible {
    display: block;
}
.wc-ai-search-result__video-controls button {
    margin: 0 0.2rem;
    min-width: 31px;
    border-radius: 6px;
    background-color: #FF9128;
    border: none;
}
</style>