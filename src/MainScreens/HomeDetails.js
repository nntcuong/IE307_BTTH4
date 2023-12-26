import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView,FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
//Nguyễn Ngô Thế Cường : 21521905
const HomeDetails = ({ productId }) => {
  const route = useRoute();
  const { note } = route.params;

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.container}>
    <Image style={styles.imageProducts} source={{ uri: note.image }} />
    <Text style={styles.textHeader}>{note.title}</Text>
    <Text style={styles.textDescription}>{note.description}</Text>
  </ScrollView>
  <Text style={styles.textPrice}>Price: ${note.price}</Text>
  <View style={{ flexDirection: 'row',flex: 0.08, }}>
      <Text style={styles.textPrice}>Rating: {note.rating.rate} </Text>
      <Image style={styles.starImage} source={require('../assets/star.png')} />
      <Text style={styles.textReviews}> ({note.rating.count} reviews)</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  //Nguyễn Ngô Thế Cường : 21521905
  productList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  imageProducts: {
    width: '98%',
    aspectRatio: 1, 
    height:'60%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 10,
    marginTop: 8,
  },
  textDescription: {
    marginTop: 8,
    fontSize: 16,
    marginHorizontal: 10,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
  },
  //Nguyễn Ngô Thế Cường : 21521905
  starImage: {
    width: 17,
    height: 17,
    marginTop: 18,
    marginLeft: 3,
  },
  textReviews:{
    fontSize: 18,
    fontWeight: 'bold',
   
    marginTop: 15,
  }
});

export default HomeDetails;
