import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

interface Props {
  comments: API.Comment[];
}

const Comments = ({ comments }: Props) => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{`${item.by} says:`}</Text>
          <Text style={styles.comments}>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default Comments;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: "#FFD700",
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  comments: {
    fontSize: 12,
    padding: 10,
  },
});
