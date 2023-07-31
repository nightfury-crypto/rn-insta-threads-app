import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, {useState, useEffect} from "react";
import { COLORS, IMAGES } from "../../constants";
import { Entypo, AntDesign } from "@expo/vector-icons";
import RepliesProfile from "../threadcomponent/RepliesProfile";

const MyThread = () => {
  const [threadText, setThreadText] = useState("");
  const [isThreadAdd, setIsThreadAdd ] = useState(false)

  useEffect(() => {
    if (threadText.trim() === "") {
      setIsThreadAdd(false)
    }
  }, [threadText])

  return (
    <View style={styles.threadWrapper}>

      {/* View top */}
      <View style={styles.threadTop}>
        {/* top left */}
        <View style={styles.threadTopLeft}>
          <Image
            source={{ uri: "https://i1.sndcdn.com/avatars-xiC2FBMkvYhiojYt-lV0Dyw-t240x240.jpg" }}
            style={styles.currentUserImg}
          />
<View style={styles.leftLineView}>
          <View style={styles.leftLine} />
        </View>
        </View>

        {/* top right */}
        <View style={styles.threadTopRight}>
          <View style={{flexDirection:"row", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={styles.usernameText}>
              ig_codez
            </Text>
           {threadText.trim() !== "" && <Pressable onPress={() => setThreadText("")}>
            <Entypo name="cross" size={20} color={COLORS?.dark?.accent} />
            </Pressable>
}
          </View>
          {/* description */}
            <TextInput style={styles.threadDesc} placeholder="Start a thread..."  placeholderTextColor={COLORS?.dark?.accent} value={threadText} onChangeText={(value) => setThreadText(value)} multiline={true} maxLength={500} />


            {!isThreadAdd &&
            <Pressable style={{marginTop: 30, marginBottom: 10}}>
            <Entypo name="attachment" size={20} color={COLORS?.dark?.accent} />
            </Pressable> }
        </View>
      </View>

      {/* View bottom */}
      {isThreadAdd ? <MyThread />: 
      <View style={styles.threadBottom}>
        <View
          style={{
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <RepliesProfile width={18} height={18} 
        uri={"https://i1.sndcdn.com/avatars-xiC2FBMkvYhiojYt-lV0Dyw-t240x240.jpg"} />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <TouchableOpacity onPress={() => threadText.trim() !== "" && setIsThreadAdd(true)}>
            <Text style={{color: COLORS?.dark?.accent, fontSize: 12}}>Add to thread</Text>
          </TouchableOpacity>
         
        </View>
      </View>
}
    </View>
  );
};

export default MyThread;

const styles = StyleSheet.create({
  threadWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
  },
  leftLineView: {
    width: "100%",
    flex: 1,
    display: "flex",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  leftLine: {
    borderWidth: 0.3,
    height: "110%",
    borderColor: "gray",
    height: "100%",
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
    position: "relative",
  },
  currentUserImg: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    borderRadius: 50 / 2,
  },

  threadTopRight: {
    flex: 1,
  },
  usernameText: {
    color: COLORS?.dark?.text,
    fontSize: 15,
    fontWeight: "700",
  },
  threadDesc: {
    color: COLORS?.dark?.text,
    fontSize: 14,
    fontWeight: "400",
  },
  threadBottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
