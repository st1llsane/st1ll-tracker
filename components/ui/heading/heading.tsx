import React, { forwardRef, memo } from 'react'
import { H1 } from '@expo/html-elements'
import { cssInterop } from 'nativewind'
import { headingStyle } from './styles'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'

type IHeadingProps = VariantProps<typeof headingStyle> &
	React.ComponentPropsWithoutRef<typeof H1> & {
		as?: React.ElementType
	}

cssInterop(H1, { className: 'style' })

const Heading = forwardRef<React.ElementRef<typeof H1>, IHeadingProps>(
	({ className, size = 'lg', as: AsComp, ...props }, ref) => {
		const {
			isTruncated,
			bold,
			underline,
			strikeThrough,
			sub,
			italic,
			highlight,
		} = props

		const Component = AsComp || H1

		return (
			<Component
				className={headingStyle({
					size,
					isTruncated,
					bold,
					underline,
					strikeThrough,
					sub,
					italic,
					highlight,
					class: className,
				})}
				{...props}
				ref={ref}
			/>
		)
	}
)

Heading.displayName = 'Heading'

export { Heading }
