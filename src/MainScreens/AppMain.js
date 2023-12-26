//Nguyễn Ngô Thế Cường : 21521905
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from '../AccuracySreens/LoginScreens';
import Main from './Main';
import HomeDetails from './HomeDetails';
const Stack = createNativeStackNavigator();
import { CartProvider } from './CartProvider';
import { UserProvider } from '../AccuracySreens/Context';
import { AuthProvider } from '../AccuracySreens/AuthContext';
import EditProfileScreen from './EditProfile';

export default function AppMain() {


  return (
    <CartProvider>
      <AuthProvider>
        <NavigationContainer>
          <UserProvider>
            <Stack.Navigator>
             
                  <Stack.Screen name="LoginComponent" component={LoginComponent} options={{ headerShown: false }} />
              
                  <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
            
                  <Stack.Screen name="HomeDetails" component={HomeDetails} options={{ headerShown: true }} />
              
                 <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true }} /> 
               

            </Stack.Navigator>
          </UserProvider>
        </NavigationContainer>
      </AuthProvider>
    </CartProvider >

  );
}


