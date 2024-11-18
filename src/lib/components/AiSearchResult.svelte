<script lang="ts">
    import type { ArtistSubTypeEnum } from '$lib/types/Filter.ts';
    import { type Selection } from '$lib/types/Selection.ts';
    import Fa from 'svelte-fa';
    import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
    import { t } from 'svelte-i18n';
    import AiSearchResultVideoArea from '$lib/components/AiSearchResultVideoArea.svelte';
    import text from '$lib/styles/text.module.css';
    import button from '$lib/styles/button.module.css';
	import { createEventDispatcher } from 'svelte';
	import { get } from 'svelte/store';
    
    export let result: Selection;
    export let currentPlayingVideoId: number | undefined;
    
    let videoVisible = false;

    const dispatch = createEventDispatcher();
    
    const getQuoteAvg = (quote: number): string => {
        return quote < 500 ? '$' : quote < 1500 ? '$$' : '$$$';
    };
    
    const getSubtypesString = (subtypes: ArtistSubTypeEnum[]): string => {
        return subtypes?.join(', ');
    };
    
    const getRatingStars = (ratingStars: number) => {
        if (!ratingStars) {
            return 0;
        }
        return Math.round((ratingStars / 2) * 100) / 100;
    };
    
    const handleLoadVideo = (event: { detail: { videoVisible: boolean; videoId: number; } }) => {
        videoVisible = event.detail.videoVisible;
        dispatch('loadVideo', { videoId: event.detail.videoId });
    }
    
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
                        cachet_min: "500", 
                        telephone: "+41791234567",
                        level_css: "rockstar",

                        budgets: [
                            {
                                "get_in": "19:00:00",
                                "negotiable": true,
                                "proposal": "1500.00",
                                "length": "artist_pricing_cachet_mid",
                                "members_formation": "2",
                                "soundequip": false,
                                "c_when": "28 November 2024",
                                "cachet": "1200.00",
                                "stagend_fee": 300,
                                "currency": "CHF"
                            },
                            {
                                "get_in": "17:00:00",
                                "negotiable": false,
                                "proposal": "500.00",
                                "length": "artist_pricing_cachet_low",
                                "members_formation": "4",
                                "soundequip": true,
                                "c_when": "25 December 2024",
                                "cachet": "350.00",
                                "stagend_fee": 150,
                                "currency": "CHF"
                            }
                        ]
                    },
                    ...result
                } as Selection;
        }
    };
    $: result, handleResultChange();
    </script>
    
    <!-- 
        WARNING:
        This component is ported 1:1 from the original PHP template.
        It makes massive use of Bootstrap styles.
        To make it isolated and reusable, we need to completely replace Bootstrap styles with custom ones.
    -->
    <div class="col-12 col-sm-6 col-md-6 col-xl-4" itemscope itemtype="http://schema.org/LocalBusiness">
        <!--
            Qui ho ignorato/rimosso: 
            <?php if($highlight): ?>style="border: 4px solid #ff9128;"<?php endif; ?> 
    
            Originale:
            <div class="card h-100" <?php if($highlight): ?>style="border: 4px solid #ff9128;"<?php endif; ?>>
        -->
        <div class={`card h-100 ${text.base} ai-search-result`}>
            <div 
                class="ai-search-result__top-area-images" 
                class:ai-search-result__top-area-images--video-bar-top={videoVisible} 
                id="video-container-{result.id}">
                <meta itemprop="name" content="{result.displayName}">
                <span itemprop="telephone" content="{result.telephone}"></span>
                {#if result.aiQuoteAvg}
                    <span itemprop="priceRange" content="{getQuoteAvg(result.aiQuoteAvg)}"></span> 
                {/if}
    
                <AiSearchResultVideoArea 
                    {result} 
                    {currentPlayingVideoId}
                    on:loadVideo={handleLoadVideo} 
                />
    
                {#if result.bookings && result.bookings > 0}
                    <div 
                        class="ai-search-result__date-area"
                        class:ai-search-result__date-area--video-bar-top={videoVisible}>
                        <p><span class="ai-search-result__book">{result.bookings}</span> {$t('result.verified_bookings')}</p>
                    </div>
                {/if}
                
                <div class="ai-search-result__membership-area">
                    {#if result.level_css}
                        <span class="{result.level_css}"></span>
                    {/if}
                </div>
            </div>
            
            <div class="card-body ai-search-result__card-body">
                <h5 
                    class="card-title ai-search-result__card-title ai-search-result__card-title--shorted" 
                    itemprop="description" 
                    content="{result.itemprop_desc}">
                    {result.tagline}
                </h5>
                {#if result.subtypes}
                    <p class="ai-search-result__card-text ai-search-result__card-text--shorted mb-3">{getSubtypesString(result.subtypes)}</p>
                {/if}
                <div class="col-12 pb-3 ai-search-result__city" itemtype="http://schema.org/PostalAddress" itemscope itemprop="address">
                    {#if result.location}
                        <Fa icon={faLocationDot} />
                        <span itemprop="addressLocality">{result.location}</span>
                    {/if}
                </div>
                <div class="ai-search-result__ratting-area">
                    <div class="ai-search-result__ratting" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                        <meta itemprop="bestRating" content="10">
                        <meta itemprop="ratingValue" content="{result.ratingStars}">
                        <meta itemprop="reviewCount" content="{result.ratingVotes}">
                        <h2>
                            <Fa icon={faStar} color={!!result.ratingVotes ? '#ffd528' : '#e3e3e3'} size="lg" />
                            {#if result.ratingStars}
                                {getRatingStars(result.ratingStars)}
                            {/if}
                        </h2>
                        <p>{result.ratingVotes} {$t('result.reviews')}</p>
                    </div>
    
                    <div class="ai-search-result__price">
                        <p>{$t('result.from')}</p>
                        <h2>
                            {#if result.cachet_min}
                                {result.cachet_min} <span>{result.currency}</span>
                            {:else}
                                {$t('result.on_request')}
                            {/if}
                        </h2>
                    </div>
                </div>
                <a 
                    itemprop="url" 
                    class={`${button.outlined} ai-search-result__show-more`} 
                    title="{result.itemprop_desc}" 
                    href="/{result.nickName}" target="_blank"
                    on:click={() => dispatch('resultSelected')}>
                    {$t('result.show_more')}
                </a>

                {#if result?.budgets && result.budgets.length}
                    <!-- <div>
                        <pre>{ JSON.stringify(result.budgets, null, 2) }</pre>
                    </div> -->
                    {#each result.budgets as deal, index}
                        <div class="ai-search-result__deal">
                            <h5>{$t('result.deal.deal')} {++index}</h5>
                            <ul class="fa-ul">
                                <li>
                                    <span><i class="fal fa-calendar-alt"></i></span>
                                    {deal.c_when}
                                </li>
                                {#if deal.get_in}
                                    <li>
                                        <span><i class="fal fa-clock"></i></span>
                                        {$t('result.deal.time')}: {deal.get_in}
                                    </li>
                                {/if}
                                {#if deal.length}
                                    <li>
                                        <span><i class="fal fa-hourglass"></i></span>
                                        {$t('result.deal.length')}: {$t('result.deal.' + deal.length)}
                                    </li>
                                {/if}
                                {#if deal.members_formation}
                                    <li>
                                        <span><i class="fal fa-users"></i></span>
                                        {$t('result.deal.members')}: {deal.members_formation}
                                    </li>
                                {/if}
                                {#if deal.soundequip}
                                    <li>
                                        <span><i class="fal fa-volume"></i></span>
                                        {$t('result.deal.soundsystem')}
                                    </li>
                                {/if}
                                {#if deal.proposal}
                                    <li>
                                        <span><i class="fal fa-money-bill-1"></i></span>
                                        {$t('result.deal.price')}: <b>{deal.proposal} {deal.currency}</b> 
                                        {#if deal.negotiable}
                                        ({$t('result.deal.negotiable')})
                                        {/if}
                                    </li>
                                {/if}
                            </ul>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
    
    <style>
    .ai-search-result {
        border: 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .10);
        background-color: #ffffff;
        border-radius: 7px;
        margin-bottom: 22px;
    }
    .ai-search-result__top-area-images {
        position: relative;
    }
    .ai-search-result__date-area {
        position: absolute;
        bottom: 12px;
        left: 12px;
        height: auto;
        top: auto;
    }
    .ai-search-result__date-area--video-bar-top {
        right: 14px !important;
        left: auto !important;
        top: 19px !important;
        bottom: auto !important;
        z-index: 2;
    }
    .ai-search-result__date-area p {
        margin: 0;
        width: auto;
        display: inline-block;
        font-size: 14px;
        font-weight: 400;
        background: #353F47;
        padding: 5px 16px;
        border-radius: 4px;
        color: #ffffff;
        letter-spacing: 1px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
    }
    .ai-search-result__date-area p span.ai-search-result__book {
        font-weight: bold;
    }
    .ai-search-result__membership-area {
        position: absolute;
        top: 7px;
        left: 12px;
        height: auto;
    }
    .ai-search-result__membership-area span {
        background-position: 0 0;
        background-repeat: no-repeat;
        padding-left: 40px;
        padding-bottom: 44px;
    }
    .ai-search-result__membership-area span.rockstar {
        background-image: url(/mem-rockstar.png);
    }
    .ai-search-result__membership-area span.newcomer { 
      background-image: url("/mem-newcomer.png");
    }
    .ai-search-result__membership-area span.free { 
      background-image: url("/mem-free.png");
    }
    .ai-search-result__membership-area span.trial { 
      background-image: url("/mem-trial.png");
    }
    .ai-search-result__top-area-images--video-bar-top .ai-search-result__membership-area {
        width: 100%;
        top: 0 !important;
        left: 0 !important;
        min-height: 65px !important;
        border-radius: 6px 6px 0 0;
        background-color: black;
    }
    .ai-search-result__card-body {
        background-color: transparent !important;
        border: none !important;
        display: flex;
        flex-direction: column;
    }
    .ai-search-result__card-title {
        position: relative;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 15px;
    }
    .ai-search-result__card-title--shorted {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 54px;
    }
    p.ai-search-result__card-text {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
    }
    p.ai-search-result__card-text--shorted {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 36px;
    }
    .ai-search-result__city span {
        font-size: 14px;
    }
    .ai-search-result__ratting-area {
        display: flex;
        justify-content: space-between;
        min-height: 45px;
        flex-grow: 1;
    }
    .ai-search-result__ratting h2 {
        font-size: 16px;
        font-weight: bold;
        padding: 0px;
        margin: 0px 0px;
    }
    .ai-search-result__ratting p {
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        padding: 5px 0px;
    }
    .ai-search-result__price {
        padding-left: 47px;
        min-height: 37px;
    }
    .ai-search-result__price p {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        margin: 0px 0px;
    }
    .ai-search-result__price h2 {
        font-family: Lato;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        padding: 0px;
        margin: 0px 0px;
    }
    .ai-search-result__price h2 span {
        font-family: Lato;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
    }
    .ai-search-result__show-more {
        text-align: center;
        display: block;
        text-decoration: none;
        padding: 13px 20px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        border-radius: 4px;
        margin-top: 15px;
    }

    /* deal */
    .ai-search-result__deal {
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-top: 1rem;
        font-size: 14px;
    }
    .ai-search-result__deal ul {
        list-style-type: none;
        margin: 0;
        padding: 0 0.8rem 0.5rem;
    }
    .ai-search-result__deal h5 {
        font-size: 14px;
        margin: 0;
        margin-bottom: 0.5rem;
        font-weight: bold;
        background: #eee;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding: 0.5rem 0.8rem;
    }
    </style>