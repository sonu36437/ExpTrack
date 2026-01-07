import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AllExpenses from "../screens/AllExpenses";



function MyTabBar({ state, navigation }: BottomTabBarProps) {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: inset.bottom + 10 }]}>
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
            activeOpacity={0.7}
            style={styles.tab}
          >
            <Ionicons
              name={route.name === "Home" ? "home" : "list"}
              size={22}
              color={isFocused ? "#000" : "#888"}
            />
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
        animation: "shift",
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: "60%",
    position: "absolute",
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },
  active: {
    color: "#000",
    fontWeight: "600",
  },
});
