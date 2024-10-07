import Header from '@components/header/header'
import { Box } from '@components/ui/box/box'
import { Center } from '@components/ui/center'
import { Text } from '@components/ui/text'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabOneScreen() {
	return (
		<SafeAreaView>
			<Box>
				<Header />
				<Center className='w-full h-full'>
					<Text>Tab One</Text>
				</Center>
			</Box>
		</SafeAreaView>
	)
}
