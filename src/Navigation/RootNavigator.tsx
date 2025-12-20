
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { create } from "react-test-renderer";
import HomeScreen from "../screens/HomeScreen";
import AllExpenses from "../screens/AllExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets,} from "react-native-safe-area-context";

function MyTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const inset=useSafeAreaInsets();
    
    return (
        <View style={[styles.container,{bottom:inset.bottom}]}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={styles.tab}
                    >
                        <Text style={[styles.label, isFocused && styles.active]}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function RootNavigator() {
    return (
     
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                animation:'shift'
            }}
            tabBar={(props) =>
                <MyTabBar {...props} />
            }
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="AllExpenses" component={AllExpenses}/>

        </Tab.Navigator>
     
    )
}





const styles = StyleSheet.create({
    container: {
        height:20,
        width:"60%",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#fff",
    alignSelf:'center'

  },
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: "#888",
        fontSize: 14,
    },
    active: {
        color: "#000",
        fontWeight: "600",
    },
});

