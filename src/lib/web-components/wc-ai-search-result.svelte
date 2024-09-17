<svelte:options customElement={{
	tag: 'webcomponent-ai-search-result',
	shadow: 'none'
}} />

<script lang="ts">
    import type { ArtistSubType } from '$lib/types/Filter.ts';
    import { type Selection } from '$lib/types/Selection.ts';
    import Fa from 'svelte-fa';
    import { faCirclePlay, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

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
    console.log(isDev);
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
                    <Fa icon={faCirclePlay} color="#e66f00" size="3x" />
                </span>
                <!-- 
                    TODO:
                    Qui occorre implementare:

                    onclick="stopVideo(<?php echo $profile->getId(); ?>)"
                -->
                <div id="video-overlay-{result.id}"></div>
                <iframe class="wc-ai-search-result__video-player-iframe" id="video-player-{result.id}" width="100%" height="315" vid="{result.videoYtId}" src="" frameborder="0" allow="autoplay" title="video player"></iframe>
                <div id="video-controls-{result.id}" class="wc-ai-search-result__video-controls">
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
                <div class="wc-ai-search-result__date-area">
                    <p><span class="wc-ai-search-result__book">{result.bookings}</span> Verified Bookings</p>
                </div>
            {/if}
            
            <div class="wc-ai-search-result__membership-area">
                {#if result.level_css}
                    <span class="{result.level_css}"></span>
                {/if}
            </div>
        </div>
        
        <div class="card-body wc-ai-search-result__card-body">
            <h5 
                class="card-title wc-ai-search-result__card-title wc-ai-search-result__card-title--shorted" 
                itemprop="description" 
                content="{result.itemprop_desc}">
                {result.tagline}
            </h5>
            {#if result.subtypes}
                <p class="wc-ai-search-result__card-text wc-ai-search-result__card-text--shorted mb-3">{getSubtypesString(result.subtypes)}</p>
            {/if}
            <div class="col-12 pb-3 wc-ai-search-result__city" itemtype="http://schema.org/PostalAddress" itemscope itemprop="address">
                {#if result.location}
                    <Fa icon={faLocationDot} />
                    <span itemprop="addressLocality">{result.location}</span>
                {/if}
            </div>
            <div class="wc-ai-search-result__ratting-area">
                <div class="wc-ai-search-result__ratting" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                    <meta itemprop="bestRating" content="10">
                    <meta itemprop="ratingValue" content="{result.ratingStars}">
                    <meta itemprop="reviewCount" content="{result.ratingVotes}">
                    <h2>
                        <Fa icon={faStar} color={!!result.ratingVotes ? '#ffd528' : '#e3e3e3'} size="lg" />
                        {#if result.ratingStars}
                            {getRatingStars(result.ratingStars)}
                        {/if}
                    </h2>
                    <p>{result.ratingVotes} Reviews</p>
                </div>

                <div class="wc-ai-search-result__price">
                    <p>from</p>
                    <h2>
                        {#if result.cachet_min}
                            {result.cachet_min} <span>{result.currency}</span>
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
            <a itemprop="url" class="wc-ai-search-result__show-more" title="{result.itemprop_desc}" href="/{result.nickName}" target="_blank">Show more</a>
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
    position: absolute;
    bottom: 12px;
    right: 12px;
    opacity: 0.8;
}
.wc-ai-search-result__video-player-iframe {
    display: none;
    border-radius: 6px;
}
.wc-ai-search-result__video-controls {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    padding: 6px 0;
    border-radius: 0 0 6px 6px;
}
/* .wc-ai-search-result__video-controls button {
    margin: 0 6px;
    min-width: 31px;
    border-radius: 6px;
    background-color: #FF9128;
    border: none;
} */
.wc-ai-search-result__date-area {
    position: absolute;
    bottom: 12px;
    left: 12px;
    height: auto;
    top: auto;
}
.wc-ai-search-result__date-area p {
    margin: 0;
    width: auto;
    display: inline-block;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    background: #353F47;
    padding: 5px 16px;
    border-radius: 4px;
    color: #fff;
    letter-spacing: 1px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
}
.wc-ai-search-result__date-area p span.wc-ai-search-result__book {
    font-weight: bold;
}
.wc-ai-search-result__membership-area {
    position: absolute;
    top: 7px;
    left: 12px;
    height: auto;
}
.wc-ai-search-result__membership-area span {
    background-position: 0 0;
    background-repeat: no-repeat;
    padding-left: 40px;
    padding-bottom: 44px;
}
.wc-ai-search-result__membership-area span.rockstar {
    background-image: url(/mem-rockstar.png);
}
.wc-ai-search-result__membership-area span.newcomer { 
  background-image: url("/mem-newcomer.png");
}
.wc-ai-search-result__membership-area span.free { 
  background-image: url("/mem-free.png");
}
.wc-ai-search-result__membership-area span.trial { 
  background-image: url("/mem-trial.png");
}
.wc-ai-search-result__card-body {
    background-color: transparent !important;
    padding-bottom: 0;
    border: none !important;
}
.wc-ai-search-result__card-title {
    position: relative;
    margin-bottom: 10px;
    color: #3B3923;
    font-weight: bold;
    font-size: 15px;
}
.wc-ai-search-result__card-title--shorted {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 54px;
}
p.wc-ai-search-result__card-text {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #3b3923;
}
p.wc-ai-search-result__card-text--shorted {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 36px;
}
.wc-ai-search-result__city span {
    font-family: Montserrat;
    font-size: 14px;
}
.wc-ai-search-result__ratting-area {
    display: flex;
    justify-content: space-between;
    min-height: 45px;
}
.wc-ai-search-result__ratting h2 {
    font-size: 16px;
    color: #7E7D7E;
    font-weight: bold;
    padding: 0px;
    margin: 0px 0px;
}
.wc-ai-search-result__ratting p {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #7e7d7e;
    padding: 5px 0px;
}
.wc-ai-search-result__price {
    padding-left: 47px;
    min-height: 37px;
}
.wc-ai-search-result__price p {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #4e4e4e;
    margin: 0px 0px;
}
.wc-ai-search-result__price h2 {
    font-family: Lato;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #4e4e4e;
    padding: 0px;
    margin: 0px 0px;
}
.wc-ai-search-result__price h2 span {
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #4e4e4e;
}
.wc-ai-search-result__show-more {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #FF9128;
    border: 1px solid #FF9128;
    padding: 13px 20px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    border-radius: 4px;
    margin-top: 15px;
}
</style>