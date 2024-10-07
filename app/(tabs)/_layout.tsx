import { Tabs } from 'expo-router'
import { TabBarIcon } from '@components/ui/tab-bar-icon/tab-bar-icon'
import Header from '@components/header/header'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { height: 80, paddingTop: 4 },
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
				name='two'
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='code' color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
