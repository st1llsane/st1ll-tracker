import { Box } from '@components/ui/box/box'
import { Center } from '@components/ui/center/center'
import { Heading } from '@components/ui/heading/heading'
import { Text } from '@components/ui/text/text'

type Props = {}

const Header = (props: Props) => {
	return (
		<Box className='bg-black h-10'>
			<Center>
				<Heading className='text-white'>3/4</Heading>
			</Center>
		</Box>
	)
}

export default Header
