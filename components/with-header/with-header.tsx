import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@components/header/header'
import { ReactElement } from 'react'

interface WithHeaderProps {
	children: ReactElement
}

const WithHeader = ({ children }: WithHeaderProps) => {
	return (
		<SafeAreaView>
			<Header />
			{children}
		</SafeAreaView>
	)
}

export default WithHeader
