//Nguyễn Ngô Thế Cường : 21521905
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,FlatList,Image, TouchableOpacity } from 'react-native';
import HomeScreen from './Home';
import GetData from './GetData';
import { useCart } from './CartProvider';
const Electronics= ( { navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetData(); 
        setProducts(data);
      } catch (error) {
        console.error('Error updating products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  //Nguyễn Ngô Thế Cường : 21521905
  const filteredElectronic= products.filter(item => item.category==='electronics');
  return (
    <View style={styles.container}>
      <View style={styles.halfScreen}>
        <FlatList
          data={filteredElectronic}
          style={styles.productList}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productItem}
           
            onPress = { () =>navigation.navigate('HomeDetails',{note: item})}
            >
              <View style={styles.productItem}>
                <Image style={styles.productImage} source={{ uri: item.image }} />
                <Text numberOfLines={2}>{item.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', }}>${item.price}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 15 }}>{item.rating.rate}</Text>
                      <Image style={styles.starImage} source={require('../assets/star.png')} />
                      <Text style={{ fontSize: 15 }}> ({item.rating.count})</Text>

                    </View>
                  </View>
                  <TouchableOpacity style={styles.button}
                  onPress={() => handleAddToCart(item)}>
                    <Text style={styles.textButton}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
  halfScreen: {
    flex: 4,
    width: '100%',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: 'red',
  },
  productList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productItem: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  hotDeals: {
    flexDirection: 'row'
  },
   //Nguyễn Ngô Thế Cường : 21521905
  imageHotDeals: {
    width: 25,
    height: 25,
    marginTop: 11,
    marginLeft: 7,
  },
  textHeader: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 26,
    fontWeight: 'bold',
  },
  slide: {
    alignItems: 'center',
  },
  imageBanner: {
    width: '94%',
    height: '100%',
    resizeMode: 'cover',
  },
  starImage: {
    width: 15,
    height: 15,
    marginTop: 2,
    marginLeft: 3,
  },
  button: {
    borderRadius: 25,
    height: 29,
    width: 29,
    backgroundColor: '#004080',
    marginTop: 10,
    marginLeft: 58,
  },
  textButton: {

    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -7,
  },
 
});

export default Electronics;
