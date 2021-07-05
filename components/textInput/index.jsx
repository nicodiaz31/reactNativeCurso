import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const TextInputComponent = ( props ) => {

    return(
        <TextInput 
            placeholder = {props.placeholder} 
            style = {styles.normal}
        />
    )
}

export default TextInputComponent;