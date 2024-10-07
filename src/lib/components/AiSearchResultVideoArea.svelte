<script lang="ts">
    import { type Selection } from '$lib/types/Selection.ts';
    import Fa from 'svelte-fa';
    import { faCirclePlay, faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
    import { createEventDispatcher } from 'svelte';
    import button from '$lib/styles/button.module.css';
    
    export let result: Selection;
    export let currentPlayingVideoId: number | undefined;

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
        dispatch('loadVideo', { videoVisible, videoId: result.id });
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
    
    $: if (videoIframe?.contentWindow && currentPlayingVideoId !== result.id) {
        stopVideo();
    }
    </script>
    
    <!-- 
        WARNING:
        This component is ported almost 1:1 from the original PHP template, and could make massive use of Bootstrap styles.
        To make it isolated and reusable, we need to completely replace Bootstrap styles with custom ones.
    -->
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
                <button on:click={() => loadVideo(result)} class={`${button.iconButton} ai-search-result__play-icon`}>
                    <Fa icon={faCirclePlay} size="3x" />
                </button>
            {/if}
            
            <iframe 
                bind:this={videoIframe}
                class="ai-search-result__video-player-iframe" 
                class:ai-search-result__video-player-iframe--visible={videoVisible}
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
                class="ai-search-result__video-controls"
                class:ai-search-result__video-controls--visible={videoVisible}>
                <button on:click={playVideo} class={button.linkButton}><Fa icon={faPlay} color="#000000" /></button>
                <button on:click={pauseVideo} class={button.linkButton}><Fa icon={faPause} color="#000000" /></button>
                <button on:click={muteVideo} class={button.linkButton}><Fa icon={faVolumeMute} color="#000000" /></button>
                <button on:click={unmuteVideo} class={button.linkButton}><Fa icon={faVolumeUp} color="#000000" /></button>
            </div>
        {/if}
    </div>
    
    <style>
    .ai-search-result__play-icon {
        position: absolute;
        bottom: 12px;
        right: 12px;
        opacity: 0.8;
    }
    .ai-search-result__video-player-iframe {
        display: none;
        border-radius: 6px;
    }
    .ai-search-result__video-player-iframe--visible {
        display: block;
    }
    .ai-search-result__video-controls {
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
    .ai-search-result__video-controls--visible {
        display: block;
    }
    .ai-search-result__video-controls button {
        margin: 0 0.2rem;
        min-width: 31px;
        border-radius: 6px;
        background-color: #ff6600;
        border: none;
    }
    </style>