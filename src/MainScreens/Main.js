//Nguyễn Ngô Thế Cường : 21521905
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image,Text } from 'react-native';
import Home from './Home';
import Categories from './Categories';
import Cart from './Cart';
import Profile from './Profile';
import { useCart } from './CartProvider';

const MainScreens = () => {
  const { cart } = useCart();
  return (

    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? require('../assets/home.png')
              : require('../assets/home.png');
          }
          else if (route.name === 'Categories') {
            iconName = focused
            ? require('../assets/categories.png')
            : require('../assets/categories.png');
          }
          else if (route.name === 'Cart') {
            iconName = focused
            ? require('../assets/grocery-store.png')
              : require('../assets/grocery-store.png');
              return (
                <>
                {cart.length > 0 && (
                    <Text style={{position: 'absolute',
                    top: 0,
                    right: 25,
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: 25,
                    paddingHorizontal: 4,
                    fontSize: 10, }}>
                      {cart.length}
                    </Text>
                  )}
                  <Image
                    source={iconName}
                    style={{ width: 27, height: 27, tintColor: focused ? '#00BFFF' : 'black' }}
                  />
                  
                </>
              );
          }
          else if (route.name === 'Profile') {
            iconName = focused
            ? require('../assets/user.png')
              : require('../assets/user.png');
          }
          return <Image source={iconName} style={{ width: 27, height: 27, tintColor: focused ? '#00BFFF' : 'black' }} />;
         
        },
      })}
 //Nguyễn Ngô Thế Cường : 21521905   
    >
       
     <Tab.Screen name="Home" component={Home} options={{ headerShown: true }}/>
      <Tab.Screen name="Categories" component={Categories} options={{ headerShown: true }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: true }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default MainScreens;
