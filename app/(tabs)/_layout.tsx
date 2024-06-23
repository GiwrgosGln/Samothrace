import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
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
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
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
              name={focused ? "cloud-sharp" : "cloud-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings-sharp" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
