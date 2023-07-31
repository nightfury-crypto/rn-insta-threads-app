import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RepliesProfile = ({ left, top, bottom, width, height, uri }) => {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={[
        {
          width: width,
          height: height,
          resizeMode: "contain",
          borderRadius: 20 / 2,
          position: "absolute",
        },
        left && { left: left },
        top && { top: top },
        bottom && { bottom: bottom },
      ]}
    />
  );
};

export default RepliesProfile;

const styles = StyleSheet.create({});
