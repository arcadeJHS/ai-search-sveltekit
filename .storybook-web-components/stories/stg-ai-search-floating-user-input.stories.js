import { html } from 'lit-html';
import { AppShell } from './stg-ai-search-app-shell.stories';

export default {
    title: 'Web Components/stg-ai-search-floating-user-input',
    component: 'stg-ai-search-floating-user-input',
};

const AppShellRender = AppShell.render;

export const AppShellControls = {
    args: {
        baseUrl: "http://localhost:8099",
        language: "fr"
    },
    render: (args) => html`
        ${AppShellRender({ ...AppShell.args, ...args })}

        <stg-ai-search-floating-user-input></stg-ai-search-floating-user-input>
    `
};
