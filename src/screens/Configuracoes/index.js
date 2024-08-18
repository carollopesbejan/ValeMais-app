import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';

import dogImg from "../../assets/dog.png";

export function Configuracoes () {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);

    const selectImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, response => {
            if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

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
                    <TouchableOpacity onPress={selectImage}>
                        <Image style={styles.imageUser} source={imageUri ? { uri: imageUri } : dogImg}/>
                        <View style={styles.textOverlayContainer}>
                            <Text style={styles.textOverlay}>Alterar Imagem</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        
            <View style={styles.containerForms}>
                <View style={styles.inputContainer}>
                    <Text style={styles.textForms}>Como você gostaria de ser chamado?</Text>
                    <TextInput
                        placeholder="Joana"
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textForms}>Alterar Senha</Text>
                    <TextInput 
                        placeholder="********"
                        secureTextEntry={true} 
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textForms}>Confirmar Senha</Text>
                    <TextInput
                        placeholder="********"
                        secureTextEntry={true} 
                        style={styles.textInput}
                    />
                </View>
            </View>

        </View>
    );
}
