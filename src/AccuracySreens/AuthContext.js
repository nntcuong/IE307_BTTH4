//Nguyễn Ngô Thế Cường : 21521905
import React, { createContext, useState,useEffect} from 'react';
import GetDataUser from '../MainScreens/GetDataUser';
const AuthContext = createContext();
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";
global.atob = decode;
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userUpdate, setUserUpdate] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isLogin,setIsLogin] =  useState(null);
  const logout = () => {
    setisAuthenticated(false);
    setUserToken(null);
    setUserID(null);
    setUserUpdate(null);
    setCartItems([]);
    setIsLogin(null);
  };
  const login = (username, password) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        setisAuthenticated(true);
        setIsLogin(true);
        const token = res.data.token;
        setUserToken(token);
        // Decode token để lấy thông tin người dùng
        const decoded = jwtDecode(token);
        setUserID(decoded.sub);
        setCartItems([]);
      })
      .catch((e) => {
        console.log(`Login error ${e}`);
        setIsLogin(false);
      });
  };
  
//Nguyễn Ngô Thế Cường : 21521905
  return (
    <AuthContext.Provider
      value={{
        userToken,
        isAuthenticated,
        userID,
        login,
        logout,
        userUpdate,
        setUserUpdate,
        cartItems,
        setCartItems,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };