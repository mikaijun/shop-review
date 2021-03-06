import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { signIn } from "../lib/firebase";
import { UserContext } from "../contexts/useContexts";

export const AuthScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signIn();
      console.log(user);
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>ログイン中...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 12,
    color: "#888",
  },
});
