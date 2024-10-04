import { html } from 'lit-html';
import { AppShell } from './stg-ai-search-app-shell.stories';

export default {
    title: 'Web Components/stg-ai-search-floating-user-input',
    component: 'stg-ai-search-floating-user-input',
    tags: ['autodocs'],
    argTypes: {
        appShell_baseUrl: { control: 'text' },
        appShell_language: { control: 'select', options: ['en', 'de', 'fr', 'it'] }
    }
};

// The app shell is required to init the application
const AppShellRender = AppShell.render;

export const AppShellControls = {
    args: {
        appShell_baseUrl: 'http://localhost:8099',
        appShell_language: 'fr'
    },
    render: (args) => html`
        ${AppShellRender({ 
            ...AppShell.args, 
            baseUrl: args.appShell_baseUrl, 
            language: args.appShell_language 
        })}

        <stg-ai-search-floating-user-input></stg-ai-search-floating-user-input>
    `
};
