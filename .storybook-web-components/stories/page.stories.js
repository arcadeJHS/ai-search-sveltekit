import { html } from 'lit-html';
import { http, HttpResponse, delay } from 'msw';
import { apiStartMock, apiSearchMessageMock } from '../mocks';

const baseUrl = 'http://localhost:8099';

const pageHtml = html`
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components DEMO - mjs</title>

    <style>
        .site-ai-search {
            display: grid;
            /* grid-template-columns: 2fr 5fr; */
            gap: 0.2rem;
            height: 100%;
            width: 100%;

            @media (min-width: 768px) {
                grid-template-columns: 2fr 5fr; 
            }
        }
        .site-ai-search * {
            box-sizing: border-box;
        }
        .site-ai-search__column {
            display: flex;
            flex-direction: column;
            overflow-y: hidden;
        }
        .site-ai-search__results {
            padding-bottom: 14rem;
        }
        .site-ai-search__queries {
            max-height: 45vh;
            display: none;

            @media (min-width: 768px) {
                display: block; 
            }
        }
        .site-ai-search__queries-search-button {
            margin: 0.8rem 0;
        }
    </style>
</head>
<body>
    <main>
        <stg-ai-search-app-shell
            base-url="${baseUrl}"
            language="it">
        </stg-ai-search-app-shell>

        <stg-ai-search-floating-user-input></stg-ai-search-floating-user-input>
        <!-- <stg-ai-search-floating-user-input-variant></stg-ai-search-floating-user-input-variant> -->
    
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <stg-ai-search-error-notification></stg-ai-search-error-notification>
    
                    <div class="site-ai-search">
                        <div class="site-ai-search__column site-ai-search__column--left">
                            <div class="site-ai-search__queries">
                                <div class="site-ai-search__queries-search-button">
                                    <stg-ai-search-new-search-button></stg-ai-search-new-search-button>
                                </div>
                                <stg-ai-search-queries></stg-ai-search-queries>
                            </div>
                        </div>
                        
                        <div class="site-ai-search__column site-ai-search__results">
                            <stg-ai-search-results></stg-ai-search-results>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </main>
</body>
`;

export default {
    title: 'Pages/index.html',
    component: 'index',
    tags: ['autodocs']
};

export const Default = {
    parameters: {
        // HTTP requests mocking with MSW
        msw: {
            handlers: [
                http.get(`${baseUrl}/search/start`, () => {
                    return HttpResponse.json(apiStartMock);
                }),
                http.post(`http://localhost:8099/search/message/*`, () => {
                    return HttpResponse.json(apiSearchMessageMock);
                }),
            ],
        },
    },
    render: () => pageHtml
};

export const StartError = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${baseUrl}/search/start`, async () => {
                    await delay(200);
                    return new HttpResponse(null, {
                        status: 403,
                    });
                }),
            ],
        },
    },
    render: () => pageHtml
};

export const SearchMessageError = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${baseUrl}/search/start`, () => {
                    return HttpResponse.json(apiStartMock);
                }),
                http.get(`http://localhost:8099/search/message/*`, async () => {
                    await delay(200);
                    return new HttpResponse(null, {
                        status: 403,
                    });
                }),
            ],
        },
    },
    render: () => pageHtml
};