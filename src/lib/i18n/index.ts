/**
 * https://centus.com/blog/svelte-localization#:~:text=svelte%2Di18n%20will%20automatically%20choose,value%20and%20the%20current%20locale.
 */
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';

// Using this strategy embed locales in th efinal bundle
import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import it from './it.json';
register('en', () => Promise.resolve(en));
register('de', () => Promise.resolve(de));
register('fr', () => Promise.resolve(fr));
register('it', () => Promise.resolve(it));

// Using this strategy, locales are built as separated files, and loaded on demand
// register('en', () => import('./en.json'));
// register('de', () => import('./de.json'));
// register('fr', () => import('./fr.json'));
// register('it', () => import('./it.json'));

export const initLocale = (language: AllowedLanguages) => {
  init({
    fallbackLocale: 'en',
    initialLocale: language || getLocaleFromNavigator()
  });
};