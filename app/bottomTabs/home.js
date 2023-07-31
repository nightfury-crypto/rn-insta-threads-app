import { StyleSheet, Text, View, Platform, ScrollView, Image, FlatList, RefreshControl, } from 'react-native'
import React, {useState, useCallback} from 'react'
import { COLORS, IMAGES } from '../../constants'
import Constants  from 'expo-constants'
import { Stack } from 'expo-router'
import ThreadCard from '../../components/threadcomponent/ThreadCard'
import ThreadData from '../../tempData/threaddata'



const home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
        <Stack.Screen options={{
            headerShown: false
        }} />

        <ScrollView bounces={false} showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ flexGrow: 1}}
          
          refreshControl={
            <RefreshControl shouldRasterizeIOS={true} refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* header ICON */}
          <View style={[styles.headerIconView]}>
            <Image source={{uri: Image.resolveAssetSource(IMAGES?.logodark)?.uri}} style={styles.headerIcon} />
          </View>

      {/* threadCard */}
      <FlatList 
        contentContainerStyle={{width: "100%", marginTop: 20}}
      data={ThreadData} renderItem={({item}) => <ThreadCard thread={item}/>} scrollEnabled={false} bounces={false} /> 
        </ScrollView>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS?.dark?.background,
    },
    headerIconView: {
      width: "100%",
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10
    },
    headerIcon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    }
})