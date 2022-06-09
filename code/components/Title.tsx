import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
      padding: 10,
      fontSize: 24,
      textAlign: "center",
      color: "#FFD700",
      backgroundColor: "black",
  },
});
