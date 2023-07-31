import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { COLORS } from "../../constants";
import FilterCard from "../../components/activitycomponent/FilterCard";
import filterData from "../../tempData/filterdata";
import FollowNoti from "../../components/activitycomponent/FollowNoti";

const notifications = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text style={styles.title}>Activity</Text>
      <FlatList
        contentContainerStyle={styles.filter}
        bounces={false}
        bouncesZoom={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        renderItem={({ item }) => (
          <FilterCard
            filter={item}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        )}
      />

<View style={styles.activities}>

<FollowNoti isFollow={false}/>
<FollowNoti isFollow={true}/>
</View>
    </ScrollView>
  );
};

export default notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS?.dark?.background,
  },
  title: {
    color: COLORS?.dark?.text,
    fontSize: 36,
    fontWeight: "600",
    padding: 10
  },
  filter: {
    height: 50,
    marginTop: 10,
    gap: 10,
    paddingLeft: 10
  },
  activities: {
    width: "100%",
    flex: 1,
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  }
});
