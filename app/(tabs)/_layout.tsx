import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6879f8",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fafafa",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "compass-sharp" : "compass-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "Weather",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "boat-sharp" : "boat-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "#6879f8",
                position: "absolute",
                bottom: 10,
                padding: 20,
                borderRadius: 20,
              }}
            >
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={"white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ye"
        options={{
          title: "Ye",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "radio-sharp" : "radio-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-sharp" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
