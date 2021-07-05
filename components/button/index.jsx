import React from 'react';
import { Button } from 'react-native';
import styles from './styles';

const ButtonComponent = ( props ) => {

    return(
        <Button 
            title={props.title}
            color={styles.normal.color}
        />
    )
}

export default ButtonComponent;