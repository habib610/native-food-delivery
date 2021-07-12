import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import { Ionicons, MaterialIcons as Micon } from "@expo/vector-icons";
import { Colors } from "../constants";
import Svg, { Circle, Rect, Path } from "react-native-svg";
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
	var isSelected = accessibilityState.selected;

	if (isSelected) {
		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				<View
					style={{
						flexDirection: "row",
						position: "absolute",
						top: 0,
					}}
				>
					<View
						style={{ flex: 1, backgroundColor: Colors.white }}
					></View>
					<Svg width={70} height={61} viewBox="0 0 75 61">
						<Path
							d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
							fill={Colors.white}
						/>
					</Svg>
					<View
						style={{ flex: 1, backgroundColor: Colors.white }}
					></View>
				</View>

				<TouchableOpacity
					style={{
						top: -22.5,
						justifyContent: "center",
						alignItems: "center",
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: Colors.white,
					}}
					onPress={onPress}
				>
					{children}
				</TouchableOpacity>
			</View>
		);
	} else {
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					height: 60,
					backgroundColor: Colors.white,
				}}
				activeOpacity={1}
				onPress={onPress}
			>
				{children}
			</TouchableOpacity>
		);
	}
};
const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					backgroundColor: "transparent",
					borderTopWidth: 0,
					elevation: 0,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				options={{
					tabBarIcon: ({ focused }) => (
						<Micon
							color={focused ? Colors.primary : Colors.secondary}
							name="restaurant"
							size={25}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
				component={Home}
			/>
			<Tab.Screen
				name="Search"
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							color={focused ? Colors.primary : Colors.secondary}
							name="search"
							size={25}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
				component={Home}
			/>
			<Tab.Screen
				name="Like"
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							color={focused ? Colors.primary : Colors.secondary}
							name="heart"
							size={25}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
				component={Home}
			/>
			<Tab.Screen
				name="User"
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							color={focused ? Colors.primary : Colors.secondary}
							name="person"
							size={25}
						/>
					),
					tabBarButton: (props) => <TabBarCustomButton {...props} />,
				}}
				component={Home}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;

const styles = StyleSheet.create({});
