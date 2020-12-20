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
				clrWhite: '#fffdef',
				clrBlack: '#0E1116',
				clrRed: {
					DEFAULT: '#EF6157',
					light: '#F3847C',
				},
				clrPurple: {
					DEFAULT: '#9DA0BE',
					light: '#CED0DE',
				},
				clrGreen: {
					DEFAULT: '#81B29A',
					light: '#A6C9B8',
				},
				clrYellow: {
					DEFAULT: '#F4D7A4',
					light: '#F8E7C9',
				},
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ['hover'],
		},
	},
	plugins: [],
};
