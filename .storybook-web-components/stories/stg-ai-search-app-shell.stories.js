// Check css, js imports and <stg-ai-search-app-shell /> usage in .storybook/preview-head.html
import { html } from 'lit-html';

const meta = {
    title: 'Web Components/stg-ai-search-app-shell',
    component: 'stg-ai-search-app-shell',
    argTypes: {
        baseUrl: { control: 'text' },
        language: { control: 'select', options: ['en', 'de', 'fr', 'it'] },
        loadBootstrap: { control: 'boolean' }
    }
};

export default meta;

export const AppShell = {
    args: { 
        baseUrl: 'http://localhost:8099',
        language: 'en',
        loadBootstrap: true
    },
    render: (args) => html`
        <stg-ai-search-app-shell base-url=${args.baseUrl} language=${args.language} load-bootstrap=${args.loadBootstrap}></stg-ai-search-app-shell>
    `
};