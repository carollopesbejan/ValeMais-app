import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function Pedidos () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={30} style={styles.chevronIcon} color={'#FAAC56'}/>
                </TouchableOpacity>
                <View style={styles.textTitelContainer}><Text style={styles.textTitle}>PEDIDOS</Text></View>
            </View>



        </View>
    );
}