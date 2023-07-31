import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image
} from "react-native";
import React from "react";
import { COLORS, IMAGES } from "../../constants";
import { Entypo, AntDesign, Octicons  } from "@expo/vector-icons";
import MenuBtn from "./MenuBtn";
import RepliesProfile from "./RepliesProfile";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")
const ratio = deviceWidth/541; //541 is actual image width
const ThreadCard = ({ thread }) => {
  return (
    <View style={styles.threadWrapper}>
      {/* View top */}
      <View style={styles.threadTop}>
        {/* top left */}
        <View style={styles.threadTopLeft}>
          <View style={{width: 50, height: 50, marginBottom:10}}>

          <Image
            source={{ uri: thread?.userImg }}
            style={styles.currentUserImg}
            />
          <View style={styles.plusCircle}>
            <AntDesign name="plus" size={12} color="#000" />
          </View>
            </View>
            {thread?.repliesCount !== 0 && (
        <View style={styles.leftLineView}>
          <View style={styles.leftLine} />
        </View>
      )}
        </View>

        {/* top right */}
        <View style={styles.threadTopRight}>
          <View style={styles.userTop}>
            <Text style={styles.usernameText}>
              {thread?.username}{" "}
              {thread?.isVerified && (
                <Image
                  source={{
                    uri: Image.resolveAssetSource(IMAGES?.verify)?.uri,
                  }}
                  style={{ width: 13, height: 13, resizeMode: "contain" }}
                />
              )}
            </Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={styles.threadTime}>2m</Text>
              <Pressable>
                <Entypo
                  name="dots-three-horizontal"
                  size={21}
                  color={COLORS?.dark?.text}
                />
              </Pressable>
            </View>
          </View>

          {/* description */}
          {thread?.threadText && (
            <Text style={styles.threadDesc}>{thread?.threadText}</Text>
          )}
          {thread?.threadImg && (
            <Image
              source={{
                uri: thread?.threadImg,
              }}
              style={styles.postImg}
            />
          )}
          <View style={styles.bottomMenu}>
            {/*  */}
           {!thread?.isLiked ?  <MenuBtn icon="heart-alt" isLiked={thread?.isLiked} />:
            <Octicons name="heart-fill" size={23} color="red" />}
            <MenuBtn icon="comment" />
            <MenuBtn icon="arrow-swap" />
            <MenuBtn icon="share-a" />
          </View>
        </View>
      </View>

      {/* View bottom */}
      <View style={styles.threadBottom}>
        {/* bottom left */}
        <View
          style={{
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {thread?.repliesCount !== 0 && (

            
            <>
            {thread.repliesCount == 1 && (
               <RepliesProfile  width={18} height={18} uri={thread?.replies[0].userProfile}/>
            ) }

            {thread?.repliesCount == 2 && (
              <>
              <RepliesProfile  width={18} height={18} uri={thread?.replies[0].userProfile}/>
              <RepliesProfile  width={18} height={18} left={2} uri={thread?.replies[1].userProfile}/>
              </>
            )}

            {thread.repliesCount >= 3 && (
              <>
            <RepliesProfile  width={18} height={18} uri={thread?.replies[0].userProfile}/>
            <RepliesProfile width={12} height={12} left={-2} top={25} uri={thread?.replies[1].userProfile}/>
            <RepliesProfile width={10} height={10} bottom={4} left={0} uri={thread?.replies[2].userProfile}/>
            </>
            )}
            </>
          )}
        </View>
        {/* bottom right */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          {thread?.repliesCount !== 0 && (
            <Text style={{ color: COLORS?.dark?.accent }}>
              {thread?.repliesCount} replies
            </Text>
          )}
          {thread?.repliesCount !== 0 && (
            <Text style={{ color: COLORS?.dark?.accent }}>•</Text>
          )}
          <Text style={{ color: COLORS?.dark?.accent }}>
            {thread?.likesCount} likes
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ThreadCard;

const styles = StyleSheet.create({
  threadWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    paddingBottom: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    marginBottom: 10,
  },
  threadTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  threadTopLeft: {
    width: 50,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  currentUserImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 50 / 2,
  },
  plusCircle: {
    width: 16,
    height: 16,
    borderRadius: 20 / 2,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: COLORS?.dark?.background,
  },
  leftLineView: {
    width: 50,
    flex:1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftLine: {
    borderWidth: 0.3,
    borderColor: "gray",
    height: "100%",
  },
  threadTopRight: {
    flex: 1,
    marginBottom: 8
  },
  userTop: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  usernameText: {
    color: COLORS?.dark?.text,
    fontSize: 15,
    fontWeight: "700",
  },
  threadTime: {
    color: "grey",
    fontSize: 13,
    fontWeight: "500",
  },
  threadDesc: {
    color: COLORS?.dark?.text,
    fontSize: 14,
    fontWeight: "400",
  },
  postImg: {
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
    height: 350,
    resizeMode:"cover"
  },
  bottomMenu: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 26,
    paddingLeft: 6,
  },
  threadBottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -8,
    paddingBottom:7
  },
});
