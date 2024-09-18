export type AllowedLanguages = 'it'|'de'|'fr'|'en';

export const isAllowedLanguage = (value: AllowedLanguages | string): value is AllowedLanguages => {
    return ['it', 'de', 'fr', 'en'].includes(value);
};