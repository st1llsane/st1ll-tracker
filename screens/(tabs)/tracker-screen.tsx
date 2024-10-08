import TimerHeader from '@components/timer-header/timer-header'
import { Box } from '@components/ui/box/box'
import { Center } from '@components/ui/center/center'
import { Text } from '@components/ui/text/text'
import { VStack } from '@components/ui/vstack/vstack'
import WithHeader from '@components/with-header/with-header'

const TrackerScreen = () => {
	return (
		<WithHeader>
			<Box>
				<VStack>
					<TimerHeader />
				</VStack>
			</Box>
		</WithHeader>
	)
}

export default TrackerScreen
