import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MyThreadData from "../../tempData/mythreaddata";
import { COLORS } from "../../constants";
import ThreadCard from "../threadcomponent/ThreadCard";

const ThreadView = () => {
  return (
    <FlatList
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      bouncesZoom={false}
      contentContainerStyle={styles.container}
      data={MyThreadData}
      renderItem={({ item }) => <ThreadCard thread={item} />}
    />
  );
};

export default ThreadView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS?.dark?.background,
  },
});
