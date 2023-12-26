import React, { useContext, useEffect,useCallback, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../AccuracySreens/AuthContext";
//Nguyễn Ngô Thế Cường : 21521905
const Profile = ({ handleLogin, navigation }) => {
  const { userID, logout, userUpdate, setUserUpdate } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnPressLogout = () => {
    logout();
    navigation.navigate("LoginComponent");
  };

  useEffect(() => {
    if (userUpdate) {
      setUserData(userUpdate);
    } else if (userID) {
      // Lấy dữ liệu người dùng từ API sử dụng userID
      axios
        .get(`https://fakestoreapi.com/users/${userID}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userID, userUpdate]);
//Nguyễn Ngô Thế Cường : 21521905
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="#00BFFF" />
        </View>
      ) : (
        <>
        {userData && (
        <View>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                }}
                style={styles.imageStyle}
              />
              <Text style={styles.textBoldHeader}>
                {userData.name?.firstname} {userData.name?.lastname}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>  navigation.navigate("EditProfile", { initialUserData: userData })
            }
          >
              <Icon
                name="create-outline"
                size={30}
                
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textBold}>Name:</Text>
          <Text style={styles.textStyle}>
            {userData.name?.firstname} {userData.name?.lastname}
          </Text>
          {/* //Nguyễn Ngô Thế Cường : 21521905 */}
          <Text style={styles.textBold}>Username:</Text>
          <Text style={styles.textStyle}>{userData.username}</Text>
          <Text style={styles.textBold}>Email:</Text>
          <Text style={styles.textStyle}>{userData.email}</Text>
          <Text style={styles.textBold}>Phone:</Text>
          <Text style={styles.textStyle}>{userData.phone}</Text>
          <Text style={styles.textBold}>Address:</Text>
          <Text style={styles.textStyle}>
            {userData.address?.number}, {userData.address?.street}, {userData.address?.city}
          </Text>
        </View>
      )}
      <Button title="Logout" onPress={handleOnPressLogout} />
      </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  container: {
    flex: 1,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
  },
  headerTitle:{
    flexDirection: "row",
    alignItems: "center",
  },
  //Nguyễn Ngô Thế Cường : 21521905
  headerIcon: {
    marginLeft: 30,
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
   marginBottom:10,
  },
  textStyle: {
    fontSize: 16,
    color: "#333",
  
    marginBottom:10,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  textBoldHeader: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    marginLeft: 5,
  },

});
export default Profile;