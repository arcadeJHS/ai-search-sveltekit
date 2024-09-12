<svelte:options customElement={{
	tag: 'PREFIX-ai-search-result',
	shadow: 'none'
}} />

<script lang="ts">
    import type { ArtistSubType } from '$lib/types/Filter.ts';
    import { type Selection } from '$lib/types/Selection.ts';

    export let result: Selection;

    const getQuoteAvg = (quote: number): string => {
        return quote < 500 ? '$' : quote < 1500 ? '$$' : '$$$';
    };

    const getSubtypesString = (subtypes: ArtistSubType[]): string => {
        return subtypes?.join(', ');
    };

    function getTitle(result: Selection) {
        const subtypesString = result.subtypes ? getSubtypesString(result.subtypes) : null;
        return [result.artistType, subtypesString, result.location]
            .filter(Boolean)
            .join(' - ');
    }

    const getRatingStars = (ratingStars: number) => {
        if (!ratingStars) {
            return 0;
        }
        return Math.round((ratingStars / 2) * 100) / 100;
    };


    /**
     * ====>
     * ====> DEV ONLY!!!
     * ====>
     */
    const isDev = import.meta.env.MODE === 'development';
    const handleResultChange = () => {
        if (isDev) {
            result = {
                    ...{
                        displayName: "displayName",
                        aiQuoteAvg: 1501,
                        artistType: "Band",
                        bookings: 1,
                        offer: "Experienced members from famous acts like Coreleoni, UDO, Jorn, Gotthard playing a repertoire of classic Rock Metal from 70s and 80s (AC/DC, Led Zeppelin, Kiss, ecc...) with skills and passion that scores between rock and metal fans!",
                        currency: "CHF",
                        musician: true,
                        tagline: "Classic Rock Band, covers and original tunes played on they're best",
                        ratingVotes: 3,
                        ratingStars: 10,
                        nickName: "altovoltaggio",
                        userBookPlace: "zürich",
                        city: "Mezzovico-Vira",
                        country: "CH",
                        location: "Mezzovico-Vira, CH",
                        subtypes: ["Big Band", "Cover", "Lounge"],
                        imageUrl: "/thumb.png",
                        whois: "youtube",
                        videoYtId: "fj-V7UW6vD4",
                        itemprop_desc: "Rock, Metal Classic Rock Classic Rock Band, covers and original tunes played on they're best",
                        cachet_min: 500, 
                        telephone: "+41791234567",
                        level_css: "rockstar",
                    },
                    ...result
                } as Selection;
        }
    };
    $: result, handleResultChange();
</script>

<div class="col-12 col-md-6 col-xl-4" itemscope itemtype="http://schema.org/LocalBusiness">
    <!--
        Qui ho ignorato/rimosso: 
        <?php if($highlight): ?>style="border: 4px solid #ff9128;"<?php endif; ?> 

        Originale:
        <div class="card h-100" <?php if($highlight): ?>style="border: 4px solid #ff9128;"<?php endif; ?>>
    -->
    <div class="card h-100 wc-ai-search-result">
        <!-- 
            TODO:
            Qui occorre implementare show/hide play icon.

            Originale:
            <div class="top-area-images" id="video-container-<?php echo $profile->getId(); ?>" <?php if($video): ?>onmouseover="showPlayIcon(<?php echo $profile->getId(); ?>)" onmouseout="hidePlayIcon(<?php echo $profile->getId(); ?>)"<?php endif; ?>>
        -->
        <div class="wc-ai-search-result__top-area-images" id="video-container-{result.id}">
            <meta itemprop="name" content="{result.displayName}">
            <span itemprop="telephone" content="{result.telephone}"></span>
            {#if result.aiQuoteAvg}
                <span itemprop="priceRange" content="{getQuoteAvg(result.aiQuoteAvg)}"></span> 
            {/if}
            <!--  
                Qui ho ignorato/rimosso:
                <?php echo ($cat)? ' - '.$cat : ''; ?>

                TODO: 
                Qui occorre implementare l'evento per avviare il video.

                Originale:
                <?php if($video): ?>onclick="loadVideo(<?php echo $profile->getId(); ?>)"<?php endif; ?>
            -->
            <img 
                class="card-img-top"
                id="thumbnail-{result.id}"
                itemprop="image"
                src="{result.imageUrl}"
                alt="{result.displayName}"
                title="{getTitle(result)}">

            {#if result.whois === 'youtube' && result.videoYtId}
                <!-- 
                    TODO:
                    Qui occorre implementare:

                    onclick="loadVideo(<?php echo $profile->getId(); ?>)"
                -->
                <span class="wc-ai-search-result__play-icon" id="play-icon-{result.id}">
                    <!-- 
                        font-awesome svg icon: 
                        fas fa-play-circle"
                        https://fontawesome.com/v5/icons/play-circle?f=classic&s=solid&pc=%23e66f00&sc=%23e66f00
                    -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/>
                    </svg>
                </span>
                <!-- 
                    TODO:
                    Qui occorre implementare:

                    onclick="stopVideo(<?php echo $profile->getId(); ?>)"
                -->
                <div id="video-overlay-{result.id}"></div>
                <iframe id="video-player-{result.id}" width="100%" height="315" vid="{result.videoYtId}" src="" frameborder="0" style="display:none;" allow="autoplay" title="video player"></iframe>
                <div id="video-controls-{result.id}" class="video-controls"  style="display: none;">
                    <!-- 
                        TODO:

                        Occorre implementare i tasti qui sotto (eventi e icone di font-awesome o equivalente):
                    -->
                    <!-- <button onclick="playVideo(<?php echo $profile->getId(); ?>)"><i class="fas fa-play"></i></button>
                    <button onclick="pauseVideo(<?php echo $profile->getId(); ?>)"><i class="fas fa-pause"></i></button>
                    <button onclick="muteVideo(<?php echo $profile->getId(); ?>)"><i class="fas fa-volume-mute"></i></button>
                    <button onclick="unmuteVideo(<?php echo $profile->getId(); ?>)"><i class="fas fa-volume-up"></i></button> -->
                </div>
            {/if}

            {#if result.bookings && result.bookings > 0}
                <div class="date-area">
                    <p><span class="book">{result.bookings}</span> Verified Bookings</p>
                </div>
            {/if}
            
            <div class="membership-area">
                {#if result.level_css}
                    <span class="{result.level_css}"></span>
                {/if}
            </div>
        </div>
        
        <div class="card-body">
            <h5 class="card-title shorted" itemprop="description" content="{result.itemprop_desc}">{result.tagline}</h5>
            <p class="card-text shorted mb-3">{getSubtypesString(result.subtypes)}</p>
            <div class="col-12 city text-begin pb-3" itemtype="http://schema.org/PostalAddress" itemscope="" itemprop="address">
                {#if result.location}
                    <!-- 
                        TODO:
                        Qui occorre implementare le icone di font-awesome (o equivalente):
                        class="fal fa-map-marker-alt fa-lg"
                    -->
                    <i class="fal fa-map-marker-alt fa-lg"></i> <span itemprop="addressLocality">{result.location}</span>
                {/if}
            </div>
            <div class="ratting-area">
                <div class="ratting" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                    <meta itemprop="bestRating" content="10">
                    <meta itemprop="ratingValue" content="{result.ratingStars}">
                    <meta itemprop="reviewCount" content="{result.ratingVotes}">
                    <h2>
                        <i class="fas fa-star {!!result.ratingVotes ? 'fa-lg' : 'grey fa-lg'}"></i>
                        {getRatingStars(result.ratingStars) || ''}
                    </h2>
                    <p>{result.ratingVotes} Reviews</p>
                </div>

                <div class="price">
                    <p>from</p>
                    <h2>
                        {#if result.cachet_min}
                            {result.cachet_min}<span>{result.currency}</span>
                        {:else}
                            on request
                        {/if}
                    </h2>
                </div>
            </div>
            <!-- 
                TODO:
                Qui occorre implementare:
                evento:
                onclick="stopAllVideos()"
            -->
            <a itemprop="url" class="btnclick" title="{result.itemprop_desc}" href="/{result.nickName}">Show more</a>
        </div>
    </div>
</div>

<style>
.wc-ai-search-result {
    border: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .10);
    background-color: #ffffff;
    border-radius: 7px;
    margin-bottom: 22px;
}
.wc-ai-search-result__top-area-images {
    position: relative;
}
.wc-ai-search-result__play-icon {
    display: block;
    height: 58px;
    position: absolute;
    bottom: 58px;
    right: 10px;
    opacity: 0.8;
}
.wc-ai-search-result__play-icon > svg {
    height: 100%;
    fill: #e66f00;
}
</style>