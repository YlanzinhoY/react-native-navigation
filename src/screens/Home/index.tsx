import React from "react";
import { View,Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../@types/routes";

export const Home = () => {
    const navigation = useNavigation<propsStack>()
    return(
        <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 20}}>Home</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text>Profile</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text> 
            </TouchableOpacity>

        </View>
    )
}