import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import HyperLink from "react-native-hyperlink";

import useFetch from "../hooks/useFetch";
import { Title, CommentsView } from "../components";

const Details = ({ route }: any) => {
  const { title, kids, url } = route?.params;
  const { comments, fetching } = useFetch(kids);

  if (comments?.length === 0 && !fetching)
    return (
      <View style={styles.container}>
        <Title title={title} />
        <View style={styles.noComment}>
          <Text>No comment to display</Text>
        </View>
      </View>
    );

  if (fetching)
    return (
      <View style={styles.noComment}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={styles.container}>
      <Title title={title} />
      {url && (
        <HyperLink
          linkStyle={{ color: "blue", fontSize: 22, padding: 10 }}
          linkDefault={true}
          linkText={(url) => (url === url ? "Link to news" : url)}
        >
          <Text>{url}</Text>
        </HyperLink>
      )}
      <CommentsView comments={comments as API.Comment[]} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noComment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
