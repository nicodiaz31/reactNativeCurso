import React from "react";
import HeaderComponent from "../../components/header";
import ButtonComponent from "../../components/button";
import { View, Text } from "react-native";
import styles from "./styles";

const SecondScreen = (props) => {
    const title = 'SecondScreen';
    const buttonTitle = 'volver';

    return(
        <>
            <HeaderComponent title={title} />
            <Text>Bienvenido {props.name}</Text>
            <View style={ styles.buttonContainer }>
                <ButtonComponent 
                    title={ buttonTitle }
                    onPress={props.changePage()}
                />
            </View>
        </>
    )
}

export default SecondScreen;

