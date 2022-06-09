import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import { Foundation } from "@expo/vector-icons";

import { getTopStories } from "../state/selectors";

const List = ({ onPress }: any) => {
  const { enabled, topStories } = useSelector(getTopStories);

  return (
    <FlatList
      data={topStories}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => onPress(item.title, item.kids, item.url)}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.borderLine} />
            <View style={styles.bottomRow}>
              <Text style={styles.by}>{`by ${item.by}`}</Text>
              <Foundation name="comments" size={24} color="black" />
              <Text style={styles.comments}>{item.kids ? item.kids.length : 0}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: "#FFD700",
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    paddingTop: 5,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  by: {
    flex: 5,
    fontSize: 12,
    paddingBottom: 5,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  comments: {
    fontSize: 12,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 10,
    alignSelf: "flex-end",
  },
  borderLine: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
