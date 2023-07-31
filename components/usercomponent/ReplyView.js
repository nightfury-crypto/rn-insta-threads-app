import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const ReplyView = () => {
    const replyData = null
    if (replyData === null) {
        return (
            <View style={{width: "100%", height: 80, display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: COLORS?.dark?.accent}}>No Replies so far...</Text>
            </View>
    )}
  return (
    <View>
      <Text>ReplyView</Text>
    </View>
  )
}

export default ReplyView

const styles = StyleSheet.create({})