import { FilterType } from '$lib/types/Filter.ts';
import { ShowTypeEnum, ArtistTypeEnum, ArtistSubTypeEnum, ArtistGenreEnum, type SuggestionPool, type Suggestions } from '$lib/types/Filter.ts';

export const suggestionUsefulFilters: Set<keyof SuggestionPool> = new Set([
    FilterType.SHOW_TYPE,
    FilterType.ARTIST_TYPE,
    FilterType.ARTIST_SUB_TYPE,
    FilterType.ARTIST_GENRE,
    FilterType.LOCATION,
    FilterType.WHEN
]);

export const suggestionsPool: SuggestionPool = {
    [FilterType.SHOW_TYPE]: Object.values(ShowTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_TYPE]: Object.values(ArtistTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_SUB_TYPE]: Object.values(ArtistSubTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_GENRE]: Object.values(ArtistGenreEnum).filter(Number.isInteger) as number[],
    [FilterType.LOCATION]: ['zurich', 'geneva', 'basel', 'lausanne', 'bern', 'lucerne', 'lugano'],
    [FilterType.WHEN]: ['suggestion']
};

// Returns "maxNumberOfSuggestions" random ids, for the "filterType", from the  suggestionsPool
export const getRandomIds = (filterType: keyof SuggestionPool, maxNumberOfSuggestions: number = 10): (number | string)[] => {
    const array: (number | string)[] = suggestionsPool[filterType];
    const randomIds: Set<number | string> = new Set();

    if (array.length <= maxNumberOfSuggestions) {
        return array;
    }

    // Those keys correspond to "other", so they are not meaningful
    const excludedNumbers = [999, 64, 23];

    while (randomIds.size < maxNumberOfSuggestions) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomValue = array[randomIndex];

        if (excludedNumbers.includes(randomValue as number)) {
            maxNumberOfSuggestions++;
            continue;
        }

        randomIds.add(randomValue);
    }

    return Array.from(randomIds);
};

export const generateRandomSentence = (): Suggestions => {
    return {
        [FilterType.SHOW_TYPE]: getRandomIds(FilterType.SHOW_TYPE, 1),
        [FilterType.ARTIST_TYPE]: getRandomIds(FilterType.ARTIST_TYPE, 1),
        [FilterType.ARTIST_SUB_TYPE]: getRandomIds(FilterType.ARTIST_SUB_TYPE, 1),
        [FilterType.ARTIST_GENRE]: getRandomIds(FilterType.ARTIST_GENRE, 1),
        [FilterType.LOCATION]: getRandomIds(FilterType.LOCATION, 1)
    };
};