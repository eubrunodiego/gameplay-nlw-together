import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
    isCentered?: Boolean;
}
export function ListDivider({ isCentered } : Props){
    return(
        <View style={[styles.container, isCentered ? { marginVertical: 12, width: '73%', } : { marginTop: 2, marginBottom: 24, }]} />
    )
}