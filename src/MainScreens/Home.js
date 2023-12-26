import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
 //Nguyễn Ngô Thế Cường : 21521905
import GetData from './GetData';
import { useCart } from './CartProvider';
import Carousel from "react-native-snap-carousel";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const [carouselData, setCarouselData] = useState([
    require('../assets/electronic.jpg'),
    require('../assets/women.jpg'),
    require('../assets/men.jpg'),
    require('../assets/jewelery.jpg'),
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetData();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error updating products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
 //Nguyễn Ngô Thế Cường : 21521905
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.image} />
    </View>
  );

  const filteredProducts1 = products.filter(item => item.id >= 1 && item.id <= 10);
  const filteredProducts2 = products.filter(item => item.id >= 11 && item.id <= 20);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00BFFF" />
        </View>
      ) : (
        <>
          <View style={{ flex: 0.1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
            <Carousel
              data={carouselData}
              renderItem={renderCarouselItem}
              sliderWidth={500}
              itemWidth={520}
              autoplay
              autoplayInterval={1000}
              loop
            />
          </View>
          <View style={styles.halfScreen}>
            <View style={styles.hotDeals}>
              <Text style={styles.text}>Hot Deals</Text>
              <Image style={styles.imageHotDeals} source={require('../assets/hot-sale.png')} />
            </View>
            {/* //Nguyễn Ngô Thế Cường : 21521905 */}
            <View>
              <FlatList
                data={filteredProducts1}
                style={styles.productList}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.productItem}
                    onPress={() => navigation.navigate('HomeDetails', { note: item })}
                  >
                    <View style={styles.productItem}>
                      <Image style={styles.productImage} source={{ uri: item.image }} />
                      <Text numberOfLines={2}>{item.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                          <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>${item.price}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15 }}>{item.rating.rate}</Text>
                            <Image style={styles.starImage} source={require('../assets/star.png')} />
                            <Text style={{ fontSize: 15 }}> ({item.rating.count})</Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => handleAddToCart(item)}
                        >
                          <Text style={styles.textButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            {/* //Nguyễn Ngô Thế Cường : 21521905 */}
            <View style={styles.hotDeals}>
              <Text style={styles.text}>New Arrivals</Text>
              <Image style={styles.imageHotDeals} source={require('../assets/new.png')} />
            </View>
            <View>
              <FlatList
                data={filteredProducts2}
                style={styles.productList}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.productItem}
                    onPress={() => navigation.navigate('HomeDetails', { note: item })}
                  >
                    <View style={styles.productItem}>
                      <Image style={styles.productImage} source={{ uri: item.image }} />
                      <Text numberOfLines={2}>{item.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                          <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>${item.price}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15 }}>{item.rating.rate}</Text>
                            <Image style={styles.starImage} source={require('../assets/star.png')} />
                            <Text style={{ fontSize: 15 }}> ({item.rating.count})</Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => handleAddToCart(item)}
                        >
                          <Text style={styles.textButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            {/* //Nguyễn Ngô Thế Cường : 21521905 */}
          </View>
        </>
      )}
    </ScrollView>
  );
};
 //Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  halfScreen: {
    flex: 0.9,
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
    width: '50%',
    height: '20%',
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
   //Nguyễn Ngô Thế Cường : 21521905
  textButton: {

    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -7,
  },
  carouselItem: {
    alignItems: "center",
    left: 50,
  },
  image: {
    width: '94%',
    height: 160,
    resizeMode: "cover",
  },
  loadingContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  }

});

export default HomeScreen;
