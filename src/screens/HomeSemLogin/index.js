import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function HomeSemLogin () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home sem login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Splash1')}><Text>INICIO</Text></TouchableOpacity>
        </View>
    );
}