import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function Favoritos () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <View style={styles.textTitelContainer}><Text style={styles.textTitle}>FAVORITOS</Text></View>
            </View>



        </View>
    );
}