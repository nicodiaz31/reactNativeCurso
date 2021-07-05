import React from "react";
import HeaderComponent from "../../components/header";
import { View } from "react-native"
import TextInputComponent from "../../components/textInput";
import ButtonComponent from "../../components/button";
import styles from "./styles";
import { useState } from "react";

const FirstScreen = (props) => {

    const [inputText, setInputText] = useState('')
    const title = 'FirstScreen';
    const placeholder = 'Ingrese su nombre';
    const buttonTitle = 'Aceptar'

    const handlerButtonName = () => {
        props.setName(inputText)
        props.changePage;
    }

    const handlerInputName = (text) => {
        setInputText(text)
        console.log(inputText)
    }

    return(
        <>
            <HeaderComponent title={title} />
            <View style={ styles.row }>
                <TextInputComponent 
                    placeholder={ placeholder }
                    onChangeText={ handlerInputName }
                    value={ inputText }
                />
                <ButtonComponent 
                    title={ buttonTitle }
                    onPress={ handlerButtonName }
                />
            </View>
        </>
    )
}

export default FirstScreen;