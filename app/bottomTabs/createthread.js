import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, Tabs, useRouter } from 'expo-router'
import { COLORS } from '../../constants'
import { Entypo } from '@expo/vector-icons';
import MyThread from '../../components/createcomponent/MyThread';

const createthread = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false
        }}
      />
      <Tabs.Screen options={{
        tabBarStyle: {
          display: 'none'
        }
      }}/>
      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
      <Entypo name="cross" size={28} color={COLORS?.dark?.text} />
        </Pressable>
        <Text style={styles.headerText}>New Thread</Text>
      </View>

<View style={styles.main}>
  <MyThread />

</View>

{/* bottom */}
<View style={styles.bottom}>
      <Text style={styles.privacy}>Your followers can reply</Text>
<TouchableOpacity style={styles.postBtn}>
  <Text style={styles.postBtnText}>Post</Text>
</TouchableOpacity>
</View>
    </View>
  )
}

export default createthread

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS?.dark?.background
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: COLORS?.dark?.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    paddingLeft: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS?.dark?.accent,
    paddingVertical: 10,
    marginBottom: 10
  },
  headerText: {
    color: COLORS?.dark?.text,
    fontSize: 20,
    fontWeight: '500'
  },
  main: {
    width: '100%',
    flex: 1,
    padding: 10
  },
  bottom: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: COLORS?.dark?.background,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  privacy: {
    color: COLORS?.dark?.accent,
  },
  postBtnText: {
    fontSize: 19,
    fontWeight: '600',
    color: "#0863a3"
  }
})