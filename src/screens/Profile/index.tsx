import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../@types/routes";

export const Profile = () => {
    const navigation = useNavigation<propsStack>()
    return(
        <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 20}}>Profile</Text>


            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text> 
            </TouchableOpacity>


        </View>
    )
}