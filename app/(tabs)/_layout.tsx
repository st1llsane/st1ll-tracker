import { Tabs } from 'expo-router'
import { TabBarIcon } from '@components/ui/tab-bar-icon/tab-bar-icon'

export default function TabLayout() {
	const date = new Date()
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const currentDate = `${day}-${month}-${year}`

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { height: 82, paddingTop: 6 },
				tabBarLabelStyle: { fontSize: 12 },
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					headerShown: false,
					tabBarLabel: 'Tracker',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='clock-o' color={color} />
					),
					// headerRight: () => (
					// 	<Link href='/modal' asChild>
					// 		<Pressable>
					// 			{({ pressed }) => (
					// 				<FontAwesome
					// 					name='info-circle'
					// 					size={25}
					// 					style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
					// 				/>
					// 			)}
					// 		</Pressable>
					// 	</Link>
					// ),
				}}
			/>
			<Tabs.Screen
				name='calendar-screen'
				options={{
					title: 'Calendar',
					headerTitle: currentDate,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='code' color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
