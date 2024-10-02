// Check css, js imports and <stg-ai-search-app-shell /> usage in .storybook/preview-head.html
import { html } from 'lit-html';

export default {
    title: 'Components/stg-ai-search-app-shell',
    component: 'stg-ai-search-app-shell',
};

export const AppShell = {
    args: { 
        baseUrl: 'http://localhost:8099',
        language: "de"
    },
    render: (args) => html`
        <stg-ai-search-app-shell
            base-url=${args.baseUrl}
            language=${args.language}
        >
        </stg-ai-search-app-shel>
    `
};