import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants  from "expo-constants";
import {COLORS} from "../constants";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Stack>
            <Stack.Screen name="bottomTabs" options={{
                headerShown: false
            }} />
        </Stack>
        <StatusBar style="light" />
            </SafeAreaView>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: COLORS?.dark?.background,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0
    }
})