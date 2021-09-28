import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInputs";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);
  return (
    <SafeAreaView>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いて下さい"
      />
    </SafeAreaView>
  );
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: shop.name,
  //     headerLeft: () => (
  //       <IconButton onPress={() => navigation.goBack} name="x" />
  //     ),
  //   });
  // });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
