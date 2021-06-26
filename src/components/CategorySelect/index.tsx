import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { styles } from './styles';
import { Category } from '../Category';

type Props = {
    categorySelected: string,
    setCategory: (categoryID: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false } : Props){
    return (
        <ScrollView
        horizontal 
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
        >
              {
                  categories.map(category => (
                      <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                      />
                  ))
              }
        </ScrollView>
    )
}