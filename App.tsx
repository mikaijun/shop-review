import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDUJIkOjLvHwXStYJhrZOJcg6Q2wN6M9mc",
    authDomain: "shop-review-1bd1e.firebaseapp.com",
    projectId: "shop-review-1bd1e",
    storageBucket: "shop-review-1bd1e.appspot.com",
    messagingSenderId: "434538463213",
    appId: "1:434538463213:web:2368755ffa81fa4a4d31e4",
    measurementId: "G-S2XLPHTMCK",
  };

  firebase.initializeApp(firebaseConfig);
}
type Shop = {
  name: string;
  place: string;
};
export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data() as Shop);
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
