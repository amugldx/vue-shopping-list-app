module.exports = {
	purge: {
		content: ['./public/**/*.html', './src/**/*.vue'],
		options: {
			whitelistPatterns: [
				/-(leave|enter|appear)(|-(to|from|active))$/,
				/^(?!(|.*?:)cursor-move).+-move$/,
				/^router-link(|-exact)-active$/,
			],
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				clrWhite: '#F5F3E0',
				clrBlack: '#0E1116',
				clrRed: {
					DEFAULT: '#E58E76',
					light: '#E79C88',
				},
				clrPurple: {
					DEFAULT: '#9DA0BE',
					light: '#A9ACC6',
				},
				clrGreen: {
					DEFAULT: '#81B29A',
					light: '#8DB9A4',
				},
				clrYellow: {
					DEFAULT: '#F2CC8F',
					light: '#F4D5A4',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
