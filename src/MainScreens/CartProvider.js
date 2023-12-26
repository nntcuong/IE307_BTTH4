
import { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
const CartContext = createContext();
  //Nguyễn Ngô Thế Cường : 21521905
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      Alert.alert('Message','This product is already in your cart.')
    } else {
   
      const updatedProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, updatedProduct]);
    }
  };
  const removeProduct  = (productId) => {
  
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  const changeQuantity = (productId, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    }
  };
  const calculateTotalPrice = () => {
  //Nguyễn Ngô Thế Cường : 21521905
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    return totalPrice.toFixed(2);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart,removeProduct,changeQuantity,calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
