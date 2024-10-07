import { Box } from '@components/ui/box/box'
import { Center } from '@components/ui/center'
import { Text } from '@components/ui/text'

type Props = {}

const Header = (props: Props) => {
	return (
		<Box className='bg-black h-10'>
			<Center>
				<Text className='text-white'>header</Text>
			</Center>
		</Box>
	)
}

export default Header
