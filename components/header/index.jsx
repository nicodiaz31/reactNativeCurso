import React from "react";
import { View, Text } from "react-native"
import styles from "./styles";

const HeaderComponent = (props) => {
    return(
        <>
            <View style={styles.header}>
                <Text style={styles.textTitle}>{ props.title }</Text>
            </View>
        </>
    )
}

export default HeaderComponent;