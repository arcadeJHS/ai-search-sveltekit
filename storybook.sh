#!/bin/bash
npm run storybook:svelte & npm run storybook:webcomponents & wait-on http://localhost:6006 http://localhost:6007 && npm run storybook:composition