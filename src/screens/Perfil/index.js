import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import dogImg from "../../assets/dog.png";

export function Perfil () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>PERFIL</Text>
            </View>

            <View style={styles.containerUser}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageUser} source={dogImg}/>
                </View>
                <Text style={styles.textUser}>Usuário Fulano</Text>
            </View>

            <View style={styles.containerList}>
                <TouchableOpacity onPress={() => navigation.navigate('Pedidos')} style={styles.containerListOpcoes}>
                    <Feather name="shopping-cart" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Pedidos</Text>
                        <Text style={styles.subtitleListOpcoes}>Veja seus pedido</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>

                <TouchableOpacity style={styles.containerListOpcoes}>
                    <Feather name="bell" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Notificações</Text>
                        <Text style={styles.subtitleListOpcoes}>Central de notificações</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>

                <TouchableOpacity style={styles.containerListOpcoes}>
                    <Feather name="tag" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Cupons</Text>
                        <Text style={styles.subtitleListOpcoes}>Meus descontos</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>

                <TouchableOpacity style={styles.containerListOpcoes}>
                    <Feather name="smile" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Alterar preferências</Text>
                        <Text style={styles.subtitleListOpcoes}>Altere suas preferências quando quiser</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>

                <TouchableOpacity style={styles.containerListOpcoes}>
                    <Feather name="help-circle" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Ajuda</Text>
                        <Text style={styles.subtitleListOpcoes}>Central de ajuda</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>
                <View style={styles.separator}/>

                <View style={styles.containerListOpcoes}>
                    <Feather name="settings" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes2}>
                        <Text style={styles.titleListOpcoes}>Configurações</Text>
                        <Feather name="chevron-right" size={30} style={styles.chevronIcon}/>
                    </View>                
                </View>

                <View style={styles.listSeparator}/>

                <TouchableOpacity style={styles.containerListOpcoes}>
                    <Feather name="log-out" size={30} style={styles.iconListOpcoes}/>
                    <View style={styles.textContainerListOpcoes}>
                        <Text style={styles.titleListOpcoes}>Sair</Text>
                    </View>                
                </TouchableOpacity>

                <View style={styles.listSeparator}/>
            </View>
                

        </View>
    );
}