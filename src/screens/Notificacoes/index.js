import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function Notificacoes () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}><Feather name="chevron-left" size={30} style={styles.chevronIcon} color={'#FAAC56'}/></TouchableOpacity>
                <View style={styles.textTitelContainer}><Text style={styles.textTitle}>NOTIFICAÇÕES</Text></View>
            </View>



        </View>
    );
}