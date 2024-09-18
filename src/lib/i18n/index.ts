import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));
register('fr', () => import('./fr.json'));
register('it', () => import('./it.json'));

export const initLocale = (language: AllowedLanguages) => {
  init({
    fallbackLocale: 'en',
    initialLocale: language || getLocaleFromNavigator()
  });
};