import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

/* components */
import { ShopDetail } from "../components/ShopDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { ReviewItem } from "../components/ReviewItem";

/* types */
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { Review } from "../types/review";
import { getReviews } from "../lib/firebase";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};
export const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: shop.name });

    const fetchReviews = async () => {
      if (!shop.id) return;
      const reviews = await getReviews(shop.id);
      console.log(reviews);
      setReviews(reviews);
    };

    fetchReviews();
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(index) => index.toString()}
      />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
