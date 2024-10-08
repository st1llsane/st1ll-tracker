import { tva } from '@gluestack-ui/nativewind-utils/tva'

export const headingStyle = tva({
	base: 'text-typography-900 font-bold font-heading tracking-sm my-0',
	variants: {
		isTruncated: {
			true: 'truncate',
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
		sub: {
			true: 'text-xs',
		},
		italic: {
			true: 'italic',
		},
		highlight: {
			true: 'bg-yellow-500',
		},
		size: {
			'5xl': 'text-6xl',
			'4xl': 'text-5xl',
			'3xl': 'text-4xl',
			'2xl': 'text-3xl',
			xl: 'text-2xl',
			lg: 'text-xl',
			md: 'text-lg',
			sm: 'text-base',
			xs: 'text-sm',
		},
	},
})
