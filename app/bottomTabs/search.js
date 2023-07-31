import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import UserCard from "../../components/usercardcomponent/UserCard";
import FriendReqData from "../../tempData/friendreqdata";

const search = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchView}>
          <View style={styles.searchbarView}>
            <AntDesign name="search1" size={24} color={COLORS?.dark?.accent} />
            <TextInput
              placeholder="Search"
              style={styles.searchbar}
              placeholderTextColor={COLORS?.dark?.accent}
            />
          </View>
        </View>



<FlatList data={FriendReqData} renderItem={({item}) => <UserCard friend={item}/>} scrollEnabled={false} contentContainerStyle={{
  width: "100%",
  marginTop: 15,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 30
}} />
      </ScrollView>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS?.dark?.background,
    paddingHorizontal: 8,
  },
  title: {
    color: COLORS?.dark?.text,
    fontSize: 30,
    fontWeight: "400",
    marginTop: 10,
  },
  searchView: {
    marginVertical: 10,
  },
  searchbarView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    backgroundColor: "#2f3136",
    paddingHorizontal: 6,
    height: 35,
    borderRadius: 10,
    overflow: "hidden",
  },
  searchbar: {
    flex: 1,
    color: COLORS?.dark?.text,
    fontSize: 16,
  },
});
