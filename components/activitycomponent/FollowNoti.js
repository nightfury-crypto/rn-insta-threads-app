import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { FontAwesome5 } from "@expo/vector-icons";

const FollowNoti = ({isFollow}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://i.insider.com/6363f430ad644b0019611ddc?width=700",
          }}
          style={styles.profileImg}
        />
        <View style={styles.circle}>
          <FontAwesome5 name="user-alt" size={11} color={COLORS?.dark?.text} />
        </View>
      </View>

      <View style={styles.middleWrap}>
        <View style={styles.middle}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={[styles.username]}>elonmusk</Text>
            <Text style={{ paddingHorizontal: 4, color: COLORS?.dark?.accent, fontSize: 17, fontWeight: "600" }}>1w</Text>
          </View>
          <Text style={[styles.bio]}>Followed you </Text>
        </View>

        {isFollow ?<TouchableOpacity style={styles.followBtn}>
          <Text style={[styles.followBtnText, {color: COLORS?.dark?.accent}]}>Following</Text>
        </TouchableOpacity>
:
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followBtnText}>Follow</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default FollowNoti;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    resizeMode: "contain",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: "purple",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -3,
    right: -6,
    borderWidth: 2,
    borderColor: COLORS?.dark?.background,
  },
  followBtn: {
    borderColor: "#2f3136",
    borderWidth: 1,
    borderRadius:10,
    padding: 0,
    paddingHorizontal: 23,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  middleWrap: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: COLORS?.dark?.accent,
    borderBottomWidth: 0.2,
    paddingBottom: 20,
    paddingRight: 10,
  },
  middle: {
    flex: 1,
    marginHorizontal: 16,
    display: "flex",
  },
  followBtnText: {
    color: COLORS?.dark?.text,
    fontSize: 16,
    fontWeight: "600",
  },
  username: {
    color: COLORS?.dark?.text,
    fontWeight: "600",
    fontSize: 17,
  },
  bio: {
    color: COLORS?.dark?.accent,
    fontSize: 18,
    fontWeight: "500",
  },
  followerCount: {
    color: COLORS?.dark?.text,
    fontSize: 14,
    marginTop: 8,
    fontWeight: "500",
  },
});
