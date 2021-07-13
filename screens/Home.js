import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	Image,
} from "react-native";
import { Colors, FONTS, SIZES, categoryData, images } from "../constants";
import { Ionicons, MaterialIcons as Micon } from "@expo/vector-icons";

const Home = ({ navigation }) => {
	const renderHeader = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					height: 50,
					marginTop: SIZES.padding * 2,
				}}
			>
				<TouchableOpacity
					style={{
						width: 50,
						paddingLeft: SIZES.padding * 2,
						justifyContent: "center",
					}}
				>
					<Micon name="place" size={25} />
				</TouchableOpacity>

				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<View
						style={{
							width: "70%",
							height: "100%",
							backgroundColor: Colors.lightGray3,
							alignItems: "center",
							justifyContent: "center",
							borderRadius: SIZES.radius,
						}}
					>
						<Text style={{ ...FONTS.h3 }}>{"Location"}</Text>
					</View>
				</View>

				<TouchableOpacity
					style={{
						width: 50,
						paddingRight: SIZES.padding * 2,
						justifyContent: "center",
					}}
				>
					<Ionicons name="basket" size={25} />
				</TouchableOpacity>
			</View>
		);
	};
	// location
	const initialCurrentLocation = {
		streetName: "Kuching",
		gps: {
			latitude: 1.5496614931250685,
			longitude: 110.36381866919922,
		},
	};

	// restaurant data
	const affordable = 1;
	const fairPrice = 2;
	const expensive = 3;

	const restaurantData = [
		{
			id: 1,
			name: "Special Burger",
			rating: 4.8,
			categories: [5, 7],
			priceRating: affordable,
			photo: images.brown_burger,
			duration: "30 - 45 min",
			location: {
				latitude: 1.5347282806345879,
				longitude: 110.35632207358996,
			},
			courier: {
				avatar: images.avatar1,
				name: "Amy",
			},
			menu: [
				{
					menuId: 1,
					name: "Crispy Chicken Burger",
					photo: images.btl_burger,
					description:
						"Burger with crispy chicken, cheese and lettuce",
					calories: 200,
					price: 10,
				},
				{
					menuId: 2,
					name: "Cheesy Chicken Burger with Honey Mustard",
					photo: images.cheesy_burger,
					description:
						"Cheesy Chicken Burger with Honey Mustard Coleslaw",
					calories: 250,
					price: 15,
				},
				{
					menuId: 3,
					name: "Crispy Baked French Fries",
					photo: images.fired_meat,
					description: "Crispy Baked French Fries",
					calories: 194,
					price: 8,
				},
			],
		},
		{
			id: 2,
			name: "Hot Pizza",
			rating: 4.8,
			categories: [2, 4, 6],
			priceRating: expensive,
			photo: images.brown_pizza,
			duration: "15 - 20 min",
			location: {
				latitude: 1.556306570595712,
				longitude: 110.35504616746915,
			},
			courier: {
				avatar: images.avatar_2,
				name: "Jackson",
			},
			menu: [
				{
					menuId: 4,
					name: "Hawaiian Pizza",
					photo: images.sliced_pizza,
					description:
						"Canadian bacon, homemade pizza crust, pizza sauce",
					calories: 250,
					price: 15,
				},
				{
					menuId: 5,
					name: "Tomato Souce",
					photo: images.tomato_souce,
					description:
						"Fresh tomatoes, aromatic basil pesto and melted bocconcini",
					calories: 250,
					price: 20,
				},
				{
					menuId: 6,
					name: "Tomato Pasta",
					photo: images.yammy_pasta,
					description: "Pasta with fresh tomatoes",
					calories: 100,
					price: 10,
				},
				{
					menuId: 7,
					name: "Mediterranean Chopped Salad ",
					photo: images.salad,
					description: "Finely chopped lettuce, tomatoes, cucumbers",
					calories: 100,
					price: 10,
				},
			],
		},
		{
			id: 3,
			name: "Special Hotdogs",
			rating: 4.8,
			categories: [3],
			priceRating: expensive,
			photo: images.hot_dog,
			duration: "20 - 25 min",
			location: {
				latitude: 1.5238753474714375,
				longitude: 110.34261833833622,
			},
			courier: {
				avatar: images.avatar_3,
				name: "James",
			},
			menu: [
				{
					menuId: 8,
					name: "Chicago Style Hot Dog",
					photo: images.hot_dog2,
					description: "Fresh tomatoes, all beef hot dogs",
					calories: 100,
					price: 20,
				},
			],
		},
		{
			id: 4,
			name: "Special Sushi",
			rating: 4.8,
			categories: [7],
			priceRating: expensive,
			photo: images.sushi,
			duration: "10 - 15 min",
			location: {
				latitude: 1.5578068150528928,
				longitude: 110.35482523764315,
			},
			courier: {
				avatar: images.avatar_4,
				name: "Ahmad",
			},
			menu: [
				{
					menuId: 9,
					name: "Sushi sets",
					photo: images.sushi,
					description:
						"Fresh salmon, sushi rice, fresh juicy avocado",
					calories: 100,
					price: 50,
				},
			],
		},
		{
			id: 5,
			name: "Cuisine",
			rating: 4.8,
			categories: [1, 2],
			priceRating: affordable,
			photo: images.shirimp_noodles,
			duration: "15 - 20 min",
			location: {
				latitude: 1.558050496260768,
				longitude: 110.34743759630511,
			},
			courier: {
				avatar: images.avatar_4,
				name: "Muthu",
			},
			menu: [
				{
					menuId: 10,
					name: "Kolo Mee",
					photo: images.various_food,
					description: "Noodles with char siu",
					calories: 200,
					price: 5,
				},
				{
					menuId: 11,
					name: "Sarawak Laksa",
					photo: images.spaghetti,
					description: "Vermicelli noodles, cooked prawns",
					calories: 300,
					price: 8,
				},
				{
					menuId: 12,
					name: "Nasi Lemak",
					photo: images.simple_meat,
					description: "A traditional Malay rice dish",
					calories: 300,
					price: 8,
				},
				{
					menuId: 13,
					name: "Nasi Briyani with Mutton",
					photo: images.mandi_biriyani,
					description: "A traditional Indian rice dish with mutton",
					calories: 300,
					price: 8,
				},
			],
		},
		{
			id: 6,
			name: "Special Dessets",
			rating: 4.9,
			categories: [3, 5],
			priceRating: affordable,
			photo: images.white_brown_rice,
			duration: "35 - 40 min",
			location: {
				latitude: 1.5573478487252896,
				longitude: 110.35568783282145,
			},
			courier: {
				avatar: images.avatar_1,
				name: "Jessie",
			},
			menu: [
				{
					menuId: 12,
					name: "Teh C Peng",
					photo: images.platter_food,
					description: "Three Layer Teh C Peng",
					calories: 100,
					price: 2,
				},
				{
					menuId: 13,
					name: "ABC Ice Kacang",
					photo: images.macoroni,
					description: "Shaved Ice with red beans",
					calories: 100,
					price: 3,
				},
				{
					menuId: 14,
					name: "Kek Lapis",
					photo: images.grilled_meat,
					description: "Layer cakes",
					calories: 300,
					price: 20,
				},
			],
		},
	];

	const [categories, setCategories] = useState(categoryData);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [restaurants, setRestaurants] = useState(restaurantData);
	const [currentLocation, setCurrentLocation] = useState(
		initialCurrentLocation
	);

	const onselectCategory = (category) => {
		let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
	};
	
	const renderCategoriesItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					padding: SIZES.padding,
					paddingBottom: SIZES.padding * 2,
					backgroundColor:
						selectedCategory?.id === item.id
							? Colors.primary
							: Colors.white,
					borderRadius: SIZES.radius,
					alignItems: "center",
					justifyContent: "center",
					marginRight: SIZES.padding,
					...styles.shadow,
				}}
				onPress={() => onselectCategory(item)}
			>
				<View>
					<Image
						source={item.icon}
						style={{
							width: 50,
							height: 50,
							borderRadius: 25,
						}}
					/>
				</View>
				<Text
					style={{
						marginTop: SIZES.padding,
						color:
							selectedCategory?.id === item.id
								? Colors.white
								: Colors.black,
						...FONTS.body5,
					}}
				>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	};
	const renderMainCategories = () => {
		return (
			<View style={{ padding: SIZES.padding * 2 }}>
				<Text style={{ ...FONTS.h1 }}>Main</Text>
				<Text style={{ ...FONTS.h1 }}>Categories</Text>
				<FlatList
					data={categories}
					keyExtractor={(item) => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={renderCategoriesItem}
					contentContainerStyle={{
						paddingVertical: SIZES.padding * 2,
						paddingBottom: 30,
					}}
				/>
			</View>
		);
	};

	function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }
	function renderRestaurantList() {
		
        const renderItem = ({ item }) => {
			console.log(item.categories)
			return (
				<TouchableOpacity
					style={{ marginBottom: SIZES.padding * 2 }}
					onPress={() => navigation.navigate("Restaurant", {
						item,
						currentLocation
					})}
				>
					{/* Image */}
					<View
						style={{
							marginBottom: SIZES.padding
						}}
					>
						<Image
							source={item.photo}
							resizeMode="cover"
							style={{
								width: "100%",
								height: 200,
								borderRadius: SIZES.radius
							}}
						/>
	
						<View
							style={{
								position: 'absolute',
								bottom: 0,
								height: 50,
								width: SIZES.width * 0.3,
								backgroundColor: Colors.white,
								borderTopRightRadius: SIZES.radius,
								borderBottomLeftRadius: SIZES.radius,
								alignItems: 'center',
								justifyContent: 'center',
								...styles.shadow
							}}
						>
							<Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
						</View>
					</View>
	
					{/* Restaurant Info */}
					<Text style={{ ...FONTS.body2 }}>{item.name}</Text>
	
					<View
						style={{
							marginTop: SIZES.padding,
							flexDirection: 'row'
						}}
					>
						{/* Rating */}
						<Ionicons
							name="star"
						   size={25}
						   color={Colors.primary}
						/>
						<Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
	
						{/* Categories */}
						<View
							style={{
								flexDirection: 'row',
								marginLeft: 10
							}}
						>
						   {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: Colors.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }
	
							{/* Price */}
							{
								[1, 2, 3].map((priceRating) => (
									<Text
										key={priceRating}
										style={{
											...FONTS.body3,
											color: (priceRating <= item.priceRating) ? Colors.black : Colors.darkgray
										}}
									>$</Text>
								))
							}
						</View>
					</View>
				</TouchableOpacity>
			)
		}

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }
	return (
		<SafeAreaView style={styles.container}>
			{renderHeader()}
			{renderMainCategories()}
			{renderRestaurantList()}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGray4,
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 1,
	},
});
