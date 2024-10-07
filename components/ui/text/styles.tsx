import { tva } from '@gluestack-ui/nativewind-utils/tva'

export const textStyle = tva({
	base: 'text-typography-700 font-body',

	variants: {
		isTruncated: {
			true: 'web:truncate',
		},
		bold: {
			true: 'font-bold',
		},
		underline: {
			true: 'underline',
		},
		strikeThrough: {
			true: 'line-through',
		},
		size: {
			'2xs': 'text-2xs',
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			'5xl': 'text-5xl',
			'6xl': 'text-6xl',
		},
		sub: {
			true: 'text-xs',
		},
		italic: {
			true: 'italic',
		},
		highlight: {
			true: 'bg-yellow-500',
		},
	},
})
