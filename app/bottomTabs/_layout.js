import  {Tabs} from "expo-router"
import { COLORS, SIZE } from "../../constants"
import {AntDesign } from "@expo/vector-icons"

export default () => {
    return (
        <Tabs 
        backBehavior="history"
        screenOptions={{
            tabBarStyle: {backgroundColor: COLORS?.dark?.background, 
            borderTopWidth: 0,
            shadowColor: "transparent",
            height: 52
            }
            
        }}>
            {/* home */}
            <Tabs.Screen 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => <AntDesign name="home" 
                size={SIZE?.tabIcons} color={focused? COLORS?.dark?.text: "gray"} /> 
            }}
            name="home" />
{/* search */}
<Tabs.Screen 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => <AntDesign name="search1" 
                size={SIZE?.tabIcons} color={focused? COLORS?.dark?.text: "gray"} /> 
            }}
            name="search" />


            {/* create thread */}
            <Tabs.Screen 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => <AntDesign name="edit" 
                size={SIZE?.tabIcons} color={focused? COLORS?.dark?.text: "gray"} /> 
            }}
            name="createthread" />

            {/* fav/notification */}
            <Tabs.Screen 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => <AntDesign name={focused ? "heart" : "hearto"} 
                size={SIZE?.tabIcons} color={focused? COLORS?.dark?.text: "gray"} /> 
            }}
            name="notifications" />

            {/* user profile */}
            <Tabs.Screen 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => <AntDesign name="user" 
                size={SIZE?.tabIcons} color={focused? COLORS?.dark?.text: "gray"} /> 
            }}
            name="user" />
        </Tabs>
    )
}