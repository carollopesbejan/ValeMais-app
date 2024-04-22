import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

import logoTextImg from "../../assets/logotextImg.png";
import logoImg from "../../assets/precoImg.png";
import etiquetadescontoImg from "../../assets/etiquetadescontoImg.png";
import pilulaImg from "../../assets/pilulaImg.png";

import { ProgressBar } from "../../components/SplashProgressBar";

export function Splash1 () {
    return (
        <View style={styles.container}>
            <Image style={styles.logotextImg} source={logoTextImg}/>
            <Image style={styles.logoImg} source={logoImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Seja bem-vindo</Text>
            <Text style={styles.textSplash1}>Descubra como economizar enquanto contribui para um planeta mais saudável.</Text>

            <ProgressBar steps={3} currentStep={1} />
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity><Text style={styles.textButton1}>Pular</Text></TouchableOpacity>
                <Text></Text>
                <TouchableOpacity><Text style={styles.textButton2}>Próximo{'\u2192'}</Text></TouchableOpacity>
            </View>

        </View>
    );
}

export function Splash2 () {
    return (
        <View style={styles.container}>
            <Image style={styles.etiquetadescontoImg} source={etiquetadescontoImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Descontos Especiais</Text>
            <Text style={styles.textSplash1}>Aproveite descontos exclusivos em medicamentos próximos ao vencimento.</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity><Text style={styles.textButton1}>Pular</Text></TouchableOpacity>
                <Text></Text>
                <TouchableOpacity><Text style={styles.textButton2}>Próximo{'\u2192'}</Text></TouchableOpacity>
            </View>

        </View>
    );
}

export function Splash3 () {
    return (
        <View style={styles.container}>
            <Image style={styles.pilulaImg} source={pilulaImg}/>
            
            <Text style={styles.textDestaqueSplash1}>Peça com facilidade</Text>
            <Text style={styles.textSplash1}>Navegue, escolha, e adicione ao carrinho. Faça a diferença!</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity><Text style={styles.textButton3}>Inicar Economia</Text></TouchableOpacity>
            </View>

        </View>
    );
}