import { register, init, t } from 'svelte-i18n';
import en from '../src/lib/i18n/en.json';

register('en', () => Promise.resolve(en));

export { t };

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
});