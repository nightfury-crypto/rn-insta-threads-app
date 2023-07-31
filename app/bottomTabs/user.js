import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "../../constants";
import { SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";
import TopNav from "../../components/usercomponent/TopNav";

const user = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <Pressable>
          <SimpleLineIcons name="globe" size={24} color={COLORS?.dark?.text} />
        </Pressable>

        <Pressable>
          <FontAwesome5
            name="grip-lines"
            size={24}
            color={COLORS?.dark?.text}
          />
        </Pressable>
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%", flexGrow: 1 }}
      >
        <View style={styles.userTop}>
          <View style={styles.userTopLeft}>
            <Text style={styles.name}>Ez Coding</Text>
            <View
              style={{
                marginTop: 5,
                display: "flex",
                flexDirection: "row",
                gap: 6,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text style={styles.username}>ig_codez</Text>
              <Text style={styles.chip}>threads.net</Text>
            </View>
          </View>
          <Image
            source={{
              uri: "https://i1.sndcdn.com/avatars-xiC2FBMkvYhiojYt-lV0Dyw-t240x240.jpg",
            }}
            style={styles.userImg}
          />
        </View>

        <View style={styles.bioView}>
          <Text style={styles.bioText}>
{`Awesome front end content here.
follow for more ❣️❣️.---

Subscribe to my channel.
For Awesome Content like this. 🔥🔥🔥`}
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 20,
          }}
        >
          <View style={styles.followerImg}>
            <Image
              source={{
                uri: "https://i.insider.com/6363f430ad644b0019611ddc?width=700",
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                resizeMode: "contain",
                borderWidth: 1,
                borderColor: COLORS?.dark?.background,
              }}
            />

            <Image
              source={{
                uri: "https://i.insider.com/6363f430ad644b0019611ddc?width=700",
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                resizeMode: "contain",
                marginLeft: -10,
                borderWidth: 1,
                borderColor: COLORS?.dark?.background,
              }}
            />

            <Image
              source={{
                uri: "https://i.insider.com/6363f430ad644b0019611ddc?width=700",
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                resizeMode: "contain",
                marginLeft: -10,
                borderWidth: 1,
                borderColor: COLORS?.dark?.background,
              }}
            />
          </View>
          <Text
            style={{
              color: COLORS?.dark?.accent,
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            22 followers
          </Text>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Edit profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Share profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topNavWrap}>
          <TopNav />
        </View>

      </ScrollView>
    </View>
  );
};

export default user;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS?.dark?.background,
  },
  header: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    shadowColor: "#ccc",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  userTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  name: {
    fontSize: 30,
    color: COLORS?.dark?.text,
    fontWeight: "600",
  },
  username: {
    fontSize: 16,
    color: COLORS?.dark?.text,
    fontWeight: "300",
  },
  chip: {
    fontSize: 16,
    color: COLORS?.dark?.accent,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#1f1f1f",
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 600,
    resizeMode: "cover",
  },
  bioView: {
    width: "100%",
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  bioText: {
    fontSize: 16,
    color: COLORS?.dark?.text,
    fontWeight: "300",
    width: "100%",
  },
  followerImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 6,
  },
  btnView: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.7,
    borderColor: COLORS?.dark?.accent,
    borderRadius: 10,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: COLORS?.dark?.text,
    fontWeight: "500",
  },
  topNavWrap: {
    width: "100%",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginTop: 10,
  }
});
