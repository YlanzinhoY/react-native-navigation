import React from "react";
import { Home } from "../../screens/Home";
import { Profile } from "../../screens/Profile";
import { Search } from "../../screens/Search";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../@types/routes";

const {Navigator, Screen} = createNativeStackNavigator<PropsNavigationStack>()

export default function() {
   return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home}/>
             <Screen name="Profile" component={Profile}/>
            <Screen name="Search" component={Search}/>
        </Navigator>
   )
}