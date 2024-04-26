import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeSemLogin } from "../HomeSemLogin";

import logoTextImg from "../../assets/logotextImg.png";
import logoImg from "../../assets/precoImg.png";
import etiquetadescontoImg from "../../assets/etiquetadescontoImg.png";
import pilulaImg from "../../assets/pilulaImg.png";
import ProgressBar from "../../components/ProgressBarComponent";

export function Splash1 () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.logotextImg} source={logoTextImg}/>
            <Image style={styles.logoImg} source={logoImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Seja bem-vindo</Text>
            <Text style={styles.textSplash1}>Descubra como economizar enquanto contribui para um planeta mais saudável.</Text>

            <ProgressBar totalSteps={3} currentStep={1} />
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}><Text style={styles.textButton1}>Pular</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Splash2')}><Text style={styles.textButton2}>Próximo{'\u2192'}</Text></TouchableOpacity>
            </View>

        </View>
    );
}

export function Splash2 () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.etiquetadescontoImg} source={etiquetadescontoImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Descontos Especiais</Text>
            <Text style={styles.textSplash1}>Aproveite descontos exclusivos em medicamentos próximos ao vencimento.</Text>

            <ProgressBar totalSteps={3} currentStep={2} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}><Text style={styles.textButton1}>Pular</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}><Text style={styles.textButton2}>Próximo{'\u2192'}</Text></TouchableOpacity>
            </View>

        </View>
    );
}

export function Splash3 () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.pilulaImg} source={pilulaImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Peça com facilidade</Text>
            <Text style={styles.textSplash1}>Navegue, escolha, e adicione ao carrinho. Faça a diferença!</Text>

            <ProgressBar totalSteps={3} currentStep={3} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeSemLogin')}><Text style={styles.textButton3}>Inicar Economia</Text></TouchableOpacity>
            </View>

        </View>
    );
}