import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import Electronics from './Electronics';
import Men from './Men';
import Jewelery from './Jewelery';
//Nguyễn Ngô Thế Cường : 21521905
const Tab = createMaterialTopTabNavigator();

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
  
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00BFFF" />
        </View>
        //Nguyễn Ngô Thế Cường : 21521905
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'All') {
                iconName = focused
                  ? require('../assets/application.png')
                  : require('../assets/application.png');
              } else if (route.name === 'Electronics') {
                iconName = focused
                  ? require('../assets/electronics.png')
                  : require('../assets/electronics.png');
              } else if (route.name === 'Jewelery') {
                iconName = focused
                  ? require('../assets/earrings.png')
                  : require('../assets/earrings.png');
              } else if (route.name === 'Men') {
                iconName = focused
                  ? require('../assets/man.png')
                  : require('../assets/man.png');
              }
              return <Image source={iconName} style={{ width: 20, height: 20 }} />;
            },
          })}
        >
          <Tab.Screen
            name="All"
            component={All}
            options={{
              tabBarLabel: 'All',
              tabBarLabelStyle: { fontSize: 10 },
            }}
          />
          {/* //Nguyễn Ngô Thế Cường : 21521905 */}
          <Tab.Screen
            name="Electronics"
            component={Electronics}
            options={{
              tabBarLabel: 'Electronics',
              tabBarLabelStyle: { fontSize: 10 },
            }}
          />
          <Tab.Screen
            name="Jewelery"
            component={Jewelery}
            options={{
              tabBarLabel: 'Jewelery',
              tabBarLabelStyle: { fontSize: 10 },
            }}
          />
          <Tab.Screen
            name="Men"
            component={Men}
            options={{
              tabBarLabel: 'Men',
              tabBarLabelStyle: { fontSize: 10 },
            }}
          />
        </Tab.Navigator>
      )}
    </View>
  );
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Categories;
