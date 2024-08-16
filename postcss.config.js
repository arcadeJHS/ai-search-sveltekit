export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-prefix-selector': {
            prefix: '.ai-search-container',
			exclude: ['.ai-search-container', '.ai-search-container *', '.ai-chat', '.ai-chat-messages', '.ai-chat-user-input-form', '.ai-chat-user-input-form-input', '.ai-chat-user-input-form-button'],
            transform(prefix, selector, prefixedSelector) {
                if (selector.startsWith('html') || selector.startsWith('body')) {
                    return selector.replace(/^html|^body/, prefix);
                }
				if (selector === ':root') {
					return selector.replace(/^:root/, prefix);
                }
                return prefixedSelector;
            },
        },
	}
};
