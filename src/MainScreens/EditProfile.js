import React, { useContext, useState, useEffect,useLayoutEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { AuthContext } from "../AccuracySreens/AuthContext";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//Nguyễn Ngô Thế Cường : 21521905
const EditProfile = ({ route, navigation }) => {
  const { userUpdate, setUserUpdate, userID } = useContext(AuthContext);
  const { initialUserData } = route.params;
  const [newUserData, setNewUserData] = useState({
    firstname: initialUserData.name?.firstname || "",
    lastname: initialUserData.name?.lastname || "",
    username: initialUserData.username || "",
    email: initialUserData.email || "",
    phone: initialUserData.phone || "",
    number: initialUserData.address?.number || "",
    street: initialUserData.address?.street || "",
    city: initialUserData.address?.city || "",
  });

  const handleUpdateProfile = () => {
   
    axios
      .put(`https://fakestoreapi.com/users/${userID}`, {
        address: {
          geolocation: {
            lat: initialUserData.address?.geolocation?.lat || "",
            long: initialUserData.address?.geolocation?.long || "",
          },
          city: newUserData.city,
          street: newUserData.street,
          number: newUserData.number,
          zipcode: initialUserData.address?.zipcode || "",
        },
        id: initialUserData.id,
        email: newUserData.email,
        username: newUserData.username,
        password: initialUserData.password,
        name: {
          firstname: newUserData.firstname,
          lastname: newUserData.lastname,
        },
        phone: newUserData.phone,
        __v: initialUserData.__v || 0,
      })
      .then(() => {
        //Nguyễn Ngô Thế Cường : 21521905
        setUserUpdate({
          address: {
            geolocation: {
              lat: initialUserData.address?.geolocation?.lat || "",
              long: initialUserData.address?.geolocation?.long || "",
            },
            city: newUserData.city,
            street: newUserData.street,
            number: newUserData.number,
            zipcode: newUserData.address?.zipcode || "",
          },
          id: initialUserData.id,
          email: newUserData.email,
          username: newUserData.username,
          password: initialUserData.password,
          name: {
            firstname: newUserData.firstname,
            lastname: newUserData.lastname,
          },
          phone: newUserData.phone,
          __v: initialUserData.__v || 0,
        });
        //Nguyễn Ngô Thế Cường : 21521905
        navigation.goBack();
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="check"
          size={30}
          color="black"
          style={styles.checkIcon}
          onPress={handleUpdateProfile}
        />
      ),
    });
  }, [navigation, handleUpdateProfile]);
  //Nguyễn Ngô Thế Cường : 21521905
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerTitle}>
        <View style={{flex:0.65}}>
          <Text style={styles.textBold}>FirstName</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={newUserData.firstname}
            onChangeText={(text) =>
              setNewUserData({ ...newUserData, firstname: text })
            }
          />
        </View>
        <View style={{flex:0.3}}>
          <Text style={styles.textBold}>LastName</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={newUserData.lastname}
            onChangeText={(text) =>
              setNewUserData({ ...newUserData, lastname: text })
            }
          />
        </View>
      </View>
      <Text style={styles.textBold}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={newUserData.username}
        onChangeText={(text) =>
          setNewUserData({ ...newUserData, username: text })
        }
      />
      {/* //Nguyễn Ngô Thế Cường : 21521905 */}
      <Text style={styles.textBold}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={newUserData.email}
        onChangeText={(text) => setNewUserData({ ...newUserData, email: text })}
      />
      <Text style={styles.textBold}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={newUserData.phone}
        onChangeText={(text) => setNewUserData({ ...newUserData, phone: text })}
      />
      <Text style={styles.textBold}>House Number</Text>
      <TextInput
        style={styles.input}
        placeholder="House Number"
        value={newUserData.number.toString()}
        onChangeText={(text) =>
          setNewUserData({ ...newUserData, number: text })
        }
      />
      {/* //Nguyễn Ngô Thế Cường : 21521905 */}
      <Text style={styles.textBold}>Street</Text>
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={newUserData.street}
        onChangeText={(text) =>
          setNewUserData({ ...newUserData, street: text })
        }
      />
      <Text style={styles.textBold}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={newUserData.city}
        onChangeText={(text) => setNewUserData({ ...newUserData, city: text })}
      />
    </ScrollView>
  );
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  checkIcon: {
    marginRight: 20,
  },
  
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});

export default EditProfile;
