import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>{"Top Stories"}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
  },
});
