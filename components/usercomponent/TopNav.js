import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../../constants'
import ThreadView from './ThreadView'
import ReplyView from './ReplyView'

const TopNav = () => {
    const [activeTab, setActiveTab] = useState("threads")
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity style={[styles.topNavBtn, {borderBottomColor: activeTab === "threads" ? COLORS?.dark?.text : COLORS?.dark?.accent}]} onPress={() => setActiveTab("threads")}>
            <Text style={[styles.topNavBtnText, {color: activeTab === "threads" ? COLORS?.dark?.text : COLORS?.dark?.accent}]}>Threads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.topNavBtn, {borderBottomColor: activeTab === "replies" ? COLORS?.dark?.text : COLORS?.dark?.accent}]} onPress={() => setActiveTab("replies")}>
            <Text style={[styles.topNavBtnText, {color: activeTab === "replies" ? COLORS?.dark?.text : COLORS?.dark?.accent}]}>Replies</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: "100%"}}>

      {activeTab === "threads" ? <ThreadView /> : <ReplyView />}
      </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    topNav: {
        width: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    topNavBtn: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    topNavBtnText: {
        fontSize: 18,
        fontWeight: "500",
    }
})