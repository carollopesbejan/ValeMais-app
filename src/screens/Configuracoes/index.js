import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import dogImg from "../../assets/dog.png";

export function Configuracoes () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Feather name="chevron-left" size={30} style={styles.chevronIcon} color={'#FAAC56'}/>
                </TouchableOpacity>
                <View style={styles.textTitelContainer}><Text style={styles.textTitle}>CONFIGURAÇÕES</Text></View>
            </View>

            <View style={styles.containerUser}>
                <Text style={styles.textUser}>Olá, usuário fulano</Text>

                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image style={styles.imageUser} source={dogImg}/>
                        <Text>Alterar Imagem</Text>
                    </TouchableOpacity>
                </View>
            </View>

            

        </View>
    );
}