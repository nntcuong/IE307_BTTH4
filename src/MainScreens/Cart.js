import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert, StyleSheet, Image, ActivityIndicator  } from 'react-native';
import GetData from './GetData';
import { useCart } from './CartProvider';
//Nguyễn Ngô Thế Cường : 21521905
const Cart = ({ navigation }) => {
  const { cart, removeProduct, changeQuantity, calculateTotalPrice } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 3000));

      const data = await GetData(); 

      setProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  const handleRemoveProduct = (productId) => {
    Alert.alert(
      '',
      'Are you sure you want to delete this product?',
      [
        {
          text: 'Yes',
          onPress: () => removeProduct(productId),
        },
        {
          text: 'No',
          style: 'cancel',
        },

      ],
      { cancelable: false }
    );
  };
//Nguyễn Ngô Thế Cường : 21521905
  const openModal = (productId) => {
    setSelectedProduct(productId);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }
  else if (cart.length === 0) {
    return (
      <View style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text >You have no products in your cart</Text>
        <TouchableOpacity style={styles.buttonShop} onPress={() => navigation.navigate('Home')}>
          <Text style={{
            color: 'white', marginTop: 5,
            alignSelf: 'center',
          }}>SHOPPING NOW</Text>
        </TouchableOpacity>
      </View>
    )
  }
  //Nguyễn Ngô Thế Cường : 21521905
  else {
    return (
      <View style={{ flex: 1 }}>

        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          style={styles.productList}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={{ fontSize: 19, marginHorizontal: 5 }}>{item.title}</Text>
              <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-between' }}>
                <Image style={styles.productImage} source={{ uri: item.image }} />
                <View style={{ flexDirection: 'column', marginTop: 10, }}>
                  <Text style={styles.priceText}>${item.price} </Text>
                  <View style={{ flexDirection: 'row', marginLeft: 25, alignItems: 'center',justifyContent:'space-between' }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.quantity > 1) {
                          changeQuantity(item.id, item.quantity - 1);
                        } else {
                          Alert.alert('Quantity cannot be less than 1');
                        }
                      }}
                    >
                      <Text style={{ fontSize: 21 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginHorizontal: 5 }}> {item.quantity} </Text>
                    <TouchableOpacity onPress={() => changeQuantity(item.id, item.quantity + 1)}>
                      <Text style={{ fontSize: 20 }}> +</Text>
                    </TouchableOpacity>
                  </View>
                </View >
                {/* //Nguyễn Ngô Thế Cường : 21521905 */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.totalText}>Total: ${item.price * item.quantity}</Text>
                  <TouchableOpacity onPress={() => handleRemoveProduct(item.id)}>
                    <Text style={styles.eraseText}>x</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 7 }}>Total Amount: ${calculateTotalPrice()}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, alignSelf: 'center', marginTop: 5 }} >CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productItem: {
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  productImage: {
    width: '25%',
    height: 90,
    resizeMode: 'cover',

    marginLeft: 5,
    //marginTop
  },

  priceText: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 25,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 19,
   marginRight:10,
    marginTop: 20,

  },
  //Nguyễn Ngô Thế Cường : 21521905
  eraseText: {
    fontSize: 35,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
   marginRight:5,
    paddingLeft: 0
  },
  button: {
    borderRadius: 5,
    width: 100,
    height: 34,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:15,
    backgroundColor: '#00BFFF',
    marginBottom: 5,
  },
  buttonShop: {
    borderRadius: 5,
    width: 130,
    height: 34,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#00BFFF',
    marginTop: 5,
  },


});
export default Cart;
