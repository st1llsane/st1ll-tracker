import { FontAwesome } from '@expo/vector-icons'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon = (props: {
	name: React.ComponentProps<typeof FontAwesome>['name']
	color: string
}) => {
	return <FontAwesome size={26} className='mb-1.5' {...props} />
}

export { TabBarIcon }
