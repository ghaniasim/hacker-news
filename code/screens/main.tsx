import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useDispatch } from "react-redux";

import { initialize } from "../state/reducers/topstories";
import { ListView } from "../components";

const Main = ({ navigation }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  const pressHandler = (title: string, kids: number[], url: string) => {
    navigation.navigate("Details", {
      title,
      kids,
      url
    })
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ListView onPress={pressHandler} /> 
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
