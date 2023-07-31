import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES } from '../../constants'

const UserCard = ({friend}) => {
  return (
    <View style={styles.container}>
      <Image source={{"uri": friend?.userImg}} style={styles.profileImg}/>

      <View style={styles.middle}>
    <Text style={[styles.username]}>{friend?.username} {friend?.isVerified && (
                <Image
                  source={{
                    uri: Image.resolveAssetSource(IMAGES?.verify)?.uri,
                  }}
                  style={{ width: 13, height: 13, resizeMode: "contain" }}
                />
              )}</Text>
    <Text style={[styles.bio]} ellipsizeMode='tail' numberOfLines={1}>{friend?.bio}</Text>
    <Text style={[styles.followerCount]}>{friend?.followers} followers</Text>
      </View>

      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followBtnText}>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    profileImg: {
        width: 40, 
        height: 40,
        borderRadius: 40/2,
        resizeMode: "contain"
    },
    followBtn: {
        borderColor: "#2f3136",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    middle: {
        flex: 1, 
        marginHorizontal: 20,
        display: "flex",
        gap: 5
    },
    followBtnText: {
        color: COLORS?.dark?.text,
    },
    username: {
        color: COLORS?.dark?.text,
        fontWeight: "500",
        fontSize: 16
    },
    bio: {
        color: COLORS?.dark?.accent,
    },
    followerCount: {
        color: COLORS?.dark?.text,
        fontSize: 14,
        marginTop: 8,
        fontWeight: "500"
    }
})